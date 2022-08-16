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

import OrderDetail1 from './OrderDetail1'



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
          <Route element={<OrderDetail1/>} path="/orderdetail1/:id" />
          
          
        
         
      </Routes>
    
      
    
     
    </Router>
  );
}

export default App;