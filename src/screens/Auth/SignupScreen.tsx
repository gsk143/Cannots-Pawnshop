import { AuthStackScreenProps } from "@/navigation/types";
import React from "react";
import { Button, Text, View } from "react-native";

type Props = AuthStackScreenProps<"Signup">;

export default function SignupScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Signup Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}
