import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import CategoryPage from './CategoryPage';
import Counter from './Counter';
import Bestseller from './Bestseller';
import BlogPost from './BlogPost';
import Newsletter from './Newsletter';
import Footer from './Footer';
import TopBar from './TopBar';



function Home() {
  return (
    <>
        <TopBar backgroundColor="#fff" TextColor="#000" />
        <Navbar bgColor="#322F2F" textColor="white"   />
        <Banner/>
        <CategoryPage />
        <Counter />
        <Bestseller />
        <BlogPost/>
        <Newsletter/>
        <Footer />
    </>
  )
}

export default Home
