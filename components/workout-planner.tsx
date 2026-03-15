import { Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { muscleGroups } from '@/constants/workouts';
import { useThemeColor } from '@/hooks/use-theme-color';

export function WorkoutPlanner() {
  const router = useRouter();
  const tintColor = useThemeColor({}, 'tint');

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Choose a Muscle Group</ThemedText>
      <ThemedText>Select a body part to start your workout session:</ThemedText>
      <ThemedView style={styles.grid}>
        {muscleGroups.map((group) => (
          <Pressable
            key={group.id}
            style={({ pressed }) => [
              styles.card,
              { borderColor: tintColor, opacity: pressed ? 0.7 : 1 },
            ]}
            onPress={() => router.push(`/workout-session?id=${group.id}`)}
            accessibilityRole="button"
            accessibilityLabel={`Start ${group.name} workout`}>
            <ThemedText style={styles.cardIcon}>{group.icon}</ThemedText>
            <ThemedText style={styles.cardText}>{group.name}</ThemedText>
          </Pressable>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 8,
  },
  card: {
    width: '47%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1.5,
  },
  cardIcon: {
    fontSize: 22,
  },
  cardText: {
    fontSize: 15,
    fontWeight: '600',
  },
});
