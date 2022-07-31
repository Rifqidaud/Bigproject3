import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Home  from './Home';
import  Detail  from './Detail'
import ListProduct  from './ListProduct'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import ConfirmShop from './ConfirmShop'
import Listcart from './Listcart'
import Checkout from './Checkout'
import Status from './Status'
import Detail1 from './Detail1'
import OrderDetail from './OrderDetail'
import CRUDProduct from './CRUDProduct'


import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@fortawesome/free-solid-svg-icons";
// import facebook from "./img.css/5432171Facebook_001.jpg";
function App() {
  return (
    
    <Router>

      <Routes>
          <Route element={<Register/>} path="/" exact />
          <Route element={<Login/>} path="/login" />
          <Route element={<Detail />} path="/detail/:id" />
          <Route element={<Home/>} path="/home" />
          <Route element={<ListProduct/>} path="/listproduct" />
          <Route element={<Logout/>} path="/logout" />
          <Route element={<ConfirmShop/>} path="/confirmshop" />
          <Route element={<Listcart/>} path="/listcart"/>
          <Route element={<Checkout/>} path="/checkout" />
          <Route element={<Status/>} path="/status" />
          <Route element={<Detail1/>} path="/detail1" />
          <Route element={<OrderDetail/>} path="/orderdetail" />
          {/* <Route element={<CRUDProduct/>} path="/crudproduct" /> */}
        
         
      </Routes>
    
      
      {/* <nav class="navbar navbar-expand-sm bg-dark">
              <ul className="navbar-nav">
                <div className="fontcolorcart">
                   
                  <li class="nav-item">
                     <div className='img-round'>
                     </div>
                  </li>
                 <li class="nav-item">
                      <a class="nav-link" href="/listproduct">List Product</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="/detail">Detail</a>
                  </li>
                    <li class="nav-item">
                      {/* <a class="nav-link"> <FontAwesomeIcon icon={faShop}  /> </a> */}
                  {/* </li>
                 </div>
                </ul>
          
        </nav> */} 
     
    </Router>
  );
}

export default App;