import React from 'react'
import logo from './logo.webp';
import front from './front_images.jpeg';
import './front.css';
export default function Front() {
  return (
    <div className='parent-box-container'>
    <div className='box-container'>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'330px'}} >
        <img src={logo} className='w-20 h-20'/>
        <span className="text-4xl font-sans-serif">Patna Mesuam</span>
      </div>
       <span className="text-2xl-center font-sans px-3 ">
      The Patna Measuam for Photos.
    </span>
    </div>
    <img src={front} className= "image header-image"/>
    </div>
  )
}
