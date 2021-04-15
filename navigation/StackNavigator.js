import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Consignments from "../screens/Consignments";
import HeaderMenuButton from "../components/HeaderMenuButton";
import HeaderProfileButton from "../components/HeaderProfileButton";
import NewConsignment from "../screens/NewConsignment";
import ScratchForm from "../screens/ScratchForm";
import Templates from "../screens/Templates";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerStyle: { shadowColor: "transparent" },
          title: null,
          headerLeft: () => (
            <HeaderMenuButton
              icon="grid"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerRight: () => <HeaderProfileButton />,
        })}
      />
      <Stack.Screen
        name="NewConsignment"
        component={NewConsignment}
        options={({ navigation }) => ({
          headerStyle: { shadowColor: "transparent" },
          title: null,
          headerLeft: () => (
            <HeaderMenuButton
              icon="chevron-small-left"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => <HeaderProfileButton />,
        })}
      />
      <Stack.Screen
        name="ScratchForm"
        component={ScratchForm}
        options={({ navigation }) => ({
          title: "My home",
          headerStyle: { shadowColor: "transparent" },
          headerLeft: () => (
            <HeaderMenuButton
              icon="chevron-small-left"
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const ConsignmentsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Consignments"
        component={Consignments}
        options={({ navigation }) => ({
          headerStyle: { shadowColor: "transparent" },
          title: null,
          headerLeft: () => (
            <HeaderMenuButton
              icon="grid"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerRight: () => <HeaderProfileButton />,
        })}
      />
    </Stack.Navigator>
  );
};

const TemplatesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Templates"
        component={Templates}
        options={({ navigation }) => ({
          headerStyle: { shadowColor: "transparent" },
          title: null,
          headerLeft: () => (
            <HeaderMenuButton
              icon="grid"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerRight: () => <HeaderProfileButton />,
        })}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ConsignmentsStackNavigator, TemplatesStackNavigator };
