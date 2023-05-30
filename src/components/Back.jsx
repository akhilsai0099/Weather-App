import React from 'react'
import arrow from '../assets/backarrow.png'
import { useNavigate } from 'react-router-dom'
const Back = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('..');
    }

    return (
        <img src={arrow} alt="back" className='h-10 w-10' onClick={handleClick} />
    )
}

export default Back
