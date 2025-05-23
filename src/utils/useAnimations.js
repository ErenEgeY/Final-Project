import { useRef, useEffect } from "react";
import { Animated } from "react-native";

export const useAnimatedValue = (initialValue = 0) => {
  return useRef(new Animated.Value(initialValue)).current;
};

export const useHeaderAnimation = (scrollY) => {
  const headerHeight = useAnimatedValue(80);

  useEffect(() => {
    Animated.spring(headerHeight, {
      toValue: scrollY > 50 ? 60 : 80,
      useNativeDriver: false,
    }).start();
  }, [scrollY]);

  return headerHeight;
};
