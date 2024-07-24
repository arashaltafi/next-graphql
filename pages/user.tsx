import React from 'react'
import { GET_USER } from '@/utils/graphql-queries';
import { useQuery } from '@apollo/client';

const User = () => {
    const { loading, error, data } = useQuery(GET_USER, {
        variables: {
            id: 5
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(data)

    return (
        <div
            className='w-full flex flex-col items-center justify-center gap-4'
        >
            <p className='text-lg text-black'>
                id: {data.user._id}
            </p>
            <p className='text-lg text-black'>
                age: {data.user.age}
            </p>
            <p className='text-lg text-black'>
                family: {data.user.family}
            </p>
            <p className='text-lg text-black'>
                name: {data.user.name}
            </p>
        </div>
    )
}

export default User