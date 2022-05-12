import React, { useRef } from 'react'
import { useAddress, useMagic, useDisconnect } from '@thirdweb-dev/react'

import Head from 'next/head'
import Image from 'next/image'

const Home = () => {

  const address = useAddress()
  const connectWithMagic = useMagic()
  const disconnect = useDisconnect()

  const email = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email.current.value)
    if(email.current.value.length > 0) {
      connectWithMagic({ email: email.current.value})
    }
  }

  return (
    <div>
      <Head>
        <title>Magic Link Wallet connect</title>
        <meta name="description" content="Magic Link and Thirdweb Email wallet connect" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" referrerpolicy="no-referrer" />
      </Head>

      <main className="absolute top-2/4 left-2/4 text-center" style={{transform: 'translate(-50%, -50%)'}}>
        {
          address ? (
            <div>
              <h1 className="text-3xl font-bold text-center">Wallet Connected🥳</h1>
              <div className='py-1'>
                <p className='text-black'>Your wallet address: {address}</p>
                <button onClick={() => disconnect()} className='my-2 ml-2 p-2 rounded-lg border shadow bg-black text-white hover:bg-white hover:text-black'>Disconnect</button>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-bold text-center">Connect wallet with Email using Magic link</h1>

              <form onSubmit={(e) => handleSubmit(e)} className='flex justify-center'>
                <input className='my-2 p-2 rounded-lg w-2/4 border' type="email" ref={email} placeholder="Enter your email id" />
                <button className='my-2 ml-2 p-2 rounded-lg border shadow bg-black text-white hover:bg-white hover:text-black' type='submit'>Connect Wallet</button>
              </form>
            </div>
          )
        }
        
      </main>

      <footer className="fixed bottom-0 w-full p-4 flex items-center justify-center border-t shadow">
        <a
          href="https://github.com/Deveshb15/magic-wallet-create"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devesh B
        </a>
      </footer>
    </div>
  )
}

export default Home
