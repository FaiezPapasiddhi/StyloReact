import React,{useState} from 'react';
import { faSearch, faChevronDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Popover, button } from 'flowbite';
import { Link } from 'react-router-dom';
import 'flowbite/dist/flowbite.css';
import 'daisyui/dist/full.css';
import LogoWhite from '../../assets/Images/Stylo-white.png';
import LogoBlack from '../../assets/Images/Stylo-black.png';
import UnitedStar from '../../assets/Images/united-states.png'
import India from '../../assets/Images/india.png'
import kuwait from '../../assets/Images/kuwait.png'
import Login from '../../assets/Images/login.png'
import Register from '../../assets/Images/register.png' 

function TopBar({ backgroundColor }) {
  return (
    <>
               <div style={{ backgroundColor }} >
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-2 sm:grid-cols-2 ">
                  <a href="#" className="py-2 ">
                     <span className=" text-black text-xs">+91 9232434343 <span className="text-black ml-5 "> Free
                        Shipping Above
                        $99</span></span>
                  </a>
                  <div className="xs:text-center  md:text-right flex justify-end	items-center	">
                     <div className=" ">
                        <div className="relative inline-block text-right">



                           <a data-popover-target="popover-default" className="text-black text-sm px-5 py-2.5 text-center ">
                              Currency&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronDown} /></a>
                           <div data-popover id="popover-default" role="tooltip"
                              className="flex  flex-col justify-center items-center absolute z-10 invisible w-36 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200  shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                              <div className="px-3 py-2  border-b border-gray-200  cursor-pointer flex items-center">
                                 <img src={UnitedStar} width="30" height="15" className="mr-2" />
                                 <h3 className="font-semibold text-gray-900 dark:text-black ">USD</h3>
                              </div>


                              <div className="px-3 py-2  border-b border-gray-200  cursor-pointer flex items-center">
                                 <img src={India} width="30" height="15" className="mr-2" />
                                 <h3 className="font-semibold text-gray-900 dark:text-black ">INR</h3>
                              </div>

                              <div className="px-3 py-2  border-b border-gray-200  cursor-pointer flex items-center">
                                 <img src={kuwait} width="30" height="15" className="mr-2" />
                                 <h3 className="font-semibold text-gray-900 dark:text-black ">KWD</h3>
                              </div>
                              <div data-popper-arrow></div>
                           </div>



                           <a data-popover-target="popover-user" className="text-black text-sm px-2 py-2.5 text-center ">
                              Account&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronDown} /></a>
                           <div data-popover id="popover-user" role="tooltip"
                              className="flex  flex-col absolute z-10 invisible w-36 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200  shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">



                              <div className="px-3 py-2  border-b border-gray-200  cursor-pointer flex items-center"
                                 data-modal-target="Loginmodel" data-modal-toggle="Loginmodel">
                                 <img src={Login} width="25" height="25" className="mr-2" />
                                 <h3 className="font-semibold text-gray-900 dark:text-black">Login</h3>
                              </div>


                              <div className="px-3 py-2  border-b border-gray-200  cursor-pointer flex items-center"
                                 data-modal-target="registermodel" data-modal-toggle="registermodel">
                                 <img src={Register} width="25" height="25" className="mr-2" />
                                 <h3 className="font-semibold text-gray-900 dark:text-black">Register</h3>
                              </div>
                              <div data-popper-arrow></div>
                           </div>
                           {/* <!-- Login Model --> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="Loginmodel" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-md max-h-full">

               <div className="relative bg-white loginModel dark:bg-gray-700">
                  {/* <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-black" data-modal-hide="Loginmodel">
                     <svg aria-hidden="true" className="w-5 h-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                     <span className="sr-only">Close modal</span>
                  </button> */}
                  <div className="px-6 py-6 lg:px-8">
                     <h3 className="mb-4 text-xl font-medium text-black">Sign in to our platform</h3>
                     <form className="space-y-6" action="#">
                        <div>
                           <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                           <input type="email" name="email" id="email" className=" border border-gray-300 text-gray-900 text-sm focus:border-white block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-white dark:text-black" placeholder="name@company.com" required />
                        </div>
                        <div>
                           <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Your password</label>
                           <input type="password" name="password" id="password" placeholder="••••••••" className=" border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required />
                        </div>
                        <div className="flex justify-between">
                           <div className="flex items-start">


                           </div>
                           <a href="#" className="text-sm text-black">Lost Password?</a>
                        </div>
                        <button type="submit" className="w-full text-black bg-white border-2 border-white font-medium  text-sm px-5 py-2.5 text-center">Login to your account</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                           Not registered? <a href="#" className="text-black">Create account</a>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <div id="registermodel" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-md max-h-full">

               <div className="relative bg-white registermodel dark:bg-gray-700">
                  {/* <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-black" data-modal-hide="registermodel">
                     <svg aria-hidden="true" className="w-5 h-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                     <span className="sr-only">Close modal</span>
                  </button> */}
                  <div className="px-6 py-6 lg:px-8">
                     <h3 className="mb-4 text-xl font-medium text-black">Sign up to our platform</h3>
                     <form className="space-y-6" action="#">
                        <div>
                           <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">Your Name</label>
                           <input type="name" name="name" id="name" className="bg-transperant border text-gray-900 text-sm block w-full p-2.5 " placeholder="John Doe" required />
                        </div>
                        <div>
                           <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                           <input type="email" name="email" id="email0" className="bg-transperant border text-gray-900 text-sm focus:border-white block w-full p-2.5" placeholder="name@company.com" required />
                        </div>
                        <div>
                           <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Your password</label>
                           <input type="password" name="password" id="password0" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required />
                        </div>
                        <div className="flex justify-between">
                           <div className="flex items-start">


                           </div>
                           <a href="#" className="text-sm text-black">Lost Password?</a>
                        </div>
                        <button type="submit" className="w-full text-black bg-white border-2 border-white font-medium  text-sm px-5 py-2.5 text-center">Login to your account</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                           Not registered? <a href="#" className="text-black">Create account</a>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>

    </>
  )
}

export default TopBar
