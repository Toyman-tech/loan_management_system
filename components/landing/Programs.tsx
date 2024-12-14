'use client'
import Image from "next/image";
import Carousel from "../embla/Carousel";
const Programs = (data:any) => {
  // try {
  //   // //const newData = data.map((imgs)=>{
  //   //   console.log(imgs)
  //   // })
  //   const allUrls = data.data.data.fliers
  // .map((flier :any) => flier.eventImage.map((eventImage : any) => console.log(eventImage.url)));


  //  console.log(data.data.data)
  // } catch (error : any) {
  //   console.log(error)
  // }
  return (
    <div className="  m-[18px] max-xs:m-0" id="publication">
        <div className=" text-center font-bold leading-11 text-[25px] pt-5 ">
            Previous/Upcoming Events
        </div>
        <div className="flex justify-center">
        <Image
         src='/yellow.svg'
         alt='hero'
         width={34}
          height={34}
          className='w-[5rem] sm:w-[7rem] py-7'
         />
        </div>
    <div className="lg:w-[40rem] w-[25rem] mx-auto my-2 max-sm:w-[22rem] max-xs:w-100vw">
      <Carousel loop>
        {data.data.data.fliers
  .map((flier :any) => flier.eventImage.map((src:any) => {
            
            
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className="relative  h-[26rem] xl:h-[37rem] flex-[0_0_100%] " key={src.id}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src.url} fill className="object-cover rounded-[1.125rem]" alt="alt" />
            </div>
          );
        }))}
      </Carousel>
    </div>
    </div>
  );
};

export default Programs;