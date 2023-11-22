import React,{useEffect, useState} from 'react'
import data from './data';
import front from './front_images.jpeg';
import './front.css';
export default function Datas() {
    const [newArray, setNewArray] = useState([
      'https://github.com/Niteshkumar13/museum_api/blob/main/images/42.webp?raw=true',
    ]);
    const handleInputClick = (event) => {
        event.target.select();
        document.execCommand('copy');
      };
      useEffect(() => {
        const generateRandomImage = () => {
          const randomNum = parseInt(Math.random() * 30) + 1;
          return `https://github.com/Niteshkumar13/museum_api/blob/main/images/${randomNum}.jpg?raw=true`;
        };
    
        setNewArray((prevArray) => [...prevArray, generateRandomImage()]);
      }, []);
    
   
  return (
    <div>
{data.map((item, index) => (
    <div className='parent-box-container' style={{flexDirection:index%2==0&&'row-reverse'}}>
     <div className='box-container'>
        <span className='first'>{item.title}</span>
        <span className='first-items'>{item.desc}</span>
        <input type='text' onClick={handleInputClick} value={item.link} className='size'/>
        <span className='first-items'>{item.img_link}</span>
     </div>
     <img src={newArray[index]} className='image'/>
     </div>
        ))}
        <div className='parent-box-container'>
          <div className='box-container'>
        <span className='first'>List Images</span>
        <span className='first-items'>The API will return 53 items by default.
          To request single item, use the /random path.</span>
        </div>
        <code>{JSON.stringify({ "id": 13, "url": "https://github.com/Niteshkumar13/museum_api/blob/main/images/21.jpg?raw=true"})}</code>
        </div>
       
    </div>
  )
}
