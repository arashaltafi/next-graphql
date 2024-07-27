import { LOGIN_USER } from '@/utils/graphql-queries';
import { useMutation } from '@apollo/client';
import React, { useState } from 'react'

const LoginComponent = () => {
    const [email, setEmail] = useState('123')
    const [password, setPassword] = useState('321')

    const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER);

    console.log(data)

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const { data } = await loginUser({ variables: { email, password } });
            console.log('User logged in:', data.loginUser);
        } catch (err) {
            console.error('Error logging in:', err);
        }
    };

    return (
        <form
            className='w-full min-h-screen flex flex-col items-center justify-start gap-8 py-16 px-32'
            onSubmit={handleSubmit}
        >
            <label htmlFor='email'>Email:</label>
            <input
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='px-8 py-4 rounded-xl text-white bg-gray-900'
            />

            <label className='mt-16' htmlFor='password'>Password:</label>
            <input
                id='password'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='px-8 py-4 rounded-xl text-white bg-gray-900'
            />

            <button
                type="submit"
                disabled={loading}
                className='mt-16 bg-sky-500 text-white px-8 py-4 rounded-xl'
            >
                {loading ? 'Logging in...' : 'Login'}
            </button>

            {error && <p>Error logging in: {error.message}</p>}
            {data && (
                <div>
                    <p>Logged in user:</p>
                    <p>message: {data.loginUser.message}</p>
                    <p>token: {data.loginUser.token}</p>
                </div>
            )}
        </form>
    )
}

export default LoginComponent