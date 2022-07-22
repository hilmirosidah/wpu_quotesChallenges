import React from 'react'
import img1 from './img/img1.png'
import './style.css'

function RandomQuotes({handleClick}) {
    return (
        <div onClick={handleClick}>
            <div className='random'>random</div>
            <img src={img1} alt="img1" className='img1'/>
        </div>

    )
}
export default RandomQuotes