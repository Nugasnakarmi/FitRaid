import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { getPreference, setPreference } from '@/db/workout-db';

export type WeightUnit = 'lbs' | 'kg';

interface SettingsContextValue {
  weightUnit: WeightUnit;
  toggleWeightUnit: () => void;
}

const SettingsContext = createContext<SettingsContextValue>({
  weightUnit: 'lbs',
  toggleWeightUnit: () => {},
});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [weightUnit, setWeightUnit] = useState<WeightUnit>('lbs');

  useEffect(() => {
    getPreference('weightUnit').then((val) => {
      if (val === 'kg' || val === 'lbs') {
        setWeightUnit(val);
      }
    }).catch(() => {
      // keep default 'lbs' if DB read fails
    });
  }, []);

  const toggleWeightUnit = useCallback(() => {
    setWeightUnit((prev) => {
      const next: WeightUnit = prev === 'lbs' ? 'kg' : 'lbs';
      setPreference('weightUnit', next).catch(() => {
        // persist failure is non-critical; unit is still toggled in memory
      });
      return next;
    });
  }, []);

  return (
    <SettingsContext.Provider value={{ weightUnit, toggleWeightUnit }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextValue {
  return useContext(SettingsContext);
}
