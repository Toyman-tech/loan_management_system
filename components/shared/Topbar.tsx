import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect, useState } from "react";

function Topbar() {

  return (
    <nav className='topbar'>
    <Link href='/' className='flex items-center gap-4'>
    <Image 
       src='/footersvg.png'
        width={80}
        height={38}
        alt='The Dawn'
      />
      <p className='text-heading3-bold text-[#f3e73a] max-sm:hidden'>The Dawn</p>
    </Link>

     </nav>
);
}

export default Topbar;