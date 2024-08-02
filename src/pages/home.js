import React from 'react'
import { HeroSec } from '../component/hero-sec';
import About_img from '../img/about.png';
import Vision from '../img/vision.png';
import Target from '../img/target.png';
import Product1 from '../img/product-1.png';
import Product2 from '../img/product-2.png';
import Product3 from '../img/product-3.png';

import Clients1 from '../img/clients/clients-1.png';
import Clients2 from '../img/clients/clients-2.png';
import Clients3 from '../img/clients/clients-3.png';
import Clients4 from '../img/clients/clients-4.png';
import Clients5 from '../img/clients/clients-5.png';
import headerimg1 from "../img/hero-sec.png";
import Clients6 from '../img/clients/clients-6.png';
import Clients7 from '../img/clients/clients-7.png';
import Clients8 from '../img/clients/clients-8.png';
import Clients9 from '../img/clients/clients-9.png';
import Clients10 from '../img/clients/clients-10.png';
import Clients11 from '../img/clients/clients-11.png';
import Clients12 from '../img/clients/clients-12.png';
import { setSelectedItem } from '../features/ProductSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    id:1,
    image: Product1,
    description: "107 models of induced draft cross flow and induced draft counter flow designs, with a water handling capacity ranging from…"
  },
  {id:2,
    image: Product2,
    description: "With 98 models available in both single cell and multi-cell configurations. These Cooling Towers are primarily supplied in.."
  },
  {
    id:3,
    image: Product2,
    description: "A total of 92 models under single cell configuration. Multi-cell configurations are provided to offer flexibility of operations and…"
  },
]


export const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleProductDetail = (product) => {
    dispatch(setSelectedItem(product));
    navigate(`/productdetail/${product.id}`)
  }

  const handleContactpage=()=>{
    navigate("/contact-us")
  }
  return (
    <div>
      <HeroSec title='Manufacturer and Supplier of ' display={true}  imageSrc={headerimg1}/>
      <section className='about-us-section my-80' imageSrc={headerimg1} >
        <div className='heading'>
          <h2>About Us</h2>
        </div>
        <div className='about-us-inner'>
          <div className='container'>
            <div className='flex'>
              <div className='about-left'>
                <div className='img-box'>
                  <img src={About_img}></img>
                </div>
              </div>
              <div className='about-us-text'>
                <p>Akshar Composite was established in the year of 2018 we are the manufacture of all type of cooling
                  towers, currently we delivers our products in major
                  city of Gujrat & Maharashtra, Punjab, Haryana,
                  Jamshedpur and many more, We believe in quality work with quality service.
                </p>
                <div className='btn-box'>
                  <a href='#' className='btn'>READ MORE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='our-section py-80'>
        <div className='container'>
          <div className='flex'>
            <div className='our-item'>
              <div className='icon-box'>
                <img src={Vision} alt=''></img>
              </div>
              <div className='text-box'>
                <h3>Our Vision</h3>
                <p>Our vision is to provide quality service to our valuable client</p>
              </div>
            </div>
            <div className='our-item'>
              <div className='icon-box'>
                <img src={Target} alt=''></img>
              </div>
              <div className='text-box'>
                <h3>Our Mission</h3>
                <p>Our mission is to provide our
                  product world wide an make a MNC company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='products-section my-80'>
        <div className='heading'>
          <h2>Products</h2>
        </div>
        <div className='about-us-inner py-80'>
          <div className='container'>
            <div className='flex'>


              {
                data.map((item) => {
                  return (
                    <>
                      <div className='product-item' onClick={() => handleProductDetail(item)}>
                        <div className='img-box'>
                          <img src={item.image} alt=''></img>
                        </div>
                        <div className='text-box'>
                          <p>{item.description}</p>
                        </div>
                        <div className='center-btn'> <button onClick={handleContactpage} className='send-in-btn'>SEND INQUIRY</button></div>
                      </div>

                    </>
                  )
                })
              }



            </div>
          </div>
        </div>
      </section>

      <section className='clients-section my-80'>
        <div className='heading'>
          <h2>Our Clients</h2>
        </div>

        <div className='container'>
          <div className='flex'>
            <div className='clients-items'>
              <div className='img-box2'>
                <img src={Clients1} alt=''></img>
              </div>
            </div>

            <div className='clients-items'>
              <div className='img-box2'>
                <img src={Clients2} alt=''></img>
              </div>
            </div>

            <div className='clients-items'>
              <div className='img-box2'>
                <img src={Clients3} alt=''></img>
              </div>
            </div>

            <div className='clients-items'>
              <div className='img-box2'>
                <img src={Clients4} alt=''></img>
              </div>
            </div>

            <div className='clients-items'>
              <div className='img-box2'>
                <img src={Clients5} alt=''></img>
              </div>
            </div>
            <div className='clients-items'>
              <div className='img-box2'>
                <img src={Clients6} alt=''></img>
              </div>
            </div>
            <div className='clients-items'>
              <div className='img-box2'>
                <img src={Clients7} alt=''></img>
              </div>
            </div>
            <div className='clients-items'>
              <div className='img-box2'>
                <img src={Clients8} alt=''></img>
              </div>
            </div>
            <div className='clients-items'>
              <div className='img-box2'>
                <img src={Clients9} alt=''></img>
              </div>
            </div>
            <div className='clients-items'>
              <div className='img-box2'>
                <img src={Clients10} alt=''></img>
              </div>
            </div>
            <div className='clients-items'>
              <div className='img-box2'>
                <img src={Clients11} alt=''></img>
              </div>
            </div>
            <div className='clients-items'>
              <div className='img-box2'>
                <img src={Clients12} alt=''></img>
              </div>
            </div>


          </div>
        </div>

      </section>

    </div>
  )
}
