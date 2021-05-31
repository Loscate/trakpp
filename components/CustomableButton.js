import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default function CustomableButton({
  style,
  onPress,
  textStyle,
  text,
  width,
  height,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: width, height: height }}
    >
      <View style={{ ...style, width: "100%", height: "100%" }}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
