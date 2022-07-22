import React from 'react'
import img2 from './img/img2.png'
import './style.css'

function SemuaQuotes({author, genre, handleClick2, styleTombol, stylePenulis2, handleMouseEnter, handleMouseLeave}) {
    return (
        <div className={styleTombol} onClick={handleClick2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={stylePenulis2}>{author}</div>
            <div className='jenis'>{genre}</div>
            <img src={img2} alt="img2" className='img2'/>
        </div>

    )
}

export default SemuaQuotes