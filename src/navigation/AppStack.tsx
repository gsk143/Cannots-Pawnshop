import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeTabNavigator from "./HomeTabNavigator";
import { AppStackParamList } from "./types";

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTabNavigator} />
    </Stack.Navigator>
  );
}
