import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants";

const CustomTabBar = ({icon, size, color, focused}) => {
  return (
    <View
      style={{
        height: size + 15,
        width: size + 15,
        borderRadius: (size + 15),
        backgroundColor: focused ? Colors.tertiary : "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={icon}
        color={focused ? "white" : color}
        size={size-2}
      />
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({});
