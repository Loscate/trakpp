import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import ChecklistPage from "./pages/ChecklistPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Trakpp" }}
        />
        <Stack.Screen
          name="Map"
          component={MapPage}
          options={{ title: "Map" }}
        />
        <Stack.Screen
          name="Checklist"
          component={ChecklistPage}
          options={{ title: "Checklist" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
