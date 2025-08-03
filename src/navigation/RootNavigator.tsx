import { SafeAreaProviderCompat } from "@react-navigation/elements";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AppStackNavigator from "./AppStack";
import AuthStackNavigator from "./AuthStack";
import { RootStackParamList } from "./types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

type Props = {
  isLoggedIn: boolean;
};

export default function RootNavigator({ isLoggedIn }: Props) {
  return (
    <SafeAreaProviderCompat
      style={{
        flex: 1,
        paddingTop: 200, // Adjust padding as needed
      }}
    >
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <RootStack.Screen name="App" component={AppStackNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthStackNavigator} />
        )}
      </RootStack.Navigator>
    </SafeAreaProviderCompat>
  );
}
