import { AuthStackScreenProps } from "@/navigation/types";
import React from "react";
import { Button, Text, View } from "react-native";

type Props = AuthStackScreenProps<"Login">;

export default function LoginScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
}
