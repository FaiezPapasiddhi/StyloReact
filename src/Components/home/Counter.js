import React from 'react';
import Map from '../../assets/Images/map.png';
import ShopBag from '../../assets/Images/polygonal-shop-bag.png';
import Box from '../../assets/Images/box.png';
import NewProduct from '../../assets/Images/new-product.png';



function Counter() {
  return (
    <>
    
   <div className="flex flex-wrap justify-between bg-black">
      <div className="w-full sm:w-auto  p-10">
         <div className="mx-auto text-white flex justify-center items-center flex-col">
            <p className="pb-7">Step 1</p>
            <img src={Map} width="50" height="50" className="pb-7" />
            <h2 className="text-4xl">Filter & Discover</h2>
         </div>
      </div>
      <div className="w-full sm:w-auto  p-10">
         <div className="mx-auto text-white	flex justify-center items-center flex-col">
            <p className="pb-7">Step 2</p>
            <img src={ShopBag} width="50" height="50" className="pb-7" />
            <h2 className="text-4xl">Add to bag</h2>
         </div>
      </div>
      <div className="w-full sm:w-auto  p-10">
         <div className="mx-auto text-white	flex justify-center items-center flex-col">
            <p className="pb-7">Step 2</p>
            <img src={Box} width="50" height="50" className="pb-7" />
            <h2 className="text-4xl">Fast shipping</h2>
         </div>
      </div>
      <div className="w-full sm:w-auto  p-10">
         <div className="mx-auto text-white	flex justify-center items-center flex-col">
            <p className="pb-7">Step 2</p>
            <img src={NewProduct} width="50" height="50" className="pb-7" />
            <h2 className="text-4xl">Enjoy the product</h2>
         </div>
      </div>
   </div> 
    </>
  )
}

export default Counter
