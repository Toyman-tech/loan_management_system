"use client" 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import PostWidget from './PostWidget';



 function RightSidebar() {
  return (
    <section className='custom-scrollbar rightsidebar '>
     <PostWidget/>
    </section>
  );
}

export default RightSidebar;