import * as SQLite from 'expo-sqlite';

const DB_NAME = 'fitraid.db';

export type WorkoutLog = {
  id: number;
  muscleGroupId: string;
  exerciseName: string;
  sets: number;
  reps: number;
  weight: number | null;
  notes: string;
  createdAt: string;
};

let _db: SQLite.SQLiteDatabase | null = null;
let dbInitPromise: Promise<SQLite.SQLiteDatabase> | null = null;

async function getDb(): Promise<SQLite.SQLiteDatabase> {
  if (_db) {
    return _db;
  }

  if (!dbInitPromise) {
    dbInitPromise = (async () => {
      // Store timestamps in UTC ISO-8601 (Z) for consistent parsing across platforms.
      const db = await SQLite.openDatabaseAsync(DB_NAME);
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS workout_logs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          muscle_group_id TEXT NOT NULL,
          exercise_name TEXT NOT NULL,
          sets INTEGER NOT NULL DEFAULT 0,
          reps INTEGER NOT NULL DEFAULT 0,
          weight REAL,
          notes TEXT NOT NULL DEFAULT '',
          created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ','now'))
        );
        CREATE TABLE IF NOT EXISTS settings (
          key TEXT PRIMARY KEY,
          value TEXT NOT NULL
        );
      `);
      _db = db;
      return db;
    })();
  }

  return dbInitPromise;
}

export async function addWorkoutLog(
  muscleGroupId: string,
  exerciseName: string,
  sets: number,
  reps: number,
  weight: number | null = null,
  notes: string = '',
): Promise<number> {
  const db = await getDb();
  const result = await db.runAsync(
    `INSERT INTO workout_logs (muscle_group_id, exercise_name, sets, reps, weight, notes)
     VALUES (?, ?, ?, ?, ?, ?)`,
    muscleGroupId,
    exerciseName,
    sets,
    reps,
    weight,
    notes,
  );
  return result.lastInsertRowId;
}

export async function getLogsForExercise(
  muscleGroupId: string,
  exerciseName: string,
): Promise<WorkoutLog[]> {
  const db = await getDb();
  return db.getAllAsync<WorkoutLog>(
    `SELECT id, muscle_group_id AS muscleGroupId, exercise_name AS exerciseName,
            sets, reps, weight, notes, created_at AS createdAt
     FROM workout_logs
     WHERE muscle_group_id = ? AND exercise_name = ?
     ORDER BY created_at DESC
     LIMIT 20`,
    muscleGroupId,
    exerciseName,
  );
}

export async function getLogsForMuscleGroup(
  muscleGroupId: string,
): Promise<WorkoutLog[]> {
  const db = await getDb();
  return db.getAllAsync<WorkoutLog>(
    `SELECT id, muscle_group_id AS muscleGroupId, exercise_name AS exerciseName,
            sets, reps, weight, notes, created_at AS createdAt
     FROM workout_logs
     WHERE muscle_group_id = ?
     ORDER BY created_at DESC
     LIMIT 50`,
    muscleGroupId,
  );
}

export async function deleteWorkoutLog(id: number): Promise<void> {
  const db = await getDb();
  await db.runAsync('DELETE FROM workout_logs WHERE id = ?', id);
}

export async function getPreference(key: string): Promise<string | null> {
  const db = await getDb();
  const row = await db.getFirstAsync<{ value: string }>(
    'SELECT value FROM settings WHERE key = ?',
    key,
  );
  return row?.value ?? null;
}

export async function setPreference(key: string, value: string): Promise<void> {
  const db = await getDb();
  await db.runAsync(
    'INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value',
    key,
    value,
  );
}
