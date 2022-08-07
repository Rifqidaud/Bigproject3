import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyUser, faMinus, faPlus, faSearch, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { updateAsync, findAllAsync, destroyAsync } from "./reducers/cartreducer";
import "./style.scss"
import axios from "axios"
import { current } from "@reduxjs/toolkit";
import { checkoutAsync } from "./reducers/orderreducer";


const Listcart = () => {
  const { id } = useParams
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const isupdate = useSelector((state) => state.cart.isupdate)
  const isdestroy = useSelector((state) => state.cart.isdestroy)
  const issucces = useSelector((state) => state.cart.issucces)
  const [loading, setLoading] = useState(false);
  const cart = useSelector((state) => state.cart);
  const [carts, setCarts] = useState()
  let [listcart, setlistcart] = useState()
  const [quantityData, setquantityData] = useState(1)
  const [checklist, setChecklist] = useState([])
  const [updatecartData, setupdatecartData] = useState()
  const [deleteData, setdeleteData] = useState()
  const [imagedata, setImagedata] = useState([]);
  const [item, setItem] = useState([])
  const [dataProduct, setDataProduct] = useState([]);
  console.log("item", item)


  useEffect(() => {
    dispatch(findAllAsync());
  }, []);


  // useEffect(() => {
  //   if (cart?.issucces) {
  //     setlistcart(cart?.message?.data);
  //   }
  // }, [cart])

  useEffect(() => {
    if (cart?.issucces) {
      console.log(cart.message.data)
      setlistcart(
        //  {...cart?.message?.data,cekBeli: !x.cekBeli }
        cart?.message?.data?.map((x) =>
          ({ ...x, cekBeli: false })
        ));
    }
  }, [cart])
  console.log(listcart)


  function handleChangePageListProduct() {
    return window.location.assign("/listproduct/");
  }
  function handleChangePageHome() {
    return window.location.assign("/home/");
  }
  function handleChangePage(id){
    return window.location.assign("/login/");
}


  const handleDelete = async (id) => {
    // var carts = listcart.filter(obj => {
    //   return obj.id !== id
    // })
    // console.log(carts)
    await dispatch(destroyAsync(id))
    console.log(isdestroy)
    // if(isdestroy){
    setlistcart(current =>
      current.filter(obj => {
        return obj.id !== id
      }))
    //}
  }
  // const handleCheckbeli = async (id) => {
  //   setLoading(true)
  //   setlistcart(current =>


  //   )
  // }
  const handleUpdate = async (id) => {
    console.log(id)
    setLoading(true);
    setlistcart(current =>
      current.map(obj => {
        if (obj.product.id == id) {
          return { ...obj, quantity: obj.quantity + 1 }
        }
        return obj
      }))


    //setlistcart(carts)
    // dispatch(updateAsync({
    //   quantity: quantityData,
    //   id: cart.id
    // }));
  }
  const handleMinus = async (id) => {
    setLoading(true)
    setlistcart(current =>
      current.map(obj => {
        if (obj.product.id == id) {
          return { ...obj, quantity: obj.quantity - 1 }
        }
        return obj
      }))
  }
  useEffect(() => {
    console.log("ADA PERUBAHAN");
    console.log(isupdate)
  }, [isupdate]);
  const numberWithCommas = (x) => {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  



  const updatequantity = (id) => (event) => {
    console.log(id)
    console.log(event.target.value)
    var quantity = event.target.value
    if (quantity != "" && quantity > 0) {
      console.log("masuk")

    }
  }
  const handleCheckbeli = (e, item) => {
     if(e.target.checked){
        const products = dataProduct;
        products.push(item);
        setDataProduct(products)
     }else{
      setDataProduct((current) =>
        current.filter((obj) => {
            return obj.id !== item.id;
          })
       )
     }
  }
  console.log(dataProduct)
  // const handleCheckbeli1 = (id) => {
  //   setlistcart(current =>
  //     current.map(obj => {
  //       console.log(obj.product.id === id)
  //       if (obj.product.id === id) {
  //         return { ...obj, cekBeli: !obj.cekBeli }
  //       }
  //       return obj
  //     }))
  // }
  // console.log(listcart)
  const handleCheckout = async () => {
    let total = 0
    dataProduct.map((item) => {
      total = total + parseInt(item.quantity) * parseInt(item.product.price);
    });
    console.log(dataProduct)
    await dispatch(checkoutAsync(dataProduct,total));
    

};
console.log(dataProduct)

   
  return (
    <div>

      <div className="row">
      <div className="html-menu">
          <div className="body-menu">
            <div className='container-menu'>
              <ul>
                <li><a href="/home" >Home</a></li>
                <li><a href="/login"
                >
                Login</a></li>
                <li><a href='/listproduct'>ListProduct</a></li>
                <li><a></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
      <br></br>
      <div className="Border-addtocart">
        <table class="table table-hover m-50">

          <thead>
            <tr>
              <td>Validasi produk</td>
              <th>Gambar Produk</th>
              <th>Produk</th>
              <th>Harga produk</th>
              <th>Jumlah Produk</th>
              <th>tambah kurang produk</th>
              <th>Total Harga</th>
            </tr>
          </thead>
          {listcart && listcart
            .map((item) => (
              console.log(item),
              <tbody>

                <tr>
                  <td><input className={"input-addtocart"}
                    type={"checkbox"}
                    onClick={(e) => handleCheckbeli(e,item)}
                  />
                  </td>

                  <td> <img src={item.product.image} className='img-cart' /></td>
                  <td>{item.product.name}</td>
                  <td>Rp. {numberWithCommas(item.product.price)}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleUpdate(item.product.id)}
                      className='btn btn-outline-dark' ms-1><FontAwesomeIcon icon={faPlus} /></button>
                    <button
                      type="button"
                      onClick={() => handleMinus(item.product.id)}
                      className='btn btn-outline-dark' ms-1><FontAwesomeIcon icon={faMinus} /></button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className='btn btn-outline-danger' ms-5><FontAwesomeIcon icon={faTrashCan} /></button>
                  </td>
                  <td>
                    {parseInt(item.quantity) * parseInt(item.product.price)}

                  </td>
                </tr>
              </tbody>
            ))}
        </table>




      </div>



      <br></br>
      <br></br>
      <button class="btn btn-warning" type="button" onClick={handleCheckout}>
        Checkout</button>
    </div >
  );
}
export default Listcart;