import { Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
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
                height: cardSize * 1.05,
                borderColor: pressed ? tintColor : 'transparent',
                transform: [{ scale: pressed ? 0.96 : 1 }],
              },
            ]}
            onPress={() => router.push(`/workout-session?id=${group.id}`)}
            accessibilityRole="button"
            accessibilityLabel={`Start ${group.name} workout`}>
            {/* expo-image handles memory + disk caching automatically */}
            <Image
              source={{ uri: group.coverImage }}
              style={StyleSheet.absoluteFill}
              contentFit="cover"
              cachePolicy="memory-disk"
            />
            {/* Dark overlay for readability */}
            <View style={styles.cardOverlay} />
            {/* Bottom label area */}
            <View style={styles.cardFooter}>
              <ThemedText style={styles.cardIcon}>{group.icon}</ThemedText>
              <ThemedText style={styles.cardName}>{group.name}</ThemedText>
              <ThemedText style={styles.cardCount}>
                {group.exercises.length} exercises
              </ThemedText>
            </View>
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
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 2,
    backgroundColor: '#1a2a3a',
    justifyContent: 'flex-end',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.38)',
  },
  cardFooter: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 2,
    backgroundColor: 'rgba(0,0,0,0.42)',
  },
  cardIcon: {
    fontSize: 28,
    color: '#fff',
  },
  cardName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.2,
  },
  cardCount: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.75)',
  },
});
