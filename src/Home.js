
//import 'font-awesome from font-awesome';
import './style.scss';
//import backgroundLogin from './src/img.css/background_Login';
import profile from "./img.css/Profile_avatar.png";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react"


function Home() {
    // const text = ["Hello!", "Welcome"];
    // const [index, setIndex] = useState(0);

    // const onNext = () => setIndex(prevIndex => prevIndex + 1)
    // const onPrev = () => setIndex(prevIndex => prevIndex -1)
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div className='container'>
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
                    <div className='row'>
                        <div className='col-8'>
                            <h1 className='fontChoose'>Choose <b>as you want </b> <br></br>
                                pay <b>as you can </b></h1>
                        </div>
                        <div className='col-4'>
                            <ul className='list-group headerHome'>
                                <li className='list-group-item d-flex justify-content-end'>Latest</li>
                                <li className='list-group-item d-flex justify-content-end'>All</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-3'>
                            <a href="/listproduct">
                                <button type="button" class="btn btn-dark">SHOP NOW</button>
                            </a>
                        </div>
                        <div className='col-9'>
                            <h2 className='d-flex justify-content-end'><b>New Concept</b>
                                <br></br>of Online Shopping</h2>
                        </div>
                    </div>
                    {/* <div className='row'>
                       <div className='col-12'>
                        <div className='d-flex justify-content-center'>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src=""
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.tokopedia.net/img/cache/500-square/product-1/2021/1/27/inv/inv_641330e7-56bc-4903-b9ab-56960e58a846_680_680.jpg" 
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel> */}
                    {/* </div>
                    </div>
                    </div> */}
                    {/* <div className='row'>
                    <div className='d-flex justify-content-center'>
                        <div className='slider-home'>
                            <div><img src={onPrev} /></div>
                            <div>{text[index]}</div>
                            <TransitionGroup className="text-container">
                                <CSSTransition
                                  key={index}
                                  timeout={400}
                                  classNames="fade">
                            <div className='Text'><img src={onNext}/></div>
                            </CSSTransition>
                            </TransitionGroup>
                            <div><img src={onNext} /></div>
                        </div>
                    </div>
                </div> */}
                    <div className='row'>
                        <div className='col-4 offset-8 border-top'>
                            <p className='d-flex justify-content-end'>

                               Ayo Belanja di Cilsy, Produk Best Seller, yaitu Baju Kemeja kantoran, Sport dan Lebaran Putih<br></br>
                            </p>
                        </div>
                    </div>

                    <div className='row d-flex justify-content-end'>
                        <div className='col-3'>
                            <div className='card-home'>
                                <img src="https://p-id.ipricegroup.com/1ce60d40a8da67bf6c2c3f8a7d8882da60bb2dbe_0.jpg?position=13" alt="" className='card__img' />
                                <div className='card__data'>
                                    <h2 className='card__title'>Produk Baru</h2>
                                    <p className='card__description'>
                                        Baju Sport
                                    </p>
                                    <a href='/listproduct/' className='card__btn'>Lihat Produk</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='card-home'>
                                <img src="https://images.tokopedia.net/img/cache/500-square/product-1/2021/1/27/inv/inv_641330e7-56bc-4903-b9ab-56960e58a846_680_680.jpg" alt="" className='card__img' />
                                <div className='card__data'>
                                    <h2 className='card__title'>Produk Baru</h2>
                                    <p className='card__description'>
                                        Baju Kemeja Kantoran
                                    </p>
                                    <a href='/listproduct/' className='card__btn'>Lihat Produk</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='card-home'>
                                <img src="https://ceklist.id/wp-content/uploads/2022/02/Outfit-Lebaran-Pria-Terbaik.jpg" alt="" className='card__img' />
                                <div className='card__data'>
                                    <h2 className='card__title'>Produk Baru</h2>
                                    <p className='card__description'>
                                        Baju Lebaran
                                    </p>
                                    <a href='/listproduct/' className='card__btn'>Lihat Produk</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;