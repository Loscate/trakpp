import React from "react";
import { StyleSheet, Text, ImageBackground, Image, View } from "react-native";

export default function HomeButton(props) {
  return (
    <ImageBackground
      source={props.image}
      style={styles.image}
      imageStyle={{ borderRadius: 20 }}
    >
      <View style={styles.view}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    margin: 15,
  },
  view: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: "#fff",
    fontSize: 28,
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
});
