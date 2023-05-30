import React, { useEffect, useState } from 'react'
import Typewriter from 'react-ts-typewriter';
const Typing = (props) => {
    return (

        <h1>
            <Typewriter text={props.text} speed='1'
                cursor='false' />
        </h1>
    )
}

export default Typing
