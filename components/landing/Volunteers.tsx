import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Volunteers = () => {
    return (
        <div className='flex bg-[#4A9841] text-[#ffff] rounded-[1.5rem]  w-full my-3 align-middle h-[150px]' >
            <div className='flex flex-row justify-between align-center p-5 w-[100%]'>
                <div className='flex flex-col  font-bold gap-2 justify-center '>
                    <h1 className='flex text-[19px]'>Be A Verified Dawn</h1>
                    <h1 className='flex text-[19px]'>Member</h1>
                    <Link href='/' className='flex flex-row justify-start align-middle text-[#ffff] gap-2'>
                        <div className="flex text-[#ffff] font-light ">
                            Join Our Mission
                        </div>
                        <div className='flex'>
                            <Image
                                src="/rightarr.svg"
                                width={20}
                                height={40}
                                alt="The Dawn logo"
                                className="text-[#ffff]"
                            />
                        </div>
                    </Link>
                </div>
                <div className='flex justify-center align-middle text-center h-[100%]'>
                    <Image
                        src="/contimg.svg"
                        width={95}
                        height={20}
                        alt="The Dawn logo"
                        className="text-[#ffff] w-[142px] h-[155px] mt-[-15px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Volunteers