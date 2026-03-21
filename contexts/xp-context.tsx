import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { addXP, getTotalXP } from '@/db/workout-db';
import { getXPProgress, type XPProgress } from '@/constants/xp';

type XPContextValue = {
  totalXP: number;
  xpProgress: XPProgress;
  /** Award XP for a workout log. Returns new total XP. */
  awardXP: (amount: number) => Promise<number>;
  /** Re-read XP from the database (e.g. after external updates). */
  refreshXP: () => Promise<void>;
};

const XPContext = createContext<XPContextValue | null>(null);

export function XPProvider({ children }: { children: React.ReactNode }) {
  const [totalXP, setTotalXP] = useState(0);

  const refreshXP = useCallback(async () => {
    const xp = await getTotalXP();
    setTotalXP(xp);
  }, []);

  useEffect(() => {
    refreshXP();
  }, [refreshXP]);

  const awardXP = useCallback(
    async (amount: number): Promise<number> => {
      const newTotal = await addXP(amount);
      setTotalXP(newTotal);
      return newTotal;
    },
    [],
  );

  const xpProgress = useMemo(() => getXPProgress(totalXP), [totalXP]);

  const value = useMemo<XPContextValue>(
    () => ({ totalXP, xpProgress, awardXP, refreshXP }),
    [totalXP, xpProgress, awardXP, refreshXP],
  );

  return <XPContext.Provider value={value}>{children}</XPContext.Provider>;
}

export function useXP(): XPContextValue {
  const ctx = useContext(XPContext);
  if (!ctx) {
    throw new Error('useXP must be used inside XPProvider');
  }
  return ctx;
}
