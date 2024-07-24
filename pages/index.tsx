// npm i @apollo/client

import Link from 'next/link';
import React from 'react'

export default function Home() {
  return (
    <main
      className={`w-full min-h-screen flex flex-col gap-16 items-center justify-start py-16 px-24`}
    >
      <h1 className='text-5xl'>Graphql Query</h1>

      <div className='flex flex-col items-center justify-center gap-8'>
        <Link href={'/users'} className='bg-red-500 text-white px-8 py-4 rounded-xl'>
          Get Users Data
        </Link>

        <Link href={'/user'} className='bg-sky-500 text-white px-8 py-4 rounded-xl'>
          Get User Data
        </Link>
      </div>
    </main>
  );
}
