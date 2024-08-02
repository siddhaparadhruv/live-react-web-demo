import React from 'react'
import { HeroSec } from '../component/hero-sec';
import Pro_Img from '../img/pro-img.png';
import Services_1 from '../img/services-1.png';
import Services_2 from '../img/services-2.png';
import Services_3 from '../img/services-3.png';
import Services_4 from '../img/services-4.png';
import headerimg1 from "../img/clients/headerimg5.jpg"
import Product_Img1 from '../img/product-img-1.png';
import Product_Img2 from '../img/product-img-2.png';
import Product_In_1 from '../img/product-in-1.png';
import Product_Img4 from '../img/product-img-4.png';
import Product_Img5 from '../img/product-img-5.png';



export const AboutUs = (props) => {
  return (
    <div>
    
        <HeroSec title='Profile' imageSrc={headerimg1}/>
        <section className='profile-section my-80'>
          <div className='cus-container'>
            <div class="heading"><h2>Company Profile</h2></div>
            <p>To meet the demands of the market with a range of industrial products, a Surat (Gujarat, India) based firm, Akshar Composites is recently incorporated in the year 2018. Our organization is working as a manufacturer of huge range of products such as 50 TR Water Cooling Tower, Cooling Tower Nozzle, FRP Cooling Tower, Fins, etc. Our primary focus is to ensure client's satisfaction by providing customized solutions to them with our range of products. Besides this, we are gaining huge recognition in the market with the help of our cost effective product range which is high in performance and energy efficient. With the help of our advanced technology, we are keeping ourselves consistent and as much productive as possible in order to acquire a leading position in the industry.
              Key Facts of Akshar Composites:</p>
          </div>
        </section>
        <section className='pro-img'>
          <div className='img-box'>
            <img src={Pro_Img} alt=''></img>
          </div>
        </section>

        <section className='services-section my-80'>
          <div className='cus-container'>
            <div class="heading"><h2>Services</h2></div>

            <div className='services-in-main'>
              <div className='flex'>
                <div className='services-item'>
                  <img src={Services_1} alt=''></img>
                </div>
                <div className='services-text'>
                  <h3>Manufacture</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </div>
              </div>
              <div className='flex'>
                <div className='services-item'>
                  <img src={Services_2} alt=''></img>
                </div>
                <div className='services-text'>
                  <h3>Wholesaler</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </div>
              </div>
            </div>

            <div className='services-in-main'>
              <div className='flex'>
                <div className='services-item'>
                  <img src={Services_3} alt=''></img>
                </div>
                <div className='services-text'>
                  <h3>Supplier</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </div>
              </div>
              <div className='flex'>
                <div className='services-item'>
                  <img src={Services_4} alt=''></img>
                </div>
                <div className='services-text'>
                  <h3>Trader</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </div>
              </div>
            </div>


          </div>
        </section>
        <section className='product-in-section my-80'>
        <div className='product-container'>
          <div className='product-in-item'>
            <div className='img-box'>
              <img src={Product_Img1} alt=''></img>
            </div>
            <div className="product-in-text">
              <h3>Cooling Tower</h3>
              <h4>Price: 140000 INR</h4>
              <p>Cooling tower size 1950   3000 in mm (L*W*H)
                Motor 5 HP 720 RPM</p>
            </div>
          </div>
          <div className='product-in-item'>
            <div className='img-box'>
              <img src={Product_Img2} alt=''></img>
            </div>
            <div className="product-in-text">
              <h3>FRP Cooling Tower</h3>
              <h4>Price: 140000 INR</h4>
              <p>For offering the best Industrial Cooling Tower we have been receiving the best feedback.</p>
            </div>
          </div>
          <div className='product-in-item'>
            <div className='img-box'>
              <img src={Product_In_1} alt=''></img>
            </div>
            <div className="product-in-text">
              <h3>PVC Cooling Tower</h3>
              <h4>Price: 170 INR</h4>
              <p>150*300*600(MM)</p>
            </div>
          </div>
          <div className='product-in-item'>
            <div className='img-box'>
              <img src={Product_Img4} alt=''></img>
            </div>
            <div className="product-in-text">
              <h3>Industrial Cooling Tower</h3>
              <h4>Price: 170 INR</h4>
              <p>150*300*600(MM)</p>
            </div>
          </div>
          <div className='product-in-item'>
            <div className='img-box'>
              <img src={Product_Img5} alt=''></img>
            </div>
            <div className="product-in-text">
              <h3>Cooling Tower Nozzle</h3>
              <h4>Price: 180 INR</h4>
              <p>150*300*600(MM)</p>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
