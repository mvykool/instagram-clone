import React from 'react'
import Image from 'next/image'
import { 
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
 <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
       <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>

        {/**left */}
          <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
            <Image src="https://links.papareact.com/ocw" layout='fill'  objectFit='contain'/>
          </div>

          <div className='relative w-10  lg:hidden flex-shrink-0'>
            <Image src="https://links.papareact.com/jjm" layout='fill'  objectFit='contain'/>
          </div>
        {/**center */}

     <div className='max-w-xs'>
     <div className='mt-1 relative p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black' type="text" placeholder='Search' />
        </div>

     </div>
        {/**right */}
       <div className='flex items-center justify-end space-x-4'> 
       <HomeIcon className='nav-btn' />
       <MenuIcon className='h-6 md:hidden cursor-pointer' />

       <div className='relative nav-btn'>
         <PaperAirplaneIcon className='nav-btn' />
          <div className='absolute bg-red-500 rounded-full animate-pulse -top-1 -right-2 text-xs w-5 h-5 text-white flex items-center justify-center'>3</div>
       </div>
       <PlusCircleIcon className='nav-btn' />
       <UserGroupIcon className='nav-btn' />
       <HeartIcon className='nav-btn' />

       <img src='https://links.papareact.com/3ke' alt='profile pic' className='h-10 rounded-full cursor-pointer' />
       </div>
    </div>
 </div>
  )
}

export default Header