import React from 'react'

function BannerCarousel() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 menpage">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div>
                        <div className="relative w-full h-full overflow-hidden bg-cover bg-no-repeat thumbnail">
                            <div className="uppercase tracking-wider	">New Collection @2023</div>
                            <img
                                src="assets/Images/kids-featured-product/kids-banner/kids-banner01.png"
                                className="w-full h-full transition duration-300 ease-in-out hover:scale-110 "
                                alt="" />

                        </div>
                    </div>
                    <div>
                        <div className="relative w-full h-full overflow-hidden bg-cover bg-no-repeat thumbnail">
                            <div className="uppercase tracking-wider	">New Collection @2023</div>
                            <hr />
                            <img
                                src="assets/Images/kids-featured-product/kids-banner/kids-banner02.png"
                                className=""
                                alt="  " />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerCarousel
