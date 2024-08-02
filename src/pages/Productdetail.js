
import React, { useState, useRef, useEffect } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoTwitter } from 'react-icons/io';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
    const navigate = useNavigate();

    const handleContactPage = () => {
        navigate("/contact-us");
    }

    const selectedProduct = useSelector((state) => state.product.selectedItem);

    const [formValues, setFormValues] = useState({
        from_name: '',
        email: '',
        phone: '',
        city: '',
        message: '',
        quantity: "",
        productname: "",
        unit: "",
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

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
            [name]: value,
        });

        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: ''
            });
        }
    };

    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    const sendEmail = () => {
        emailjs.sendForm('service_fz3h3x2', 'template_zig0mwa', form.current, 'T2sBBTEInkIln1-OM')
            .then(() => {
                console.log('SUCCESS!');
                toast.success("Form submitted successfully!");
            }, (error) => {
                console.log('FAILED...', error.text);
            });
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            sendEmail();
            setIsSubmitting(false);
        }
    }, [formErrors]);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className='productdetail-width'>
            <div className='detail-row'>
                <div className='product-img'>
                    <img className='productimg' src={selectedProduct?.image} alt="Product" />
                </div>
                <div className='product-details'>
                    <h1>Square Cooling Tower</h1>
                    <h3 className='price'><span className='blue-text'>70000 INR</span>/Piece</h3>
                    <button className='getprice-btn' onClick={handleOpen}>Get a Price/Quote</button>
                    <h4 className='productdetail-title'>Product Details:</h4>
                    <div className='description'>
                        <p>{selectedProduct?.details}</p>
                    </div>
                    <hr className='h-line' />
                    <div className='product-icons'>
                        <p>Share your product</p>
                        <FaFacebookF className='facebook-icon' />
                        <IoLogoTwitter className='twitter-icon' />
                        <RiLinkedinFill className='linked-icon' />
                    </div>
                    <button className='send-inquiry-btn' onClick={handleContactPage}>SEND INQUIRY</button>
                </div>
            </div>
            <div className='productdetails'>
                <div className='product-price'>
                    <h3>Square Cooling Tower Trade Information</h3>
                    <hr className='h-line' />
                    <div className='price-detail'>
                        <div><p>Supply Ability</p><br /><p>Sample Policy</p></div>
                        <div><p>1 Piece Per Week</p><br /><p>Contact us for information regarding our sample policy</p></div>
                        <div><p>Delivery Time</p><br /><p>Main Domestic Market</p></div>
                        <div><p>1 Week</p><br /><p> All India</p></div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal" onClick={handleClose}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <button className="close-button" onClick={handleClose}>X</button>
                        </div>
                        <div className="modal-body">
                            <h4 className="modal-title">Get a price quote for Square Cooling Tower</h4>
                            <div className='contact-right modal-form'>
                                <form ref={form} onSubmit={handleSubmit}>
                                    <div className='input-box'>
                                        <input type='text' name="from_name" placeholder='Your Name'
                                            value={formValues.from_name}
                                            onChange={handleChange}
                                        />
                                        {formErrors.from_name && <span className='red-text'>{formErrors.from_name}</span>}
                                    </div>
                                    <div className='input-box'>
                                        <input type='text' name="email" placeholder='Your Email'
                                            value={formValues.email}
                                            onChange={handleChange}
                                        />
                                        {formErrors.email && <span className='red-text'>{formErrors.email}</span>}
                                    </div>
                                    <div className='input-box'>
                                        <input type='text' name="phone" placeholder='Phone Number'
                                            value={formValues.phone}
                                            onChange={handleChange}
                                        />
                                        {formErrors.phone && <span className='red-text'>{formErrors.phone}</span>}
                                    </div>
                                    <div className='input-box'>
                                        <input type='text' name="city" placeholder='City / Country'
                                            value={formValues.city}
                                            onChange={handleChange}
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
                                            <option>Industrial FRP Cooling Tower</option>
                                            <option>FRP Cooling Tower</option>
                                            <option>PVC Cooling Tower Fill</option>
                                            <option>Industrial Cooling Tower</option>
                                            <option>PVC Cooling  Tower Fill</option>
                                            <option>PVC Cooling Tower Fill</option>
                                        </select>
                                        {formErrors.productname && <span className='red-text'>{formErrors.productname}</span>}
                                    </div>
                                    <div className='input-box'>
                                        <select className='select' name='unit' value={formValues.unit}
                                            onChange={handleChange}>
                                            <option>kilogram</option>
                                            <option>Tons</option>
                                            <option>Units</option>
                                            <option>select unit</option>
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
                                    <div className='request-btn-div'>
                                        <button type='submit' className='request-btn'>Request Quote</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
             <ToastContainer />
        </div>
    );
}

export default ProductDetail;
