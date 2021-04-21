import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors, GlobalStyle } from "../constants";
import { AntDesign } from "@expo/vector-icons";

import Title from "../components/Title";
import InquiryCard from "../components/InquiryCard";
import SimpleButton from "../components/SimpleButton";
import SearchBar from "../components/SearchBar";

const NewConsignment = ({ navigation }) => {
  return (
    <View style={GlobalStyle.background}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        <Title>New Consignment</Title>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Creating from scratch allows you to select the forms you need and
            fill in the blanks. This is useful when starting out with eNVDs or
            for one off consignments
          </Text>
          <SimpleButton
            title="CREATE FROM SCRATCH"
            onPress={() => {
              navigation.navigate("ScratchForm");
            }}
          />
        </View>
        <Title>Use An Existing Template</Title>
        <SearchBar />
        <InquiryCard arrow />
        <InquiryCard arrow />
        <InquiryCard arrow />
        <View
          style={[
            styles.textContainer,
            {
              height: 140,
              marginVertical: 10,
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <AntDesign name={"exclamationcircle"} size={26} color="#1EABC7" />
          </View>
          <View style={{ flex: 4, paddingRight: 8 }}>
            <Text style={styles.text}>
              A template allows you to create a new consignment quickly and
              easily using your answers from a selected consignment. These are
              great for when you are sending similar consignments on a regular
              basis whilst still allowing you to change key pieces of
            </Text>
          </View>
        </View>
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

export default NewConsignment;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.grey,
  },
  textContainer: {
    height: 160,
    backgroundColor: "#F7F7F7",
    borderRadius: 5,
    padding: 10,
    justifyContent: "space-between",
    paddingBottom: 12,
  },
});
