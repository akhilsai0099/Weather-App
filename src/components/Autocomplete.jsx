import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import data from '../constants/filtered.json'
import fetcher from '../helper/fetcher';

const Autocomplete = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    const navigate = useNavigate();
    const inputRef = useRef(null);
    const preventBlurRef = useRef(false);


    const handleInput = (event) => {
        const userInput = event.target.value.toLowerCase();
        if (userInput.length >= 3) {
            setInputValue(userInput);

            const filteredData = data.filter(item => {
                return item.name.toLowerCase().includes(userInput);

            }
            );
            setFilteredOptions(filteredData);
            return
        }
        setFilteredOptions([])
    };

    const handleOptionClick = (value) => {
        setIsFocused(true);
        setInputValue(value.name);
        setFilteredOptions([]);
        preventBlurRef.current = true;
        inputRef.current.focus();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const city = inputValue;
        if (city.length > 0) {
            navigate(`/search/${city}`)
        }
    }

    return (
        <div className='flex flex-col justify-center text-center w-fit'>


            <label htmlFor="search">Search for your city</label>
            <form onSubmit={handleSubmit} className='flex gap-3'>
                <input
                    type="text"
                    ref={inputRef}
                    name="search"
                    id="city-search"
                    placeholder='Enter the city name'
                    className=' w-60 border-blue-400 rounded-xl p-5 focus:outline-none focus:outline-orange-400 focus:border-orange-400 focus:rounded-b-none'
                    onInput={handleInput}
                    value={inputValue}
                    onChange={(e) => { setInputValue(e.target.value) }}
                    autoComplete='off'
                    onFocus={() => { setIsFocused(true) }}
                    onBlur={() => {
                        if (!preventBlurRef.current) {
                            setIsFocused(false);
                        } else {
                            preventBlurRef.current = false;
                        }
                    }} />

                <input type="submit" value="Search" className='bg-[#3b3b3b] items-center w-20 rounded-lg hover:bg-blue-800' />
            </form>

            <div className='relative'>
                <div className='absolute top-0 left-0 w-60 '>
                    {isFocused && filteredOptions.length > 0 && (
                        <ul className='top-6 bg-[#3b3b3b] rounded-2xl  rounded-t-none overflow-y-auto max-h-32'>
                            {filteredOptions.map((option, index) => (
                                <li
                                    key={index}
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        handleOptionClick(option);
                                    }}
                                    className='cursor-pointer 
                 h-8 hover:bg-gray-600 hover:text-gray-900'
                                >
                                    {option.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Autocomplete;
