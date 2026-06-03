import axios from 'axios'
import { Target } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const App = () => {
  const[userData, setUserData] = useState([]);

  const getData =async()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
    setUserData(response.data)
    console.log(response.data);
    
  }

  useEffect(function(){
    getData()
  },[])

  let printuserData = <h1>No User Available</h1>
  if(userData.length > 0) {
    printuserData = userData.map(function(elem, idx){
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden rounded-2xl bg-white'>
          <img className='h-full w-full object-cover ' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }
  

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      {/*<button
      onClick={getData} 
      className='bg-green-600 active:scale-95 text-white px-10 py-2 rounded'>
      Get Data
      </button>*/}

      <div className='flex flex-wrap gap-2'>
        {printuserData}
      </div>
    </div>
  )
}

export default App
