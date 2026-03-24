import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useFocusEffect } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { RadarChart, type RadarDataPoint } from '@/components/radar-chart';
import { getMuscleGroupStats, type MuscleGroupStat } from '@/db/workout-db';
import { useXP } from '@/contexts/xp-context';
import { getLevelTitle } from '@/constants/xp';
import { muscleGroups } from '@/constants/workouts';
import { useThemeColor } from '@/hooks/use-theme-color';

/** The six primary muscle categories shown in the radar chart. */
const RADAR_GROUPS = [
  { label: 'Chest', ids: ['chest'] },
  { label: 'Back', ids: ['back', 'lower-back'] },
  { label: 'Shoulders', ids: ['shoulders', 'trapezius'] },
  { label: 'Core', ids: ['abs'] },
  { label: 'Legs', ids: ['quadriceps', 'hamstrings', 'glutes', 'calves'] },
  { label: 'Arms', ids: ['biceps', 'triceps', 'forearms'] },
] as const;

export default function ProgressScreen() {
  const { totalXP, xpProgress, refreshXP } = useXP();
  const [stats, setStats] = useState<MuscleGroupStat[]>([]);

  const tintColor = useThemeColor({}, 'tint');
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const subtleText = useThemeColor({ light: '#687076', dark: '#8b949e' }, 'text');
  const cardBg = useThemeColor({ light: '#f0f4f8', dark: '#161b22' }, 'background');
  const barBg = useThemeColor({ light: '#dde3ea', dark: '#21262d' }, 'background');
  const sectionBg = useThemeColor({ light: '#f8fafc', dark: '#13171e' }, 'background');
  const borderColor = useThemeColor({ light: '#e2e8f0', dark: '#30363d' }, 'background');

  const gridLineColor = useThemeColor(
    { light: 'rgba(0,0,0,0.10)', dark: 'rgba(255,255,255,0.12)' },
    'background',
  );

  const loadStats = useCallback(async () => {
    await refreshXP();
    const data = await getMuscleGroupStats();
    setStats(data);
  }, [refreshXP]);

  useFocusEffect(
    useCallback(() => {
      loadStats();
    }, [loadStats]),
  );

  const maxSessions = Math.max(1, ...stats.map((s) => s.logCount));

  const level = xpProgress.level;
  const title = getLevelTitle(level);
  const progressFraction = Math.min(1, Math.max(0, xpProgress.fraction));
  const xpIntoLevel = totalXP - xpProgress.currentLevelXP;
  const xpNeededForLevel = xpProgress.nextLevelXP - xpProgress.currentLevelXP;

  /** Build normalised radar data from stats. */
  const radarData: RadarDataPoint[] = RADAR_GROUPS.map(({ label, ids }) => {
    const total = ids.reduce((sum, id) => {
      const s = stats.find((x) => x.muscleGroupId === id);
      return sum + (s?.logCount ?? 0);
    }, 0);
    return { label, value: maxSessions > 0 ? total / maxSessions : 0 };
  });

  const hasAnyData = stats.length > 0;

  return (
    <ScrollView style={[styles.scroll, { backgroundColor }]}>
      {/* ── Player Card ── */}
      <View style={[styles.playerCard, { backgroundColor: cardBg, borderColor }]}>
        {/* Accent stripe */}
        <View style={[styles.cardStripe, { backgroundColor: tintColor }]} />
        <View style={styles.cardInner}>
          <ThemedText style={styles.playerEmoji}>⚔️</ThemedText>
          <ThemedText style={[styles.playerTitle, { color: tintColor }]}>{title}</ThemedText>
          <ThemedText style={[styles.levelLabel, { color: subtleText }]}>LEVEL {level}</ThemedText>

          {/* XP Bar */}
          <View style={styles.xpBarContainer}>
            <View style={[styles.xpBarTrack, { backgroundColor: barBg }]}>
              <View
                style={[
                  styles.xpBarFill,
                  { width: `${progressFraction * 100}%`, backgroundColor: tintColor },
                ]}
              />
            </View>
            <ThemedText style={[styles.xpLabel, { color: subtleText }]}>
              {xpIntoLevel} / {xpNeededForLevel} XP
            </ThemedText>
          </View>

          <View style={[styles.xpBadge, { backgroundColor: `${tintColor}20`, borderColor: `${tintColor}50` }]}>
            <ThemedText style={[styles.xpBadgeText, { color: tintColor }]}>⚡ {totalXP} Total XP</ThemedText>
          </View>
        </View>
      </View>

      {/* ── Muscle Radar ── */}
      <View style={[styles.radarCard, { backgroundColor: cardBg, borderColor }]}>
        <ThemedText style={styles.sectionTitle}>🕸️ Muscle Radar</ThemedText>
        <ThemedText style={[styles.sectionHint, { color: subtleText }]}>
          Your workout balance across major muscle groups.
        </ThemedText>
        <View style={styles.radarContainer}>
          {hasAnyData ? (
            <RadarChart
              data={radarData}
              size={280}
              accentColor={tintColor}
              labelColor={textColor}
              gridColor={gridLineColor}
              dotStrokeColor={backgroundColor}
            />
          ) : (
            <View style={[styles.radarEmpty, { backgroundColor: sectionBg, borderColor }]}>
              <ThemedText style={[styles.emptyText, { color: subtleText }]}>
                {'Log workouts to see your\nmuscle radar chart here.'}
              </ThemedText>
            </View>
          )}
        </View>
      </View>

      {/* ── Muscle Skills ── */}
      <View style={[styles.skillsCard, { backgroundColor: cardBg, borderColor }]}>
        <ThemedText style={styles.sectionTitle}>💪 Muscle Skills</ThemedText>
        <ThemedText style={[styles.sectionHint, { color: subtleText }]}>
          Each logged workout session builds your skills.
        </ThemedText>

        <View style={styles.skillList}>
          {muscleGroups.map((group) => {
            const stat = stats.find((s) => s.muscleGroupId === group.id);
            const logCount = stat?.logCount ?? 0;
            const barFraction = logCount / maxSessions;

            return (
              <View key={group.id} style={[styles.skillRow, { backgroundColor: sectionBg, borderColor }]}>
                <ThemedText style={styles.skillIcon}>{group.icon}</ThemedText>
                <View style={styles.skillInfo}>
                  <View style={styles.skillNameRow}>
                    <ThemedText style={styles.skillName}>{group.name}</ThemedText>
                    <ThemedText style={[styles.skillCount, { color: subtleText }]}>
                      {logCount} {logCount === 1 ? 'session' : 'sessions'}
                    </ThemedText>
                  </View>
                  <View style={[styles.skillBarTrack, { backgroundColor: barBg }]}>
                    {logCount > 0 && (
                      <View
                        style={[
                          styles.skillBarFill,
                          {
                            width: `${Math.max(4, barFraction * 100)}%`,
                            backgroundColor: tintColor,
                          },
                        ]}
                      />
                    )}
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        {stats.length === 0 && (
          <View style={[styles.emptyState, { backgroundColor: sectionBg, borderColor }]}>
            <ThemedText style={[styles.emptyText, { color: subtleText }]}>
              {'No workouts logged yet.\nHead to the Home tab and start training!'}
            </ThemedText>
          </View>
        )}
      </View>

      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  // Player Card
  playerCard: {
    margin: 16,
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  cardStripe: {
    height: 4,
    width: '100%',
  },
  cardInner: {
    padding: 20,
    alignItems: 'center',
    gap: 6,
  },
  playerEmoji: {
    fontSize: 48,
  },
  playerTitle: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  levelLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
  },
  xpBarContainer: {
    width: '100%',
    gap: 4,
    marginTop: 8,
  },
  xpBarTrack: {
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  xpBarFill: {
    height: '100%',
    borderRadius: 5,
  },
  xpLabel: {
    fontSize: 11,
    textAlign: 'right',
    fontWeight: '600',
  },
  xpBadge: {
    marginTop: 4,
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
  },
  xpBadgeText: {
    fontSize: 13,
    fontWeight: '700',
  },
  // Radar Chart
  radarCard: {
    marginHorizontal: 16,
    marginBottom: 14,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
  },
  radarContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  radarEmpty: {
    width: 280,
    height: 200,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Skills section
  skillsCard: {
    marginHorizontal: 16,
    marginBottom: 14,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.3,
    marginBottom: 2,
  },
  sectionHint: {
    fontSize: 12,
    marginBottom: 10,
  },
  skillList: {
    gap: 8,
  },
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    gap: 10,
  },
  skillIcon: {
    fontSize: 22,
    width: 32,
    textAlign: 'center',
  },
  skillInfo: {
    flex: 1,
    gap: 5,
  },
  skillNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skillName: {
    fontSize: 13,
    fontWeight: '600',
  },
  skillCount: {
    fontSize: 11,
  },
  skillBarTrack: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  skillBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  emptyState: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 24,
    alignItems: 'center',
    marginTop: 8,
  },
  emptyText: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 22,
  },
  footer: {
    height: 40,
  },
});
