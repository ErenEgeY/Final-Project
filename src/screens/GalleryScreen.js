import React, { useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PhotoCard from "../components/molecules/PhotoCard";
import usePhotoStore from "../store/photoStore";
import { useTheme } from "../context/ThemeContext";

const GalleryScreen = ({ navigation }) => {
  const { photos, loading, fetchPhotos } = usePhotoStore();
  const { colors, isDark, toggleTheme } = useTheme();

  useEffect(() => {
    fetchPhotos();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={toggleTheme} style={styles.headerButton}>
            <Ionicons
              name={isDark ? "sunny" : "moon"}
              size={24}
              color={isDark ? "#ffd700" : "#2c3e50"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("About")}
            style={styles.headerButton}
          >
            <Ionicons
              name="information-circle-outline"
              size={24}
              color={isDark ? "#ffffff" : "#2c3e50"}
            />
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        backgroundColor: colors.card,
      },
      headerTitleStyle: {
        color: colors.text,
      },
    });
  }, [navigation, isDark, colors]);

  if (loading) {
    return (
      <View
        style={[
          styles.loadingContainer,
          { backgroundColor: colors.background },
        ]}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <PhotoCard
            photo={item}
            onPress={() => navigation.navigate("PhotoDetail", { photo: item })}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        onRefresh={fetchPhotos}
        refreshing={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    padding: 5,
  },
  headerButtons: {
    flexDirection: "row",
    marginRight: 15,
  },
  headerButton: {
    marginLeft: 15,
    padding: 5,
  },
});

export default GalleryScreen;
