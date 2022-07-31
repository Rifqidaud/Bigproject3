import Slider from "./Slider";
import './style-slider.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findByIdAsync } from "./reducers/productreducer";
//import {useState } from "react";
import { addAsync } from "./reducers/cartreducer"
import { useParams, Navigate } from "react-router-dom";
const Detail = () => {

  // const imagedata = [
  //         {
  //             image:
  //               "https://ceklist.id/wp-content/uploads/2022/02/Outfit-Lebaran-Pria-Terbaik.jpg",
  //           },
  //           {
  //             image:
  //               "https://lzd-img-global.slatic.net/g/p/673d9444e034b77cb287610ef5761085.jpg_720x720q80.jpg_.webp",
  //           },
  //            {
  //             image:

  //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//96/MTA-20492348/no_brand_kaos_pria_basic_polos_hitam_kaos_distro_polosan_kaos_polos_hitam_kaos_polos_pria_full02_l9a6b0ot.jpg",
  //           },
  //           {
  //             image:
  //               "https://cf.shopee.co.id/file/0aa987e720491a7d9ba228e88fd7b7ec",
  //           },

  // ]
  // const [AddToCartData, setAddToCartData] = useState({
  //     product_id: '',
  //     quantity: ''
  //   })
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const isadd = useSelector((state) => state.cart.isadd)
  const [detailProduct, setDetailProduct] = useState(null);
  console.log(product)
  const [imagedata, setImagedata] = useState([]);
  const [QuantityData, setquantityData] = useState(1)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    dispatch(findByIdAsync(id));
  }, []);
  useEffect(() => {
    if (product.issucces) {
      setDetailProduct(product?.message?.data);
    }
  }, [product])
  console.log(detailProduct);
  useEffect(() => {
    if (detailProduct && detailProduct?.image) {
      const image = { image: detailProduct?.image };
      setImagedata([image]);
    }
  }, [detailProduct]);
  useEffect(() => {
    console.log("ADA PERUBAHAN");
    console.log(isadd)
  }, [isadd]);


  const onChangeField = (e) => {
    setquantityData(e.target.value)
  }
  const handleDetail = async (e) => {
    e.preventDefault()
    console.log(detailProduct.id)
    console.log(QuantityData)
    setLoading(true);
    dispatch(addAsync({
      product_id: detailProduct.id,
      quantity: QuantityData
    }));
  }
  if (isadd === true) {
    return <Navigate to='/listcart' />
  }
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
        <div className="row">
          <div className="col-6">
          <div className="background-card-img-detail">
              <div className="card-detail">
                <div className="card-img-detail">
                 <img src={detailProduct?.image} className="card-img-detail img" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="textcontent">
              <h3>Color <br></br>
                <b> {detailProduct?.name}</b>
                <br></br>
              </h3>
              <h4><b> {detailProduct?.price}</b>
                <div className="del">
                  <del>$39.99</del>
                </div>
                <br></br>
              </h4>

              <p>
                {detailProduct?.category === "1" ? "Kategori Baju Lebaran" : detailProduct?.category === "2" ? "kategori Kemeja" : detailProduct?.category === "3" ? "Kategori Celana" : "Tidak ada kategori"}{""}<br></br>
                <br></br>
                {detailProduct?.description}
                Baju Lebaran dan Baju kantoran, hot Promo, terbaik dengan kualitas bagus
                dan harga terjangkau, hanya di Cilsy Foundation
                yuk, belanja
                <br></br>
              </p>
           
              <div className="mens">
                Mens <br></br>
                100% Cotton <br></br>
              </div>
              
             
                <form onSubmit={handleDetail}>
                  <label for="uname" class="form-label">Jumlah Baju:{detailProduct?.quantity} </label>
                  <input type="text" class="form-control" name="jumlahbaju" onChange={onChangeField} value="1" required >
                  </input>
                  <button type="submit" class="btn btn-dark"
                  >
                    AddToCart
                  </button>
                </form>
                </div>
              

            
            <div>

            </div>

          </div>




        </div>
      </div>
    </div>
  )
}
export default Detail;