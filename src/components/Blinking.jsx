import React from 'react'
import { useState, useEffect } from 'react'
const Blinking = (props) => {
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsBlinking((prevIsBlinking) => !prevIsBlinking);
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <span className={`blinking-dot ${isBlinking ? 'blink' : ''} text-4xl`}>{props.text}</span>
    )
}

export default Blinking
