import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator } from "./StackNavigator";
import { View } from "react-native";
import Settings from "../screens/Settings";
import { Colors } from "../constants";

import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors.tertiary,
        style: {
          backgroundColor: Colors.primary,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <CustomTabBar
              icon="home"
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={TempScreen}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size, focused }) => (
            <CustomTabBar
              icon="history"
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TempScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <CustomTabBar
              icon="account"
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size, focused }) => (
            <CustomTabBar
              icon="cog"
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const TempScreen = () => <View />;
