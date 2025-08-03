import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({
  id: "cannots-pawnshop-storage",
  encryptionKey: "pawnshop-secret-key",
});
