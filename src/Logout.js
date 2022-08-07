import './style.scss'
function Logout () {


    return (
        <div>
            <div className="row">
                <div className="html-menu">
                    <div className="body-menu">
                        <div className='container-menu'>
                            <ul>
                                <li><a href="/home">Home</a></li>
                                <li><a href="/login"
                                >
                                    Login</a></li>
                                <li><a href='/listproduct'>ListProduct</a></li>
                                <li><a href='/'>Register</a></li>
                                <li><a href='/logout'>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        <div className='container'>
         <div className='background-logout'>
            <div className='Logout'>
                 <h2>Apakah anda akan Log Out ? </h2>
                </div>
            
             <a href="/login">
                  <button type="submit" class="btn btn-primary">Tidak</button>
              </a>
              <div className='iya'>
                  <a href="/">
                      <button type="submit" class="btn btn-primary">Iya</button>
                   </a>
                </div>
        </div>
        </div>
             

          
      </div>     
        
    )
 }
export default Logout;