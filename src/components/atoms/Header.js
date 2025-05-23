import React from "react";
import { Animated, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = ({ title, showBack = false, height = 80 }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <Animated.View
      style={[styles.container, { height, paddingTop: insets.top }]}
    >
      {showBack && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#2c3e50" />
        </TouchableOpacity>
      )}
      <Animated.Text style={styles.title}>{title}</Animated.Text>
      <TouchableOpacity
        style={styles.infoButton}
        onPress={() => navigation.navigate("About")}
      >
        <Ionicons name="information-circle-outline" size={24} color="#2c3e50" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    flex: 1,
    textAlign: "center",
  },
  backButton: {
    padding: 8,
  },
  infoButton: {
    padding: 8,
  },
});

export default Header;
