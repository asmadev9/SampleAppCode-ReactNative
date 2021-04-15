import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants";

const CounterCard = ({ filled, title, number }) => {
  const txtColor = filled ? 'white' : Colors.secondary
  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: filled ? 0 : 1,
          backgroundColor: filled ? Colors.tertiary : "white",
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={{fontSize: 22, color: txtColor}}>{title}</Text>
      </View>
      <View style={{ flex: 3, alignItems: 'flex-end', paddingRight: '5%'}}>
        <Text style={{fontSize: 50, color: txtColor}}>{number}</Text>
      </View>
    </View>
  );
};

export default CounterCard;

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginVertical: 5,
    width: "46%",
    borderRadius: 5,
    borderColor: Colors.lightGrey,
    padding: '4%',
    justifyContent: 'space-between'
  },
});
