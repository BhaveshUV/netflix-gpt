import React from 'react';
import Header from './Header';
import { useState, useRef } from 'react';
import { validateEmail, validateName, validatePassword } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let handleBtnClick = () => {
        let eName, eEmail, ePassword = null;
        if (!isSignIn) {
            eName = validateName(name.current.value);
            setErrorName(eName);
        }
        eEmail = validateEmail(email.current.value);
        setErrorEmail(eEmail);
        ePassword = validatePassword(password.current.value);
        setErrorPassword(ePassword);

        if (ePassword) {
            alert("Password must contain at least 8 characters | ABC | abc | 123 | @#$%");
        }

        if (eName || eEmail || ePassword) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_AVATAR
                    }).then(() => {
                        // Profile updated!
                        navigate("/browse");
                        dispatch(addUser({ uid: auth.currentUser.uid, email: auth.currentUser.email, displayName: auth.currentUser.displayName, photoURL: auth.currentUser.photoURL }));
                    }).catch((error) => {
                        console.error("Update error", error);
                        alert(error.errorCode + "\n" + error.errorMessage);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode + "\n" + errorMessage);
                })
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode + "\n" + errorMessage);
                });
        }
    }
    return (
        <div className='min-h-[100dvh] bg-black bg-opacity-60 object-contain py-32 md:py-20'>
            <img src={BG_IMG} alt='bg'
                className='fixed top-0 h-full w-full object-cover -z-10' />
            <Header />
            <form onSubmit={(e) => e.preventDefault()}
                className='bg-black bg-opacity-60 flex flex-col gap-5 text-white p-16 box-content mx-auto rounded-lg md:w-72'>
                <h1 className='text-3xl font-bold pb-8'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn &&
                    <div className='relative'>
                        <input ref={name} type='text' placeholder='Full-name'
                            className='p-2 rounded-md bg-neutral-600 w-full' />
                        <p className='text-red-500 text-xs font-semibold px-2 py-[0.1rem] absolute'>{errorName}</p>
                    </div>
                }
                <div className='relative'>
                    <input ref={email} type='email' placeholder='Email'
                        className='p-2 rounded-md bg-neutral-600 w-full' />
                    <p className='text-red-500 text-xs font-semibold px-2 py-[0.1rem] absolute'>{errorEmail}</p>

                </div>
                <div className='relative'>
                    <input ref={password} type='password' placeholder='Password'
                        className='p-2 rounded-md bg-neutral-600 w-full' />
                    <p className='text-red-500 text-xs font-semibold px-2 py-[0.1rem] absolute'>{errorPassword}</p>
                </div>
                <button onClick={() => handleBtnClick()}
                    className='bg-red-600 py-2 my-4 rounded-md'>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className='text-gray-300 my-4'>
                    {isSignIn ? "New to Netflix? " : "Already registered? "}
                    <span className='font-semibold text-white hover:underline cursor-pointer'
                        onClick={() => setIsSignIn(!isSignIn)}>{isSignIn ? "Sign up now" : "Sign in now"}</span>.
                </p>
            </form>
        </div>
    )
}

export default Login;