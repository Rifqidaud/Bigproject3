import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import ENDPOINTS from "../constant/endpoint";
import { buildEndpointURL } from "../utils/endpoints";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {Navigate} from "react-router-dom"

const orderreducers = createSlice({
  name: "order",
  initialState: {
    orders: [],
    message: null,
    isloading: false,
    iserror: false,
    issucces: false,
  },
  reducers: {
    checkout: (state, params) => {
      const payload = params.payload;
      state.isloading = true;
      if (payload.status === "success") {
        // localStorage.setItem("user", JSON.stringify(payload.data));
        // localStorage.setItem("token", JSON.stringify(payload.data));
        state.ischeckout = true;
        state.isloading = false;
      } else {
        state.isloading = false;
        state.ischeckout = false;
        state.iserror = true;
        state.message = payload;
      }
    },
    save: (state, params) => {
      const payload = params.payload;
      state.isloading = true;
      if (payload.status === "success") {
        // localStorage.setItem("user", JSON.stringify(payload.data));
        // localStorage.setItem("token", JSON.stringify(payload.data));
        state.issave = true;
        state.isloading = false;
      } else {
        state.isloading = false;
        state.issave = false;
        state.iserror = true;
        state.message = payload;
      }
    },

    getorder: (state, params) => {
      const payload = params.payload;
      console.log(params, "params");
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
        state.issucces = false;
      }
    },
    getorderdetail: (state, params) => {
      const payload = params.payload;
      state.isloading = true;
      if (payload.code === 200) {
        //localStorage.setItem("user",JSON.stringify(payload.data))
        //localStorage.setItem("token",JSON.stringify(payload.data))
        state.isfindAll = true;
        state.isloading = false;
        state.iserror = false;
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
  },
});

export const checkoutAsync = (data,total) => async (dispatch) => {
  try {
    console.log(data, total,"cek");
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.access_token;
    const newData = {
      cart: JSON.stringify(data),
      total: total,
    };
    const response = await axios.post(
      buildEndpointURL(ENDPOINTS.ORDER.CHECKOUT),
      newData,
      {
        
        headers: {  Authorization: `Bearer ${token}` },
        
      }
    );
    // dispatch()
    if(response.status === 200){
      return window.location.assign("/checkout");
    }
  } catch (error) {
    throw new Error(error);
  }
};
export const saveAsync = (data,total) => async (dispatch) => {
  try {
    console.log(data);
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.access_token;
    const newData = {
      dataUser : JSON.stringify(data),
      total: total,
    };
    console.log("data",data )
    console.log("dataUser");
    const response = await axios.put(
      buildEndpointURL(ENDPOINTS.ORDER.SAVE),
      newData,
      {
        headers: { Authorization: `Bearer ${token}` },
      },data
    );
    console.log(response);
    dispatch(save(response.data));
    if (response.status === 200) {
      return window.location.assign("/confirmshop");
    }
  } catch (error) {
    throw new Error(error);
  }
};
export const updateAsync = (data) => async (dispatch) => {
  try {
    console.log(data);
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.data.access_token;
    console.log(token);
    const response = await axios.put(
      buildEndpointURL(ENDPOINTS.ORDER.UPDATE),
      {
        headers: { Authorization: `Bearer ${token}` },
      },
      data
    );
    console.log(response);
    dispatch(update(response.data));
  } catch (error) {
    throw new Error(error);
  }
};
export const destroyAsync = (data) => async (dispatch) => {
  try {
    console.log(data);
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.data.access_token;
    console.log(token);
    const response = await axios.get(
      buildEndpointURL(ENDPOINTS.PRODUCT.DELETE),
      {
        headers: { Authorization: `Bearer ${token}` },
      },
      data
    );
    console.log(response);
    dispatch(destroy(response.data));
  } catch (error) {
    throw new Error(error);
  }
};
export const getorderAsync = (data) => async (dispatch) => {
  try {
    console.log(data);
    
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.access_token;
    console.log(token);
    const response = await axios.get(
      buildEndpointURL(ENDPOINTS.ORDER.ALL),
      {
        headers: { Authorization: `Bearer ${token}` },
      }, 
      );
    console.log(response);
    dispatch(getorder(response.data));
  } catch (error) {
    throw new Error(error);
  }
};
export const getorderdetailAsync = (id) => async (dispatch) => {
  try {
   
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.access_token;
    console.log(token);
    const response = await axios.get(
      buildEndpointURL(ENDPOINTS.ORDER.DETAIL+"/"+id),
      {
        headers: { Authorization: `Bearer ${token}` },
      });
    console.log("response detail",response)
    dispatch(getorderdetail(response.data));
  } catch (error) {
    throw new Error(error);
  }
};
export const { save, update, destroy, getorderdetail, getorder, checkout } =
  orderreducers.actions;
export default orderreducers.reducer;
