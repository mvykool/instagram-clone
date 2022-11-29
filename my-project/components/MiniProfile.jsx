import React from 'react'

const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img className=' w-16 h-16 p-[2px] border rounded-full' alt='pic' src='https://links.papareact.com/3ke' />

      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>Sssangha</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
      </div>

      <button className='text-blue-400'>Sing Out</button>
    </div>
  )
}

export default MiniProfile