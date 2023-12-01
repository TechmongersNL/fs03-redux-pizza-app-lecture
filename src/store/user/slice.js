import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  id: 42,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // actions
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;