import React from 'react'
import { GET_USERS } from '@/utils/graphql-queries';
import { useQuery } from '@apollo/client';

const User = () => {
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(data)

    return (
        <div>
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
        </div>
    )
}

export default User