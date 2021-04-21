import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./src/navigation/AuthNavigator";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import AppLoading from "./src/screens/auth/AppLoading";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={"AppLoading"} component={AppLoading} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Home" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
