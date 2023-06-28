import React from 'react';
import Seperator from '../../assets/Images/sperator.png';
import productOne from '../../assets/Images/best-seller-product/1.small.jpg'
import productTwo from '../../assets/Images/best-seller-product/2.small.jpg'
import productThree from '../../assets/Images/best-seller-product/3.small.jpg' 
import productFour from '../../assets/Images/best-seller-product/4.small.jpg' 
import productFive from '../../assets/Images/best-seller-product/5.small.jpg'  
import productSix from '../../assets/Images/best-seller-product/6.small.jpg'  
import productSeven from '../../assets/Images/best-seller-product/6.small.jpg'  
import productAight from '../../assets/Images/best-seller-product/8.small.jpg'   




   



function Bestseller() {
   return (
      <>
         <div className="container mx-auto">
            <h1 className="text-center mb-4 text-5xl	mt-20"> BESTSELLER</h1>
            <img src={Seperator} className="m-auto pb-10 " />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-10">
               <div className="pt-10 flex justify-between cursor-pointer	">
                  <div className="left-box inline-block	w-[66%] relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                     <img src={productOne}
                        className="max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                  </div>
                  <div className="right-box inline-block	md:w-[58%]  ">
                     <h1 className="text-1xl pb-4 uppercase">Bag's</h1>
                     <hr className="w-[70%]" />
                     <div className="flex items-center py-2">
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>First star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Second star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Third star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Fourth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-400  dark:text-gray-500" fill="currentColor"
                           viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <title>Fifth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                     </div>
                     <div className="justify-end pb-2">
                        <span>$250.00 </span>
                        <span className="line-through text-gray-400 ">$3000.00 </span>
                     </div>
                  </div>
               </div>
               <div className="pt-10 flex justify-between cursor-pointer	">
                  <div className="left-box inline-block	w-[66%]">
                     <img src={productFour}
                        className="max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                  </div>
                  <div className="right-box inline-block 	md:md:w-[58%]  relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                     <h1 className="text-1xl pb-4 uppercase">Bag's</h1>
                     <hr className="w-[70%]" />
                     <div className="flex items-center py-2">
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>First star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Second star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Third star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Fourth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-400  dark:text-gray-500" fill="currentColor"
                           viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <title>Fifth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                     </div>
                     <div className="justify-end pb-4">
                        <span>$250.00 </span>
                        <span className="line-through text-gray-400 ">$3000.00 </span>
                     </div>
                  </div>
               </div>
               <div className="pt-10 flex justify-between cursor-pointer	">
                  <div className="left-box inline-block	w-[35%] relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                     <img src={productTwo}
                        className="max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                  </div>
                  <div className="right-box inline-block	md:w-[58%]  ">
                     <h1 className="text-1xl pb-4 uppercase">bags's</h1>
                     <hr className="w-[70%]" />
                     <div className="flex items-center py-2">
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>First star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Second star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Third star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Fourth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-400  dark:text-gray-500" fill="currentColor"
                           viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <title>Fifth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                     </div>
                     <div className="justify-end pb-4">
                        <span>$250.00 </span>
                        <span className="line-through text-gray-400 ">$3000.00 </span>
                     </div>
                  </div>
               </div>
               <div className="pt-10 flex justify-between cursor-pointer	">
                  <div className="left-box inline-block	w-[35%] relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                     <img src={productThree}
                        className="max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                  </div>
                  <div className="right-box inline-block	md:w-[58%]  ">
                     <h1 className="text-1xl pb-4 uppercase">Shoe's</h1>
                     <hr className="w-[70%]" />
                     <div className="flex items-center py-2">
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>First star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Second star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Third star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Fourth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-400  dark:text-gray-500" fill="currentColor"
                           viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <title>Fifth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                     </div>
                     <div className="justify-end pb-4">
                        <span>$250.00 </span>
                        <span className="line-through text-gray-400 ">$3000.00 </span>
                     </div>
                  </div>
               </div>
               <div className="pt-10 flex justify-between cursor-pointer	">
                  <div className="left-box inline-block	w-[35%] relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                     <img src={productFive}
                        className="max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                  </div>
                  <div className="right-box inline-block	md:w-[58%]  ">
                     <h1 className="text-1xl pb-4 uppercase">Leather bag</h1>
                     <hr className="w-[70%]" />
                     <div className="flex items-center py-2">
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>First star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Second star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Third star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Fourth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-400  dark:text-gray-500" fill="currentColor"
                           viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <title>Fifth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                     </div>
                     <div className="justify-end pb-4">
                        <span>$250.00 </span>
                        <span className="line-through text-gray-400 ">$3000.00 </span>
                     </div>
                  </div>
               </div>
               <div className="pt-10 flex justify-between cursor-pointer	">
                  <div className="left-box inline-block	w-[35%] relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                     <img src={productSix}
                        className="max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                  </div>
                  <div className="right-box inline-block	md:w-[58%]  ">
                     <h1 className="text-1xl pb-4 uppercase">Leather shoes</h1>
                     <hr className="w-[70%]" />
                     <div className="flex items-center py-2">
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>First star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Second star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Third star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Fourth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-400  dark:text-gray-500" fill="currentColor"
                           viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <title>Fifth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                     </div>
                     <div className="justify-end pb-4">
                        <span>$250.00 </span>
                        <span className="line-through text-gray-400 ">$3000.00 </span>
                     </div>
                  </div>
               </div>
               <div className="pt-10 flex justify-between cursor-pointer	">
                  <div className="left-box inline-block	w-[35%] relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                     <img src={productAight}
                        className="max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                  </div>
                  <div className="right-box inline-block	md:w-[58%]  ">
                     <h1 className="text-1xl pb-4 uppercase">Leather shoes</h1>
                     <hr className="w-[70%]" />
                     <div className="flex items-center py-2">
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>First star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Second star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Third star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Fourth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-400  dark:text-gray-500" fill="currentColor"
                           viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <title>Fifth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                     </div>
                     <div className="justify-end pb-4">
                        <span>$250.00 </span>
                        <span className="line-through text-gray-400 ">$3000.00 </span>
                     </div>
                  </div>
               </div>
               <div className="pt-10 flex justify-between cursor-pointer	">
                  <div className="left-box inline-block	w-[35%] relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                     <img src={productSeven}
                        className="max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                  </div>
                  <div className="right-box inline-block	md:w-[58%]  ">
                     <h1 className="text-1xl pb-4 uppercase">Watch for men</h1>
                     <hr className="w-[70%]" />
                     <div className="flex items-center py-2">
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>First star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Second star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Third star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <title>Fourth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-400  dark:text-gray-500" fill="currentColor"
                           viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <title>Fifth star</title>
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                           </path>
                        </svg>
                     </div>
                     <div className="justify-end pb-4">
                        <span>$250.00 </span>
                        <span className="line-through text-gray-400 ">$3000.00 </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Bestseller
