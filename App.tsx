if (__DEV__) {
  require("./ReactotronConfig");
}

import RootNavigation from "@/navigation/RootNavigator";
import StoreProvider from "@/store/StoreProvider";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <StoreProvider>
        <RootNavigation isLoggedIn={true} />
      </StoreProvider>
    </NavigationContainer>
  );
}
