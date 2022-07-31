import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft,faShop } from "@fortawesome/free-solid-svg-icons";
function ConfirmShop() {
     

    return (
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
                            <a class="nav-link"> <FontAwesomeIcon icon={faShop} /> </a>
                        </li>
                    </ul>
                
            </nav>
            <div class="container mt-3">
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
                        </tr>
                        <tr>
                            <td>dodon</td>
                            <td></td>
                            <td></td>
                            <td>Baju kantor</td>
                            <td>Rp. 300.000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Baju Kantor</td>
                            <td>Rp 150.000</td>
                            
                        </tr>
                        <tr> 
                            <td colSpan="5" className="total"> Total biaya</td>  
                            <div className="total"> 
                            <td colSpan="5"></td>
                            </div>
                        </tr>
                        <div className="total">  
                            </div>
                    </tbody>
                </table>
            </div>
            <h5> Apabila telah selesai belanja maka Klik status</h5>


            <form action="/status">
                <button type="submit" class="btn btn-primary">Status</button>
            </form>
            <form action="/logout">
                <button type="submit" class="btn btn-primary">Log out</button>
            </form>

        </div>
    )
}
export default ConfirmShop;