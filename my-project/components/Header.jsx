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
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

const Header = () => {

  const { data: session } = useSession();
  const [ open, setOpen ] = useRecoilState(modalState);
  const router = useRouter();


  return (
 <div className='shadow-sm sticky top-0 z-50 bg-app'>
       <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>

        {/**left */}
          <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
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
       <HomeIcon onClick={() => router.push("/")} cl className='nav-btn' />
       <MenuIcon className='h-14 md:hidden cursor-pointer' />

       {session ? (
     <>
         <div className='relative'>
         <PaperAirplaneIcon className='message-icon' />
          <div className='absolute bg-red-500 rounded-full animate-pulse -top-1 -right-2 text-xs w-5 h-5 text-white flex items-center justify-center'>3</div>
       </div>

       {/**modal  using recoil*/}

       <PlusCircleIcon onClick={() => setOpen(true)}  className='nav-btn' />
       <UserGroupIcon className='nav-btn' />
       <HeartIcon className='nav-btn' />

       <img onClick={signOut}  src={session.user.image} alt='profile pic' className='h-8 md:h-10 rounded-full cursor-pointer' />
     </>

       ) : (
        <button onClick={signIn} >Sign in</button>
       )}

      
       </div>
    </div>
 </div>
  )
}

export default Header