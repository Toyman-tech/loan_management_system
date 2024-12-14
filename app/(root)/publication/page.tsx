"use client"
import Button from '@/components/landing/Button'
import Image from 'next/image'
import React from 'react'
import { redirect, useRouter } from "next/navigation";
import { motion } from 'framer-motion';

const Publication = () => {
    const router= useRouter();
    const handleClick = (e : React.MouseEvent) =>{
        //e.preventDefault();
          router.push('/membership') 
        //router.push('https://Bit.ly/DAWNmembershipregistration')
      }
  return (
    <section className="flex  flex-col  ">
        <div className="flex flex-col relative bg-green-800 justify-center pt-10 pb-10 gap-5 ">
      <div className="flex flex-col  gap-5">
      <motion.div  initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}>
        <div className="text-center text-white text-[1.5rem] font-bold font-['Poppins'] leading-10">Publications</div></motion.div>
        <motion.div  initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }} >
        <div className="flex justify-center">
        <Image
         src='/yellow.svg'
         alt='hero'
         width={34}
          height={34}
          className='w-[5rem] sm:w-[7rem]'
         />
        </div>
        </motion.div>
      </div>
      <motion.div   initial={{ x: '100%' }} 
            animate={{ x: 0 }}        
            transition={{ duration: 0.5 }} >
      <div className="px-[20px]  py-[5px]   text-white text-2xl   leading-7">
      <div className="pb-5">The Al-Fajr Magazine: It is an annual publication of the Dawn that started in 2010. Since then we've had 9 installment. This is the 10th issue of the magazine.
      Graphic Content: These are weekly content released in form of flyers and shared across our social media pages.</div>
      <ul className="pb-5"> 
       <li> ●	Facebook: The Dawn Dawwah</li>
        <li> ●	 Instagram: Thedawnng </li>
        <li>●	Twitter: @thedawnng</li>
      </ul>
      <div>
      Over the years of it's existence, the Dawn has moved from holiday coaching classes for children of the parent organisations, to an organisation of highly motivated and focused Muslim youths and young adults with a shared goal of learning and propagating Islam. The Dawn can now boast of men and women of impeccable character and excellent intellectual and Islamic scholarly range across virtually all halal professions. It is a place that encourages a mutual quest to ensure improvements amongst members without prejudice.
      </div>
      <p>PS: If you'll like to be a part of this organisation register here 👇🏽</p>
      </div></motion.div>
      <motion.div
          initial={{opacity: 0,  y: '100%' }}   // Initial position (off-screen to the bottom)
         animate={{opacity: 1,  y: 0 }}         // Target position (on-screen)
         transition={{ type: 'spring', stiffness: 120 }}
        >
      <div  className='flex flexCenter'>
          <Button 
          title='Become a Member'
          bgColor='bg-white'
          marginTop='mt-2'
          marginB='mb-3'
          hover
          textColor='text-[#085F32]'
          handleClick={handleClick}
          />
        </div>
        </motion.div>
    </div>
    </section>
  )
}

export default Publication