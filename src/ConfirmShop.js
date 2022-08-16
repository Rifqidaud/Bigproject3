import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faShop } from "@fortawesome/free-solid-svg-icons";
import { getorderAsync, getorderdetailAsync } from "./reducers/orderreducer"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import './style.scss'
import {Link} from "react-router-dom"
function ConfirmShop() {
   
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order);
    useEffect(() => {
        dispatch(getorderAsync());
    }, [dispatch]);
    console.log("data", order)
    const numberWithCommas = (x) => {
        return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    

    return (
        <div>
            {
                order.isloading ? <p>Loading</p> :
                    order.iserror ? <p>Error</p> :
                        <>
                            {/* <div className="row">
                <div className="html-menu">
                    <div className="body-menu"> */}
                            <div className="main-confirmshop">
                                <div className='container-menu'>
                                    <ul>
                                        <li><a href="/home">Home</a></li>
                                        <li><a href="/logout"
                                        >
                                            Logout</a></li>
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
                                        <table class="table table-responsive">
                                            <thead>
                                                <tr>
                                                    <th>Nama </th>
                                                    <th>Alamat</th>
                                                    <th>Cara Pembayaran</th>
                                                    <th> Nama Produk</th>
                                                    <th>Total Pesanan </th>
                                                    <th>Status</th>
                                                    <th>Detail</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    order.message?.data.map(
                                                        (d, index) => {
                                                            console.log(d)
                                                            return (
                                                                <tr>
                                                                    <td>{
                                                                        JSON.parse(d.dataUser).nama
                                                                        }</td>
                                                                    <td>{
                                                                        JSON.parse(d.dataUser).alamat
                                                                        }</td>
                                                                    <td>{
                                                                        JSON.parse(d.dataUser)["Pilih pembayaran"]
                                                                        }</td>
                                                                    <td>{
                                                                        JSON.parse(d.data_product).map(
                                                                            (produk,index) => {
                                                                                return(
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
                                                                    <td>Rp.{numberWithCommas(d.total)}</td>
                                                                    <td>{d.status}</td>
                                                                    <td><a href={`/orderdetail1/${d.id}`}>lihat</a> </td>
                                                                </tr>

                                                            )
                                                        }
                                                    )
                                                }

                                                {/* <tr>
                                                    <td colSpan="2" className="total"> Total biaya</td>

                                                </tr> */}

                                            </tbody>
                                        </table>

                             


                                    </div>
                                    <div className="row">
                                        <div className="col-5 offset ">
                                            <a href="/checkout">
                                                <button type="submit" class="btn btn-primary">listcart</button>
                                            </a>
                                        </div>
                                        <div className="col-5 ">
                                            <a href="/orderdetail1/1">
                                                <button type="submit" class="btn btn-primary">Order</button>
                                            </a>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </>
            }

        </div>


    )
}
export default ConfirmShop;