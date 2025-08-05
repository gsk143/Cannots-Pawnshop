import LatestScreen from "@/screens/Home/HomeTabs/LatestScreen";
import PopularScreen from "@/screens/Home/HomeTabs/PopularScreen";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addUser } from "@/store/slices/userSlice";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { HomeTabParamList } from "./types";

const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function HomeTabNavigator() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      addUser({
        _id: "12345",
        username: "testuser",
      })
    );
  }, []);
  const { _id, username } = useAppSelector((state) => state.user);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Popular" component={PopularScreen} />
      <Tab.Screen name="Latest" component={LatestScreen} />
    </Tab.Navigator>
  );
}
