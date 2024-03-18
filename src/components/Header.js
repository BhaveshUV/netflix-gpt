import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LOGO, USER_AVATAR } from '../utils/constants';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }
    return (
        <div className='px-16 flex justify-between items-center'>
            <img src={LOGO} alt='logo'
                className='w-40' />
            {user &&
                <div className='relative'>
                    <img alt='userIcon' src={user.photoURL ? user.photoURL : USER_AVATAR}
                        className='cursor-pointer h-8'
                        tabIndex={0}
                        onClick={() => setIsVisible(!isVisible)}
                        onBlur={() => setIsVisible(false)} />
                    {isVisible &&
                        <div className='menu bg-black text-white text-xs flex flex-col absolute w-44 right-0 top-10'
                            onMouseDown={(e) => e.preventDefault()}>
                            <div className='flex flex-col py-1'>
                                <div className='py-2 px-4 hover:underline cursor-pointer text-nowrap'>Account</div>
                                <div className='py-2 px-4 hover:underline cursor-pointer text-nowrap'>Help center</div>
                            </div>
                            <div className='py-2 px-2 hover:underline cursor-pointer text-nowrap text-center border-zinc-500 border-t-2'
                                onClick={() => handleSignOut()}>Sign out of Netflix</div>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Header;