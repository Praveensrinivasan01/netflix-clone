import React, { useEffect, useState } from 'react'
import axios from "../../utils/axios"
import requests from "../../utils/request"
import "./Banner.css"



const Banner = () => {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        const banner = async () => {
            const response = await axios.get(requests.fetchNetflixOriginals);
            console.log("REPONSE", response)
            if (response.data.results.length) {
                let mathRandom = Math.floor(Math.random() * response.data.results.length - 2)
                setMovie(response.data.results[mathRandom])
            }
            return response
        }
        console.log("SET MOVIE", movie)
        banner()
    }, [])
    const truncate = (string, n) => {
        return n < string?.length ? string.substr(0, n - 1) + "..." : string
    }
    return (
        <header className="banner" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>{
                    movie?.title ||
                    movie?.name ||
                    movie?.original_name
                }</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>
                        Play
                    </button>
                    <button className='banner__button'>
                        My List
                    </button>
                </div>
                <div className='banner__description'>
                    {truncate(movie?.overview, 150)}
                </div>
            </div>
            <div className='banner--fadeButton'></div>
        </header>
    )
}

export default Banner
