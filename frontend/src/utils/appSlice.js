import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: true,
    videos: [],
    category: "All",
  },
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
    setHomeVideo: (state, action) => {
      state.videos = action.payload;
    },
    setCategory: (state, action) => {
      state.category=action.payload;
    },
  },
});

export const { toggleSidebar,setHomeVideo,setCategory } = appSlice.actions;
export default appSlice.reducer;
