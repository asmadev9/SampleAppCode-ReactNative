import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants";

const LabelTextInput = ({ label, value, placeholder, onChangeText, secureText}) => {
  return (
    <View
      style={{
        height: 50,
        justifyContent: "space-evenly",
        borderBottomWidth: 1,
        borderColor: "#E4EDED",
        marginVertical: 10
      }}
    >
      <Text style={{ fontSize: 14, color: Colors.grey }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureText}
        value={value}
        style={{ height: 30, fontSize: 16, color: Colors.secondary }}
      />
    </View>
  );
};

export default LabelTextInput;

const styles = StyleSheet.create({});
