import React from 'react'

function FeaturedProduct() {
    return (
        <>
            <div className="container mx-auto mt-24 mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:py-10 lg:grid-cols-4 gap-4 ">
                    {/* <!-- <Accordian Side Bar> --> */}

                    <div className="sticky max-w-xs overflow-hidden col-span-1 md:col-span-1 w-full">
                        <div className="p-5">
                            <h1 className="text-2xl uppercase">Shop by</h1>
                        </div>
                        <hr />


                        <div className="p-5">
                            <div id="accordion-flush" data-accordion="collapse"
                                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                data-inactive-classes="text-gray-500 dark:text-gray-400">
                                <h2 id="accordion-flush-heading-1">
                                    <button type="button" className="flex items-center justify-between w-full py-5"
                                        data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                                        aria-controls="accordion-flush-body-1">
                                        <span className="uppercase text-sm">Category</span>
                                        <img src="./assets/Images/Accordian.png" width="25" height="25" />
                                    </button>
                                </h2>
                                <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                                    <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 p-4">
                                        <li className="flex items-center cursor-pointer pb-3">
                                            <div className="flex items-center">
                                                <input id="checked-checkbox" type="checkbox" value=""
                                                    className="w-4 h-4 text-black bg-gray-100 border-black  focus:ring-black dark:focus:black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                                                <label htmlFor="checked-checkbox"
                                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">T-shirt (3)</label>
                                            </div>
                                        </li>
                                        <li className="flex items-center cursor-pointer pb-3">
                                            <input id="checked-checkbox" type="checkbox" value=""
                                                className="w-4 h-4 text-black-600 bg-gray-100 border-black black focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="checked-checkbox"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sweater(10)</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer pb-3">
                                            <input id="checked-checkbox" type="checkbox" value=""
                                                className="w-4 h-4 text-black-600 bg-gray-100 border-black black focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                                            <label htmlFor="checked-checkbox"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Shirt (2)</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer pb-3">
                                            <input id="checked-checkbox" type="checkbox" value=""
                                                className="w-4 h-4 text-black-600 bg-gray-100 border-black black focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                                            <label htmlFor="checked-checkbox"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jeans (6)</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer pb-3">
                                            <input id="checked-checkbox" type="checkbox" value=""
                                                className="w-4 h-4 text-black-600 bg-gray-100 border-black black focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                                            <label htmlFor="checked-checkbox"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hawaiian shirt</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer pb-3">
                                            <input id="checked-checkbox" type="checkbox" value=""
                                                className="w-4 h-4 text-black-600 bg-gray-100 border-black black focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                                            <label htmlFor="checked-checkbox"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sleeveless shirt</label>
                                        </li>
                                    </ul>
                                </div>
                                <h2 id="accordion-flush-heading-2">
                                    <button type="button" className="flex items-center justify-between w-full py-5 "
                                        data-accordion-target="#accordion-flush-body-2" aria-expanded="false"
                                        aria-controls="accordion-flush-body-2">
                                        <span className="uppercase text-sm">Our Brand</span>
                                        <img src="./assets/Images/Accordian.png" width="25" height="25" />
                                    </button>
                                </h2>
                                <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                                    <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 p-4">
                                        <li className="flex items-center cursor-pointer pb-3">
                                            <div className="flex items-center">
                                                <input id="checked-checkbox" type="checkbox" value=""
                                                    className="w-4 h-4 text-black bg-gray-100 border-black  focus:ring-black dark:focus:black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                                                <label htmlFor="checked-checkbox"
                                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">T-shirt (3)</label>
                                            </div>
                                        </li>
                                        <li className="flex items-center cursor-pointer pb-3">
                                            <input id="checked-checkbox" type="checkbox" value=""
                                                className="w-4 h-4 text-black-600 bg-gray-100 border-black black focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="checked-checkbox"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sweater(10)</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer pb-3">
                                            <input id="checked-checkbox" type="checkbox" value=""
                                                className="w-4 h-4 text-black-600 bg-gray-100 border-black black focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                                            <label htmlFor="checked-checkbox"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Shirt (2)</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer pb-3">
                                            <input id="checked-checkbox" type="checkbox" value=""
                                                className="w-4 h-4 text-black-600 bg-gray-100 border-black black focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                                            <label htmlFor="checked-checkbox"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jeans (6)</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer pb-3">
                                            <input id="checked-checkbox" type="checkbox" value=""
                                                className="w-4 h-4 text-black-600 bg-gray-100 border-black black focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                                            <label htmlFor="checked-checkbox"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hawaiian shirt</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer pb-3">
                                            <input id="checked-checkbox" type="checkbox" value=""
                                                className="w-4 h-4 text-black-600 bg-gray-100 border-black black focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                                            <label htmlFor="checked-checkbox"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sleeveless shirt</label>
                                        </li>
                                    </ul>
                                </div>
                                <h2 id="accordion-flush-heading-3">
                                    <button type="button" className="flex items-center justify-between w-full py-5 "
                                        data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
                                        aria-controls="accordion-flush-body-3">
                                        <span className="uppercase text-sm">Filter by price</span>
                                        <img src="./assets/Images/Accordian.png" width="25" height="25" />
                                    </button>
                                </h2>
                                <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                                    <div className="flex items-center justify-center">
                                        <input type="number"
                                            className="border focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-black text-sm  block w-1/2 p-2.5 hover:border-black"
                                            placeholder="MIN" />
                                        <h1 className="uppercase px-4">to</h1>
                                        <input type="number" className=" border  text-black text-sm  block w-1/2 p-2.5 " placeholder="MAX" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="default-carousel" className="relative w-full" data-carousel="slide">
                            {/* <!-- Carousel wrapper --> */}
                            <div className="relative h-100 overflow-hidden md:h-96">
                                {/* <!-- Item 1 --> */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="assets/Images/kids-featured-product/kids01.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>
                                {/* <!-- Item 2 --> */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="assets/Images/kids-featured-product/kids02.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>

                            </div>
                            {/* <!-- Slider indicators --> */}
                            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                <button type="button" className="w-3 h-3 " aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                <button type="button" className="w-3 h-3 " aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            </div>
                            {/* <!-- Slider controls --> */}
                            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                <span className="inline-flex items-center justify-center w-8 h-8  sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>
                            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                <span className="inline-flex items-center justify-center w-8 h-8  sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>
                        </div>


                    </div>
                    {/* <!-- <Accordian Side Bar End> --> */}
                    <div className="col-span-3">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center">
                            <div
                                className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat border-black  border-solid border border-blac p-2">
                                <p className="absolute  bg-black  p-3 cursor-pointer group z-10	">
                                    <span className="uppercase text-white text-sm">Sale</span>
                                </p>
                                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img src="assets/Images/kids-featured-product/kids01.png"
                                        className=" transition duration-300 ease-in-out hover:scale-110 w-full" alt="Louvre" />
                                </div>
                                <h3 className="text-xl text-left uppercase font-bold	py-3.5	">Dress for women</h3>
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
                                        <span>$250.00 </span>
                                        <span className="line-through text-gray-400 ">$3000.00 </span>
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
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease"><i
                                                        className="fa-regular fa-heart"></i></span>
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
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease"><i
                                                        className="fa-solid fa-cart-shopping"></i></span>
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
                                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">Add
                                            to
                                            Cart</span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat border-black  border-solid border border-blac p-2 ">
                                <p className="absolute right-2 top-2 bg-black -full p-3 cursor-pointer group z-10	">
                                    <span className="uppercase text-white text-sm">40%</span>
                                </p>
                                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img src="assets/Images/kids-featured-product/kids02.png"
                                        className="transition duration-300 ease-in-out hover:scale-110 w-full" alt="Louvre" />
                                </div>
                                <h3 className="text-xl text-left uppercase font-bold	py-3.5	">Dress for women</h3>
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
                                        <span className="text-black">$250.00 </span>
                                        <del className="line-through text-gray-400 ">$30009.00 </del>
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
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease"><i
                                                        className="fa-regular fa-heart"></i></span>
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
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease"><i
                                                        className="fa-solid fa-cart-shopping"></i></span>
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
                                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">Add
                                            to
                                            Cart</span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat border-black border-solid border border-blac p-2">
                                <p className="absolute right-2 top-2 bg-black -full p-3 cursor-pointer group z-10	">
                                    <span className="uppercase text-white text-sm">Sale</span>
                                </p>
                                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img src="assets/Images/kids-featured-product/kids03.png"
                                        className="transition duration-300 ease-in-out hover:scale-110 w-full" alt="Louvre" />
                                </div>
                                <h3 className="text-xl text-left uppercase font-bold	py-3.5	">Dress for women</h3>
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
                                        <span>$250.00 </span>
                                        <span className="line-through text-gray-400 ">$3000.00 </span>
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
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease"><i
                                                        className="fa-regular fa-heart"></i></span>
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
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease"><i
                                                        className="fa-solid fa-cart-shopping"></i></span>
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
                                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">Add
                                            to
                                            Cart</span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat border-black  border-solid border border-blac p-2">
                                <p className="absolute  bg-black  p-3 cursor-pointer group z-10	">
                                    <span className="uppercase text-white text-sm">Sale</span>
                                </p>
                                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img src="assets/Images/kids-featured-product/kids04.png"
                                        className=" transition duration-300 ease-in-out hover:scale-110" alt="Louvre" />
                                </div>
                                <h3 className="text-xl text-left uppercase font-bold	py-3.5	">Dress for women</h3>
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
                                        <span>$250.00 </span>
                                        <span className="line-through text-gray-400 ">$3000.00 </span>
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
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease"><i
                                                        className="fa-regular fa-heart"></i></span>
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
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease"><i
                                                        className="fa-solid fa-cart-shopping"></i></span>
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
                                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">Add
                                            to
                                            Cart</span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat border-black  border-solid border border-blac p-2">
                                <p className="absolute  bg-black  p-3 cursor-pointer group z-10	">
                                    <span className="uppercase text-white text-sm">Sale</span>
                                </p>
                                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img src="assets/Images/kids-featured-product/kids05.png"
                                        className=" transition duration-300 ease-in-out hover:scale-110 w-full" alt="Louvre" />
                                </div>
                                <h3 className="text-xl text-left uppercase font-bold	py-3.5	">Dress for women</h3>
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
                                        <span>$250.00 </span>
                                        <span className="line-through text-gray-400 ">$3000.00 </span>
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
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease"><i
                                                        className="fa-regular fa-heart"></i></span>
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
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease"><i
                                                        className="fa-solid fa-cart-shopping"></i></span>
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
                                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">Add
                                            to
                                            Cart</span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat border-black  border-solid border border-blac p-2">
                                <p className="absolute  bg-black  p-3 cursor-pointer group z-10	">
                                    <span className="uppercase text-white text-sm">Sale</span>
                                </p>
                                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                    <img src="assets/Images/kids-featured-product/kids06.png"
                                        className=" transition duration-300 ease-in-out hover:scale-110 w-full" alt="Louvre" />
                                </div>
                                <h3 className="text-xl text-left uppercase font-bold	py-3.5	">Dress for women</h3>
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
                                        <span>$250.00 </span>
                                        <span className="line-through text-gray-400 ">$3000.00 </span>
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
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease"><i
                                                        className="fa-regular fa-heart"></i></span>
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
                                                    className="relative transition-colors duration-300 delay-200 group-hover:text-black ease"><i
                                                        className="fa-solid fa-cart-shopping"></i></span>
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
                                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">Add
                                            to
                                            Cart</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>




            <div className="container mx-auto mb-20 flex items-center justify-center">
                <div className="flex">
                    <a href="#" className="flex items-center px-4 py-2 mx-1 bg-black text-white ">
                        <p className="text-white uppercase ">previous</p>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 mx-1 bg-black text-white ">
                        1
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 mx-1 bg-black text-white ">
                        2
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 mx-1 bg-black text-white ">
                        3
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 mx-1 bg-black text-white uppercase ">
                        Next
                    </a>
                </div>
            </div>
        </>
    )
}

export default FeaturedProduct
