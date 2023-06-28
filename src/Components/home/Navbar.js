import React,{useState} from 'react';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Popover, button } from 'flowbite';
import { Link } from 'react-router-dom';
import 'flowbite/dist/flowbite.css';
import 'daisyui/dist/full.css';
import LogoWhite from '../../assets/Images/Stylo-white.png';
import LogoBlack from '../../assets/Images/Stylo-black.png'; 

function Navbar({ bgColor, textColor, activeTab}){ 



return (
      <>
         <nav style={{ backgroundColor: bgColor, color: textColor}}>
            <div className="container mx-auto md:px-0 pt-3.5">
               <div className="flex justify-between">

              

                  <Link to="/" className="flex items-center py-4 px-2">
                  <img src={activeTab === 'Home' ?  LogoBlack : LogoWhite} width="130" height="130"  alt="Logo" />
                  </Link>
                  <div className="flex space-x-7">
     
                     <div className="hidden md:flex items-center space-x-1 mx-auto tracking-widest	d-navbar">
            
                       <Link to="/Women" className='md:text-base	sm:text-base   py-3 px-1 uppercase tab-link active-tab' >Women</Link>

                        <Link to="/Men" className="md:text-base	sm:text-base  py-3 px-1  uppercase tab-link" >Men</Link>

                        <Link to="/kids" className="md:text-base	sm:text-base  py-3 px-1  uppercase tab-link" >kids</Link>

                        <Link to="/offer" className="md:text-base	sm:text-base    py-3 px-1 uppercase tab-link">offers</Link>
                     </div>
                  </div>

                  <div className="hidden md:flex items-center px-10 ">
                     <FontAwesomeIcon icon={faSearch} className='text-white cursor-pointer pr-6' data-modal-target="searchmodel"
                        data-modal-toggle="searchmodel" aria-disabled="searchmodel" />

                     <div id="searchmodel" tabIndex="-1" aria-hidden="true" aria-disabled="searchmodel"
                        className="ring-black	fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="">

                           <div className="container h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
                              <div className="relative">
                                 <input type="text" className="h-14 w-96 pr-8 pl-5  z-0  focus:ring-black"
                                    placeholder="Search anything..." />

                                 <div className="absolute top-4 right-3">
                                    <FontAwesomeIcon icon={faSearch} className='text-gray-400 z-20 hover:text-gray-500 cursor-pointer' />

                                 </div>

                              </div>
                           </div>
                        </div>
                     </div>


                     <a href="shopping-cart.html">
                        <FontAwesomeIcon icon={faShoppingCart} className='text-white cursor-pointer' /> </a>
                  </div>

                  <div className="md:hidden flex items-center ">
                     <button className="outline-none mobile-menu-button">
                        <svg className=" w-6 h-6 text-white" x-show="!showMenu" fill="none" strokeLinecap="round"
                           strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                           <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                     </button>
                  </div>
               </div>
            </div>

            <div className="hidden mobile-menu bg-white text-black transition-all ease-out duration-500 " id="menus">
               <ul id="ulMenu"
                  className="flex flex-col duration-300 ease-out  mt-5 mx-4 md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
                  <li className="active"><a href="/Women"
                     className="block text-sm px-2 py-3 sm:text-black md:text-white  font-semibold">Women</a>
                  </li>
                  <li><a href="/Men"
                     className="block text-sm px-2 py-3 sm:text-black md:text-white transition duration-300">Men</a></li>
                  <li><a href="/Kids"
                     className="block text-sm px-2 py-3 sm:text-black md:text-white transition duration-300">Kids</a></li>
                  <li><a href="/Offer"
                     className="block text-sm px-2 py-3 sm:text-black md:text-white transition duration-300">Offer</a>
                  </li>
               </ul>
            </div>
         </nav>

      </>
   )
   }

export default Navbar
