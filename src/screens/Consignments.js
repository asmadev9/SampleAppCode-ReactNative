import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors, GlobalStyle } from "../constants";

import Title from "../components/Title";
import TextArea from "../components/TextArea";
import IconButton from "../components/IconButton";
import CounterCard from "../components/CounterCard";
import InquiryCard from "../components/InquiryCard";

const Consignments = () => {
  return (
    <View style={GlobalStyle.background}>
      <ScrollView contentContainerStyle={{paddingHorizontal: 10}}>
        <Title>Consignments</Title>
        <IconButton title="CREATE NEW CONSIGNMENT" />
        <View style={styles.counterContainer}>
          <CounterCard filled title="Submitted" number="1" />
          <CounterCard title="Drafts" number="5" />
          <CounterCard title="Completed" number="9" />
          <CounterCard title="Locked" number="2" />
        </View>
        <Title center>Submitted</Title>
        <InquiryCard arrow />
        <InquiryCard arrow />
        <InquiryCard arrow />
        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
};

export default Consignments;

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
