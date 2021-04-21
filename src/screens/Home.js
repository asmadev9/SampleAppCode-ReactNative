import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Colors, GlobalStyle } from "../constants";

import Title from "../components/Title";
import TextArea from "../components/TextArea";
import IconButton from "../components/IconButton";
import CounterCard from "../components/CounterCard";
import InquiryCard from "../components/InquiryCard";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyle.background}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
        <Title>Announcements</Title>
        <TextArea onChangeText={() => {}} onClosePress={() => {}} />
        <Title>Consignments</Title>
        <IconButton
          title="CREATE NEW CONSIGNMENT"
          onPress={() => navigation.navigate("NewConsignment")}
        />
        <View style={styles.counterContainer}>
          <CounterCard filled title="Submitted" number="1" />
          <CounterCard title="Drafts" number="5" />
        </View>
        <InquiryCard />
        <View style={{height: 20}} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});
