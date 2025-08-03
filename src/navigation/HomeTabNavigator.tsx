import LatestScreen from "@/screens/Home/HomeTabs/LatestScreen";
import PopularScreen from "@/screens/Home/HomeTabs/PopularScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HomeTabParamList } from "./types";

const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Popular" component={PopularScreen} />
      <Tab.Screen name="Latest" component={LatestScreen} />
    </Tab.Navigator>
  );
}
