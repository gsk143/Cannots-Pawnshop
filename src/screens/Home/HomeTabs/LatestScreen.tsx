import { HomeTabScreenProps } from "@/navigation/types";
import React from "react";
import { Text, View } from "react-native";

type Props = HomeTabScreenProps<"Latest">;

export default function LatestScreen({}: Props) {
  return (
    <View>
      <Text>Latest Posts</Text>
    </View>
  );
}
