import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants";

const SimpleButton = ({ title, color, textColor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color ? color : Colors.primary,
        borderRadius: 5,
        marginVertical: 6
      }}
    >
      <Text style={{ fontSize: 16, color: textColor ?  textColor : "white" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({});
