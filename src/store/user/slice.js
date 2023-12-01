import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Tessa",
  id: 42,
  favorites: [67283, 357311],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const idToAdd = action.payload;
      // if the id is already in the list, we need to remove it
      if (state.favorites.includes(idToAdd)) {
        state.favorites = state.favorites.filter(id => id !== idToAdd)
      // if the id is not already in the list, we need to add it
      } else {
        state.favorites = [...state.favorites, idToAdd]
      }
    }
  },
});

export const {toggleFavorites} = userSlice.actions;

export default userSlice.reducer;