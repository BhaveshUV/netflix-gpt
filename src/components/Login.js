import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    return (
        <div className='h-[100dvh] bg-black bg-opacity-60 object-contain'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg'
                className='fixed h-full w-full object-cover -z-10' />
            <Header />
            <form className='bg-black bg-opacity-60 flex flex-col gap-4 text-white p-16 box-content w-72 mx-auto my-20 rounded-lg'>
                <h1 className='text-3xl font-bold pb-8'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input type='text' placeholder='Full-name'
                    className='p-2 rounded-md bg-neutral-600' />}
                <input type='email' placeholder='Email'
                    className='p-2 rounded-md bg-neutral-600' />
                <input type='password' placeholder='Password'
                    className='p-2 rounded-md bg-neutral-600' />
                <button className='bg-red-600 py-2 my-4 rounded-md'>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className='text-gray-300 my-4'>
                    {isSignIn ? "New to Netflix? " : "Already registered? "}
                    <span className='font-semibold text-white hover:underline cursor-pointer'
                        onClick={() => setIsSignIn(!isSignIn)}>{isSignIn ? "Sign up now": "Sign in now"}</span>.
                </p>
            </form>
        </div>
    )
}

export default Login;