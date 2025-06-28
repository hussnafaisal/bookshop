import Navbar from "./Navbar";
import { bookImages } from "../images/bookImages";  
import stand from "../images/images(2).jpg";
import deal from "../images/deal.jpg";
import { FaBook, FaEye, FaFacebookF, FaHeadset, FaHeart, FaHome, FaInstagram, FaLinkedin, FaLock, FaMapMarkedAlt, FaPhoneAlt, FaPlane, FaSearch, FaStar, FaStarHalf, FaTwitter, FaUser, FaYoutube } from "react-icons/fa";
import blog1 from "../images/download (5).jpg";
import blog2 from "../images/download (4).jpg";
import blog3 from "../images/download (3).jpg";
import blog4 from "../images/images (5).jpg";
import blog5 from "../images/images (6).jpg";
import blog6 from "../images/images (4).jpg";
import map from "../images/map.jpg";
import Girl from "../images/download.jpg";
import Girl2 from "../images/images (2).jpg";
import Girl3 from "../images/images (1).jpg";
import man from "../images/images (3).jpg";
import man2 from "../images/download (1).jpg";
import man3 from "../images/face-happy-handsome-hispanic-businessman-smiling_251136-89028.avif";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Autoplay } from "swiper/modules";
import { FaEnvelope, FaHouseMedical } from "react-icons/fa6";

function Home() {

    const swiperOptionsOne = {
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        loop: true,
    };

    const swiperOptionsTwo = {
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3, 
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
        },
    },
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
    };

    const swiperOptionsThree = {
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      450: {
          slidesPerView: 2,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 3, 
          spaceBetween: 10,
      },
      1024: {
          slidesPerView: 3,
      },
  },
  loop: true,
  centeredSlides: true,
  spaceBetween: 10,
  };

    return (
        <div className="home-container">
           <Navbar/>
           <section className="home" id="home">
            <div className="row">
                <div className="content">
                    <h3>Welcome to our store <span>Bookly</span></h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <a href="\#" className="btn">Shop Now</a>
                </div>
                <div className="swiper">
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        autoplay={{ 
        delay: 9500,
        disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="book-list"
        {...swiperOptionsOne}
      >
        {bookImages.slice(0, 11).map((book, idx) => (
          <SwiperSlide key={book.id}>
            <img src={book.svgUrl} alt={book.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <img className="stand"  src={stand}  alt="stand" />

        </div>
            </div>
           </section>

           <section className="icons-container">
            <div className="icons">
                <i><FaPlane/></i>
                <div className="content">
                    <h3>Over Payment</h3>
                    <p>over payment $100</p>
                </div>
            </div>
            <div className="icons">
                <i><FaLock/></i>
                <div className="content">
                    <h3>Over Payment</h3>
                    <p>over payment $100</p>
                </div>
            </div>
            <div className="icons">
                <i><FaHeadset/></i>
                <div className="content">
                    <h3>Over Payment</h3>
                    <p>over payment $100</p>
                </div>
            </div>
            </section>

            <section className="featured" id="featured">
              <div className="heading"><span>Features books</span></div>
              <div className="swiper">
              <Swiper
                watchSlidesProgress={true}
                autoplay={{ 
                delay: 3000,
                disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="featured-slider"
                {...swiperOptionsTwo}

              >  
              <SwiperSlide>
                <div className="box">
                 <div className="icons">
               <a href="\#"><FaSearch/></a>
               <a href="\#"><FaHeart/></a>
               <a href="\#"><FaEye/></a>
               </div>
               <div className="image">
                <img src={bookImages[0].svgUrl} alt="book1" />
               </div>
               <div className="content">
                <h3>featured Book</h3>
                <div className="price">$15.99 <span>$20.99</span></div>
                <a href="\#" className="btn">add to cart</a>
               </div>
               </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                 <div className="icons">
               <a href="\#"><FaSearch/></a>
               <a href="\#"><FaHeart/></a>
               <a href="\#"><FaEye/></a>
               </div>
               <div className="image">
                <img src={bookImages[1].svgUrl} alt="book1" />
               </div>
               <div className="content">
                <h3>featured Book</h3>
                <div className="price">$15.99 <span>$20.99</span></div>
                <a href="\#" className="btn">add to cart</a>
               </div>
               </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                 <div className="icons">
               <a href="\#"><FaSearch/></a>
               <a href="\#"><FaHeart/></a>
               <a href="\#"><FaEye/></a>
               </div>
               <div className="image">
                <img src={bookImages[2].svgUrl} alt="book1" />
               </div>
               <div className="content">
                <h3>featured Book</h3>
                <div className="price">$15.99 <span>$20.99</span></div>
                <a href="\#" className="btn">add to cart</a>
               </div>
               </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                 <div className="icons">
               <a href="\#"><FaSearch/></a>
               <a href="\#"><FaHeart/></a>
               <a href="\#"><FaEye/></a>
               </div>
               <div className="image">
                <img src={bookImages[3].svgUrl} alt="book1" />
               </div>
               <div className="content">
                <h3>featured Book</h3>
                <div className="price">$15.99 <span>$20.99</span></div>
                <a href="\#" className="btn">add to cart</a>
               </div>
               </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                 <div className="icons">
               <a href="\#"><FaSearch/></a>
               <a href="\#"><FaHeart/></a>
               <a href="\#"><FaEye/></a>
               </div>
               <div className="image">
                <img src={bookImages[4].svgUrl} alt="book1" />
               </div>
               <div className="content">
                <h3>featured Book</h3>
                <div className="price">$15.99 <span>$20.99</span></div>
                <a href="\#" className="btn">add to cart</a>
               </div>
               </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                 <div className="icons">
               <a href="\#"><FaSearch/></a>
               <a href="\#"><FaHeart/></a>
               <a href="\#"><FaEye/></a>
               </div>
               <div className="image">
                <img src={bookImages[5].svgUrl} alt="book1" />
               </div>
               <div className="content">
                <h3>featured Book</h3>
                <div className="price">$15.99 <span>$20.99</span></div>
                <a href="\#" className="btn">add to cart</a>
               </div>
               </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                 <div className="icons">
               <a href="\#"><FaSearch/></a>
               <a href="\#"><FaHeart/></a>
               <a href="\#"><FaEye/></a>
               </div>
               <div className="image">
                <img src={bookImages[6].svgUrl} alt="book1" />
               </div>
               <div className="content">
                <h3>featured Book</h3>
                <div className="price">$15.99 <span>$20.99</span></div>
                <a href="\#" className="btn">add to cart</a>
               </div>
               </div>
               </SwiperSlide>
                  <SwiperSlide>
                    <div className="box">
                    <div className="icons">
                  <a href="\#"><FaSearch/></a>
                  <a href="\#"><FaHeart/></a>
                  <a href="\#"><FaEye/></a>
                  </div>
                  <div className="image">
                    <img src={bookImages[7].svgUrl} alt="book1" />
                  </div>
                  <div className="content">
                    <h3>featured Book</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="\#" className="btn">add to cart</a>
                  </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box">
                    <div className="icons">
                  <a href="\#"><FaSearch/></a>
                  <a href="\#"><FaHeart/></a>
                  <a href="\#"><FaEye/></a>
                  </div>
                  <div className="image">
                    <img src={bookImages[8].svgUrl} alt="book1" />
                  </div>
                  <div className="content">
                    <h3>featured Book</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="\#" className="btn">add to cart</a>
                  </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box">
                    <div className="icons">
                  <a href="\#"><FaSearch/></a>
                  <a href="\#"><FaHeart/></a>
                  <a href="\#"><FaEye/></a>
                  </div>
                  <div className="image">
                    <img src={bookImages[9].svgUrl} alt="book1" />
                  </div>
                  <div className="content">
                    <h3>featured Book</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="\#" className="btn">add to cart</a>
                  </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box">
                    <div className="icons">
                  <a href="\#"><FaSearch/></a>
                  <a href="\#"><FaHeart/></a>
                  <a href="\#"><FaEye/></a>
                  </div>
                  <div className="image">
                    <img src={bookImages[10].svgUrl} alt="book1" />
                  </div>
                  <div className="content">
                    <h3>featured Book</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="\#" className="btn">add to cart</a>
                  </div>
                  </div>
                    </SwiperSlide>
                                    
               </Swiper>
              </div>
              </section>

              <section className="newsletter">
              <form action="">
                <h3>Subscribe for latest updates</h3>
                <input type="email" placeholder="enter your email" className="box"/>
                <input type="submit" value="subscribe" className="btn" />
              </form>
              </section>

              <section className="arrivals" id="arrivals">
              <div className="heading"><span>New Arrivals</span></div>
              <div className="swiper">
              <Swiper
                watchSlidesProgress={true}
                autoplay={{ 
                delay: 1200,
                disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="arrivals-slider"
                {...swiperOptionsThree}
              > 
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[0].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>

              </SwiperSlide>
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[1].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>

              </SwiperSlide>
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[2].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>

              </SwiperSlide>
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[3].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>

              </SwiperSlide>
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[4].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>
              </SwiperSlide> <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[5].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>

              </SwiperSlide>
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[6].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>
              </SwiperSlide> <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[3].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>

              </SwiperSlide>
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[4].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>
              </SwiperSlide>
              </Swiper>
              </div>
              <div className="swiper">
              <Swiper
                watchSlidesProgress={true}
                autoplay={{ 
                delay: 900,
                disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="arrivals-slider"
                {...swiperOptionsThree}
              > 
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[0].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>

              </SwiperSlide>
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[1].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>

              </SwiperSlide>
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[2].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>

              </SwiperSlide>
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[3].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>

              </SwiperSlide>
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[4].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>
              </SwiperSlide> <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[5].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>

              </SwiperSlide>
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[6].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>
              </SwiperSlide> <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[3].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>

              </SwiperSlide>
              <SwiperSlide>
                <a href="\#" className="box">
                  <div className="image">
                    <img src={bookImages[4].svgUrl} alt="book1" />
                   </div>
                  <div className="content">
                    <h3>New Arrivals</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <div className="stars">
                      <i><FaStar/></i>
                      <i><FaStar/></i>     
                      <i><FaStar/></i> 
                      <i><FaStar/></i> 
                      <i><FaStarHalf/></i> 
                    </div>
                  </div>
                </a>
              </SwiperSlide>
              </Swiper>
              </div>
              </section>

              <section className="deal">
                <div className="content">
                  <h3>Deal of the Day</h3>
                  <h1>upto 50% offers</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                  <a href="\#" className="btn">shop now</a>
                </div>
                <div className="image">
                  <img src={deal} alt="deal" />
                </div>
              </section>

              <section className="reviews" id="reviews">
                <h1 className="heading"><span>Our Clients Reviews</span></h1>
                    <div className="swiper">
                      <Swiper
                      watchSlidesProgress={true}
                      autoplay={{ 
                      delay: 3500,
                      disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                      className="reviews-slider"
                      {...swiperOptionsThree}
                    >
                      <SwiperSlide>
                      <div className="swiper-slide box">
                      <img src={Girl} alt="book1" />
                       <h3>John Doe</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                       <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStarHalf/></i>
                       </div>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="swiper-slide box">
                      <img src={Girl2} alt="book1" />
                       <h3>John Doe</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                       <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStarHalf/></i>
                       </div>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="swiper-slide box">
                      <img src={Girl3} alt="book1" />
                       <h3>John Doe</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                       <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStarHalf/></i>
                       </div>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="swiper-slide box">
                      <img src={man} alt="book1" />
                       <h3>John Doe</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                       <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStarHalf/></i>
                       </div>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="swiper-slide box">
                      <img src={man2} alt="book1" />
                       <h3>John Doe</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                       <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStarHalf/></i>
                       </div>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="swiper-slide box">
                      <img src={man3} alt="book1" />
                       <h3>John Doe</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                       <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStarHalf/></i>
                       </div>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="swiper-slide box">
                      <img src={Girl3} alt="book1" />
                       <h3>John Doe</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                       <div className="stars">
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStar/></i>
                        <i><FaStarHalf/></i>
                       </div>
                      </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                    </section>

              <section className="blogs" id="blogs">
                <h1 className="heading"><span>Our Blogs</span></h1>
                <div className="swiper">
                <Swiper
                      watchSlidesProgress={true}
                      autoplay={{ 
                      delay: 2500,
                      disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                      className="blogs-slider"
                      {...swiperOptionsThree}
                    >
                        <SwiperSlide> 
                          <div className="swiper-slide box"> 
                            <div className="image">
                             <img src={blog1} alt="blog"/>
                            </div>
                            <div className="content">
                              <h3>blog title goes here</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                              <a href="\#" className="btn">read more</a>
                            </div>
                          </div>
                          </SwiperSlide>
                          <SwiperSlide> 
                        <div className="swiper-slide box"> 
                          <div className="image">
                           <img src={blog2} alt="blog"/>
                          </div>
                          <div className="content">
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            <a href="\#" className="btn">read more</a>
                          </div>
                        </div>
                        </SwiperSlide> 
                        <SwiperSlide> 
                        <div className="swiper-slide box"> 
                          <div className="image">
                           <img src={blog3} alt="blog"/>
                          </div>
                          <div className="content">
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            <a href="\#" className="btn">read more</a>
                          </div>
                        </div>
                        </SwiperSlide> 
                        <SwiperSlide> 
                        <div className="swiper-slide box"> 
                          <div className="image">
                           <img src={blog4} alt="blog"/>
                          </div>
                          <div className="content">
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            <a href="\#" className="btn">read more</a>
                          </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                        <div className="swiper-slide box"> 
                          <div className="image">
                           <img src={blog5} alt="blog"/>
                          </div>
                          <div className="content">
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            <a href="\#" className="btn">read more</a>
                          </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                        <div className="swiper-slide box"> 
                          <div className="image">
                           <img src={blog6} alt="blog"/>
                          </div>
                          <div className="content">
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            <a href="\#" className="btn">read more</a>
                          </div>
                        </div>
                        </SwiperSlide>
                        </Swiper>
                </div>
              </section>


              <section className="footer">
                <div className="box-container">
                  <div className="box">
                   <h3>over location</h3>
                   <a href="\#"><i><FaMapMarkedAlt/></i>India</a>
                   <a href="\#"><i><FaMapMarkedAlt/></i>USA</a>
                   <a href="\#"><i><FaMapMarkedAlt/></i>Russia</a>
                   <a href="\#"><i><FaMapMarkedAlt/></i>France</a>
                   <a href="\#"><i><FaMapMarkedAlt/></i>Japan</a>
                   <a href="\#"><i><FaMapMarkedAlt/></i>Africa</a>
                  </div>
                  <div className="box">
                   <h3>quick links</h3>
                   <a href="\#"><i><FaHome/></i>home</a>
                   <a href="\#"><i><FaBook/></i>featured</a>
                   <a href="\#"><i><FaBook/></i>arrivals</a>
                   <a href="\#"><i><FaStar/></i>reviews</a>
                   <a href="\#"><i><FaBook/></i>blogs</a>
                  </div>
                  <div className="box">
                    <h3>Extra links</h3>
                    <a href="\#"><i><FaUser/></i>Account info</a>
                    <a href="\#"><i><FaBook/></i>Ordered items</a>
                    <a href="\#"><i><FaLock/></i>Privacy policy</a>
                    <a href="\#"><i><FaLock/></i>Payment method</a>
                    <a href="\#"><i><FaHeadset/></i>Our services</a>
                  </div>
                  <div className="box">
                    <h3>Contact info</h3>
                    <a href="\#"><i><FaPhoneAlt/></i>+92 3080228992</a>
                    <a href="\#"><i><FaPhoneAlt/></i>+92 3080228992</a>
                    <a href="\#"><i><FaEnvelope/></i>hussnafaisal234@gmail.com</a>
                  </div>
                </div>
                <div className="map">
                  <img src={map} alt="map" />
                </div>
                
                <div className="share">
                  <a href="\#"><i><FaFacebookF/></i></a>
                  <a href="\#"><i><FaTwitter/></i></a>
                  <a href="\#"><i><FaInstagram/></i></a>
                  <a href="\#"><i><FaLinkedin/></i></a>
                  <a href="\#"><i><FaYoutube/></i></a>
                </div>
                <div className="credit">
                  <p>created by <span>Hussna Faisal</span> | all rights reserved</p>
                </div>

              </section>
        </div>
    )
}

export default Home;