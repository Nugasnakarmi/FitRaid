import { useCallback, useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, TextInput } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import {
  addWorkoutLog,
  deleteWorkoutLog,
  getLogsForExercise,
  type WorkoutLog,
} from '@/db/workout-db';
import { useSettings } from '@/contexts/settings-context';
import { useThemeColor } from '@/hooks/use-theme-color';

type Props = {
  muscleGroupId: string;
  exerciseName: string;
};

export function WorkoutLogger({ muscleGroupId, exerciseName }: Props) {
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [logs, setLogs] = useState<WorkoutLog[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const { weightUnit } = useSettings();
  const tintColor = useThemeColor({}, 'tint');
  const saveButtonTextColor = useThemeColor(
    { light: '#fff', dark: '#11181C' },
    'text',
  );
  const inputBg = useThemeColor(
    { light: '#f0f4f8', dark: '#1e2428' },
    'background',
  );
  const inputBorder = useThemeColor(
    { light: '#d0d7de', dark: '#3a3f44' },
    'text',
  );
  const textColor = useThemeColor({}, 'text');
  const subtleText = useThemeColor(
    { light: '#687076', dark: '#9BA1A6' },
    'text',
  );
  const dangerColor = '#e53e3e';

  const loadLogs = useCallback(async () => {
    const data = await getLogsForExercise(muscleGroupId, exerciseName);
    setLogs(data);
    setHasLoaded(true);
  }, [muscleGroupId, exerciseName]);

  useEffect(() => {
    if (expanded && !hasLoaded) {
      loadLogs();
    }
  }, [expanded, hasLoaded, loadLogs]);

  const handleSave = async () => {
    const setsNum = parseInt(sets, 10);
    const repsNum = parseInt(reps, 10);
    if (!setsNum || setsNum <= 0 || !repsNum || repsNum <= 0) {
      Alert.alert('Invalid input', 'Please enter valid sets and reps.');
      return;
    }
    const weightNum = weight ? parseFloat(weight) : null;
    await addWorkoutLog(muscleGroupId, exerciseName, setsNum, repsNum, weightNum);
    setSets('');
    setReps('');
    setWeight('');
    await loadLogs();
  };

  const handleDelete = (id: number) => {
    Alert.alert('Delete Log', 'Remove this log entry?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await deleteWorkoutLog(id);
          await loadLogs();
        },
      },
    ]);
  };

  return (
    <ThemedView style={styles.container}>
      <Pressable
        onPress={() => setExpanded(!expanded)}
        style={styles.toggleRow}
        accessibilityRole="button"
        accessibilityLabel={`${expanded ? 'Hide' : 'Show'} workout logger for ${exerciseName}`}
        accessibilityState={{ expanded }}>
        <ThemedText style={[styles.toggleText, { color: tintColor }]}>
          {expanded ? '▾ Hide Logger' : '▸ Log Workout'}
        </ThemedText>
      </Pressable>

      {expanded && (
        <ThemedView style={styles.loggerContent}>
          <ThemedView style={styles.inputRow}>
            <ThemedView style={styles.inputGroup}>
              <ThemedText style={[styles.inputLabel, { color: subtleText }]}>
                Sets
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: inputBg, borderColor: inputBorder, color: textColor },
                ]}
                value={sets}
                onChangeText={setSets}
                keyboardType="number-pad"
                placeholder="0"
                placeholderTextColor={subtleText}
                maxLength={3}
              />
            </ThemedView>
            <ThemedView style={styles.inputGroup}>
              <ThemedText style={[styles.inputLabel, { color: subtleText }]}>
                Reps
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: inputBg, borderColor: inputBorder, color: textColor },
                ]}
                value={reps}
                onChangeText={setReps}
                keyboardType="number-pad"
                placeholder="0"
                placeholderTextColor={subtleText}
                maxLength={3}
              />
            </ThemedView>
            <ThemedView style={styles.inputGroup}>
              <ThemedText style={[styles.inputLabel, { color: subtleText }]}>
                Weight ({weightUnit})
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: inputBg, borderColor: inputBorder, color: textColor },
                ]}
                value={weight}
                onChangeText={setWeight}
                keyboardType="decimal-pad"
                placeholder="0"
                placeholderTextColor={subtleText}
                maxLength={6}
              />
            </ThemedView>
          </ThemedView>

          <Pressable
            style={({ pressed }) => [
              styles.saveButton,
              { backgroundColor: tintColor, opacity: pressed ? 0.8 : 1 },
            ]}
            onPress={handleSave}>
            <ThemedText style={[styles.saveButtonText, { color: saveButtonTextColor }]}>Save Entry</ThemedText>
          </Pressable>

          {logs.length > 0 && (
            <ThemedView style={styles.logList}>
              <ThemedText
                style={[styles.logListTitle, { color: subtleText }]}>
                Recent Logs
              </ThemedText>
              {logs.map((log) => {
                const parsed = new Date(log.createdAt);
                const dateLabel = Number.isNaN(parsed.getTime())
                  ? log.createdAt
                  : parsed.toLocaleDateString();

                return (
                  <ThemedView
                    key={log.id}
                    style={[styles.logItem, { borderColor: inputBorder }]}>
                  <ThemedView style={styles.logItemContent}>
                    <ThemedText style={styles.logItemText}>
                      {log.sets} sets × {log.reps} reps
                      {/* Show zero-weight entries explicitly; only hide when null/undefined */}
                      {log.weight != null ? ` @ ${log.weight} ${weightUnit}` : ''}
                    </ThemedText>
                    <ThemedText
                      style={[styles.logItemDate, { color: subtleText }]}>
                      {dateLabel}
                    </ThemedText>
                  </ThemedView>
                  <Pressable
                    onPress={() => handleDelete(log.id)}
                    hitSlop={8}
                    accessibilityRole="button"
                    accessibilityLabel="Delete workout log entry">
                    <ThemedText style={{ color: dangerColor, fontSize: 16 }}>
                      ✕
                    </ThemedText>
                  </Pressable>
                </ThemedView>
                );
              })}
            </ThemedView>
          )}
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  toggleRow: {
    paddingVertical: 6,
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
  },
  loggerContent: {
    gap: 12,
    marginTop: 8,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
  },
  inputGroup: {
    flex: 1,
    gap: 4,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    textAlign: 'center',
  },
  saveButton: {
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    fontWeight: '700',
    fontSize: 15,
  },
  logList: {
    gap: 6,
  },
  logListTitle: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  logItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  logItemContent: {
    flex: 1,
    gap: 2,
  },
  logItemText: {
    fontSize: 14,
    fontWeight: '500',
  },
  logItemDate: {
    fontSize: 11,
  },
});
