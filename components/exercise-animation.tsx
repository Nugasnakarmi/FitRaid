import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useThemeColor } from '@/hooks/use-theme-color';

const FRAME_DURATION = 1200;

type ExerciseAnimationProps = {
  images: [string, string];
};

/**
 * Displays an animated exercise demonstration by crossfading between two
 * images (start and end position) in a continuous loop.
 */
export function ExerciseAnimation({ images }: ExerciseAnimationProps) {
  const opacity = useSharedValue(1);
  const backgroundColor = useThemeColor({}, 'background');

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0, { duration: FRAME_DURATION, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: FRAME_DURATION, easing: Easing.inOut(Easing.ease) }),
      ),
      -1,
      false,
    );
  }, [opacity]);

  const frontStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const backStyle = useAnimatedStyle(() => ({
    opacity: 1 - opacity.value,
  }));

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Animated.View style={[styles.layer, backStyle]}>
        <Image source={{ uri: images[1] }} style={styles.image} contentFit="contain" />
      </Animated.View>
      <Animated.View style={[styles.layer, frontStyle]}>
        <Image source={{ uri: images[0] }} style={styles.image} contentFit="contain" />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
  },
  layer: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
