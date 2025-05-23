import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";

export const downloadImage = async (imageUrl) => {
  try {
    const { status } = await MediaLibrary.requestPermissionsAsync();

    if (status === "granted") {
      const fileUri = `${FileSystem.documentDirectory}${Date.now()}.jpg`;

      const downloadResumable = FileSystem.createDownloadResumable(
        imageUrl,
        fileUri,
        {}
      );

      const { uri } = await downloadResumable.downloadAsync();
      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("York Gallery", asset, false);

      Alert.alert("Success", "Image saved to gallery!");
    }
  } catch (error) {
    Alert.alert("Error", "Could not save the image.");
  }
};
