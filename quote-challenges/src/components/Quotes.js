import React, {useState, useEffect} from 'react'
import axios from 'axios'
import RandomQuotes from './RandomQuotes'
import SemuaQuotes from './SemuaQuotes'
import CreatedBy from './CreatedBy'
import './style.css'



function Quotes() {
    const [quotes, setQuotes] = useState([])
    const [author, setAuthor] = useState([])
    const [genre, setGenre] = useState([])
    const [styleTombol, setStyleTombol] = useState('tombol')
    const [stylePenulis, setStylePenulis] = useState ('none')
    const [stylePenulis2, setStylePenulis2] = useState ('penulis')

    const handleClick = () => {
        axios
        .get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
        .then(res => {
            setQuotes(res.data.data)
            setAuthor(res.data.data[0].quoteAuthor)
            setGenre(res.data.data[0].quoteGenre)
            setStylePenulis('none')
            setStyleTombol('tombol')
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleClick2 = () => {
        axios
        .get(`https://quote-garden.herokuapp.com/api/v3/quotes/?author=${author}&limit=3`)
        .then(res => {
            setQuotes(res.data.data)
            setStyleTombol('none')
            setStylePenulis('penulis3')
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleMouseEnter = () => {
        setStylePenulis2('penulis2')
    }

    const handleMouseLeave = () => {
        setStylePenulis2('penulis')
    }

    useEffect(() => {
        axios
        .get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
        .then(res => {
            setQuotes(res.data.data)
            setAuthor(res.data.data[0].quoteAuthor)
            setGenre(res.data.data[0].quoteGenre)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

return (
    <div>
        <RandomQuotes handleClick={handleClick}/>
        <div className={stylePenulis}>{author}</div>
    <div>
        {quotes.map((quote) => {
            return <div key={quote._id}  className='utama'>{`"${quote.quoteText}"`}</div>
        })}
        </div>
        <SemuaQuotes handleClick2={handleClick2} author={author} genre={genre} styleTombol={styleTombol} stylePenulis2={stylePenulis2} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
        <CreatedBy/>
    </div>
    )

    }

export default Quotes