import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
