import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import ENDPOINTS from "../constant/endpoint";
import { buildEndpointURL } from "../utils/endpoints";

const authreducers = createSlice({
  name: "auth",
  initialState: {
    islogin: false,
    message: null,
    isloading: false,
    iserror: false,
    issucces: false,
  },
  reducers: {
    login: (state, params) => {
      const payload = params.payload;
      state.isloading = true;
      if (payload.status === "success") {
        localStorage.setItem("user", JSON.stringify(payload.data));
        localStorage.setItem("token", JSON.stringify(payload.data));
        state.islogin = true;
        state.isloading = false;
      } else {
        state.isloading = false;
        state.islogin = false;
        state.iserror = true;
        state.message = payload;
      }
    },
    register: (state, params) => {
      const payload = params.payload;
      state.isloading = true;
      if (payload.status === "success") {
        state.issucces = true;
        state.isloading = false;
      } else {
        state.isloading = false;
        state.issucces = false;
        state.iserror = true;
        state.message = payload;
      }
    },
  },
});
export const loginAsync = (data) => async (dispatch) => {
  try {
    console.log(data);

    const response = await axios.post(
      buildEndpointURL(ENDPOINTS.AUTH.LOGIN),
      data
    );
    console.log(response);
    dispatch(login(response.data));
  } catch (error) {
    throw new Error(error);
  }
};

export const regisAsync = (data) => async (dispatch) => {
  try {
    console.log(data);

    const response = await axios.post(
      buildEndpointURL(ENDPOINTS.AUTH.REGISTER),
      data
    );

    console.log(response);
    dispatch(register(response.data));
  } catch (error) {
    throw new Error(error);
  }
};

export const { login, register } = authreducers.actions;
export default authreducers.reducer;
