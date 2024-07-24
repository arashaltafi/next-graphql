// npm i @apollo/client

import { GET_HELLO_WORLD, GET_USERS } from '@/utils/graphql-queries';
import { useQuery } from '@apollo/client';
import React from 'react'

export default function Home() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data)

  return (
    <main
      className={`w-full min-h-screen flex flex-col gap-8 items-center justify-start py-16 px-24`}
    >
      <h1 className='text-5xl'>Graphql Query</h1>

      {
        data.users.map((user: any) => (
          <div
            key={user._id}
            className='w-full flex flex-col items-center justify-center gap-4'
          >
            <p className='text-lg text-black'>
              id: {user._id}
            </p>
            <p className='text-lg text-black'>
              age: {user.age}
            </p>
            <p className='text-lg text-black'>
              family: {user.family}
            </p>
            <p className='text-lg text-black'>
              name: {user.name}
            </p>

            <span>-------------------</span>
          </div>
        ))
      }
    </main>
  );
}
