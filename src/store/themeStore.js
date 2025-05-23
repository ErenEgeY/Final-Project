import { create } from 'zustand';


const useThemeStore = create((set) => ({
  isDarkMode: false,
  initializeTheme: () => {
    // Initialize with light mode by default
    set({ isDarkMode: false });
  },
  toggleTheme: () => {
    set((state) => ({ isDarkMode: !state.isDarkMode }));
  },
}));

export default useThemeStore;