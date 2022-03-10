import { configureStore } from "@reduxjs/toolkit";
import { activeScreenReducer } from "./reducers/activeScreenReducer";

export const store = configureStore({
    reducer: {
        activeScreenReducer: activeScreenReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
