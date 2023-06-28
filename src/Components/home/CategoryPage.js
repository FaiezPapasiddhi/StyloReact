import React, { useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'flowbite/dist/flowbite.css';
import Data from './Data.json';
import Seperator from '../../assets/Images/sperator.png';
import Men from '../../assets/Images/men.png';
import women from '../../assets/Images/women.png';

console.log(Data);


function CategoryPage() {
    return (
        <>


            {/* <!-- Card Start Here --> */}
            <div className="container mx-auto mt-24 mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10">
                    <a href="men.html"> <div className="p-5 mt-10 cursor-pointer"><img src={Men} /></div></a>
                    <a href="women.html"> <div className="p-5 mt-10 cursor-pointer"><img src={women} /></div></a>
                    <div className="lg:mt-48 md:mt-39	 sm:mt-10 text-center">
                        <h1 className=" text-5xl tracking-widest	"> Shop for <br />
                            Men or Women
                        </h1>
                        <button className="main-btn sm:text-center mt-5 bg-black text-white">Shop Now</button>
                    </div>
                </div>
                <div>

    <h1 className="text-center mb-4 text-5xl uppercase"> Deals of the day</h1>
    <img src={Seperator} className="m-auto  pb-20 " />
    <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:py-10 lg:grid-cols-4 gap-4 justify-items-center items-center">

                         
                    
                        {Data.map(item => (
                       

                            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat border-black  border-solid border border-blac p-2" key={item.id}>
                                <p className="absolute right-2 top-2 bg-black -full p-3 cursor-pointer group z-10" >
                                    <span className="uppercase text-white text-sm">Sale</span>
                                </p>
                                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img src={item.image} className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                                        alt="Louvre" />
                                </div>
                                <h3 className="text-xl text-left uppercase font-bold	py-3.5	" >{item.name}</h3>
                                <hr className="w-64 h-px border-1 border-black py-2" />
                                <div className="flex justify-between">
                                    <div className="flex items-center">
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
                                    <div className="justify-end">
                                        <span>${item.price}&nbsp;</span>
                                        <span className="line-through text-gray-400 ">${item.discountprice}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between pt-3.5">
                                    <div>
                                        <div className="flex justify-between ">
                                            <a href="#_"
                                                className="relative px-5 py-3 overflow-hidden font-medium text-white bg-black border-black shadow-inner group">
                                                <span
                                                    className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
                                                <span
                                                    className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
                                                <span
                                                    className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                                                <span
                                                    className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                                                <span
                                                    className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
                                                <span
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </span>
                                            </a>
                                            <a href="#_"
                                                className="ml-1 relative px-5 py-3 overflow-hidden font-medium text-white bg-black border-black shadow-inner group">
                                                <span
                                                    className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
                                                <span
                                                    className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
                                                <span
                                                    className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                                                <span
                                                    className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                                                <span
                                                    className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
                                                <span
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">

                                                    <FontAwesomeIcon icon={faShoppingCart} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="#_"
                                        className="relative px-5 py-3 overflow-hidden font-medium text-white bg-black border-black shadow-inner group">
                                        <span
                                            className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
                                        <span
                                            className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
                                        <span
                                            className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                                        <span
                                            className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                                        <span
                                            className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
                                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">Add to
                                            Cart</span>
                                    </a>
                                </div>
                            </div>
                        ))}



                    </div>
                </div>





            </div>

        </>
    )
}

export default CategoryPage
