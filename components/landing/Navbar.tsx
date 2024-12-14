'use client'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Button from './Button'
import { usePathname,  useRouter  } from 'next/navigation'




const navigation=
[
  {href: '/', key: 'Home', name:'Home', current:false,},
  {href: '/about', key: 'About Us', name:'About Us', current:false},
  {href: '/publication', key: 'publication', name:'Publication', current:false},
  {href: '/#faq', key: 'faq', name:'FAQ', current:false},
  {href: 'blog', key: 'blog', name:'Blog', current: false},
]
type Props ={
  userImage?: any ;
}

const Navbar = () => {
 const pathname  = usePathname();
 const handleClickMember = (e : any)=>{
     e.preventDefault();
 }
  return (
    <Disclosure as="nav" className=" sticky top-0  bg-white z-50 transition duration-700 py-3 ease-in-out">
    {({ open }) => (
      <>
        <div className="  mx-auto w-[100vw]  md:max-w-[114rem] px-4 sm:px-6 lg:px-8 ">
          <div className=" flex h-16 items-center  justify-between align-middle w-[100vw]">
            <div className=" flex flex-row justify-between items-center md:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-700 ease-in-out">
                <span className="flex flexCenter -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-9 w-9" aria-hidden="true" />
                ) : (
                  // <Bars3Icon className="block h-9 w-9" aria-hidden="true" />
                  <Image
                  src="/menu2.svg"
                  width={44}
                  height={44}
                  alt="The Dawn logo"
                  className="block h-9 w-9" 
                />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex  items-center justify-center md:items-stretch align-middle md:justify-start p-3">
              <div className="flex flex-shrink-0 items-center  ">
                <Image
                  src="/dawnlogo21.svg"
                  width={45}
                  height={44}
                  alt="The Dawn logo"
                />
              </div>
              <div className="max-md:hidden ml-7 flex flex-row  align-middle flexCenter ">
                <div className="flex space-x-4">
                  {navigation.map((item) => {
                    const isActive = (pathname.includes(item.href)&& item.href.length > 1) && pathname === item.href;
                    return(
                    <a
                      key={item.name}
                      href={item.href}
                      className={`
                         ${isActive && 'bg-yellow-300 text-dark'}
                        rounded-md px-3 py-2 text-sm font-mediumtext-black hover:bg-yellow-500 hover:text-white
                      `}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  )})}
                </div>
              </div>
            </div>
            <div className="flex  md:hidden  items-center justify-end md:items-stretch md:justify-start p-3">
              <div className="flex flex-shrink-0 items-center max-md:pl-[1cd px] ml-[0px] max-sm:mr-[-50px]">
                <Image
                  src="/avater.svg"
                  width={30}
                  height={40}
                  alt="The Dawn logo"
                />
              </div>
              
            </div>
            <div className=" flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div className='flex flex-row justify-center align-middle gap-6'>
                  <Menu.Button className="relative flex  rounded-ful text-sm  flexCenter focus:outline-none ">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">
                      Open user menu
                    </span>
                    <Avatar className="ml-4 hidden">
                     <AvatarImage  />
                       <AvatarFallback>
                        TD
                      </AvatarFallback>
                     </Avatar>
                  </Menu.Button>
                  <Button 
                      classNa='max-md:hidden'
                        title='Camp portal'
                        bgColor='bg-green-800'
                        marginTop='mt-0'
                        hover
                        pading='p-2'
                        textColor='text-white'
                        handleClick={handleClickMember}
                      />
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 flex flex-col origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hover:text-[#8ba22ade]">
                    <Menu.Item>
                      {({ active }) => (
                        
                        <a
                          href="/sign-in"
                          className={`${active ? 'bg-gray-100' : ''} 'block px-4 py-2 text-sm text-gray-700'`}
                        >
                          Sign-in
                        </a>
                      )}
                    </Menu.Item>
                    <div className=' h-0.5 w-full bg-[#15181552]' />
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/camp"
                          className={`${active && 'bg-[#9acd32fa]'} 'block px-4 py-2 text-sm text-gray-700'`}
                        >
                          Camp portal
                        </a>
                      )}
                    </Menu.Item>
                    {/*<Menu.Item>
                      {({ active }) => (
                        <a
                          href="/sign-out"
                          className={`${active ? 'bg-gray-100' : ''} 'block px-4 py-2 text-sm text-gray-700'`}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item> */}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="md:hidden flex flex-col justify-center absolute w-full">
          <div className="z-10 px-1 bg-[#fdfdfc] w-full flex flex-col justify-center flecCenter transition duration-780 ease-in-out">
            {navigation.map((item) =>{
                  const isActive = (pathname.includes(item.href)&& item.href.length > 1) && pathname === item.href; 
              return (
              <Disclosure.Button
                key={item.key}
                as="a"
                href={item.href}
                className={`
                  ${item.current ? 'bg-[#afa626] text-white' : 'text-black hover:text-zinc-500'}
                  'flex rounded-md px-3 py-2 text-base font-medium' flex flex-col z-10 justify-center
                  mt-[40px]  ${isActive && 'bg-[#9acd32fa]'}   
                `}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            )})}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
)}
// bg-[#085F32]
export default Navbar