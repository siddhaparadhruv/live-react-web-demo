
import React, { useState, useEffect, useRef } from 'react';
import { HeroSec } from '../component/hero-sec';
import User from '../img/user.svg';
import Telehone from '../img/telephone.svg';
import Email from '../img/email.svg';
import img1 from '../img/clients/contact-img.jpg';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import headerimg1 from "../img/clients/headerimg6.jpg"

export const ContactUs = () => {
   const [formValues, setFormValues] = useState({
      from_name: '',
      email: '',
      phone: '',
      city: '',
      message: '',
      quantity: '',
      productname: '',
      unit: ''
   });

   const [formErrors, setFormErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);

   const validate = (values) => {
      let errors = {};

      if (!values.from_name) {
         errors.from_name = 'Name is required';
      }

      if (!values.email) {
         errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
         errors.email = 'Email address is invalid';
      }

      if (!values.phone) {
         errors.phone = 'Phone number is required';
      } else if (!/^\d+$/.test(values.phone)) {
         errors.phone = 'Phone number is invalid';
      }

      if (!values.city) {
         errors.city = 'City / Country is required';
      }

      if (!values.message) {
         errors.message = 'Message is required';
      }

      const quantityNumber = parseInt(values.quantity, 10);
      if (!values.quantity) {
         errors.quantity = 'Quantity is required';
      } else if (quantityNumber < 1 || quantityNumber > 10000) {
         errors.quantity = 'Quantity must be between 1 and 10,000';
      }

      if (!values.unit) {
         errors.unit = 'Unit is required';
      }

      if (!values.productname) {
         errors.productname = 'Product name is required';
      }

      return errors;
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
         ...formValues,
         [name]: value
      });

      if (formErrors[name]) {
         setFormErrors({
            ...formErrors,
            [name]: ''
         });
      }
   };

   const form = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validate(formValues);
      setFormErrors(errors);

      if (Object.keys(errors).length === 0) {
         sendEmail();
      } else {
         setIsSubmitting(false);
      }
   };

   const sendEmail = () => {
      emailjs.sendForm('service_fz3h3x2', 'template_zig0mwa', form.current, 'T2sBBTEInkIln1-OM')
         .then(
            () => {
               console.log('SUCCESS!');
               toast.success("Form submitted successfully!");
               setFormValues({
                  from_name: '',
                  email: '',
                  phone: '',
                  city: '',
                  message: '',
                  quantity: '',
                  productname: '',
                  unit: ''
               });
            },
            (error) => {
               console.log('FAILED...', error.text);
               toast.error("Form submission failed!");
            }
         )
         .finally(() => setIsSubmitting(false));
   };

   return (
      <div>
         <HeroSec title='Contact Us'  imageSrc={headerimg1} />
         <section className='contact-us-section my-80'>
            <div className='cus-container'>
               <div className="heading"><h2>Contact Us</h2></div>
               <div className='contact-in'>
                  <div className='flex'>
                     <div className='contact-item user-name'>
                        <div className='img-box'>
                           <img src={User} alt='User'></img>
                        </div>
                        <div className='contact-inner-text'>
                           <p>Mr. Pradip Kathiriya</p>
                        </div>
                     </div>
                     <div className='contact-item phone-contact'>
                        <div className='img-box'>
                           <img src={Telehone} alt='Telephone'></img>
                        </div>
                        <div className='contact-inner-text'>
                           <a href="tel:+91 80458 01415">+91 80458 01415</a>
                        </div>
                     </div>
                     <div className='contact-item'>
                        <div className='img-box'>
                           <img src={Email} alt='Email'></img>
                        </div>
                        <div className='contact-inner-text'>
                           <a href="mailto:akcomposites@gmail.com">akcomposites@gmail.com</a>
                           <a href="mailto:aksharcomp@gmail.com">aksharcomp@gmail.com</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='contact-form my-80'>
            <div className='cus-container'>
               <div className='flex'>
                  <div className='contact-left'>
                     <div className='img-box'>
                        <img src={img1} alt='Contact'></img>
                     </div>
                  </div>
                  <div className='contact-right'>
                     <div className="heading"><h2>SEND US A MESSAGE</h2></div>
                     <form ref={form} onSubmit={handleSubmit}>
                        <div className='input-box'>
                           <input type='text' name="from_name" placeholder='Your Name'
                              value={formValues.from_name}
                              onChange={handleChange}
                           />
                           {formErrors.from_name && <span className='red-text'>{formErrors.from_name}</span>}
                        </div>
                        <div className='input-box'>
                           <input value={formValues.email}
                              onChange={handleChange} type='text' name="email" placeholder='Your Email'
                           />
                           {formErrors.email && <span className='red-text'>{formErrors.email}</span>}
                        </div>
                        <div className='input-box'>
                           <input type='text' name="phone"
                              value={formValues.phone}
                              onChange={handleChange}
                              placeholder='Phone Number'
                           />
                           {formErrors.phone && <span className='red-text'>{formErrors.phone}</span>}
                        </div>
                        <div className='input-box'>
                           <input
                              value={formValues.city}
                              onChange={handleChange}
                              type='text' name="city" placeholder='City / Country'
                           />
                           {formErrors.city && <span className='red-text'>{formErrors.city}</span>}
                        </div>
                        <div className='input-box'>
                           <input type='text' name="quantity" placeholder='Enter Quantity'
                              value={formValues.quantity}
                              onChange={handleChange}
                           />
                           {formErrors.quantity && <span className='red-text'>{formErrors.quantity}</span>}
                        </div>
                        <div className='input-box'>
                           <select className='select' name='productname' value={formValues.productname}
                              onChange={handleChange}>
                              <option value="">Select Product</option>
                              <option value="Industrial FRP Cooling Tower">Industrial FRP Cooling Tower</option>
                              <option value="FRP Cooling Tower">FRP Cooling Tower</option>
                              <option value="PVC Cooling Tower Fill">PVC Cooling Tower Fill</option>
                              <option value="Industrial Cooling Tower">Industrial Cooling Tower</option>
                           </select>
                           {formErrors.productname && <span className='red-text'>{formErrors.productname}</span>}
                        </div>
                        <div className='input-box'>
                           <select className='select' name='unit' value={formValues.unit}
                              onChange={handleChange}>
                              <option value="">Select Unit</option>
                              <option value="kilogram">Kilogram</option>
                              <option value="Tons">Tons</option>
                              <option value="Units">Units</option>
                           </select>
                           {formErrors.unit && <span className='red-text'>{formErrors.unit}</span>}
                        </div>
                        <div className='input-box full-width'>
                           <textarea type='text' name="message" placeholder='Your Messages'
                              value={formValues.message}
                              onChange={handleChange}
                           ></textarea>
                           {formErrors.message && <span className='red-text'>{formErrors.message}</span>}
                        </div>
                        <div className='input-box'>
                           <button className='btn' type='submit'>Submit Now</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>

         <section className='map-section my-80'>
            <div className='cus-container'>
               <div className='img-box'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5470771075943!2d72.97434827503669!3d21.210144080484977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3b9af11521%3A0x717d9fb4269058d8!2sAkshar%20Composites!5e0!3m2!1sen!2sin!4v1721907604994!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
               </div>
            </div>
         </section>
         <ToastContainer />
      </div>
   )
}
