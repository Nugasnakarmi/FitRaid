import { FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';

import { ExerciseAnimation } from '@/components/exercise-animation';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WorkoutLogger } from '@/components/workout-logger';
import { muscleGroups, type Exercise } from '@/constants/workouts';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function WorkoutSessionScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const tintColor = useThemeColor({}, 'tint');
  const backgroundColor = useThemeColor({}, 'background');
  const metaTextColor = useThemeColor(
    { light: '#fff', dark: '#151718' },
    'background'
  );

  const group = muscleGroups.find((g) => g.id === id);
  const groupId = group?.id ?? '';

  const renderExercise = useCallback(({ item: exercise, index }: { item: Exercise; index: number }) => (
    <ThemedView
      style={[styles.exerciseCard, { borderColor: tintColor }]}>
      <ThemedView style={styles.exerciseHeader}>
        <ThemedText style={styles.exerciseIndex}>{index + 1}</ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.exerciseName}>
          {exercise.name}
        </ThemedText>
      </ThemedView>
      {exercise.images && (
        <ExerciseAnimation images={exercise.images} />
      )}
      <ThemedText style={styles.exerciseDescription}>
        {exercise.description}
      </ThemedText>
      <ThemedView style={styles.exerciseMeta}>
        <ThemedView style={[styles.metaBadge, { backgroundColor: tintColor }]}>
          <ThemedText style={[styles.metaText, { color: metaTextColor }]}>
            {exercise.sets} sets
          </ThemedText>
        </ThemedView>
        <ThemedView style={[styles.metaBadge, { backgroundColor: tintColor }]}>
          <ThemedText style={[styles.metaText, { color: metaTextColor }]}>
            {exercise.reps} reps
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <WorkoutLogger
        muscleGroupId={groupId}
        exerciseName={exercise.name}
      />
    </ThemedView>
  ), [tintColor, metaTextColor, groupId]);

  if (!group) {
    return (
      <ThemedView style={styles.centered}>
        <ThemedText type="subtitle">Muscle group not found.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <FlatList
      style={[styles.scroll, { backgroundColor }]}
      data={group.exercises}
      keyExtractor={(exercise) => exercise.name}
      renderItem={renderExercise}
      initialNumToRender={4}
      maxToRenderPerBatch={3}
      windowSize={5}
      ListHeaderComponent={
        <ThemedView style={styles.header}>
          <ThemedText style={styles.icon}>{group.icon}</ThemedText>
          <ThemedText type="title">{group.name}</ThemedText>
          <ThemedText>{group.exercises.length} exercises</ThemedText>
        </ThemedView>
      }
      ListFooterComponent={<ThemedView style={styles.footer} />}
    />
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
    fontSize: 13,
    fontWeight: '600',
  },
  footer: {
    height: 40,
  },
});
