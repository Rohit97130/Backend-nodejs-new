import React, { useEffect } from 'react'
import {getallMovies}  from '../apicalls/movie';
import { useState } from 'react';

function Home() {
 
   const [data, setData] = useState([]); 
 
  const getdata = async()=>{
    
         const response  = await getallMovies();
         setData(response.data);
    
  }

   useEffect(()=>{
       getdata();
   },[]);

  return (
    <div>
       {data && data.map((ele)=>(
          <img src={ele.poster} title={ele.title} alt="" />
       ))}
    </div>
  )
}

export default Home