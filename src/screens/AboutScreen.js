import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";

const AboutScreen = () => {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useTheme();

  const dynamicStyles = {
    container: {
      backgroundColor: colors.background,
    },
    header: {
      backgroundColor: colors.card,
      shadowColor: isDark ? "#000000" : "#000000",
    },
    logoText: {
      color: colors.text,
    },
    title: {
      color: colors.text,
    },
    version: {
      color: isDark ? "#9ca3af" : "#7f8c8d",
    },
    section: {
      backgroundColor: colors.card,
      shadowColor: isDark ? "#000000" : "#000000",
    },
    sectionTitle: {
      color: colors.text,
    },
    item: {
      color: colors.text,
    },
  };

  return (
    <ScrollView
      style={[
        styles.container,
        dynamicStyles.container,
        { paddingTop: insets.top },
      ]}
    >
      <View style={styles.content}>
        <View style={[styles.header, dynamicStyles.header]}>
          <View style={styles.logoContainer}>
            <Text style={[styles.logoText, dynamicStyles.logoText]}>YORK</Text>
          </View>
          <Text style={[styles.title, dynamicStyles.title]}>York Gallery</Text>
          <Text style={[styles.version, dynamicStyles.version]}>
            Version 1.0.0
          </Text>
        </View>

        <View style={[styles.section, dynamicStyles.section]}>
          <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>
            Features
          </Text>
          <Text style={[styles.item, dynamicStyles.item]}>
            • Browse beautiful photos
          </Text>
          <Text style={[styles.item, dynamicStyles.item]}>
            • Search functionality
          </Text>
          <Text style={[styles.item, dynamicStyles.item]}>
            • Save to favorites
          </Text>
          <Text style={[styles.item, dynamicStyles.item]}>
            • High-quality images
          </Text>
        </View>

        <View style={[styles.section, dynamicStyles.section]}>
          <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>
            About
          </Text>
          <Text style={[styles.item, dynamicStyles.item]}>
            • Eren Ege Yıldız
          </Text>
          <Text style={[styles.item, dynamicStyles.item]}>
            • Antalya/Manavgat
          </Text>
          <Text style={[styles.item, dynamicStyles.item]}>
            • Yıldız Technical University Student
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    padding: 20,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoContainer: {
    position: "relative",
    marginBottom: 10,
  },
  logoText: {
    fontSize: 48,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  logoDot: {
    position: "absolute",
    width: 12,
    height: 12,
    backgroundColor: "#3498db",
    borderRadius: 6,
    top: "50%",
    left: "50%",
    transform: [{ translateX: -6 }, { translateY: -6 }],
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  version: {
    marginTop: 5,
  },
  section: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  item: {
    fontSize: 16,
    marginVertical: 8,
    paddingLeft: 10,
  },
});

export default AboutScreen;
