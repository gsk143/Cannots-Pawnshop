import { userSlice } from "@/store/slices/userSlice";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";

const slices = combineSlices(userSlice);

export const store = configureStore({
  reducer: slices,
  enhancers: (getDefaultEnhancers) => {
    if (__DEV__) {
      const reactotron = require("../../ReactotronConfig").default;
      return getDefaultEnhancers()
        .concat(reactotron.createEnhancer())
        .concat(devToolsEnhancer({ realtime: true }));
    }
    return getDefaultEnhancers();
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
