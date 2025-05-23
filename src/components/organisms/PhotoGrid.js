import React from "react";
import { FlatList, StyleSheet } from "react-native";
import PhotoCard from "../molecules/PhotoCard";
import LoadingIndicator from "../atoms/LoadingIndicator";
import { theme } from "../../config/theme";

const PhotoGrid = ({
  photos,
  loading,
  onEndReached,
  onFavoritePress,
  getFavoriteStatus,
}) => {
  if (loading && !photos.length) {
    return <LoadingIndicator />;
  }

  return (
    <FlatList
      data={photos}
      renderItem={({ item }) => (
        <PhotoCard
          photo={item}
          isFavorite={getFavoriteStatus(item.id)}
          onFavoritePress={onFavoritePress}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.sm,
  },
});

export default PhotoGrid;
