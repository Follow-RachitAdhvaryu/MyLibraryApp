import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Freebooks from '../Components/Freebooks'

function home() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Freebooks></Freebooks>
    
    <Footer></Footer>
   
    </>
  )
}

export default home