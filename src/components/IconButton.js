import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Colors } from "../constants";
import { AntDesign } from "@expo/vector-icons";

const IconButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <Text style={styles.btnText}>{title}</Text>
      <AntDesign name="right" size={22} color="white" />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  btnContainer: {
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: '3%',
  },
  btnText: {
    fontSize: 16,
    color: "white",
  },
});
