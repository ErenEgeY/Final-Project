import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Share,
  Platform,
  StatusBar,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import usePhotoStore from "../store/photoStore";
import { useTheme } from "../context/ThemeContext";
import { GestureHandlerRootView, PinchGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const PhotoDetailScreen = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const photo = route.params?.photo || {};
  const { toggleFavorite, isFavorite } = usePhotoStore();
  const favorite = isFavorite(photo.id);
  const { colors, isDark } = useTheme();

  // Initialize animation values
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Handle pinch gesture
  const pinchHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startScale = savedScale.value;
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      scale.value = Math.max(0.5, Math.min(ctx.startScale * event.scale, 5));
      translateX.value = ctx.startX + event.focalX;
      translateY.value = ctx.startY + event.focalY;
    },
    onEnd: () => {
      savedScale.value = scale.value;
      if (scale.value < 1) {
        scale.value = withSpring(1);
        savedScale.value = 1;
      }
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  // Animated styles for the image
  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  // Handle sharing
  const handleShare = async () => {
    try {
      const imageUrl = photo.download_url || photo.url;
      const result = await Share.share({
        message: photo.author ? `Check out this amazing photo by ${photo.author}!` : 'Check out this amazing photo!',
        url: imageUrl,
        title: photo.author ? `Photo by ${photo.author}` : 'Shared Photo',
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  // Set up the header with share button
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={handleShare} style={styles.headerButton}>
            <Ionicons
              name="share-outline"
              size={24}
              color={isDark ? "#ffffff" : "#2c3e50"}
            />
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        backgroundColor: colors.card,
      },
      headerTintColor: colors.text,
    });
  }, [navigation, isDark, colors]);

  const imageUrl = photo.download_url || photo.url;

  if (!imageUrl) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>Image not found</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <PinchGestureHandler onGestureEvent={pinchHandler}>
          <Animated.View style={[styles.imageContainer, imageStyle]}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              resizeMode="contain"
            />
          </Animated.View>
        </PinchGestureHandler>
        <TouchableOpacity
          style={[
            styles.favoriteButton,
            {
              backgroundColor: isDark
                ? "rgba(255,255,255,0.2)"
                : "rgba(0,0,0,0.5)",
            },
          ]}
          onPress={() => toggleFavorite(photo)}
        >
          <Ionicons
            name={favorite ? "heart" : "heart-outline"}
            size={28}
            color={favorite ? "#ff3b30" : "#ffffff"}
          />
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  favoriteButton: {
    position: "absolute",
    right: 20,
    top: 20,
    borderRadius: 25,
    padding: 12,
    zIndex: 1000,
  },
  headerButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerButton: {
    marginRight: 15,
    padding: 5,
  },
});

export default PhotoDetailScreen; 