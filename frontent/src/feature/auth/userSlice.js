import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  userLoading: false,
  userError: false,
  userMessage: "",
  userSuccess: false,
};

// =========================
//  REGISTER USER ASYNC THUNK
// ============================
export const RegisterUser = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5174/api/users/register",
        userData
      );

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data; // ✔️ Correct return data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

// ============================
//  USER SLICE
// ============================
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userReset: (state) => {
      state.userLoading = false;
      state.userSuccess = false;
      state.userMessage = "";
      state.userError = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ----- PENDING -----
      .addCase(RegisterUser.pending, (state) => {
        state.userLoading = true;
        state.userError = false;
        state.userSuccess = false;
        state.userMessage = "";
      })

      // ----- FULFILLED -----
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.userError = false;
        state.user = action.payload; // user saved
        state.userMessage = "User registered successfully!";
      })

      // ----- REJECTED -----
      .addCase(RegisterUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userSuccess = false;
        state.userMessage = action.payload;
      });
  },
});

export const { userReset } = UserSlice.actions;
// export const {userReset} = UserSlice.actions
export default UserSlice.reducer;
