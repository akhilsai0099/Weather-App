import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetcher from '../helper/fetcher';
import Autocomplete from '../components/Autocomplete';
import Back from '../components/Back'



const Search = () => {
    const { city } = useParams();
    const [data, setData] = useState({})

    useEffect(() => {
        const func = async () => {
            const response = await fetcher(city);
            setData(JSON.parse(response))
        }
        func()
    }, [city]);
    return (
        <>
            <div className="flex flex-col h-screen">
                <div className='flex  mx-4 px-2 items-center'>

                    <div className=' flex-grow '><Back />
                    </div>

                    <div >
                        <Autocomplete />
                    </div>
                </div>


                {Object.keys(data).length === 0 && (
                    <div className='flex justify-center items-center text-center h-screen'>
                        <p className='text-3xl'>Loading Data...</p>
                    </div>
                )}

                {Object.keys(data).length !== 0 && (
                    <div className="flex flex-grow justify-center items-center">
                        <div className="flex flex-col items-center gap-2">
                            <h3>City: {city}</h3>
                            <img
                                className="absolute top-60 w-[64px] h-[64px] m-auto"
                                src={`https://openweathermap.org/img/w/${data.weather[0]?.icon}.png`}
                                alt={data.weather[0]?.description}
                            />
                            <h1 className="text-4xl">Temperature: {data.main?.temp}</h1>
                            <h4 className="text-xl">Feels like: {data.main?.feels_like}</h4>
                            <h4 className="text-xl">{data.weather[0]?.description}</h4>
                        </div>
                    </div>)}
            </div>



        </>
    )

}

export default Search
