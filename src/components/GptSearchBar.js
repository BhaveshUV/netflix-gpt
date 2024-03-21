import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.currLang);
    return (
        <form className='flex w-[40rem] gap-2 mx-auto p-4  bg-black'>
            <input type='text'
                placeholder={lang[langKey].gptPlaceholder}
                className='flex-grow rounded-md px-1' />
            <button className='text-white bg-red-800 px-4 py-1 rounded-md'>{lang[langKey].search}</button>
        </form>
    )
}

export default GptSearchBar;