import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Screens {
  INPUT = 0,
  CALENDAR = 1,
  REPORT = 2,
  OTHER = 3,
}

export interface ActiveScreenState {
  value: Screens;
}

const initialState: ActiveScreenState = {
  value: Screens.INPUT,
};

export const activeScreenSlice = createSlice({
  name: "activeScreen",
  initialState: initialState,
  reducers: {
    changeScreen: (state, action: PayloadAction<Screens>) => {
      state.value = action.payload;
    },
  },
});

export const { changeScreen } = activeScreenSlice.actions;
export const activeScreenReducer = activeScreenSlice.reducer;
