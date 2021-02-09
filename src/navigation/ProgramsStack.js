import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProgramsList } from "../containers/programs";
import { titleHeader } from "../styles";

const Stack = createStackNavigator();

export const ProgramsStack = () => (
  <Stack.Navigator screenOptions={titleHeader}>
    <Stack.Screen name="ProgramsList" component={ProgramsList} options={{ title: "Programas" }} />
  </Stack.Navigator>
);
