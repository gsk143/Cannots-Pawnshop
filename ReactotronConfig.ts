import { storage } from "@/storage/MMKV";
import type { ReactotronReactNative } from "reactotron-react-native";
import Reactotron from "reactotron-react-native";
import mmkvPlugin from "reactotron-react-native-mmkv";
import { reactotronRedux } from "reactotron-redux";

export default Reactotron.configure({}) // controls connection & communication settings
  .use(mmkvPlugin<ReactotronReactNative>({ storage }))
  .useReactNative({
    asyncStorage: false,
    editor: true,
    errors: { veto: (frame) => frame.fileName.indexOf("node_modules") >= 0 }, // ignore errors from node_modules
    overlay: false,
    networking: {
      ignoreUrls: /symbolicate/, // ignore symbolicate requests
      ignoreContentTypes: /^(image\/)/, // ignore image requests
    },
  })
  .use(reactotronRedux())
  .connect();
