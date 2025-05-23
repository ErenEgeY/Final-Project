import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import PhotoCard from "../components/molecules/PhotoCard"; // Updated import path
import usePhotoStore from "../store/photoStore";
import { useTheme } from "../context/ThemeContext";

const FavoriteScreen = ({ navigation }) => {
  const favorites = usePhotoStore((state) => state.favorites);
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <PhotoCard
            photo={item}
            onPress={() => navigation.navigate("PhotoDetail", { photo: item })}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 5,
  },
});

export default FavoriteScreen;
