import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../constants";
import { AntDesign } from "@expo/vector-icons";

const RoundButton = ({ bgColor, icon, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      height: 42,
      width: 42,
      borderRadius: 42 / 2,
      backgroundColor: bgColor,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <AntDesign name={icon} color="white" size={26} />
  </TouchableOpacity>
);

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" placeholderTextColor={Colors.lightGrey} />
      <View
        style={{
          width: 95,
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <RoundButton
          icon="filter"
          bgColor={Colors.tertiary}
          onPress={() => {}}
        />
        <RoundButton
          icon="search1"
          bgColor={Colors.primary}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: 55,
    borderRadius: 60 / 2,
    borderWidth: 2,
    borderColor: Colors.lightGrey,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginVertical: 10
  },
});
