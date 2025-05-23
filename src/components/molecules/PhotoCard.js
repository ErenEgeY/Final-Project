import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import usePhotoStore from '../../store/photoStore';
import { useTheme } from '../../context/ThemeContext';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 15;

const PhotoCard = ({ photo, onPress }) => {
  const toggleFavorite = usePhotoStore(state => state.toggleFavorite);
  const favorites = usePhotoStore(state => state.favorites);
  const { colors } = useTheme();

  const isFavorite = favorites.some(fav => fav.id === photo.id);

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{ uri: photo.download_url }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(photo)}
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={isFavorite ? "#ff4444" : "#ffffff"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    width: CARD_WIDTH,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: CARD_WIDTH,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 8,
  },
});

export default PhotoCard;