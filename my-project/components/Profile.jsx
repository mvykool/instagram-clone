import React from 'react'
import { HomeIcon } from '@heroicons/react/solid'
import {
    CalendarIcon,
    PaperAirplaneIcon,
    GlobeAltIcon,
    BookmarkIcon,
    LocationMarkerIcon
} from '@heroicons/react/outline'

const Profile = ({user}) => {

    console.log(user)
  return (
    <div className="hidden lg:flex flex-col fixed bg-white w-[17%] h-screen">
        <div className='flex justify-center mx-auto mt-20'>
            <img src={user.photoURL} alt="profile pic" className='rounded-full p-1 border-red-500 border-2 h-20 w-20 cursor-pointer'/>
        </div>
        
         <div className='flex flex-col mt-10'>
            <h2 className='mx-auto font-bold text-lg'>{user.displayName}</h2>
            <p className='mx-auto text-gray-400 cursor-pointer'>{user.email}</p>
         </div>
        
        <div className='flex justify-evenly mt-5'>
        <div className='flex flex-col mt-10'>
            <h2 className='mx-auto font-bold text-md'>103</h2>
            <p className=' text-gray-400 cursor-pointer'>Posts</p>
         </div>
         <div className='flex flex-col mt-10'>
            <h2 className='mx-auto  font-bold text-md'>429</h2>
            <p className=' text-gray-400 cursor-pointer'>Followers</p>
         </div>
         <div className='flex flex-col mt-10'>
            <h2 className='mx-auto  font-bold text-md'>265</h2>
            <p className=' text-gray-400 cursor-pointer'>Following</p>
         </div>
        </div>

        {/**side icons */}

        <div className='mt-20 -ml-3 '>
            <div className='flex m-5 space-x-6 items-center side-icons'>
               <HomeIcon className='h-8'/>
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex m-5 space-x-6 items-center side-icons'>
               <BookmarkIcon className='h-8'/>
                <p className='font-bold'>Favorites</p>
            </div>
            <div className='flex m-5 space-x-6 items-center side-icons'>
               <PaperAirplaneIcon className='h-8'/>
                <p className='font-bold'>Messages</p>
            </div>
            <div className='flex m-5 space-x-6 items-center side-icons'>
               <CalendarIcon className='h-8'/>
                <p className='font-bold'>Events</p>
            </div>
            <div className='flex m-5 space-x-6 items-center side-icons'>
               <GlobeAltIcon className='h-8'/>
                <p className='font-bold'>Explore</p>
            </div>
            <div className='flex m-5 space-x-6 items-center side-icons'>
               <LocationMarkerIcon className='h-8'/>
                <p className='font-bold'>Location</p>
            </div>
        
        </div>

        {/**log out  */}
       <div className='flex justify-center mt-11'>
       <h2 className='font-bold text-lg text-pink-500 cursor-pointer transition duration-150 hover:scale-110'>Log out</h2>
       </div>
    </div>
  )
}

export default Profile