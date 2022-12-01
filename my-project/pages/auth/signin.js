import React from 'react'
import Head from 'next/head';
import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header';

const signin = ({ providers}) => {
  return (
    <>
    <Head>
    <title>IG-CLONE | log in</title>
    </Head>
    <Header/>
<div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
 
 <img className='w-80' src='https://links.papareact.com/ocw' alt='logo' />

<div className='mt-36'>
   {Object.values(providers).map((provider) => (
      <div  key={provider.name}>
        <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() => signIn(provider.id, { callbackUrl: "/"})}>
          Sign in with {provider.name}
        </button>
      </div>
    ))}
  </div>
</div>
  </>
  )
}


//server side render

export async function getServerSideProps(){
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signin