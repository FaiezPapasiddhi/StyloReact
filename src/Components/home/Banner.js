import React from 'react';
import CarouselBannerImage from '../../assets/Images/Carousel-image.png'


function Banner() {
    return (
        <>
            <div className="bg-[#322F2F] p-10 slider-heading md:pt-32 sm:pt-0 pb-20 darkchoco">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">
                    {/* <!-- left --> */}
                    <div className="md:flex md:flex-col sm:justify-center">
                        <div className="sm:ml-0 md:ml-0 lg:ml-44 ">
                            <h2 className="text-white tracking-widest leading-10 text-5xl md:text-3xl lg:text-6xl font-bold mb-4">
                                Introducing the Modern Summer Collection
                            </h2>
                            <div className="button-shop">
                                <button className="main-btn  sm:text-center bg-white text-black">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Right Start Here --> */}
                    <div className="xs:ml-10 md:ml-20 flex justify-center items-center">
                        <img src={CarouselBannerImage}/>
                       

                    </div>
                    {/* <!--- Right Section End------> */}
                </div>
            </div>
        </>
    )
}

export default Banner
