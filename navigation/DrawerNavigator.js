import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ConsignmentsStackNavigator, TemplatesStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Consignments" component={ConsignmentsStackNavigator} />
      <Drawer.Screen name="Templates" component={TemplatesStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

