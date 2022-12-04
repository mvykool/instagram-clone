import React from 'react'


const MiniProfile = ({user}) => {

 
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img  src={user.photoURL} className=' w-16 h-16 p-[2px] border rounded-full' alt='pic'  />

      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>{user.displayName}</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
      </div>

      <button className='text-blue-400'>Sing Out</button>
    </div>
  )
}

export default MiniProfile