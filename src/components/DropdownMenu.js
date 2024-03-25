import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const DropdownMenu = () => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                navigate("/error");
            });
    };

    return (
        <div className='menu text-white text-xs flex flex-col w-44 bg-neutral-800 fixed right-4 md:absolute md:right-0 md:top-11 md:bg-black'
            onMouseDown={(e) => e.preventDefault()}>
            <div className='absolute h-3 w-3 right-[11px] -top-1 rotate-45 bg-neutral-800 md:bg-black'></div>
            <div className='flex flex-col py-1'>
                <div className='py-2 px-4 hover:underline cursor-pointer text-nowrap'>Account</div>
                <div className='py-2 px-4 hover:underline cursor-pointer text-nowrap'>Help center</div>
            </div>
            <div className='py-2 px-2 hover:underline cursor-pointer text-nowrap text-center border-zinc-500 border-t-2'
                onClick={() => handleSignOut()}>Sign out of Netflix</div>
        </div>
    );
};

export default DropdownMenu;