import { User } from "@/store/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
  _id: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state._id = action.payload._id;
      state.username = action.payload.username;
    },
    removeUser: (state) => {
      state._id = "";
      state.username = "";
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
