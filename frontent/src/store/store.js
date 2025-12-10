import { configureStore } from '@reduxjs/toolkit';
 import Register from "../feature/auth/userSlice"
export const store = configureStore({
  reducer: {
    auth:Register
    },
});
