import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyUser, faMinus, faPlus, faSearch, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { updateAsync, findAllAsync,destroyAsync} from "./reducers/cartreducer";
import "./style.scss"
import axios from "axios"
import { current } from "@reduxjs/toolkit";
import { checkout } from "./reducers/orderreducer";


const Listcart = () => {
  const { id } = useParams
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const isupdate = useSelector((state) => state.cart.isupdate)
  const isdestroy = useSelector((state) => state.cart.isdestroy)
  const [loading, setLoading] = useState(false);
  const cart = useSelector((state) => state.cart);
  const [carts, setCarts] = useState()
  let [listcart, setlistcart] = useState()
  const [quantityData, setquantityData] = useState(1)

  const [updatecartData, setupdatecartData] = useState()
  const [deleteData, setdeleteData] = useState()
  const [imagedata, setImagedata] = useState([]);
  const [item, setItem] = useState([])

  useEffect(() => {
    dispatch(findAllAsync());
  }, []);

  useEffect(() => {
    if (cart?.issucces) {
      setlistcart(cart?.message?.data);
    }
  }, [cart])

  //  useEffect(() => {
  //   if (listcart && listcart?.image) {
  //   const image = { item: listcart?.image };
  //     setImagedata([image]);
  //    }
  //  }, [listcart]);

  // const deleteCart = async (id)  => {
  //    cart. delete('${id}');
  //   setCarts(
  //     carts.filter((cart) => {
  //       return cart.id !== id;
  //     }
  //     )
  //   )
    
  // }
  function handleChangePageListProduct(){
    return window.location.assign("/listproduct/");
}

  const handleDelete = async (id) =>{
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
  const handleUpdate = async (id) =>  {
    console.log(id)
    setLoading(true);
    setlistcart(current =>
      current.map(obj => {
        if(obj.product.id == id){
          return{...obj,quantity:obj.quantity+1}
        }
        return obj
      }))
    //setlistcart(carts)
    // dispatch(updateAsync({
    //   quantity: quantityData,
    //   id: cart.id
    // }));
  }
  useEffect(() => {
    console.log("ADA PERUBAHAN");
    console.log(isupdate)
  }, [isupdate]);
  const handlesubmitlistCart = async (e) => {
    e.preventDefault()
    setLoading(true);
    setItem(item => item.map( item => 0 ))
  }  
  // const handlecheckbox = async (e) => {
  //   setLoading(true)
  //   setItem(item => item.map(checkbox.id == checklist)
  //   {
  //      return{...checkbox.id}
  //   })

  // }

  
 
  const updatequantity = (id) => (event) => {
    console.log(id)
    console.log(event.target.value)
    var quantity = event.target.value
    if (quantity != "" && quantity > 0) {
      console.log("masuk")
    }


  }
  return (
    <div>
      <div className="row">
        <nav class="navbar navbar-expand-sm bg-dark">
          <div className="col-4">
            <div className="fontcolorcart">
           <a className="nav-link" onClick={() => handleChangePageListProduct(item)}>listproduct</a>
            </div>
          </div>
          <div className="col-2">
          <div className="fontcolorcart">
            <FontAwesomeIcon icon={faHouseChimneyUser} />
            </div>
          </div>
          <div className="col-3">
            <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" name="search"
              style={{ border: "none", borderBottom: "1px solid #E7F0F2" }} FontAwesomeIcon icon={faSearch} />
          </div>
         
        </nav>
      </div>
      <br></br>
      <div className="Border-addtocart">
        {listcart && listcart

          .map((item) => (
            <table class="table table-hover m-50">

              <thead>
                <tr>
                  <td>Validasi produk</td>
                  <th>Gambar Produk</th>
                  <th>Produk</th>
                  <th>Harga produk</th>
                  <th>Jumlah Produk</th>
                  <th>tambah kurang produk</th>
                  <th>Perhitungan produk</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input className={"input-addtocart"} type={"checkbox"} onClick/>
                  </td>

                  <td> <img src={item.product.image} className='img-cart' /></td>
                  <td>{item.product.name}</td>
                  <td>{item.product.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                     type="button" 
                     onClick={() => handleUpdate(item.product.id)}
                     className='btn btn-outline-dark' ms-1><FontAwesomeIcon icon={faPlus} /></button>
                    <button 
                     onClick={() => handleDelete(item.id)}
                    className='btn btn-outline-danger' ms-5><FontAwesomeIcon icon={faTrashCan} /></button>
                  </td>
                  <td>
                    <input type="number" className="form-control-listcart" name="" onChange={updatequantity} defaultValue={item.quantity} required >
                    </input>
                  </td>
                </tr>
              </tbody>
            </table>



          ))}
      </div>



      <br></br>
      <br></br>
      <button class="btn btn-warning" type="button">Checkout</button>



    </div>
  );
}
export default Listcart;