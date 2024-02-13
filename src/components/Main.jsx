import React, { useEffect, useState } from 'react'

import "./Main.css"
import { useParams } from 'react-router-dom'
import Card from './Card'

export default function Main() {
    const [movie, setMovie] = useState([])
    const { type } = useParams()



    const getapi = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data.results))
    }

    useEffect(() => {
        getapi()
    }, [])


    useEffect(() => {
        getapi()
    }, [type])

  



    return (
        <div className='movie-list'>
           


            <h2 className="list-title">{(type ? type : "Popular").toUpperCase()}</h2>

            <div className="list-card">
                {movie.map((ele) => {

                    return (
                        < Card {...ele} />)

                })}


            </div>
        </div>
    )
}
//https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US