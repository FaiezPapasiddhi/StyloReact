import React from 'react'

function Newsletter() {
  return (
    <>
 {/* <section className="bg-white dark:bg-gray-900 menpage mt-20 flex justify-center items-center">
      <div className="py-8 px-4  max-w-screen-xl lg:py-16 lg:px-6">
         <div className="mx-auto max-w-screen-md sm:text-center">
            <h2
               className="mb-8  text-3xl tracking-tight  font-extrabold text-gray-900 sm:text-4xl dark:text-white uppercase">
               Sign up for our newsletter</h2>
            <form action="#">
               <div className="flex">
                  <div className="relative">

                     <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="black" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                           <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                           <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                     </div>
                     <input
                        className="block justify-end items-end place-items-end p-3 pl-10  text-sm text-gray-900  border-2 border-black  hover:border-black focus-within:bor  bg-transparent"
                        placeholder="Enter your email" type="email" id="email" required="" />
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
                     <span
                        className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">Submit</span>
                  </a>

      
               </div>
            </form>
         </div>
      </div>
   </section> */}


<section className="bg-white dark:bg-gray-900 menpage mt-20">
  <div className="py-8 px-4 mx-auto max-w-screen-xl  lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50  border border-black sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                  </div>
                  <div className='flex'>
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
                                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">Subscribe</span>
                                </a>
                  </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </form>
      </div>
  </div>
</section>
    </>
  )
}

export default Newsletter
