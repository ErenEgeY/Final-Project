import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { theme } from "../../config/theme";

const LoadingIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={theme.colors.primary} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingIndicator;
