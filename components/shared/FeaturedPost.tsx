"use client"

import { getFeaturedPosts } from '@/lib/actions/actions';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import  { ResponsiveType } from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import FeaturedPostCard from './FeaturedPostCard';

const Carousel = lazy(() => import('react-multi-carousel'));

const FeaturedPosts = () => {

  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result:any) => {
      setFeaturedPosts(result.posts);
      setDataLoaded(true);
    });
  }, []);




  
  const responsive: ResponsiveType = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const customLeftArrow = (
    <div className="absolute w-[30px]  transition duration-300 ease left-0 text-center py-3 cursor-pointer bg-[#085F32] hover:bg-[#4c7418] rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute w-[30px]  transition duration-300 ease right-0 text-center py-3 cursor-pointer bg-[#085F32] hover:bg-[#4c7418] rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-[2.5rem] text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );

  return (
    <div className="  mb-8 ">
    <div className=''>
      {/* Wrap Carousel component in Suspense */}
      <Suspense fallback={<div>Loading Carousel...</div>}>
        <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-0" >
          {dataLoaded && featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
        </Carousel>
      </Suspense>
    </div>
  </div>
  );
};

export default FeaturedPosts;
