import { ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { muscleGroups } from '@/constants/workouts';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function WorkoutSessionScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const tintColor = useThemeColor({}, 'tint');
  const backgroundColor = useThemeColor({}, 'background');

  const group = muscleGroups.find((g) => g.id === id);

  if (!group) {
    return (
      <ThemedView style={styles.centered}>
        <ThemedText type="subtitle">Muscle group not found.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScrollView style={[styles.scroll, { backgroundColor }]}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.icon}>{group.icon}</ThemedText>
        <ThemedText type="title">{group.name}</ThemedText>
        <ThemedText>{group.exercises.length} exercises</ThemedText>
      </ThemedView>

      {group.exercises.map((exercise, index) => (
        <ThemedView
          key={exercise.name}
          style={[styles.exerciseCard, { borderColor: tintColor }]}>
          <ThemedView style={styles.exerciseHeader}>
            <ThemedText style={styles.exerciseIndex}>{index + 1}</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.exerciseName}>
              {exercise.name}
            </ThemedText>
          </ThemedView>
          <ThemedText style={styles.exerciseDescription}>
            {exercise.description}
          </ThemedText>
          <ThemedView style={styles.exerciseMeta}>
            <ThemedView style={[styles.metaBadge, { backgroundColor: tintColor }]}>
              <ThemedText style={styles.metaText}>
                {exercise.sets} sets
              </ThemedText>
            </ThemedView>
            <ThemedView style={[styles.metaBadge, { backgroundColor: tintColor }]}>
              <ThemedText style={styles.metaText}>
                {exercise.reps} reps
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      ))}

      <ThemedView style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  header: {
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 32,
    gap: 4,
  },
  icon: {
    fontSize: 48,
    marginBottom: 8,
  },
  exerciseCard: {
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
  },
  exerciseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  exerciseIndex: {
    fontSize: 14,
    fontWeight: '700',
    opacity: 0.5,
  },
  exerciseName: {
    fontSize: 17,
  },
  exerciseDescription: {
    fontSize: 14,
    opacity: 0.8,
    lineHeight: 20,
  },
  exerciseMeta: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  metaBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  metaText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  footer: {
    height: 40,
  },
});
