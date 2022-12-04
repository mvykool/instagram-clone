import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps: {  ...pageProps} }) {

  return (
   
    <RecoilRoot>
       <Component {...pageProps} />
     </RecoilRoot>

  )
}

export default MyApp
