import { getorderAsync, getorderdetailAsync } from "./reducers/orderreducer"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import './style.scss'
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import ENDPOINTS from "./constant/endpoint";
import Table from "react-bootstrap/Table";

function OrderDetail1() {
    const { id } = useParams()
    const dispatch = useDispatch();
    const orderdetail1 = useSelector((state) => state.order);
    const savepay = async () => {
        try{
            const user = JSON.parse(localStorage.getItem("user"));
            const token = user.access_token;
            const response = await axios.put(`${
                ENDPOINTS.BASE
            }/order/savepay/${id}`,{
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log(response)
        if(
            response.status===200
            
        )   
        {
            setShow(false)
            alert("berhasil dibayar")
            dispatch(getorderdetailAsync(id));
        }      
        }catch(error){
         console.log(error)
        }
    }

    useEffect(() => {
        dispatch(getorderdetailAsync(id));
    }, [dispatch]);
    console.log("data", orderdetail1)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const numberWithCommas = (x) => {
        return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    return (
        <div>
            {
                orderdetail1.isloading || orderdetail1.message === null ? <p>Loading</p> :
                    orderdetail1.iserror ? <p>Error</p> :
                        <>
                            {/* <div className="row">
                <div className="html-menu">
                    <div className="body-menu"> */}
                            <div className="main-confirmshop">
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
                                {/* </div>
                </div>
            </div>  */}
                                {/* <div className="container-fluid"> */}

                                <div className="container">

                                    <div className="row">
                                        <h2>Rincian Belanja</h2>
                                        <br></br>
                                        <Table striped bordered hover variant="dark">
                                            <thead>
                                                <tr>
                                                    <th>Nama </th>
                                                    <th>Alamat</th>
                                                    <th>Cara Pembayaran</th>
                                                    <th> Nama Produk</th>
                                                    <th>Total Pesanan </th>
                                                    <th>Status</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {


                                                    <tr>
                                                        <td>{
                                                            JSON.parse(orderdetail1.message?.data?.dataUser).nama
                                                        }</td>
                                                        <td>{
                                                            JSON.parse(orderdetail1.message?.data?.dataUser).alamat
                                                        }</td>
                                                        <td>{
                                                            JSON.parse(orderdetail1.message?.data?.dataUser)["Pilih pembayaran"]
                                                        }</td>
                                                        <td>{
                                                            JSON.parse(orderdetail1.message?.data?.data_product).map(
                                                                (produk, index) => {

                                                                    return (
                                                                        <ul>
                                                                            <li>
                                                                                {
                                                                                    produk.product.name
                                                                                }
                                                                            </li>
                                                                        </ul>

                                                                    )
                                                                }
                                                            )
                                                        }
                                                        </td>
                                                        <td>Rp.{numberWithCommas(orderdetail1.message?.data?.total)}</td>
                                                        <td>{orderdetail1.message?.data?.status}</td>
                                                    </tr>




                                                }



                                            </tbody>
                                        </Table>

                                        <h5> Periksa notifikasi di email untuk pembayaran lanjut, <br></br>
                                             lihat data ditabel, apabila sudah benar maka klik konfirmasi pembayaran

                                        </h5>


                                    </div>
                                    <div className="row">
                                        <div className="col-5 offset ">
                                            <a href="/checkout">
                                                <button type="submit" class="btn btn-primary">listcart</button>
                                            </a>
                                        </div>
                                        <div className="col-5 ">
                                            {/* <a href="/listcart">
                                                <button type="submit" class="btn btn-primary">Konfirmasi pembayaran</button>

                                            </a> */}
                                            <Button variant="primary" onClick={handleShow}>
                                                Konfirmasi Pembayaran
                                          </Button>

                                            <Modal
                                                show={show}
                                                onHide={handleClose}
                                                backdrop="static"
                                                keyboard={false}
                                                // onClick={handleSubmit}
                                            >
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Transfer Pembayaran</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                     <h4>Nomor transfer:09786</h4>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Batal
                                                    </Button>
                                                    <Button variant="primary" onClick={savepay}>Transfer</Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </>
            }

        </div>


    )
}
export default OrderDetail1