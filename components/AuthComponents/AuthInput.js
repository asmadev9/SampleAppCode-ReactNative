import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants";

export default function AuthInput({
  placeholder,
  secureTextEntry,
  onPress,
  secureText,
  showEye,
  keyboardType,
  onChangeText,
  value,
  editable,
}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.85, justifyContent: "center" }}>
        <TextInput
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={"#535353"}
          onChangeText={onChangeText}
          value={value}
          editable={editable}
          style={{ fontSize: 16 }}
        />
      </View>
      {showEye && (
        <TouchableOpacity
          onPress={onPress}
          style={{ flex: 0.15, justifyContent: "center", alignItems: "center" }}
        >
          <Ionicons
            name={secureText ? "eye-off-outline" : "eye-outline"}
            size={25}
            color={"#535353"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 55,
    marginVertical: 6,
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 4,
    borderColor: Colors._grey,
    paddingLeft: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.darkGrey,
    paddingLeft: 1,
  },
  inputContainer: {
    flex: 0.5,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
});
