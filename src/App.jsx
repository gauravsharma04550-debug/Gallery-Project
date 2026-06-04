import axios from 'axios'
import { Target } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Cards from './Components/Cards';

const App = () => {
  const[userData, setUserData] = useState([]);

  const[index, setIndex] = useState(1);

  const getData =async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)
    setUserData(response.data)
   
  }

  useEffect(function(){
    getData()
  },[index])

  let printuserData = <h1 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h1>
  if(userData.length > 0) {
    printuserData = userData.map(function(elem, idx){
      return <div key={idx}>
        <Cards elem={elem}/>
      </div>
    })
  }
  

  return (
    
    <div className='bg-black overflow-auto h-screen p-4 text-white flex flex-col items-center'>
      {/*<button
      onClick={getData} 
      className='bg-green-600 active:scale-95 text-white px-10 py-2 rounded'>
      Get Data
      </button>*/}

       

      <div className='flex flex-wrap gap-2 p-2 justify-center'>
        {printuserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-6'>
        <button 
        style={{opacity : index == 1?0.5:1}}
        className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'
        onClick={()=>{
          if(index > 1) {
            setIndex(index-1)
            setUserData([])
          }
          
        }}
        >
        Prev
        </button>
        <h4>Page {index}</h4>
        <button 
        className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'
        onClick={()=>{
            setIndex(index+1)
            setUserData([])
        }}
        >
        Next
        </button>
      </div>
    </div>
  )
}

export default App
