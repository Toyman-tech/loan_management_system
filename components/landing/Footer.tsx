"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { createNewSubscription } from '@/lib/actions/sub'
import { usePathname } from 'next/navigation'
import  ReactConfetti from 'react-confetti' 
// import useWindowSize from 'react-use/lib/useWindowSize'
import Swal from 'sweetalert2'

const menu=
[
  {href: '/', key: 'Home', name:'Home',},
  {href: '/about', key: 'About', name:'About Us',},
  {href: '/publication', key: 'pubkication', name:'Publication', },
]
const men =[
  {href: '/#faq', key: 'faq', name:'FAQ', },
  {href: 'blog', key: 'FAQ', name:'Blog',}
]

const socials=
[
  { href:'https://www.linkedin.com/company/thedawnng', key: 'Linkedin', name:'/linkedin1.svg',},
  {href:'https://instagram.com/thedawnng?igshid=MzRlODBiNWFlZA', key: 'Instagram', name:'/insta2.svg',},
  
]

const soc =[
  {href: ' https://x.com/thedawnng?s=20', key: 'X-app', name:'/twitter2.svg', },
  {href: 'https://chat.whatsapp.com/LKCHwJkHczYDzDSdNoHQwB', key: 'Whatsapp', name:'/whatsapp.svg', },
]

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
	const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  

//   const { width, height } = useWindowSize();
// console.log(width, height);


  const pathname= usePathname();
  const handleSubscription :any =()=>{
    console.log(email);
    if(email !== ''){
      createNewSubscription( 
        {
         email: email,
         path: pathname,
       }
       );
   setShowSuccessMessage(true);
   Swal.fire({
    title: "Congratulations!",
    text: " Your Subscription is succesful!",
    icon: "success",
    confirmButtonColor: '#085F32', // Set the background color for the OK button to green
    confirmButtonText: 'OK',
  });
   setTimeout(()=>{
     setShowSuccessMessage(false)
     
   }, 5000)   
      setEmail('')
    }
    
    }
        
  return (
    <footer className='flexStart text-[#ffff] footer bg-[#183115] px-6'>
     
      <div className='flex flex-col gap-7 w-full relative'>
      {/* {showSuccessMessage && ( <ReactConfetti width={width} height={300}/>)} */}
        <div className='flex max-sm:item-start items-start flex-col'>
          <div className='max-sm:items-start text-start  mt-1.5 flex flex-col gap-1 '>
          <h1 className=' font-semibold text-[20px]'>
            About Us 
          </h1>
          <p className=''>The Dawn nurtures excellence among young Muslims, fostering faith, community, and leadership for the next generation</p>
          </div>
         
        </div>
        <div className='flex flex-col md:flex-row gap-7
        '>
          <div className='footer_column text-sm max-sm:items-start'>
            <h4 className='font-light text-[20px]'>Quick Links</h4>
            <div className='flex flex-row gap-7'>
            <ul className='flex flex-col flex-shrink max-sm:gap-1 sm:gap-2 font-light text-dark  max-sm:text-[19px] ' >
              {menu.map((menu)=>(
                <Link href={menu.href} key={menu.key} className=' pr-3 hover:text-[#000000]' >
                  {menu.name}
                </Link>
              ))}
            </ul>
            <ul className='flex flex-col flex-shrink max-sm:gap-1 sm:gap-2 font-light text-dark  max-sm:text-[19px] ' >
              {men.map((menu)=>(
                <Link href={menu.href} key={menu.key} className=' pr-3 hover:text-[#000000]' >
                  {menu.name}
                </Link>
              ))}
            </ul>
            </div>
          </div>

        {/* Socials */}
        <div className='footer_column text-sm max-sm:items-start'>
            <h4 className='font-light text-[20px]'>Socials</h4>
            <div className='flex flex-row gap-7'>
            <ul className='flex flex-col flex-shrink max-sm:gap-1 sm:gap-2 font-light text-dark  max-sm:text-[19px] ' >
              {socials.map((menu)=>(
                <Link href={menu.href} key={menu.key} className=' pr-3 hover:text-[#000000]' >
                  {menu.key}
                </Link>
              ))}
            </ul>
            <ul className='flex flex-col flex-shrink max-sm:gap-1 sm:gap-2 font-light text-dark  max-sm:text-[19px] ' >
              {soc.map((menu)=>(
                <Link href={menu.href} key={menu.key} className=' pr-3 hover:text-[#000000]' >
                  {menu.key}
                </Link>
              ))}
            </ul>
            </div>
          </div>
          {/* <div className='flex flex-col max-sm:w-full max-sm:justify-center max-sm:text-center'>
          <div className=" text-zinc-800 text-base font-semibold">Subscribe for updates</div>
           <div className='flex max-sm:flex-col mt-3 max-sm:flexCenter'>
          <input
					type="email"
					id="email-address"
          placeholder='example@gmail.com'
					required
          className='text-zinc-800 bg-neutral-100 no-focus px-3 py-2  max-sm:px-6 rounded-md mr-[-2]'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
        <Button type="submit" className=' bg-[#085F32] rounded-sm max-sm:mt-3 max-sm:rounded-lg' onClick={handleSubscription}>Subscribe</Button>
        </div>
          </div> */}
          </div>
          <div className='w-full border border-t-2 border-t-white'></div>
          <div className='flexBetween footer_copyright text-sm'>
        <div>
          &copy; <span className='font-bold'>The Dawn.</span> All rights reserved
        </div>
      </div>
      
        
        {/* <div className='flex mt-2 md:pr-4'>
           {socials.map((social)=>(
                <div className='flex flex-row  rounded-full'>
                <Link href={social.href} key={social.key}>
                  <Image 
                    src={social.name}
                    alt={social.key}
                    width={34}
                    height={34}
                    className='w-[3rem] p-1'
                  />
                </Link>
                </div>
              ))}
        </div> */}
      </div> 
    </footer>
  )
}

export default Footer