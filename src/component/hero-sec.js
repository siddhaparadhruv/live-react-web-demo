import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HeroSec = ({title, display = false, spanText, imageSrc}) => {

  return (
    <div>
         <div className='hero-section' style={{ backgroundImage: `url(${imageSrc})` }}>
            <div className="hero-text-box">
                <div className='container'>
                    <div className='text-in-box'>
                        <h1> {title} <span> {spanText} </span></h1>
                        <p> Customized Fiber Glass Reinforce  composite products.</p>
                        {display && <Cus_btn />}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export const Cus_btn = () => { 
    const navigate=useNavigate()
    const handleProducts=()=>{
navigate("/our-products")
    }
    return (
        <div className='btn-box'>
        <a href='#' className='btn' onClick={handleProducts}>OUR PRODUCTS</a>
    </div>
    )
}

