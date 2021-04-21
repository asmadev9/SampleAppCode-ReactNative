import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import Icon from "@expo/vector-icons/Ionicons";
import { Colors } from "../constants";

const CustomDrawerContent = (props) => {
  const [tabFocused, setTabFocused] = useState(0);
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.nav}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri:
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
              }}
              style={{ height: "90%", width: "90%", borderRadius: 30 }}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={styles.nameText}>{"Alexis Enache"}</Text>
            <Text style={styles.emailText}>{"john@gmail.com"}</Text>
          </View>
        </View>
        <Drawer.Section style={styles.drawerAbove}>
          <DrawerItem
            inactiveBackgroundColor={
              tabFocused === 0 ? Colors.primary : "white"
            }
            onPress={() => {
              setTabFocused(0);
              props.navigation.navigate("Home");
            }}
            label={"Home"}
            labelStyle={{ color: tabFocused === 0 ? "white" : "black" }}
            icon={() => (
              <Icon
                name="home"
                color={tabFocused === 0 ? "white" : Colors.secondary}
                size={20}
              />
            )}
          />
          <DrawerItem
            inactiveBackgroundColor={
              tabFocused === 1 ? Colors.primary : "white"
            }
            onPress={() => {
              setTabFocused(1);
              props.navigation.navigate("Consignments");
            }}
            label={"Consignments"}
            labelStyle={{ color: tabFocused === 1 ? "white" : "black" }}
            icon={(color, size) => (
              <Icon
                name="card-outline"
                color={tabFocused === 1 ? "white" : Colors.secondary}
                size={20}
              />
            )}
          />
          <DrawerItem
            inactiveBackgroundColor={
              tabFocused === 2 ? Colors.primary : "white"
            }
            onPress={() => {
              setTabFocused(2);
              props.navigation.navigate("Templates");
            }}
            label={"Templates"}
            labelStyle={{ color: tabFocused === 2 ? "white" : "black" }}
            icon={(color, size) => (
              <Icon
                name="document-text-outline"
                color={tabFocused === 2 ? "white" : Colors.secondary}
                size={20}
              />
            )}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomSection}>
        <DrawerItem
          label={"Settings"}
          labelStyle={{ color: "black" }}
          icon={(color, size) => (
            <Icon name="settings-outline" color={Colors.secondary} size={20} />
          )}
          onPress={() => {}}
        />
        <DrawerItem
          label={"About Us"}
          labelStyle={{ color: "black" }}
          icon={(color, size) => (
            <Icon
              name="information-circle-outline"
              color={Colors.secondary}
              size={20}
            />
          )}
          onPress={() => {}}
        />
        <DrawerItem
          label={"Log Out"}
          labelStyle={{ color: "black" }}
          icon={(color, size) => (
            <Icon name="exit" color={Colors.secondary} size={20} />
          )}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  nav: {
    padding: 10,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: "#F0F0F0",
  },
  drawerAbove: { marginTop: 20 },
  bottomSection: { marginBottom: 50 },
  imageContainer: {
    marginTop: 20,
    height: 75,
    width: 75,
    margin: 20,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 75 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.tertiary,
  },
  emailText: {
    fontWeight: "500",
    color: Colors.primary,
    marginTop: 10,
  },
});
