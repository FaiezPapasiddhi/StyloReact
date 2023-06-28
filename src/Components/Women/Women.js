import React, {useState} from 'react';
import Navbar from '../home/Navbar';
import Breadcrumb from  '../Kids/Breadcrump' 
import Footer from '../home/Footer'
import TopBar from '../home/TopBar';
import LogoBlack from '../../assets/Images/Stylo-black.png'; 


function Women() {
 



  return (
    <>
    <TopBar/>
    <Navbar bgColor="Black" textColor="White" />

    <Breadcrumb text="Women" />

    <Footer/>

      
    </>
  )
}

export default Women
