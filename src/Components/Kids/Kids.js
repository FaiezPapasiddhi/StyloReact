import React,{useState} from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer'
import Breadcrumb from  './Breadcrump' 
import FeaturedProduct from './FeaturedProduct';
import BannerCarousel from './BannerCarousel';
import KidsProduct from './KidsProduct';
import TopBar from '../home/TopBar';




function Kids() {

  return (
    <>
    <TopBar backgroundColor="white" TextColor="black"/>
    <Navbar bgColor="Black" textColor="White" />
    <Breadcrumb text="Kids" />
    <FeaturedProduct />
    <BannerCarousel/> 
    <KidsProduct/>
    <Footer/>

      
    </>
  )
}

export default Kids
