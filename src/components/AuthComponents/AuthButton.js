import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Colors } from "../../constants";

export default function AuthButton({
  text,
  onPress,
  loading,
  simpleButton,
  textColor,
  alignItems,
  justifyContent,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        simpleButton
          ? [styles.simpleButton, { justifyContent: justifyContent }]
          : styles.container
      }
    >
      <Text
        style={[simpleButton ? [styles.simpleButtonText] : styles.textStyle]}
      >
        {text}
      </Text>
      {loading ? <ActivityIndicator color={Colors.white} /> : null}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.bgColor,
    borderRadius: 4,
    flexDirection: "row",
  },
  simpleButton: {
    height: 45,
    alignItems: "center",
    flexDirection: "row",
  },
  textStyle: {
    fontSize: 20,
    marginRight: 5,
    fontWeight: "bold",
    color: 'white',
  },
  simpleButtonText: {
    color: Colors.dark_grey,
    fontWeight: "500",
    fontSize: 14,
  },
});
