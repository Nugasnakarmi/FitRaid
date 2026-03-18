import { Pressable, StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WorkoutPlanner } from '@/components/workout-planner';
import { useSettings } from '@/contexts/settings-context';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function HomeScreen() {
  const { weightUnit, toggleWeightUnit } = useSettings();
  const tintColor = useThemeColor({}, 'tint');
  const inactiveBg = useThemeColor(
    { light: '#e4e9ef', dark: '#2a2f35' },
    'background',
  );
  const inactiveText = useThemeColor(
    { light: '#687076', dark: '#9BA1A6' },
    'text',
  );

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
      <ThemedView style={styles.titleRow}>
        <ThemedText type="title">{"Let's Train 💪"}</ThemedText>
        <Pressable
          onPress={toggleWeightUnit}
          accessibilityRole="switch"
          accessibilityLabel="Toggle weight unit"
          accessibilityValue={{ text: weightUnit }}>
          <ThemedView style={styles.unitToggle}>
            <ThemedView
              style={[
                styles.unitOption,
                weightUnit === 'lbs'
                  ? { backgroundColor: tintColor }
                  : { backgroundColor: inactiveBg },
              ]}>
              <ThemedText
                style={[
                  styles.unitOptionText,
                  { color: weightUnit === 'lbs' ? '#fff' : inactiveText },
                ]}>
                lbs
              </ThemedText>
            </ThemedView>
            <ThemedView
              style={[
                styles.unitOption,
                weightUnit === 'kg'
                  ? { backgroundColor: tintColor }
                  : { backgroundColor: inactiveBg },
              ]}>
              <ThemedText
                style={[
                  styles.unitOptionText,
                  { color: weightUnit === 'kg' ? '#fff' : inactiveText },
                ]}>
                kg
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </Pressable>
      </ThemedView>
      <WorkoutPlanner />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
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
  unitToggle: {
    flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden',
    gap: 2,
  },
  unitOption: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  unitOptionText: {
    fontSize: 13,
    fontWeight: '700',
  },
});
