import React from 'react'
import './Button.css';

const Button = ({ text, bg, border, onClick }) => {

    const myStyle = {
        backgroundColor: bg,
        border: `${border} solid gray`,
    }

    return (
        // <button style={{ backgroundColor: ` ${bg}` }}>{text}</button>
        <button
            onClick={onClick}
            className='button__nav'
            style={myStyle}>{text}</button>
    )
}

export default Button