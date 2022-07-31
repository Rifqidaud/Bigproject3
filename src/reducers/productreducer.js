import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import ENDPOINTS from "../constant/endpoint";
import { buildEndpointURL } from "../utils/endpoints";

const productreducers = createSlice({
  name: "product",
  initialState: {
    products: [],
    message: null,
    isloading: false,
    iserror: false,
    issucces: false,
  },
  reducers: {
    findAll: (state, params) => {
      const payload = params.payload;
      console.log(params);
      state.isloading = true;
      if (payload.code === 200) {
        state.isfindAll = true;
        state.isloading = false;
        state.iserror = false;
        state.issucces = true;
        state.message = payload;
      } else {
        state.isloading = false;
        state.isfindAll = false;
        state.iserror = true;
        state.message = null;
      }
    },
    findById: (state, params) => {
      const payload = params.payload;
      state.isloading = true;
      if (payload.code === 200) {
        //localStorage.setItem("user",JSON.stringify(payload.data))
        //localStorage.setItem("token",JSON.stringify(payload.data))
        state.isfindAll = true;
        state.isloading = false;
        state.iserror = true;
        state.issucces = true;
        state.message = payload;
      } else {
        state.isloading = false;
        state.isfindById = false;
        state.iserror = true;
        state.issucces = false;
        state.message = null;
      }
    },
    add: (state, params) => {
      const payload = params.payload;
      state.isloading = true;
      if (payload.status === "success") {
        localStorage.setItem("user", JSON.stringify(payload.data));
        localStorage.setItem("token", JSON.stringify(payload.data));
        state.isadd = true;
        state.isloading = false;
      } else {
        state.isloading = false;
        state.isadd = false;
        state.iserror = true;
        state.message = payload;
      }
    },
    update: (state, params) => {
      const payload = params.payload;
      state.isloading = true;
      if (payload.status === "success") {
        localStorage.setItem("user", JSON.stringify(payload.data));
        localStorage.setItem("token", JSON.stringify(payload.data));
        state.isupdate = true;
        state.isloading = false;
      } else {
        state.isloading = false;
        state.isupdate = false;
        state.iserror = true;
        state.message = payload;
      }
    },
    destroy: (state, params) => {
      const payload = params.payload;
      state.isloading = true;
      if (payload.status === "success") {
        state.isdestroy = true;
        state.isloading = false;
      } else {
        state.isloading = false;
        state.isdestroy = false;
        state.iserror = true;
        state.message = payload;
      }
    },
  },
});

export const findAllAsync = () => async (dispatch) => {
  try {
    //console.log(data)
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.access_token;
    console.log(buildEndpointURL(ENDPOINTS.PRODUCT.ALL));
    const response = await axios.get(buildEndpointURL(ENDPOINTS.PRODUCT.ALL), {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    dispatch(findAll(response.data));
  } catch (error) {
    throw new Error(error);
  }
};
export const findByIdAsync = (id) => async (dispatch) => {
  try {
    console.log(id);
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.data?.access_token;
    console.log(token);
    const response = await axios.get(
      buildEndpointURL(ENDPOINTS.PRODUCT.DETAIL + id),
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response);
    dispatch(findById(response.data));
  } catch (error) {
    throw new Error(error);
  }
};
export const addAsync = () => async (dispatch) => {
  try {
    //console.log(data)
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.access_token;
    console.log(token);
    const response = await axios.post(buildEndpointURL(ENDPOINTS.PRODUCT.ADD), {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    dispatch(add(response.data));
  } catch (error) {
    throw new Error(error);
  }
};
export const updateAsync = () => async (dispatch) => {
  try {
    //console.log(data)
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.access_token;
    console.log(token);
    const response = await axios.put(
      buildEndpointURL(ENDPOINTS.PRODUCT.UPDATE),
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response);
    dispatch(update(response.data));
  } catch (error) {
    throw new Error(error);
  }
};
export const destroyAsync = () => async (dispatch) => {
  try {
    //console.log(data)
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.access_token;
    console.log(token);
    const response = await axios.delete(
      buildEndpointURL(ENDPOINTS.PRODUCT.DELETE),
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response);
    dispatch(destroy(response.data));
  } catch (error) {
    throw new Error(error);
  }
};

export const { findAll, findById, add, update, destroy } =
  productreducers.actions;
export default productreducers.reducer;
