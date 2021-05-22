import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

export default function HomeButton(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(props.link);
      }}
    >
      <ImageBackground
        source={props.image}
        style={styles.image}
        imageStyle={{ borderRadius: 20 }}
      >
        <View style={styles.view}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
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
