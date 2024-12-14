'use client'
import Button from "./Button"
import { redirect, useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";


const Aboutpage  = () => {
  const router = useRouter()
  const handleClick = (e : React.MouseEvent) =>{
    //e.preventDefault();
      router.push('/camp') 
    //router.push('https://Bit.ly/DAWNmembershipregistration')
  }
  return (
   <>
   <div className="flex hero_section flex-col">
    <div className="flex flex-col  w-[100vw] md:h-[380px] xl:h-[400px] 2xl:h-[455px] h-[367px] bg-gradient-to-br from-[#203e38f5]  to-[#1ca39333] relative">
    <Image
         src='/assets/aboutbg.jpeg'
         alt='hero'
         layout='fill'
         objectFit='cover'
         className=' z-[-5]'
         />
         <div className='flex max-sm:h-[62vh]  flex-col flexCenter sm:mt-[20vh] mt-[10vh]  '>
         <motion.div  initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}>
            <h1 className='font-bold leading-11  text-white #3cb37133 max-w-[569px] xl:max-w-[868px] 2xl:max-w-[988px] xl:pl-[1px] xl:justify-center xl:flex xl:flexCenter  z-10    flex text-center justify-center align-middle  max-sm:text-4xl text-[15px]  sm:text-[1.5rem]'>About Us</h1></motion.div>
            <motion.div   initial={{ x: '100%' }} 
            animate={{ x: 0 }}        
            transition={{ duration: 0.5 }} >
           <div className='flex flexCenter  pt-4  px-3 text-white font-[400] max-w-[815px] 2xl:max-w-[50rem] text-[15px] sm:text-[15px]   z-10 text-center flex-col 2xl:text-[1rem]'>The Dawn is a youth Organisation dedicated to nurturing and maintaining, an aspiration for excellence in this life and in the hereafter primarily amongst young Muslims. It is an organization of highly motivated and focused Muslim youths and young adults with a shared goal of learning and propagating Islam, while making significant impact in the society we live in and the religion we practice.</div>
           </motion.div>
         </div>
    </div>
    <motion.div
     initial={{opacity: 0,  y: '100%' }}   // Initial position (off-screen to the bottom)
     animate={{opacity: 1,  y: 0 }}         // Target position (on-screen)
      transition={{ type: 'spring', stiffness: 120 }}
      >
    <div className="flex flex-col relative bg-white justify-center pt-10 pb-10 gap-5">
      <div className="flex flex-col  gap-5">
        <div className="text-center text-zinc-800 text-[1.5rem] font-bold font-['Poppins'] leading-10">Brief History of The Dawn</div>
        <div className="flex justify-center">
        <Image
         src='/yellow.svg'
         alt='hero'
         width={34}
          height={34}
          className='w-[5rem] sm:w-[7rem]'
         />
        </div>
      </div>
      <div className="px-[20px]  py-[5px] text-center  text-black text-2xl font-semibold  leading-7">
      The Dawn was founded in December 2003 at Ikorodu, Lagos, as the youth wing of The Companion and The Criterion (Associations of Muslim men and women, respectively, in business and professions). Due to the nature of its creation, the founding members of The Dawn are children and wards of members of the parent associations. However, over the years membership has extended to Muslim youths all over the country who are in no way affiliated with the parent body but are willing to adhere to the regulatios and contribute to the aims of the organisation.
      The Dawn is headquartered in Lagos, with membership spanning across and beyond the country. The organizational structure of The Dawn has grown over the years to include official district sub-groups in Kwara, Oyo, Osun State and Abuja in addition to Lagos
      </div>
    </div>
    </motion.div>
    <div className="flex flex-col relative bg-green-800 justify-center pt-10 pb-10 gap-5 ">
      <div className="flex flex-col  gap-5">
        <div className="text-center text-white text-[1.5rem] font-bold font-['Poppins'] leading-10">Our Programs and Activities</div>
        <div className="flex justify-center">
        <Image
         src='/yellow.svg'
         alt='hero'
         width={34}
          height={34}
          className='w-[5rem] sm:w-[7rem]'
         />
        </div>
      </div>
      <div className="px-[20px]  py-[5px]   text-white text-2xl   leading-7">
      <p className="pb-5">At districts level we hold programmes throughout the year on a wide range of subjects—from the Islamic to the mundane—and in diverse forms, all designed to promote the central objectives of the organisation. Programmes are held physically, virtually, or as a hybrid of both, include;</p>
      <ul className="pb-5"> 
       <li> ●	Monthly Know your Deen (KOD)</li>
        <li> ●	Sister's Seminar (Annual)</li>
        <li>●	Ramadan Programmes</li>
        <li>●	Eid Picnics</li>
        <li>●	Humanitarian activities</li>
      </ul>
      <p className="pb-5">The Organisation has two major national events which are the:</p>
      <div className="pb-5 text-4xl">National Summit: <span > A weekend long event, held in the second quarter of the year. It includes various activities such as lecture and panel discussions about the Deen and issues that affect us as Muslims. It also serves as and opportunity for the leaders of the organisation to meet and review activities that was held so far and to plan ahead for the next major programme; The DHP</span>
      </div>
      <div>
      Dawwah Holiday Programme (DHP): <span> This is an annual camping event scheduled to run between 23rd of December and 1st of January. Attendance includes all members and is open to the general public of Muslim youths within a pre-announced age-group (generally between 7 and 40), and is often in excess of 700 participants. Distinguished scholars and individuals who epitomize the standards we want to live by are invited to give talks and lectures with topics carefully selected in tune with the year’s theme. The venue of the DHP is rotated annually between districts to foster unity among members as well as give attending delegates diverse and more enriching cross-cultural experiences. Other activities during the ten-day DHP include excursion, memorization of selected portion of the Qur’an in line with the theme of a specific year (Memory Verse), interactive sessions, as well as competitions in sports, quiz, and Qur’an memorization. The strategic timing of the DHP provides the opportunity to review the activities of the year spent and plan for the next year.</span>
      </div>
      <p>The programmes in one year are designed around a central theme, which is usually selected at the beginning of that calendar year.</p>
      <p className="text-center mt-2">To access our DHP memory verses
       <Link href='https://drive.google.com/drive/folders/1PRlcp4m53frmdKB5PkuE7ipOb1fSyn3j?usp=sharing' className="ml-1 border-b-2"> 
        click here.      
      </Link></p>
      </div>
      <div  className='flex flexCenter'>
      <Button 
      title='Camp portal'
      bgColor='bg-white'
      marginTop='mt-2'
      marginB='mb-3'
      hover
      textColor='text-[#085F32]'
      handleClick={handleClick}
      />
    </div>
    </div>
   </div>
   </>
  )
}

export default Aboutpage 









{/* <div classNameName="mt-5 rounded-lg mx-5 bg-[#1ca39333]">
<div classNameName='m-[18px]'>
 <div classNameName="text-center font-bold leading-11 text-[25px] pt-5 ">
    THE DAWN
  </div>
  <p classNameName=" p-3 leading-7 font-semibold ">
  The Dawn is a youth Organisation dedicated to nurturing and maintaining, an aspiration for excellence in this life and in the hereafter primarily amongst young Muslims. It is an organization of highly motivated and focused Muslim youths and young adults with a shared goal of learning and propagating Islam, while making significant impact in the society we  live in and the religion we practice.
</p>
</div>
</div> 
<div classNameName="  m-[18px] bg-[#1ca39333] rounded-lg mx-5 ">
<div classNameName="text-center font-bold leading-11 text-[25px] pt-5 ">
  Our Aim
 </div>
<p classNameName=" p-3 leading-7 font-semibold">
As an organisation our goal  is to serve as a platform that mentors young Muslims to develop a firm resolve to live a life devoid of corruption and other moral aberrations, to seek Islamic and moral uprightness as well as excellence in intellectual and other contemporary terms without pretension, to shun mediocrity and encourage lawful ambitions with humility. 
</p>
</div>
<div classNameName="  m-[18px] font-semibold  bg-[#1ca39333] rounded-lg mx-5">
<div classNameName="text-center font-bold leading-11 text-[25px] pt-5 ">
  Brief History of The Dawn 
 </div>
<p classNameName=" p-3 leading-7">
The Dawn was founded in December 2003 at Ikorodu, Lagos, as the youth wing of The Companion and The Criterion (Associations of Muslim men and women, respectively, in business and professions). Due to the nature of its creation, the founding members of The Dawn are children and wards of members of the parent associations. However, over the years membership has extended to Muslim youths all over the country who are in no way affiliated with the parent body but are willing to adhere to the regulatios and contribute to the aims of the organisation.  
</p>
<p classNameName=" p-3 leading-7">
The Dawn is headquartered in Lagos, with membership spanning across and beyond the country. The organizational structure of The Dawn has grown over the years to include official district sub-groups in Kwara, Oyo, Osun State and Abuja in addition to Lagos.   
</p>
</div>
<div classNameName="  m-[18px] bg-[#1ca39333] rounded-lg mx-5">
<div classNameName="text-center font-bold leading-11 text-[25px] pt-5 ">
  Our Programs and Activities
 </div>
<p classNameName=" p-3 leading-7 font-semibold">
At districts level we hold programmes throughout the year on a wide range of subjects—from the Islamic to the mundane—and in diverse forms, all designed to promote the central objectives of the organisation. Programmes are held physically, virtually, or as a hybrid of both, include;
</p>
<div classNameName=" p-1 leading-7 font-semibold">
 <ul> 
 <li> ●	Monthly Know your Deen (KOD)</li>
 <li> ●	Sister's Seminar (Annual)</li>
 <li>●	Ramadan Programmes</li>
 <li>●	Eid Picnics</li>
 <li>●	Humanitarian activities</li>
  </ul>
  <p classNameName=" p-1 leading-7 font-semibold">
  The Organisation has two major        national events           which are        the;
  </p>
  <p classNameName=" p-1 leading-7 font-semibold"><span classNameName="font-bold">National Summit;</span> A weekend long event, held in          the second quarter of the year. It includes various activities such as lecture and panel         discussions about the Deen and issues that affect us as Muslims. It also serves as and opportunity for the leaders of        the organisation to meet and review        activities that was held so far and to        plan ahead for the next major        programme; The DHP
  </p>
  <p classNameName=" p-1 leading-7 font-semibold"><span classNameName="font-bold">
  Dawwah Holiday Programme (DHP);      </span> This is an             annual camping event scheduled to run between             23rd of December and 1st of January. Attendance             includes all members and is open to the general             public of Muslim youths within a pre-announced             age-group (generally between 7 and 40), and is             often in excess of 700 participants.             Distinguished scholars and individuals who epitomize the standards we want to live by are invited to give talks and lectures with topics carefully selected in tune with the year’s theme. The venue of the DHP is rotated annually between districts to foster unity among members as well as give attending delegates diverse and more enriching cross-cultural experiences. Other activities during the ten-day DHP include excursion, memorization of selected portion of the Qur’an in line with the theme of a specific year (Memory Verse), interactive sessions, as well as competitions in sports, quiz, and Qur’an memorization. The strategic timing of the DHP provides the opportunity to review the activities of the year spent and plan for the next year
 <p classNameName=" p-1 leading-7 font-semibold"> The programmes in one year are designed around a central theme, which is usually selected at the beginning of that calendar year.
 </p>
</p>
</div>
</div> 
<div classNameName="  m-[18px] bg-[#1ca39333] rounded-lg mx-5 ">
<div classNameName="text-center font-bold leading-11 text-[25px] pt-5 ">
  Publications
 </div>
<p classNameName=" p-3 leading-7 font-semibold">
<p classNameName=" p-1 leading-7 font-semibold"><span classNameName="font-bold">  
  The Al-Fajr Magazine: </span> It is an annual publication of the Dawn that started in 2010. Since then we've had 9 installment. This is the 10th issue of the magazine.
  </p>
  <p classNameName=" p-1 leading-7 font-semibold"><span classNameName="font-bold"> 
   Graphic Content: </span> These are weekly content released in form of flyers and shared across our social media pages.
  </p>
  <ul classNameName=" p-1 leading-7 font-semibold">
    <li>Facebook: The Dawn Dawwah</li>
    <li>Instagram: Thedawnng</li>
    <li>Twitter: @thedawnng </li>
  </ul>
</p>
<div classNameName=" p-3 leading-7 font-semibold">
Over the years of it's existence, the Dawn has moved from holiday coaching classNamees for children of the parent organisations, to an organisation of highly motivated and focused Muslim youths and young adults with a shared goal of learning and propagating Islam.  The Dawn can now boast of men and women of impeccable character and excellent intellectual and Islamic scholarly range across virtually all halal professions. It is a place that encourages a mutual quest to ensure improvements amongst members without prejudice.
<p classNameName='text-center'> PS: If you'll like to be a part of this organisation register here 👇🏽
  
</p>
</div>
<div  classNameName='flex flexCenter'>
<Button 
title='Become a Member'
bgColor='bg-[#085F32]'
marginTop='mt-2'
marginB='mb-3'
hover
textColor='text-white'
handleClick={handleClick}
/>
</div>

</div> */}

