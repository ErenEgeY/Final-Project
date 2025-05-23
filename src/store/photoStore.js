import { create } from "zustand";

const usePhotoStore = create((set, get) => ({
  photos: [],
  favorites: [],
  searchResults: [],
  loading: false,
  error: null,

  fetchPhotos: async () => {
    set({ loading: true });
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=30"
      );
      const data = await response.json();
      set({ photos: data, loading: false });
    } catch (error) {
      console.error("Error fetching photos:", error);
      set({ error: error.message, loading: false });
    }
  },

  searchPhotos: async (query) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=1&limit=30`
      );
      const data = await response.json();
      const filteredPhotos = data.filter((photo) =>
        photo.author.toLowerCase().includes(query.toLowerCase())
      );
      set({ searchResults: filteredPhotos, loading: false });
    } catch (error) {
      console.error("Error searching photos:", error);
      set({ error: error.message, loading: false });
    }
  },

  toggleFavorite: (photo) => {
    set((state) => {
      const isFavorite = state.favorites.some((fav) => fav.id === photo.id);
      if (isFavorite) {
        return {
          favorites: state.favorites.filter((fav) => fav.id !== photo.id),
        };
      } else {
        return {
          favorites: [...state.favorites, photo],
        };
      }
    });
  },

  isFavorite: (photoId) => {
    const state = get();
    return state.favorites.some((fav) => fav.id === photoId);
  },
}));

export default usePhotoStore;
