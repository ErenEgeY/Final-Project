import React, { useState } from "react";
import { View, TextInput, FlatList, StyleSheet } from "react-native";
import PhotoCard from "../components/molecules/PhotoCard"; // Updated import path
import usePhotoStore from "../store/photoStore";
import { useTheme } from "../context/ThemeContext";

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { searchResults, searchPhotos } = usePhotoStore();
  const { colors } = useTheme();

  const handleSearch = (text) => {
    setSearchQuery(text);
    searchPhotos(text);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        style={[
          styles.searchInput,
          {
            backgroundColor: colors.card,
            color: colors.text,
            borderColor: colors.border,
          },
        ]}
        placeholder="Search photos by author..."
        placeholderTextColor={colors.text}
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={searchResults}
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
  searchInput: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
  },
  list: {
    padding: 5,
  },
});

export default SearchScreen;
