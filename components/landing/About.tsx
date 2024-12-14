'use client'
import Programs from "./Programs";

// import { EmblaOptionsType } from 'embla-carousel-react'
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";

const About = (data: any) => {
 
  // const OPTIONS: EmblaOptionsType = {}
  // const SLIDE_COUNT = 5
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const router = useRouter()
  const handleClick = (e : React.MouseEvent) =>{
    e.preventDefault();
      router.push('/about')
  }
  return (
    <section className="bg-white" >
     <div className="mt-1">
      <div className='flex  flex-col'>
         <div className="flex flex-col md:mt-20 mt-3  ">
          <h2 className="text-center text-[1.5rem] font-bold font-['Poppins'] text-[#183115] leading-10">About Us</h2>
          <div className='flex justify-center align-middle rounded-md border border-slate-50 mt-3 relative'>
            <Image
                  src="/aboutimg.png"
                  width={300}
                  height={50}
                  alt="The Dawn logo"
                //   className="block h-[208px]" 
                />
                {/* Black Overlay */}
            
            </div>
          {/* <p className="pl-12 max-sm:pl-4 text-center mt-5 pr-4">The Dawn is a youth Organisation dedicated to nurturing and maintaining, an aspiration for excellence in this life and in the hereafter primarily amongst young Muslims. It is aCn organization of highly motivated and focused Muslim youths and young adults with a shared goal of learning and propagating Islam, while making significant impact in the society we live in and the religion we practice.</p> */}
          <p className="flex justify-center  text-center mt-5 px-3">The Dawn has empowered countless individuals to achieve their full potential, both religiously and intellectually.</p>
         </div>
         
          <Link href='/' className='flex flex-row justify-center align-middle text-[#539a14]  gap-3'>
            <div  className="flex text-[#539a14] font-semibold tex-3xl">
             Discover Our Mission
          </div>
          <div className='flex'>
          <Image
                  src="/ard.svg"
                  width={20}
                  height={40}
                  alt="The Dawn logo"
                //   className="block h-[208px]" 
                />
          </div>
          </Link>
       {/* <div className="flex flex-col bg-green-800 gap-5 px-5 py-5">
       <div className="text-center text-white text-[1.5rem] font-bold font-['Poppins'] leading-10 mt-5">Our Aim</div>
        <div className="flex justify-center">
        <Image
         src='/yellow.svg'
         alt='hero'
         width={34}
          height={34}
          className='w-[5rem] sm:w-[7rem] '
         />
        </div>
         <p className="text-center text-light-1 leading-6">As an organisation our goal is to serve as a platform that mentors young Muslims to develop a firm resolve to live a life devoid of corruption and other moral aberrations, to seek Islamic and moral uprightness as well as excellence in intellectual and other contemporary terms without pretension, to shun mediocrity and encourage lawful ambitions with humility.</p>
       </div> */}
       {/* <Programs data={data}/> */}
      </div>
      </div>
    </section>
  )
}

export default About;





// 'use client'
// import Programs from "./Programs";

// import { EmblaOptionsType } from 'embla-carousel-react'
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";


// const About = (data: any) => {
 
//   // const OPTIONS: EmblaOptionsType = {}
//   // const SLIDE_COUNT = 5
//   // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

//   const router = useRouter()
//   const handleClick = (e : React.MouseEvent) =>{
//     e.preventDefault();
//       router.push('/about')
//   }
//   return (
//     <section >
//      <div className="mt-10 ">
//       <div className='flex xl:flex-row flex-col'>
//         <div className="rounded-3xl  m-[18px]
//          bg-[#f0ffff] shadow-md ">
//           <div className="text-center font-bold leading-11 text-[25px] pt-5 " id="about">
//             About The Dawn  
//            </div>
//          <div className=" p-3 leading-7">
//             The Dawn is a youth Organisation dedicated to nurturing and maintaining, an aspiration for excellence in this life and in the hereafter primarily amongst young Muslims. It is an organization of highly motivated and focused Muslim youths and young adults with a shared goal of learning and propagating Islam, while making significant impact in the society we  live in and the religion we practice. <span >
//               <Button className="ml-1 rounded-[0.5rem] bg-[#085F32] p-1 text-white hover:text-black flex justify-center mt-1 w-full hover:bg-[#4c7418]" onClick={handleClick}  >
//               Read more...
//              </Button>

//             </span>
//           </div>
//         </div>
      
//        <div className="rounded-3xl  m-[18px]
//          bg-[#f0ffff] shadow-md ">
//           <div className="text-center font-bold leading-11 text-[25px] pt-5 ">
//             Our Aim  
//            </div>
//          <div className=" p-3 leading-7">
//          As an organisation our goal  is to serve as a platform that mentors young Muslims to develop a firm resolve to live a life devoid of corruption and other moral aberrations, to seek Islamic and moral uprightness as well as excellence in intellectual and other contemporary terms without pretension, to shun mediocrity and encourage lawful ambitions with humility.<br/><span >
//               <Button className="ml-1 rounded-[0.5rem] bg-[#085F32] hover:bg-[#4c7418] p-1 text-white hover:text-black flex justify-center mt-1 w-full" onClick={handleClick}  >
//               Read more...
//              </Button>

//             </span>
//           </div>
//         </div>
//         <div className="rounded-3xl  m-[18px]
//          bg-[#f0ffff] shadow-md ">
//           <div className="text-center font-bold leading-11 text-[25px] pt-5 ">
//             Our Programs  
//            </div>
//          <div className=" p-3 leading-7">
//          At districts level we hold programmes throughout the year on a wide range of subjects—from the Islamic to the mundane—and in diverse forms, all designed to promote the central objectives of the organisation. Programmes are held physically, virtually, or as a hybrid of both, include;<br/> <span >
//               <Button className="ml-1 rounded-[0.5rem] bg-[#085F32] hover:bg-[#4c7418] p-1 text-white hover:text-black flex justify-center mt-1 w-full" onClick={handleClick}  >
//               Read more...
//              </Button>

//             </span>
//           </div>
//         </div>
//         </div>
//         <Programs data={data}/>
//       </div>
//     </section>
//   )
// }

// export default About;