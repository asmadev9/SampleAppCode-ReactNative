import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Colors } from "../constants";

const RadioButtons = ({ radioBtnData }) => {
  const [checked, setChecked] = useState(0);

  return (
    <View
      style={{
        marginTop: 5,
        height: 30,
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {radioBtnData.map((data, key) => {
        return (
          <View key={key} style={{ flexDirection: "row", borderColor: "red" }}>
            {checked == key ? (
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Fontisto
                  name="radio-btn-active"
                  size={24}
                  color={Colors.primary}
                />
                <Text style={{ fontSize: 16, marginLeft: 8 }}>{data}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setChecked(key);
                }}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Fontisto
                  name="radio-btn-passive"
                  size={24}
                  color={Colors.grey}
                />
                <Text style={{ fontSize: 16, marginLeft: 8 }}>{data}</Text>
              </TouchableOpacity>
            )}
          </View>
        );
      })}
    </View>
  );
};
export default RadioButtons;

const styles = StyleSheet.create({});
