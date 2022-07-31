
//import 'font-awesome from font-awesome';
import './style.scss';
//import backgroundLogin from './src/img.css/background_Login';
import profile from "./img.css/Profile_avatar.png";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Home() {
    // const text = ["Hello!", "Welcome"];
    // const [index, setIndex] = useState(0);

    // const onNext = () => setIndex(prevIndex => prevIndex + 1)
    // const onPrev = () => setIndex(prevIndex => prevIndex -1)
    return (
        <div>
           <div className='container'>
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
                          
                                 Lorem Ipsum will go here. Lorem<br></br>
                                 Ipsum Will go Here. Lorem Ipsum<br></br>
                                 will go here. Lorem Ipsum will go<br></br>
                                 here<br></br>
                      </p>
                   </div>
                 </div>
                 <div className='row d-flex justify-content-end'>
                     <div className='col-3'>
                          <div className='card'>
                              <div className='card bg-dark text-white'>
                                     <h5 className='card-title'>GALLERY</h5>
                                 <p className='card-text'>
                                     SUBTITLE
                                 </p>
                               </div>
                          </div>
                      </div>
                        <div className='col-3'>
                          <div className='card'>
                              <div className='card bg-dark text-white'>
                                  <h5 className='card-title'>ACTIVITES</h5>
                                 <p className='card-text'>
                                     SUBTITLE
                                 </p>
                              </div>
                          </div>
                       </div>
                       <div className='col-3'>
                          <div className='card-home'>
                            <img src={profile} alt="profile"  className='card__img' />
                              <div className='card__data'>
                                  <h2 className='card__title'>KEYNOTES</h2>
                                  <p className='card__description'>
                                      SUBTITLE
                                    </p>
                                    <a href='#' className='card__btn'>Detail</a>
                              </div>
                          </div>
                       </div>
                    </div>  
                </div>
       </div>         
    );     
}

export default Home;