import React from 'react'
import Posts from './Posts'
import Stories from './Stories'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'



const Feed = ({user}) => {

 

  return (
    <main className={ `bg-app grid grid-cols-1 md:grid-cols-4 md:max-w-3xl xl:grid-cols-4 xl:max-w-5xl mx-auto ${!user && "!grid-cols-1 !max-w-3xl"}`}>
       {/**section */}
       <section className='col-span-4'>
         {/**stories */}
         <Stories user={user}/>
     

         {/**posts */}
         <Posts user={user}/>

       </section>
        
     {/**section */}
  
      <section className='hidden xl:inline-grid md:col-span-1 ml-20'>
      {/**mini profile */}

     <div className='fixed top-20 right-8'>
     <MiniProfile user={user}/>
      {/**suggestions */}
      <Suggestions/>
     </div>
  </section>
   
       
    </main>
  )
}

export default Feed