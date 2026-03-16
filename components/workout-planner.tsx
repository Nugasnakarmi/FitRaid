import { Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { muscleGroups } from '@/constants/workouts';
import { useThemeColor } from '@/hooks/use-theme-color';

const CARD_GAP = 12;
const GRID_COLUMNS = 2;

export function WorkoutPlanner() {
  const router = useRouter();
  const tintColor = useThemeColor({}, 'tint');
  const cardBg = useThemeColor(
    { light: '#f0f4f8', dark: '#1e2428' },
    'background',
  );
  const subtleText = useThemeColor(
    { light: '#687076', dark: '#9BA1A6' },
    'text',
  );
  const { width: screenWidth } = useWindowDimensions();
  // Account for parent padding (32 each side from parallax-scroll-view)
  const availableWidth = screenWidth - 64;
  const cardSize =
    (availableWidth - CARD_GAP * (GRID_COLUMNS - 1)) / GRID_COLUMNS;

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle" style={styles.heading}>
        Muscle Groups
      </ThemedText>
      <ThemedText style={[styles.subheading, { color: subtleText }]}>
        Tap a body part to start your session
      </ThemedText>
      <ThemedView style={styles.grid}>
        {muscleGroups.map((group) => (
          <Pressable
            key={group.id}
            style={({ pressed }) => [
              styles.card,
              {
                width: cardSize,
                height: cardSize,
                backgroundColor: cardBg,
                borderColor: pressed ? tintColor : 'transparent',
                transform: [{ scale: pressed ? 0.96 : 1 }],
              },
            ]}
            onPress={() => router.push(`/workout-session?id=${group.id}`)}
            accessibilityRole="button"
            accessibilityLabel={`Start ${group.name} workout`}>
            <ThemedText style={styles.cardIcon}>{group.icon}</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.cardName}>
              {group.name}
            </ThemedText>
            <ThemedText style={[styles.cardCount, { color: subtleText }]}>
              {group.exercises.length} exercises
            </ThemedText>
          </Pressable>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
    marginBottom: 8,
  },
  heading: {
    marginBottom: 2,
  },
  subheading: {
    fontSize: 14,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: CARD_GAP,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 2,
    gap: 6,
  },
  cardIcon: {
    fontSize: 40,
  },
  cardName: {
    fontSize: 15,
    textAlign: 'center',
  },
  cardCount: {
    fontSize: 12,
  },
});
