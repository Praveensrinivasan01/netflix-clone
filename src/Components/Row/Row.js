import axios from "../../utils/axios";
import "./Row.css"

import React, { useEffect, useRef, useState } from 'react'

const Row = ({ title, fetchURL, isLarge = false }) => {

    const [movie, setMovie] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        fetchMovie()
    }, [fetchURL])

    const fetchMovie = async () => {
        const response = await axios.get(fetchURL);
        if (response.data.results.length) {
            setMovie(response.data.results.slice(0, 10))
        }
        return response
    }

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">{
                movie?.map((movie) => {
                    return (
                        ((isLarge && movie.poster_path) || (!isLarge && movie.poster_path)) &&
                        (<img key={movie.id} className={`row__poster ${isLarge && "row__posterLarge"}`}
                            src={`${baseUrl}${!isLarge ? movie?.backdrop_path : movie?.poster_path}`}
                            alt=""
                        />)
                    )
                }
                )
            }</div>

        </div>
    )
}

export default Row
