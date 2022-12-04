import React, { useEffect, useState } from 'react'
import { faker } from "@faker-js/faker";
import Story from './Story';
import { useSession } from 'next-auth/react';



const Stories = () => {

  const { data: session } = useSession();

  /**generate fake data with faker  */

    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
      const suggestions = [...Array(20)].map((_, i) => ({
        userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      }));

      console.log(suggestions)
      setSuggestions(suggestions);
    }, []);
  
  return (
    <div className='flex space-x-2 p-6 bg-app rounded-sm overflow-x-scroll' >
      {/**story */}
      {session && (
        <Story
         img={session.user.image}
        username={session.user.username}
        />
      )}


      {suggestions.map(profile => (
        <Story
        key={profile.userId}
        img={profile.avatar}
        username={profile.username} />
      ))}
    </div>
  )
}

export default Stories