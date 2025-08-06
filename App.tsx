if (__DEV__) {
  require("./ReactotronConfig");
}

import RootNavigation from "@/navigation/RootNavigator";
import StoreProvider from "@/store/StoreProvider";
import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import {
  NavigationContainer,
  NavigationContainerRef,
  useNavigationContainerRef,
} from "@react-navigation/native";
import React from "react";

export default function App() {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(
    navigationRef as React.RefObject<NavigationContainerRef<any>>
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <StoreProvider>
        <RootNavigation isLoggedIn={true} />
      </StoreProvider>
    </NavigationContainer>
  );
}
