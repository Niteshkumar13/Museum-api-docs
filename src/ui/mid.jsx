import React from 'react'
import './front.css';
export default function Mid() {
    const handleInputClick = (event) => {
        event.target.select();
        document.execCommand('copy');
      };
  return (
    <div className='h-auto  grid place-items-center justify-items-center mt-24'>
       <span className='text-4xl  first' style={{textAlign:'center'}}>Easy to use, stylish placeholders</span>
       <input type='text' onClick={handleInputClick} value={"https://museum-api-mocha.vercel.app/"} className='size'/>
    </div>
  )
}
