 {/* /* /* <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" name="search"
style={{ border: "none", borderBottom: "1px solid #E7F0F2" }} FontAwesomeIcon icon={faSearch} />
</div> */ * *}
const datasend = listcart.filter((item) => item.cekBeli === true)
await dispatch(checkoutAsync(datasend));
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
              <button type="onsubmit"
              onClick={() => handleChangeLogout()}
               className="btn-primary-regis">logout</button>
              <button type="onsubmit" 
              onClick={() => handleChangeLogin()}
              className="btn-primary-regis">login</button>
            </div>
          </form>