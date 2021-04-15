import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants";
import { AntDesign } from "@expo/vector-icons";

const InquiryText = ({ color = "black", children }) => (
  <Text style={{ marginVertical: 6, fontSize: 15, color: color }}>
    {children}
  </Text>
);

const InquiryCard = ({ arrow }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingLeft: 30 }}>
        <InquiryText>C-101393401</InquiryText>
        <InquiryText>SPECIES</InquiryText>
        <InquiryText color="grey">Cattle</InquiryText>
        <InquiryText>FORMS</InquiryText>
        <InquiryText color="grey">NCHD, NVD</InquiryText>
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: 50,
          alignItems: "flex-end",
        }}
      >
        <View>
          <InquiryText>QTY</InquiryText>
          <InquiryText color="grey">57</InquiryText>
          <InquiryText>FROM</InquiryText>
          <InquiryText color="grey">Dalby</InquiryText>
          <InquiryText>TO</InquiryText>
          <InquiryText color="grey">Kaimkillenbun</InquiryText>
        </View>
      </View>
      <View style={{ width: 20, justifyContent: "center", marginRight: 5 }}>
        {arrow && <AntDesign name="right" style={{ alignSelf: "center" }} />}
      </View>
    </View>
  );
};

export default InquiryCard;

const styles = StyleSheet.create({
  container: {
    height: 210,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 12,
    marginVertical: 5
  },
});
