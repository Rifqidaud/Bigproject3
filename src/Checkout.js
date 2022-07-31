import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faShop } from "@fortawesome/free-solid-svg-icons";
import './style.scss'
import { Navigate } from "react-router-dom"
import { checkoutAsync } from "./reducers/orderreducer";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import {useState } from "react";
function Checkout () {
  
   const [checkoutData, setCheckoutData] = useState({
    })
    const ischeckout = useSelector((state) => state.order.ischeckout)
    const dispatch = useDispatch()
  
  const onSubmit = async (e) => {
      e.preventDefault()
      dispatch(checkoutAsync(checkoutData))
     
  }
  if(ischeckout===true){
   return<Navigate to='/confirmshop' />
  }
return(
    <div>
        <nav class="navbar navbar-expand-sm bg-dark">
              <ul className="navbar-nav">
                  <li class="nav-item">
                     <a class="nav-link"><FontAwesomeIcon icon={faArrowAltCircleLeft} /></a>
                  </li>
                 <li class="nav-item">
                      <a class="nav-link" href="/listproduct">List Product</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="/detail">Detail</a>
                  </li>
                    <li class="nav-item">
                      <a class="nav-link"> <FontAwesomeIcon icon={faShop}  /> </a>
                  </li>
                </ul>
          
        </nav>
         
          <div className="py-4">
            <div className="container">
                <div className="row">

                  <div className="col-md-7">
                     <div className="card">
                        <div className="card-header">
                           <h4>Basic Information</h4>
                        </div>
                        <div className="card-body">
                           <div className="row">
                              <div className="col-md-8">
                                  <div className="form-group mb-0">
                                    <label> Nama lengkap</label>
                                    <input type="text" name="name"   />
                                  </div>
                              </div>
                              <div className="col-md-8">
                                  <div className="form-group-mb-0">
                                    <label>Nomor Handphone</label>
                                    <input type="text" name="name"   />
                                  </div>
                              </div>
                              <div className="col-md-6">
                              <div className="form-group-mb-3">
                                 <label>Cara pembayaran</label>
                                  <select class="form-select" name="Pilih pembayaran" >
                                       <option>Transfer ATM/Bank</option>
                                       <option>Tokopedia</option>
                                       <option>Shopee</option>
                                       <option>Datang ke toko</option>
                                   </select>
                                 </div>
                               </div>
                               <div className="col-md-6">
                               <div className="form-group-mb-3">
                                   <label>Jenis Paket Pengiriman </label>
                                    <select class="form-select form-select-lg" name="Jenis paket pengiriman" placeholder="Jenis Pengiriman"  id="jenis pengiriman" value="jenis pengiriman" required>
                                      <oprion>J&T</oprion>
                                      <option>Express</option>
                                      <option>Go-Grab</option>
                                      <option>Ambil di Toko</option>
                                    </select>
                                 </div>
                               </div>
                               <div className="col-md-8">
                                  <div className="form">
                                  <label for="comment">Alamat Lengkap:</label>
                                      <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
                                  </div>
                              </div>
                              <div className="col-md-8">
                                 <div className="form-group text-end">
                                    <button type="button" className="btn btn-danger">submit</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div className="card">
                        <div className="card-header">Ringkasan Belanja</div>
                           <div className="table table-bordered">
                               <table className="table">
                                    <tr>
                                       <th> Harga Produk </th>
                                       <th> Jumlah Produk</th>
                                       <th> Total Produk</th>
                                  </tr>
                                   <tbody>
                                       <tr>
                                        <td>Rp.100.000</td>
                                        <td> 3 </td>
                                        <td>Rp. 300.000</td>
                                       </tr>
                                       <tr>
                                          <td colSpan="2"> Grand Total </td>
                                          <td colSpan="2"> Rp.900.000</td>
                                       </tr>
                                  </tbody>
                               </table>
                             </div>
                         </div>
                      </div>
                   </div>
                </div>
          </div>
          <div className="row d flex justify-content-center">
             <div className="col-3">
              < div className="btn btn-dark">
                  Order
              </div>
              </div>
          </div>
   
          
          
          
         
              
                 
        
                  
     </div>
     
)
}
export default Checkout;