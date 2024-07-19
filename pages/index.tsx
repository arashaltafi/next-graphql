// npm i @apollo/client

import { GET_HELLO_WORLD } from '@/utils/graphql-queries';
import { useQuery } from '@apollo/client';
import React from 'react'

export default function Home() {
  const { loading, error, data } = useQuery(GET_HELLO_WORLD);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data)

  return (
    <main
      className={`w-full min-h-screen flex flex-col gap-8 items-center justify-start py-16 px-24`}
    >
      <h1 className='text-5xl'>Graphql Query</h1>

      <p>{data.hello}</p>
    </main>
  );
}
