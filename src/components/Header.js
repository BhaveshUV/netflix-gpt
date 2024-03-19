import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOGO, USER_AVATAR } from '../utils/constants';
import { addUser, removeUser } from "../utils/userSlice";
import DropdownMenu from './DropdownMenu';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const dispatch = useDispatch();

    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/browse");
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            } else {
                navigate("/");
                dispatch(removeUser());
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className='fixed top-0 px-16 flex justify-between items-center w-full bg-gradient-to-b from-black z-10'>
            <img src={LOGO} alt='logo'
                className='w-40' />
            {user &&
                <div className='relative'>
                    <img alt='userIcon' src={user.photoURL ? user.photoURL : USER_AVATAR}
                        className='cursor-pointer h-8'
                        tabIndex={0}
                        onClick={() => setIsVisible(!isVisible)}
                        onBlur={() => setIsVisible(false)} />
                    {isVisible && <DropdownMenu />}
                </div>
            }
        </div>
    )
}

export default Header;