import React from 'react'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
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
