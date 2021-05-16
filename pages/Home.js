import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButton from "../components/HomeButton";

const buttons = [
  {
    title: "Carte",
    image: require("../assets/map.png"),
  },
  {
    title: "Checklist",
    image: require("../assets/map.png"),
  },
  {
    title: "Galerie",
    image: require("../assets/map.png"),
  },
  {
    title: "Photo",
    image: require("../assets/map.png"),
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <HomeButton title={button.title} image={button.image} key={index} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
