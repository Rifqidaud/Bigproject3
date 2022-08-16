import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import './style-slider.scss';
import './style.scss';
import axios from 'axios';
//import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {addAsync, findAllAsync} from "./reducers/productreducer";

function ListProduct() {
    const [category, setCategory] = useState(0)
    const [search, setSearch] = useState(null)
    const [item,setItem] = useState([])
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product);
    console.log("LALALA", product)
    const [loading, setloading] = useState(true);
    function onChangeCategory(value) {
        setCategory(value);
    }
    const [listproducts, setListProducts] = useState();
    
    function handleChange(e) {
        setSearch(e.target.value)
        //console.log(search)
    }
    function handleSearch(e) {
        e.preventDefault()
        
        console.log(search)();
        var list_search = listproducts.filter(function (item){
        return item.category === parseInt(search)
        })
        console.log(list_search)
        //setProducts(list_search)
    }
   useEffect(()=> { 
    if (product?.issucces) {
        setListProducts(product?.message?.data)
    }  
     },[product]);
    console.log(listproducts)
    useEffect(() => {
        dispatch(findAllAsync());
    }, []);
    useEffect(() => {
       dispatch(addAsync());
    }, []);
    function handleChangePage(id){
        return window.location.assign("/detail/"+id);
    }
    const numberWithCommas = (x) => {
        return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };

  return (
    
      <div>
           <div className='container'>
               <div className='row pt-3'>
                   <div className='col-7'>
                             <h1>Your Shop Now</h1>
                          </div>
                      <div className="col-3">
                          <div class="input-group mb-3">
                               <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" name="search" onChange={handleChange}
                                  style={{ border: "none", borderBottom: "1px solid #E7F0F2"}} />
                                    {/* <div class="input-group-append">
                                       <span class="input-group-text" id="basic-addon2" onClick={handleSearch}>
                                           <FontAwesomeIcon icon={faSearch} />
                                       </span>
                                 </div> */}
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="stylefashoping">
                                 <div class="input-group-append border:none bg-white">
                                         <span class="input-group-text bg-white border-none" id="basic-addon2">
                                              <a href="/detail">
                                                   <div className="Adetail">
                                                       <FontAwesomeIcon icon={faCartShopping}  />
                                                  </div>
                                               </a>
                                         </span>
                                       
                                   </div>
                          </div>
                       </div>             
              </div>
               <div className="row">
                 <div className="col-2">
                     <div className="margin-featured">
                          FEATURED
                          <br></br>
                          <span
                            style={{ cursor: "pointer"}}
                            onClick={() => onChangeCategory(0)}
                           >
                               ALL CATEGORY
                            </span>
                            <br></br>
                           <span
                             style={{ cursor: "pointer "}}
                             onClick={() => onChangeCategory(1)}
                           >
                              CATEGORY 1
                           </span>
                           <br></br>
                           <span
                            style={{ cursor: "pointer "}}
                            onClick={() => onChangeCategory(2)}
                          >  
                             CATEGORY 2
                             </span>
                          <br></br>
                           <span
                              style={{cursor: "pointer "}}
                              onClick={() => onChangeCategory(3)}
                            >
                          CATEGORY 3
                            </span>
                          <br></br>
                      </div>
                 </div>
                 <div className="col-8">
                     <div className="row">
                          {listproducts && listproducts
                           .filter((item) =>
                              category !==0 
                                ? item.category.toString() === category.toString()
                                  ? item
                                 : null
                                : item
                           )
                           .filter((item) =>
                             search
                              ? item.name.toLowerCase().includes(search.toLowerCase())
                              ? item
                              :null
                              :item
                           )
                           .map((item) => (
                              <div className="col-4">
                                  <div className="product-card">
                                     <div className="badge">Produk Baru</div>
                                          <div className='product-tumb' onClick={() => handleChangePage(item?.id)}>
                                              <img src={item?.image} alt={item?.image} width="200 px" height="200px" className="card__img" />
                                            </div>
                                                  <div className="product-details">       
                                                      <h5 className='card-title-List'>{item?.category} </h5>
                                                        <span className="product-category">
                                                            {item?.name}
                                                        </span>
                                                         <div className="product-bottom-details">
                                                             Rp.{numberWithCommas(item?. price)}
                                                         <div className="del">
                                                           <del> Rp. 390.000 </del>
                                                          </div>
                                                          </div>
                                                            <div className="product-links">
                                                                < a href=""><FontAwesomeIcon icon={faHeart}/></a>
                                                            </div>
                                                   </div>
                                              </div>
                                 </div>
                            ))}
                      </div>
                  </div>
                 
                   
                
                </div>
               
               
            </div>
      </div>
   )
  }



export default ListProduct;