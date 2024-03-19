import React from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

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

    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body;