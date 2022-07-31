import axios from 'axios'
import {createSlice} from '@reduxjs/toolkit'
import ENDPOINTS from "../constant/endpoint"
import { buildEndpointURL } from "../utils/endpoints"

const API_URL = ENDPOINTS.BASE;
const cartreducers = createSlice({
    name:'cart',
    initialState:{
        carts:[],
        isfindAll:false,
        isadd:false,
        isupdate:false,
        isdestroy:false,
        message:null,
        isloading:false,
        iserror:false,
        issucces:false

    }, 
    reducers:{
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
                state.isloading = false
                state.isfindAll = false
                state.iserror = true
                state.message = null;
            }
        },
        add:(state,params) => {
            const payload=params.payload
            console.log(payload)
            console.log(payload.status)
            console.log(payload.status == 'success')
            state.isloading=true
            if (payload.status === 'success'){
            console.log(payload.status)
                state.isadd=true
                state.isloading=false
            }else{
                state.isloading=false
                state.isadd=false
                state.iserror=true
                state.message=payload 
            }
        },
        update:(state,params) => {
            const payload=params.payload
            state.isloading=true
            if (payload.status === 'success'){
                // localStorage.setItem("user",JSON.stringify(payload.data))
                // localStorage.setItem("token",JSON.stringify(payload.data))
                state.isupdate=true
                state.isloading=false
            }else{
                state.isloading=false
                state.isupdate=false
                state.iserror=true
                state.message=payload 
            }
        },
        destroy:(state,params) => {
            const payload=params.payload
            state.isloading=true
            if (payload.status == 'success'){
                // localStorage.setItem("user",JSON.stringify(payload.data))
                // localStorage.setItem("token",JSON.stringify(payload.data))
                state.isdestroy=true
                state.isloading=false
            }else{
                state.isloading=false
                state.isdestroy=false
                state.iserror=true
                state.message=payload 
            }
        },
    }


   
})
export const findAllAsync = () => async (dispatch) => {
    try{
        console.log("findAllAsync")
        const user = JSON.parse(localStorage.getItem("user"))
        console.log(user)
        const token =user.access_token
        console.log(token)
        const response = await axios.get(buildEndpointURL(ENDPOINTS.CART.ALL),
        {
            headers :{ Authorization:`Bearer ${token}` } 
        },
        )
        console.log(response)
        dispatch(findAll(response.data))
    }catch(error){
        console.log(error)
        throw new Error(error)
    }
}  
export const addAsync = (data) => async (dispatch) => {
    try{
        console.log(data)
        const user = JSON.parse(localStorage.getItem("user"))
        const token =user.access_token
        console.log(token)
        const response = await axios.post(buildEndpointURL(ENDPOINTS.CART.ADD),
        data,
        {
            headers :{Authorization:`Bearer ${token}`} 
        }
        )
        console.log(response)
        dispatch(add(response.data))
    }catch(error){
        throw new Error(error)
    }
}  
export const updateAsync = () => async (dispatch) => {
    try{
        //console.log()
        const user = JSON.parse(localStorage.getItem("user"))
        const token =user.access_token
        console.log(token)
        const response = await axios.put(buildEndpointURL(ENDPOINTS.CART.UPDATE),
        {
            headers :{ Authorization:`Bearer ${token}` } 
        },
        )
        console.log(response)
        dispatch(findAll(response.data))
    }catch(error){
        throw new Error(error)
    }
}  
export const destroyAsync = (id) => async (dispatch) => {
    try{
        //console.log(data)
        const user = JSON.parse(localStorage.getItem("user"))
        const token =user.access_token
        console.log(token)
        const response = await axios.delete(buildEndpointURL(ENDPOINTS.CART.DELETE)+"/" + id,
        {
            headers :{ Authorization:`Bearer ${token}` } 
        },
        )
        console.log(response)
        await dispatch(destroy(response.data))
    }catch(error){
        throw new Error(error)
    }
} 
 
export const {findAll,add,update,destroy}=cartreducers.actions
export default cartreducers.reducer