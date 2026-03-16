import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WorkoutPlanner } from '@/components/workout-planner';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#0a7ea4', dark: '#0d3b4f' }}
      headerImage={
        <View style={styles.headerContent}>
          <ThemedText style={styles.headerEmoji}>🏋️</ThemedText>
          <ThemedText style={styles.headerTitle}>FitRaid</ThemedText>
          <ThemedText style={styles.headerSubtitle}>
            Your Personal Workout Companion
          </ThemedText>
        </View>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{"Let's Train 💪"}</ThemedText>
      </ThemedView>
      <WorkoutPlanner />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  headerEmoji: {
    fontSize: 56,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
  },
});
