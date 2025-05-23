import "react-native-gesture-handler";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Import screens
import GalleryScreen from "./src/screens/GalleryScreen";
import SearchScreen from "./src/screens/SearchScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import PhotoDetailScreen from "./src/screens/PhotoDetailScreen";
import AboutScreen from "./src/screens/AboutScreen";
import { ThemeProvider, useTheme } from "./src/context/ThemeContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  const { colors, isDark } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Gallery") {
            iconName = focused ? "images" : "images-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: isDark ? "#2d2d2d" : "#e1e1e1",
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: isDark ? "#6b7280" : "#9ca3af",
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTitleStyle: {
          color: colors.text,
        },
      })}
    >
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          headerTitle: "York Gallery",
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerTitle: "Search Photos",
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          headerTitle: "My Favorites",
        }}
      />
    </Tab.Navigator>
  );
};

function MainApp() {
  const { colors, isDark } = useTheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor={colors.card}
        />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.card,
            },
            headerTitleStyle: {
              color: colors.text,
            },
            headerTintColor: colors.text,
          }}
        >
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PhotoDetail"
            component={PhotoDetailScreen}
            options={{
              headerTitle: "Photo Details",
            }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{
              headerTitle: "About York Gallery",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
