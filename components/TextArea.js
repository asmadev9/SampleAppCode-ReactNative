import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants";
import { AntDesign } from "@expo/vector-icons";

const TextArea = ({onClosePress, onChangeText}) => {
  return (
    <View style={styles.textBox}>
      <View style={{ flex: 2 }}>
        <TextInput
          placeholderTextColor="#999999"
          placeholder="Insert announcement or latest updates here..."
          style={{ fontSize: 15 }}
          numberOfLines={3}
          multiline={true}
          onChangeText={onChangeText}          
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={onClosePress}>
          <AntDesign name="closecircle" color={Colors.secondary} size={26} />
        </TouchableOpacity>
        <Text style={{ color: "#999999", fontSize: 10 }}>Date: 19-11-2020</Text>
      </View>
    </View>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  textBox: {
    height: 200,
    borderRadius: 5,
    backgroundColor: "#F7F7F7",
    flexDirection: "row",
    padding: 20,
  },
});
