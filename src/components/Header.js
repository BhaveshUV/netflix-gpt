import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import { addUser, removeUser } from "../utils/userSlice";
import DropdownMenu from './DropdownMenu';
import { toggleIsGptSearch } from '../utils/gptSlice';
import { changeCurrentLang } from '../utils/configSlice';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const isGptSearch = useSelector(store => store.gpt.isGptSearch);

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
    }, [navigate, dispatch]);

    return (
        <div className='bg-black px-[10%] pb-3 flex justify-between items-center w-full z-10 flex-col md:flex-row fixed top-0 md:bg-gradient-to-b md:from-black md:pb-0 md:bg-transparent'>
            <img src={LOGO} alt='logo'
                className='w-40' />
            {user &&
                <div className='relative flex gap-4 w-full md:w-fit justify-center'>
                    {isGptSearch ? <select className='bg-neutral-700 text-white px-2' onChange={(e) => dispatch(changeCurrentLang(e.target.value))}>
                        {SUPPORTED_LANGUAGES.map(language =>
                            <option key={language.identifer}
                                value={language.identifer}
                            >{language.name}</option>)
                        }
                    </select> : null
                    }
                    <button className='bg-[#74AA9C] text-white px-3 py-1 rounded-sm font-semibold'
                        onClick={() => dispatch(toggleIsGptSearch())}>{isGptSearch ? "Homepage" : "GPT search"}</button>
                    <img alt='userIcon' src={user.photoURL ? user.photoURL : USER_AVATAR}
                        className='cursor-pointer h-8 rounded-sm fixed top-4 right-3 md:static'
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