import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants";
import { Ionicons } from "@expo/vector-icons";

const Checkbox = () => {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onCheckmarkPress}
    >
      {checked && <Ionicons name="checkmark" size={20} color="white" />}
    </Pressable>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkboxBase: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25 / 2,
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: "transparent",
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: "500",
    fontSize: 18,
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
  },

  appContainer: {
    flex: 1,
    alignItems: "center",
  },

  appTitle: {
    marginVertical: 16,
    fontWeight: "bold",
    fontSize: 24,
  },
});
