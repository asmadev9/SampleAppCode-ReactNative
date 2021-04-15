import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import Checkbox from "../components/Checkbox";
import LabelTextInput from "../components/LabelTextInput";
import SimpleButton from "../components/SimpleButton";
import Title from "../components/Title";
import { Colors, GlobalStyle } from "../constants";

const MyCheckBox = ({ title }) => (
  <View style={styles.checkboxContainer}>
    <Checkbox />
    <Text style={{ fontSize: 16, marginLeft: 5 }}>{title}</Text>
  </View>
);

const Settings = () => {
  return (
    <SafeAreaView
      style={[
        GlobalStyle.background,
        { paddingTop: Platform.OS === "android" ? 40 : 0 },
      ]}
    >
      <ScrollView contentContainerStyle={{ paddingHorizontal: 12 }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            }}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.firstName}>Angela </Text>
          <Text style={styles.lastName}>Anderson</Text>
        </View>
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.emailText}>{"sheran@gmail.com"}</Text>
          <Title color={Colors.secondary}>My Profile</Title>
        </View>
        <View style={styles.inputBoxContainer}>
          <Text style={styles.companyTxt}>{"Company Details"}</Text>
          <LabelTextInput label="Feedlot Name" value="Cows & Cattles Co." />
          <LabelTextInput
            label="Property Name"
            value="Milan Iron And Steel Sdn Bhd"
          />
          <LabelTextInput label="ABN" value="47002095856" />
        </View>
        <View style={styles.inputBoxContainer}>
          <LabelTextInput label="Location Address" value="North Sydney" />
          <LabelTextInput label="Location Town" value="North Sydney" />
          <LabelTextInput label="Location State" value="NSW" />
        </View>
        <View style={styles.inputBoxContainer}>
          <Text style={styles.companyTxt}>Species on PIC</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginVertical: 5,
            }}
          >
            <MyCheckBox title="Beef Cattle" />
            <MyCheckBox title="Chickens" />
            <MyCheckBox title="Sheep" />
            <MyCheckBox title="Others" />
            <MyCheckBox title="Goats" />
          </View>
        </View>
        <View style={{ marginTop: 8 }}>
          <SimpleButton title="SAVE PROFILE CHANGES" />
          <SimpleButton title="Cancel" color="#D2EEF4" />
        </View>
        <Title color={Colors.secondary}>Change Password</Title>
        <View style={styles.inputBoxContainer}>
          <LabelTextInput
            label="Current Password"
            value="Password"
            secureText
          />
          <LabelTextInput label="New Password" value="Password" secureText />
          <LabelTextInput
            label="Confirm New Password"
            value="Password"
            secureText
          />
        </View>
        <View style={{ marginTop: 8 }}>
          <SimpleButton title="Change Password" />
          <SimpleButton
            title="Cancel"
            color="#D2EEF4"
            textColor={Colors.secondary}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    marginVertical: 10,
  },
  inputBoxContainer: {
    padding: 12,
    backgroundColor: Colors.bgLightColor,
    marginVertical: 5,
  },
  companyTxt: { color: Colors.secondary, fontSize: 16, marginVertical: 8 },
  imageContainer: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    borderColor: Colors.primary,
    borderWidth: 3,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: { height: 100, width: 100, borderRadius: 100 / 2 },
  nameContainer: {
    width: "50%",
    height: 80,
    borderBottomColor: "#F2F5F7",
    borderBottomWidth: 1,
    marginLeft: 12,
  },
  firstName: { fontSize: 25, color: Colors.secondary },
  lastName: {
    fontSize: 25,
    color: Colors.tertiary,
    marginTop: 10,
    fontWeight: "700",
  },
  emailText: {
    color: Colors.primary,
    marginVertical: 15,
    fontSize: 19,
  },
});
