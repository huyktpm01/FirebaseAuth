import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../api/AuthContext";
import { HomeScreen } from "../screens";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
