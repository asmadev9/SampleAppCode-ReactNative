import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { Colors, GlobalStyle } from "../constants";
import LabelTextInput from "../components/LabelTextInput";
import SimpleButton from "../components/SimpleButton";
import RadioButtons from "../components/RadioButtons";
import Checkbox from "../components/Checkbox";

const SingleFormRow = ({ title, description }) => (
  <View
    style={{
      marginVertical: title ? 0 : 5,
      borderBottomWidth: 1,
      borderColor: "#F2F5F7",
      paddingBottom: 10,
      justifyContent: "space-evenly",
    }}
  >
    {title && <Title color="#0C3C60">{title}</Title>}
    <Text
      style={{
        fontSize: 14,
        color: Colors.grey,
        letterSpacing: 0.5,
        lineHeight: 25,
      }}
    >
      {description}
    </Text>
    <RadioButtons radioBtnData={["Yes", "No"]} />
  </View>
);

const ScratchForm = () => {
  return (
    <View style={GlobalStyle.background}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        <SingleFormRow
          title="History"
          description="Were the livestock owned by the owner since their birth?"
        />
        <SingleFormRow
          title="Food Safety"
          description="In the past 6 months have any of these animals been on a property listed on the ERP database  or placed under any restrictions because of chemical residues?"
        />
        <SingleFormRow description="Have the livestock in this consignment ever in their lives been fed feed containing animal fats?" />
        <SingleFormRow description="In the past 60 days, have any of these cattle been fed by-product stockfeeds?" />
        <Title color={Colors.secondary}>Declaration</Title>
        <View
          style={{ padding: 20, backgroundColor: "#F8FDFD", marginVertical: 5 }}
        >
          <LabelTextInput
            label="Full Name"
            value="John Doe"
            placeholder="Enter full name..."
            onChangeText={(text) => {}}
          />
          <LabelTextInput
            label="Address"
            value="North Sydney"
            placeholder="Enter address..."
            onChangeText={(text) => {}}
          />
          <LabelTextInput
            label="Town / Suburb"
            value="North Sydney"
            placeholder="Enter address..."
            onChangeText={(text) => {}}
          />
          <LabelTextInput
            label="State"
            value="NSW"
            placeholder="Enter address..."
            onChangeText={(text) => {}}
          />
          <SimpleButton title="SIGN DECLARATION" />
        </View>
        <View
          style={{ padding: 20, backgroundColor: "#F8FDFD", marginVertical: 5 }}
        >
          <LabelTextInput
            label="Date"
            value="23/10/2020"
            placeholder="Enter date..."
            onChangeText={(text) => {}}
          />
          <LabelTextInput
            label="Telephone Number"
            value="0469696969"
            placeholder="Enter telephone number..."
            onChangeText={(text) => {}}
          />
          <LabelTextInput
            label="Email"
            value="sheran@gmail.com"
            placeholder="Enter email..."
            onChangeText={(text) => {}}
          />
          <LabelTextInput
            label="State"
            value="NSW"
            placeholder="Enter address..."
            onChangeText={(text) => {}}
          />
          <SimpleButton title="SIGN DECLARATION" />
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: Colors.secondary,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>EU NVD</Text>
        </View>
        <View
          style={{ padding: 20, backgroundColor: "#F8FDFD", marginVertical: 5 }}
        >
          <Text
            style={{ color: Colors.secondary, fontSize: 10, lineHeight: 20 }}
          >
            I declare as the manager responsible for the husbandry of the
            animals in this consignment, that the information stated in this
            declaration is true and correct. I also declare that none of the
            animals have ever been treated with HGPs; I have records available
            to demonstrate that the animals were either
          </Text>
          <Text
            style={{
              color: Colors.secondary,
              fontSize: 10,
              lineHeight: 20,
              marginVertical: 15,
            }}
          >
            <Text>
              {"\u2022"}Born on the property the PIC of which is shown, or{" "}
              {"\n"}
            </Text>
            <Text>
              {"\u2022"}For purchased cattle, accompanied by an EU vendor
              declaration attesting to their HGP freedom. I also declare
            </Text>
          </Text>
          <Text
            style={{ color: Colors.secondary, fontSize: 10, lineHeight: 20 }}
          >
            I also declare that I have read and understood all the questions
            that I have answered... of State or Territory legislation. Feed Ban
            Brochure
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox />
          <Text style={{ color: Colors.grey, width: "90%", marginLeft: 10 }}>
            I have read, understood, and agree to the terms above mentioned
          </Text>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: 'row', marginVertical: 10 }}>
          <View style={{width: '48%'}}><SimpleButton color={Colors.tertiary} title="PREVIOUS STEP" /></View>
          <View style={{width: '48%'}}><SimpleButton title="NEXT STEP" /></View>
          
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

export default ScratchForm;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});
