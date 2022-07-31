
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate} from "react-router-dom"
import { regisAsync } from "./reducers/authreducer"
import "./style.scss"
function Register() {
  const [loading, setLoading] = useState(false);
  const issucces = useSelector((state) => state.auth.issucces);
  const dispatch = useDispatch();

  const [registerData, setRegisterData] = useState({
  })

  
  const onChangeField = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }
    useEffect(() => {
      console.log("ADA PERUBAHAN");
    }, [issucces]);
  
  const handlelogin = async (e) => {
    e.preventDefault()
    setLoading(true);
    dispatch(regisAsync(registerData));

  }
  if (issucces == true) {
    console.log(issucces)
    return <Navigate to='/login' />
  }
  return (
    <div>
    <div className="container-fluid">
      <div className="overlay">
           <form onSubmit={handlelogin}
            class="box">
             <div className="header">
               <h4>Register</h4>
             </div>
            <div className="login-area"> 
              <label for="uname" class="form-label">Username:</label>
              <input type="text" class="form-control" name="username" onChange={onChangeField} required >
              </input>
              <label for="uname" class="form-label">Password:</label>
              <input type="password" class="form-control" name="password" onChange={onChangeField} required >
              </input>
              <label for="pwd" class="form-label">Konfirmasi Password:</label>
              <input type="password" class="form-control" name="confirm password" onChange={onChangeField} required >
              </input>
              <label for="uname" class="form-label">Email:</label>
              <input type="text" class="form-control" name="email" onChange={onChangeField} required >
              </input>

              <button type="onsubmit" className="btn-primary-regis">
                Register
              </button>
              <button type="onsubmit" className="btn-primary-regis">logout</button>
            </div>
          </form>
        </div>
      </div>
   </div>
  )
}
export default Register;
