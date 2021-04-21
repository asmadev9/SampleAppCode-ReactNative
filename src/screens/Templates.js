import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { GlobalStyle } from "../constants";

import Title from "../components/Title";

const Templates = () => {
  return (
    <View style={GlobalStyle.background}>
      <ScrollView style={styles.scrollView} contentContainerStyle={{paddingHorizontal: 10}}>
        <Title>Templates</Title>
        
      </ScrollView>
    </View>
  );
};

export default Templates;

const styles = StyleSheet.create({
  text: {
    fontSize: 42,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    flexWrap: "wrap",
  },
});
