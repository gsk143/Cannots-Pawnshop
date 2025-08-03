if (__DEV__) {
  require("./ReactotronConfig");
}

import RootNavigation from "@/navigation/RootNavigator";
import { storage } from "@/storage/MMKV";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    storage.set("user.name", "Marc");
    storage.set("user.age", 21);
    storage.set("is-mmkv-fast-asf", true);
  }, []);
  return (
    <NavigationContainer>
      <RootNavigation isLoggedIn={false} />
    </NavigationContainer>
  );
}
