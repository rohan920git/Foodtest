import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  const [Foodcat  , setFoodcat] = useState([]);
  const [Fooditem , setFooditem] = useState([]);
  const loaddata = async  ()=>{
  let fetchedData = await fetch("http://localhost:5000/api/foodData",
  {
    method: 'POST', // Using POST request to create a new resource in the database
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', 
  });
  fetchedData = await fetchedData.json();
  console.log(fetchedData[0],fetchedData[1]);
}
useEffect(()=>{
  loaddata()
},[]);
  return (
    <div>
        <div><Navbar></Navbar></div>
        <div className='mt-3'>
          <Carousal></Carousal>
        </div>
        <div className='m-3'>
          <Card/>
          <Card/>
       
          
        </div>
       <div><Footer></Footer></div>
    </div>
  )
}
