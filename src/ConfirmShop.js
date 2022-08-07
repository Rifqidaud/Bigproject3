import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faShop } from "@fortawesome/free-solid-svg-icons";
function ConfirmShop() {


    return (
        <div>
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
                        <table class="table table-responsive">
                            <thead>
                                <tr>
                                    <th>Nama </th>
                                    <th>Alamat</th>
                                    <th>Cara Pembayaran</th>
                                    <th> Nama Produk</th>
                                    <th>Total Pesanan </th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>dodon</td>
                                    <td></td>
                                    <td>Transfer ATM</td>
                                    <td>Baju Kemeja Kantoran</td>
                                    <td>Rp.300.000</td>
                                    <td>Sudah Bayar</td>
                                </tr>
                                <tr>
                                    <td>dodon</td>
                                    <td></td>
                                    <td></td>
                                    <td>Baju kantor</td>
                                    <td>Rp. 300.000</td>
                                    <td className="button"  >
                                        abd </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Baju Kantor</td>
                                    <td>Rp 150.000</td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td colSpan="2" className="total"> Total biaya</td>

                                </tr>

                            </tbody>
                        </table>

                        <h5> Perikas notifikasi di email</h5> 


                    </div>
                      <div className="row">
                        <div className="col-5 offset ">
                            <a href="/checkout">
                                <button type="submit" class="btn btn-primary">listcart</button>
                            </a>
                        </div>
                        <div className="col-5 ">
                                <a href="/listcart">
                                    <button type="submit" class="btn btn-primary">Konfirmasi pembayaran</button>
                                </a>
                        </div>
                      </div>

                   
                    
                 </div> 
             </div>
        </div>


    )
}
export default ConfirmShop;