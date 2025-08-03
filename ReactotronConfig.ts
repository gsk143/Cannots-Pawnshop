import { storage } from "@/storage/MMKV";
import type { ReactotronReactNative } from "reactotron-react-native";
import Reactotron from "reactotron-react-native";
import mmkvPlugin from "reactotron-react-native-mmkv";

Reactotron.configure({}) // controls connection & communication settings
  .use(mmkvPlugin<ReactotronReactNative>({ storage }))
  .useReactNative({
    asyncStorage: false, // we don't need AsyncStorage in this app
    editor: true, // we don't need the editor plugin
    errors: { veto: (frame) => frame.fileName.indexOf("node_modules") >= 0 }, // ignore errors from node_modules
    overlay: false, // we don't need the overlay plugin
    networking: {
      ignoreUrls: /symbolicate/, // ignore symbolicate requests
      ignoreContentTypes: /^(image\/)/, // ignore image requests
    },
  }) // add all built-in react native plugins
  .connect(); // let's connect!
