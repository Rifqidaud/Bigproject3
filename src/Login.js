
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import { loginAsync } from "./reducers/authreducer"
import profile from "./img.css/Profile_avatar.png";
import React, { useEffect } from "react"
import './style.scss';

const Login = () => {
  const [loading, setLoading] = useState(false);
  console.log("ada")
  const islogin = useSelector((state) => state.auth.islogin)
  console.log("ada1")
  const dispatch = useDispatch()

  const [loginData, setLoginData] = useState({
  })
  const onChangeField = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    console.log("ADA PERUBAHAN");
  }, [islogin]);

  const handlehome = async (e) => {
    e.preventDefault()
    setLoading(true);
    dispatch(loginAsync(loginData));
  }
  function handleChangeLogin() {
    return window.location.assign("/login/");
  }
  function handleChangeLogout() {
    localStorage.clear() 
    return window.location.assign("/logout");
  }
  function handleChangeRegister() {
    return window.location.assign("/");
  }

  if (islogin === true) {
    console.log(islogin)
    console.log("ada2")
    return <Navigate to='/home' />
  }

  return (
    <div>
      
        <div className="main">
          <div className="sub-main">
            <div className="row">
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile" />

                </div>

              </div>

              <div className="row">
                <form onSubmit={handlehome}>
                  <div className="input">

                    <label for="uname" class="form-label">Username:</label>
                    <input type="text" class="form-control" name="username" onChange={onChangeField} required >
                    </input>


                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>

                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="pwd" name="password" placeholder="Enter password" onChange={onChangeField} required></input>

                  </div> 
                  <button 
                      onClick={() => handleChangeRegister}
                      class="button-log"
                    >REGISTER</button>
                   <Link to ="/">
                      Lupa Password ?
                   </Link>
                      
                 
                    <button 
                      onClick={() => handleChangeLogout()}
                      class="button-log"
                    >LOGOUT</button>
                   

                </form>
              </div>
            </div>

          </div>





        </div>
     

    </div>  
      )
}

      export default Login;
