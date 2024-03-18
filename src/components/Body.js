import React, { useEffect } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    const appRouter = createHashRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
            } else {
                dispatch(removeUser());
            }
        });
    }, [])
    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body;