'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import Button from './Button'
import { motion } from "framer-motion"




const Hero = () => {
  const router = useRouter()
  const handleClick = (e : React.MouseEvent) =>{
    e.preventDefault();
      router.push('/membership') 
    //router.push('https://Bit.ly/DAWNmembershipregistration')
  }
  const campClick = (e : React.MouseEvent) =>{
    e.preventDefault();
      router.push('/membership') 
  }

  
  return (
    <div className='flex hero_section '>
      
      <div className='pt-24 flex flex-col gap-3 w-[100vw] md:h-[520px] xl:h-[550px] 2xl:h-[560px] h-[528px] bg-gradient-to-br from-[#203e38f5]  to-[#1ca39333] relative  '>
        <Image
         src='/herobg.jpeg'
         alt='hero'
         layout='fill'
         objectFit='cover'
         className=' z-[-5]'
         /> 
        <div className='flex max-sm:h-[62vh]  flex-col flexCenter 2xl:mt-[0]'>
        <motion.div  initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }} className='text-center text-white text-[22px] font-semibold leading-10'  >
        السلام عليكم ورحمة الله وبركات  
        </motion.div>
        <motion.div  
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }} className='mt-4 text-white '>WELCOME TO <span className='text-[40px]   leading-10  font-bold'>THE DAWN</span></motion.div>
        <motion.div  initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }} className="flex justify-center">
        <Image
         src='/yellow.svg'
         alt='hero'
         width={34}
          height={34}
          className='w-[5rem] sm:w-[7rem] mt-8 '
         />
        </motion.div>
        <motion.div   initial={{ x: '-100%' }} 
      animate={{ x: 0 }}        
      transition={{ duration: 0.5 }} >
       <h6 className='flex flexCenter  pt-4  px-3 text-white font-[400] max-w-[815px] 2xl:max-w-[70rem] text-[15px] sm:text-[15px] sm:font-normal  z-10 text-center flex-col 2xl:text-[1.5rem] mt-10'>
         A youth organisation dedicated to nurturing and maintaining an aspiration for excellence in this life and hereafter.
         <span className='hidden  '> 
         Our youth organization is dedicated to nurturing and maintaining an aspiration for excellence in this life and hereafter. Our mission is to empower young individuals to reach their full potential through education, mentorship, and community engagement. We are guided by core values of integrity, compassion, and resilience.
         </span> 
        </h6>
        </motion.div>
        <motion.div
          initial={{opacity: 0,  y: '100%' }}   // Initial position (off-screen to the bottom)
         animate={{opacity: 1,  y: 0 }}         // Target position (on-screen)
         transition={{ type: 'spring', stiffness: 120 }}
        >
        <div className='flex  max-w-[624px] max-sm:flex-col sm:gap-10 mt-[30px]  z-10 flexCenter text-body-normal'>
         <Button 
          title='Membership'
          bgColor='bg-green-800'
          margin='mt-sm '
          hover
          textColor='text-white'
          handleClick={campClick}
        />
        </div>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero








// 'use client'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import React from 'react'
// import Button from './Button'





// const Hero = () => {
//   const router = useRouter()
//   const handleClick = (e : React.MouseEvent) =>{
//     e.preventDefault();
//       router.push('/membership') 
//     //router.push('https://Bit.ly/DAWNmembershipregistration')
//   }
//   const campClick = (e : React.MouseEvent) =>{
//     e.preventDefault();
//       router.push('/camp') 
//   }

  
//   return (
//     <div className='flex hero_section '>
      
//       <div className='pt-24 flex flex-col  w-[100vw] md:h-[520px] xl:h-[550px] 2xl:h-[560px] h-[528px] bg-gradient-to-br from-[#203e38f5]  to-[#1ca39333] relative  '>
//         <Image
//          src='/herobg.jpeg'
//          alt='hero'
//          layout='fill'
//          objectFit='cover'
//          objectPosition='cover'
//          className=' z-[-5]'
//          /> 
//         <div className='flex max-sm:h-[62vh]  flex-col flexCenter 2xl:mt-[0]'>
//         <h1 className='font-bold leading-11  text-white #3cb37133 max-w-[569px] xl:max-w-[868px] 2xl:max-w-[988px] xl:pl-[1px] xl:justify-center xl:flex xl:flexCenter  z-10 sm:mt-[15px] mt-0  flex text-center justify-center align-middle  max-sm:text-4xl text-[25px]  sm:text-[2.5rem]'  >
//         السلام عليكم ورحمة الله وبركات  
//         </h1>
//        <h6 className='flex flexCenter  pt-4  px-3 text-white font-[400] max-w-[815px] 2xl:max-w-[70rem] text-[15px] sm:text-[15px] sm:font-semibold  z-10 text-center flex-col 2xl:text-[1.5rem]'>
//          A youth organisation dedicated to nurturing and maintaining an aspiration for excellence in this life and hereafter.
//          <span className='hidden sm:flex'> 
//          Our youth organization is dedicated to nurturing and maintaining an aspiration for excellence in this life and hereafter. Our mission is to empower young individuals to reach their full potential through education, mentorship, and community engagement. We are guided by core values of integrity, compassion, and resilience.
//          </span> 
//         </h6>
//         <div className='flex  max-w-[624px] max-sm:flex-col sm:gap-10 mt-[30px]  z-10 flexCenter'>
//        <Button 
//           title='Become a Member'
//           bgColor='bg-[#395f08]'
//           margin=''
//           hover
//           textColor='text-white'
//           handleClick={handleClick}
//         />
//          <Button 
//           title='Camp Portal'
//           bgColor='bg-[#395f08]'
//           margin='mt-sm '
//           hover
//           textColor='text-white'
//           handleClick={campClick}
//         />
//         </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero