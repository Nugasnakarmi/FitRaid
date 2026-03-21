import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useFocusEffect } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { getMuscleGroupStats, type MuscleGroupStat } from '@/db/workout-db';
import { useXP } from '@/contexts/xp-context';
import { getLevelTitle } from '@/constants/xp';
import { muscleGroups } from '@/constants/workouts';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function ProgressScreen() {
  const { totalXP, xpProgress, refreshXP } = useXP();
  const [stats, setStats] = useState<MuscleGroupStat[]>([]);

  const tintColor = useThemeColor({}, 'tint');
  const backgroundColor = useThemeColor({}, 'background');
  const subtleText = useThemeColor({ light: '#687076', dark: '#9BA1A6' }, 'text');
  const cardBg = useThemeColor({ light: '#f0f4f8', dark: '#1e2428' }, 'background');
  const barBg = useThemeColor({ light: '#dde3ea', dark: '#2a2f35' }, 'background');

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

  return (
    <ScrollView style={[styles.scroll, { backgroundColor }]}>
      {/* ── Player Card ── */}
      <ThemedView style={[styles.playerCard, { backgroundColor: tintColor }]}>
        <ThemedText style={styles.playerEmoji}>⚔️</ThemedText>
        <ThemedText style={styles.playerTitle}>{title}</ThemedText>
        <ThemedText style={styles.levelLabel}>Level {level}</ThemedText>

        {/* XP Bar */}
        <View style={styles.xpBarContainer}>
          <View style={[styles.xpBarTrack, { backgroundColor: 'rgba(255,255,255,0.25)' }]}>
            <View
              style={[
                styles.xpBarFill,
                { width: `${progressFraction * 100}%`, backgroundColor: '#fff' },
              ]}
            />
          </View>
          <ThemedText style={styles.xpLabel}>
            {xpIntoLevel} / {xpNeededForLevel} XP
          </ThemedText>
        </View>

        <ThemedText style={styles.totalXP}>{totalXP} total XP</ThemedText>
      </ThemedView>

      {/* ── Muscle Skills ── */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          💪 Muscle Skills
        </ThemedText>
        <ThemedText style={[styles.sectionHint, { color: subtleText }]}>
          Each logged workout session builds your skills.
        </ThemedText>

        {muscleGroups.map((group) => {
          const stat = stats.find((s) => s.muscleGroupId === group.id);
          const logCount = stat?.logCount ?? 0;
          const barFraction = logCount / maxSessions;

          return (
            <ThemedView key={group.id} style={[styles.skillRow, { backgroundColor: cardBg }]}>
              <ThemedText style={styles.skillIcon}>{group.icon}</ThemedText>
              <ThemedView style={styles.skillInfo}>
                <ThemedView style={styles.skillNameRow}>
                  <ThemedText style={styles.skillName}>{group.name}</ThemedText>
                  <ThemedText style={[styles.skillCount, { color: subtleText }]}>
                    {logCount} {logCount === 1 ? 'workout' : 'workouts'}
                  </ThemedText>
                </ThemedView>
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
              </ThemedView>
            </ThemedView>
          );
        })}

        {stats.length === 0 && (
          <ThemedView style={[styles.emptyState, { backgroundColor: cardBg }]}>
            <ThemedText style={[styles.emptyText, { color: subtleText }]}>
              No workouts logged yet.{'\n'}Head to the Home tab and start training!
            </ThemedText>
          </ThemedView>
        )}
      </ThemedView>

      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  playerCard: {
    margin: 16,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    gap: 6,
  },
  playerEmoji: {
    fontSize: 48,
  },
  playerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 0.5,
  },
  levelLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.85)',
  },
  xpBarContainer: {
    width: '100%',
    gap: 4,
    marginTop: 8,
  },
  xpBarTrack: {
    height: 12,
    borderRadius: 6,
    overflow: 'hidden',
  },
  xpBarFill: {
    height: '100%',
    borderRadius: 6,
  },
  xpLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'right',
    fontWeight: '600',
  },
  totalXP: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 2,
  },
  section: {
    marginHorizontal: 16,
    gap: 10,
  },
  sectionTitle: {
    marginBottom: 2,
  },
  sectionHint: {
    fontSize: 13,
    marginBottom: 4,
  },
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 12,
    gap: 12,
  },
  skillIcon: {
    fontSize: 26,
    width: 36,
    textAlign: 'center',
  },
  skillInfo: {
    flex: 1,
    gap: 6,
  },
  skillNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skillName: {
    fontSize: 14,
    fontWeight: '600',
  },
  skillCount: {
    fontSize: 12,
  },
  skillBarTrack: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  skillBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  emptyState: {
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
  footer: {
    height: 40,
  },
});
