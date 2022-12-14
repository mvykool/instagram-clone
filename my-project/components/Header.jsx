import React from 'react'
import Image from 'next/image'
import { 
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
  
} from '@heroicons/react/outline'

import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

const Header = ({user}) => {

 

  const [ open, setOpen ] = useRecoilState(modalState);
  const router = useRouter();


  return (
 <div className='shadow-sm sticky top-0 z-50 bg-app lg:bg-white'>
       <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>

        {/**left */}
          <div className='relative hidden lg:flex w-24 cursor-pointer'>
            <Image onClick={() => router.push("/")} src="https://links.papareact.com/ocw" layout='fill'  objectFit='contain' alt='pic' />
          </div>

          <div className='relative w-10  lg:hidden flex-shrink-0'>
            <Image onClick={() => router.push("/")}  src="https://links.papareact.com/jjm" layout='fill'  objectFit='contain' alt='pic'/>
          </div>
        {/**center */}

     <div className='max-w-xs'>
     <div className='mt-1 relative p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-none rounded-md focus:ring-gray-200 focus:border-gray-500' type="text" placeholder='Search' />
        </div>

     </div>
        {/**right */}
       <div className='flex items-center justify-end space-x-4'> 

     
         <div className='relative'>
         <PaperAirplaneIcon className='message-icon' />
          <div className='absolute bg-red-500 rounded-full animate-pulse -top-1 -right-2 text-xs w-5 h-5 text-white flex items-center justify-center'>10</div>
       </div>

       {/**modal  using recoil*/}

       <PlusCircleIcon onClick={() => setOpen(true)}  className='h-14 md:h-8 cursor-pointer' />
    
       <img    src={user.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/512/6073/6073873.png" } alt='profile pic' className='h-8 md:h-10 rounded-full cursor-pointer' />
    
      
       </div>
    </div>
 </div>
  )
}

export default Header