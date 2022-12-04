import React from 'react'


const MiniProfile = ({user}) => {

 
  return (
    <div className=' rounded-lg items-center justify-between mt-8 mb-10 ml-10 bg-white p-3'>
      <h2 className='font-bold m-5'>Trending Feeds</h2>
      <div className='grid grid-cols-2 p-4'>
          <img   alt="pic" src="/feeds-1.jpg" className="view-img"/>
          <img   alt="pic" src="/feeds-2.jpg" className="view-img"/>
          <img   alt="pic" src="/feeds-3.jpg" className="view-img"/>
          <img   alt="pic" src="/feeds-4.jpg" className="view-img"/>
        </div>
    </div>
  )
}

export default MiniProfile