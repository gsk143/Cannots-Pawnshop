import { HomeTabScreenProps } from "@/navigation/types";
import React from "react";
import { Text, View } from "react-native";

type Props = HomeTabScreenProps<"Popular">;

export default function PopularScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Popular Posts</Text>
    </View>
  );
}
