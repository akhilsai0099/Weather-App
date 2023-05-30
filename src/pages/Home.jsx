import React from 'react'
import Autocomplete from '../components/Autocomplete';
import Blinking from '../components/Blinking';


const Home = () => {
    return (
        <div className=" flex flex-col gap-5 justify-center items-center h-screen ">
            <h1 className='text-orange-500 text-center text-5xl'>Welcome To <span className='text-blue-500'>Weather App</span>
                <Blinking text="|" /> </h1>
            <Autocomplete />
        </div>
    )
}

export default Home
