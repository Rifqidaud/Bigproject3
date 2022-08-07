
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
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
  if (issucces === true) {
    console.log(issucces)
    return <Navigate to='/login' />
  }
  function handleChangeLogin() {
    return window.location.assign("/login/");
  }
  function handleChangeLogout() {
    return window.location.assign("/logout/");
  }

  return (
    <div>

      <div className='html-login'>
        <div className='body-login'>
          <div className="overlay">
            <div className="login-box">
              <h2>Register</h2>
              <form onSubmit={handlelogin}>
                <div className="user-box">
                  <input type="text" name="username" required onChange={onChangeField} />
                  <label>Username</label>
                </div>
                <div className="user-box">
                  <input type="password" name="password" required onChange={onChangeField} />
                  <label>Password</label>
                </div>
                <div className="user-box">
                  <input type="password" name="confirm password" required onChange={onChangeField} />
                  <label>Konfirmasi password</label>
                </div>
                <div className="user-box">
                  <input type="text" name="email" required onChange={onChangeField} />
                  <label>email</label>
                </div>
                <a href="#">
                <button type="onsubmit" className="button-regis" 
                  >
                    Register</button>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
export default Register;
