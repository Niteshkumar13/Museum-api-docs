import React,{useState} from 'react'
import data from './data';
import front from './front_images.jpeg';
import './front.css';
export default function Datas() {
    const [data_s,Data_s]= useState("")
    const handleInputClick = (event) => {
        event.target.select();
        document.execCommand('copy');
      };
      async function fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        Data_s(data)
      }
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
     <img src={item.image} className='image'/>
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
