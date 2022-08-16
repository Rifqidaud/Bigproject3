import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faShop } from "@fortawesome/free-solid-svg-icons";
import './style.scss'
import { Navigate } from "react-router-dom"
import { getorderAsync, saveAsync } from "./reducers/orderreducer";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
let total=0
function Checkout() {
   const dispatch = useDispatch();
   const [loading, setLoading] = useState(false)
   const [listOrder, setListOrder] = useState([])
   const [dataUser, setDatauser] = useState([])
   const order = useSelector((state) => state.order);
   const issave = useSelector((state) => state.order.issave)
   
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   useEffect(() => {
      dispatch(getorderAsync());
   }, [dispatch]);
   useEffect(() => {
      if (order.issucces) {
         setListOrder(order.message.data)
      }
   }, [order]);
   const onChangeField = (e) => {
      setDatauser({
         ...dataUser,
         [e.target.name]: e.target.value
      });
   };
   console.log(dataUser)

   const handleSubmit = (e) => {
      e.preventDefault()
      setLoading(true)
      dispatch(saveAsync(dataUser,total));
   }
   useEffect(() => {
      dispatch(getorderAsync());
   }, [issave]);
    
   const numberWithCommas = (x) => {
      return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
   //  const Checkouttotal = async () => {
   //    let total = 0
   //    data_product.map((item) => {
   //       total = parseInt(item.quantity) * parseInt(item.product.price) + parseInt(item.quantity) * parseInt(item.product.price);
   //    });
   //    console.log(total)
   //    await dispatch(checkoutAsync(data_product, total));
   // }
   
  
   return (
      <div>
         <div className="row">
            <div className="html-menu">
               <div className="body-menu">
                  <div className='container-menu'>
                     <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/logout"
                        >
                           Logout</a></li>
                        <li><a href='/listproduct'>ListProduct</a></li>
                        <li><a href='/listcart'>Listcart</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      
         <div className="py-4">
            <div className="container">
               <div className="row">

                  <div className="col-md-6">
                     <div className="card">
                        <div className="card-header">
                           <h4>Basic Information</h4>
                        </div>
                        <div className="card-body">
                           <div className="row">
                              <div className="col-md-8">
                                 <div className="form-group mb-0">
                                    <label> Nama lengkap</label>
                                    <input type="text" name="nama" onChange={onChangeField} />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group-mb-0">
                                    <label>Nomor Handphone</label>
                                    <input type="number" name="nomor" onChange={onChangeField} />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group-mb-3">
                                    <label>Cara pembayaran</label>
                                    <select class="form-select" name="Pilih pembayaran" onChange={onChangeField} >
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
                                    <select class="form-select form-select-lg" name="pengiriman" placeholder="Jenis Pengiriman" id="jenis pengiriman" onChange={onChangeField} required>
                                       <option>J&T</option>
                                       <option>Express</option>
                                       <option>Go-Grab</option>
                                       <option>Ambil di Toko</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="col-md-8">
                                 <div className="form">
                                    <label for="comment">Alamat Lengkap:</label>
                                    <textarea className="form-control" rows="5" id="comment" name="alamat" onChange={onChangeField}></textarea>
                                 </div>
                              </div>
                              <div className="col-md-8">
                                 <div className="form-group text-end">
                                    {/* {/* <button type="button" className="btn btn-danger" onClick={handleSubmit}>submit</button> */}
                                    <Button variant="primary" onClick={handleShow}> 
        Submit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        onClick={handleSubmit}
      >
        <Modal.Header closeButton>
          <Modal.Title>Submit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Apakah Data Sudah benar?<br></br>
         Jika benar silahkan Click tombol Submit
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
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
                                 <th>Nama Produk</th>
                                 <th> Harga Produk </th>
                                 <th> Jumlah Produk</th>
                                 <th> Total Produk</th>
                              </tr>

                              <tbody>
                                 {
                                    listOrder && listOrder.map((item) => item?.data_product &&
                                       JSON.parse(item.data_product).map((item_data) => {
                                         
                                          total=total+(item_data?.quantity * item_data?.product?.price)
                                          return (
                                           
                                             <tr>
                                                <td>{item_data?.product?.name}</td>
                                                <td>Rp.{numberWithCommas(item_data?.product?.price)}</td>
                                                <td>{item_data?.quantity}</td>
                                                <td>Rp.{numberWithCommas(item_data?.quantity * item_data?.product?.price)}</td>

                                             </tr>
                                          )

                                       })
                                    )}
                               <tr>
                                             <td colspan={3}><b>Total Pembayaran  </b></td>
                                             <td>   {total} </td>

                                          </tr>
                                    
                                    



                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        









      </div>

   )
}
export default Checkout;