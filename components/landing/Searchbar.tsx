"use client"
import Image from "next/image"
import { useState } from "react"
import { Input } from "../ui/input"


const Searchbar = ()=> {
  const [search, setSearch] = useState('')
  return(
    <div className='  justify-center align-middle gap-1 rounded-lg  px-4 py-2'>
      <div className='flex flex-row no-focus justify-between
       align-middle  h-12 w-full rounded-md border border-slate-100  bg-slate-100 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed 
       disabled:opacity-50  '>
      <input
        id='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`${
          "Search" 
        }`}
        className='placeholder:text-dark-4  bg-slate-100 no-focus outline-none border-none w-full '
      />
      <Image
        src='/assets/search-gray.svg'
        alt='search'
        width={24}
        height={24}
        className='object-contain'
      />
      </div>
    </div>
  )
}
export default Searchbar