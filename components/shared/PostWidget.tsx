"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '@/lib/actions/actions';
import { graphCMSImageLoader } from '@/lib/utilsImage';


type Params ={
  slug? : string;
}
const PostWidget = ({  slug }:Params) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data based on the slug or recent posts
    const fetchData = async () => {
      try {
        if (slug) {
          const result:any = await getSimilarPosts(slug);
          setRelatedPosts(result.posts);
        } else {
          const result:any = await getRecentPosts();
          setRelatedPosts(result.posts);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Call the fetchData function when the component mounts or when the slug prop changes
    fetchData();
  

  }, [slug]);
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts?.map((post:any, index:any) => 
      (
        <div key={index} className="flex items-center w-full mb-5">
          <div className="w-16 flex-none">
            <Image
              loader={graphCMSImageLoader}
              alt={post.title}
              height={60}
              width={60}
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/blog/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
