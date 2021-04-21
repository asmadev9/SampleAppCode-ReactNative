import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyle } from "../constants";

const Title = ({ center, color='#000', children }) => {
  return (
    <View style={{ height: 50, justifyContent: "center", alignItems: center ? 'center' : 'flex-start' }}>
      <Text style={[GlobalStyle.title, {color: color}]}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({});
