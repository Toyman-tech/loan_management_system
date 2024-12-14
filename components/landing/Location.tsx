import Image from 'next/image'
import React from 'react'

const Location = () => {
    return (
        <div className='flex flex-col my-5 gap-3 justify-center align-middle '>
            <div className='flex justify-center align-middle'>
                <Image
                    src="/map.png"
                    width={300}
                    height={50}
                    alt="The Dawn logo"
                //   className="block h-[208px]" 
                />
            </div>
            <div className='flex justify-center mt-1.5'>
                <div className="flex align-middle opacity-80  text-[#539a14] border border-[#539a14] py-2 px-5   rounded-[833.88px]   justify-center  text-center font-bold font-['Lato'] gap-.5">Explore All Districts</div>
            </div>
        </div>
        // </div>
    )
}

export default Location