import Slider from "./Slider";
import './style-slider.scss';
import { Navigate } from "react-router-dom"
import { getorderdetailAsync } from "./reducers/orderreducer"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
const OrderDetail = () => {
  //const dispatch = useDispatch()
  //const order = useSelector((state) => state.order);
  //const [detailOrder, setDetailOrder] = useState(null);
  //useEffect(() => {
  //dispatch(findByIdAsync(id));
  //}, []);

  //useEffect(() => {
  //if(order.issucces){
  // setDetailOrder(order?.message?.data);
  //}
  //}, [detailOrder])
  //console.log(detailOrder);
  //function handleOrderDetailToCart(id) {
  // return window.location.assign("/addtocart" + id);
  //}





  //const imagedata1 = [
  //  {
  //     image:
  //       "https://ceklist.id/wp-content/uploads/2022/02/Outfit-Lebaran-Pria-Terbaik.jpg",
  //   },
  //   {
  //     image:
  //       "https://lzd-img-global.slatic.net/g/p/673d9444e034b77cb287610ef5761085.jpg_720x720q80.jpg_.webp",
  //   },
  //   {
  //     image:

  //       "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//96/MTA-20492348/no_brand_kaos_pria_basic_polos_hitam_kaos_distro_polosan_kaos_polos_hitam_kaos_polos_pria_full02_l9a6b0ot.jpg",
  //   },
  //   {
  //     image:
  //       "https://cf.shopee.co.id/file/0aa987e720491a7d9ba228e88fd7b7ec",
  //   },

  // ]
  //}
  //if(isorderdetail==true){
  // return<Navigate to='/checkout' />

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-end Goback">
          <div className="col-2">
            <div className="istyle">
              <a href="addtocart" color="white">
                <i className="bi bi-cart-fill"></i>
              </a>
            </div>
            <br></br>
            <div className="fontGoBack">
              <a href="/">
                <div className="A">
                  <h2>Go Back</h2>
                </div>
              </a>

            </div>
          </div>
        </div>
        <div className="table-table responsive">
            <div className="table">
              
            </div>
        </div>
        <div className='col-3'>
          <a href="/ConfirmShop">
            <button type="button" class="btn btn-dark">ConfirmShop</button>
          </a>
        </div>




      </div>



    </div>

  )
}

export default OrderDetail;