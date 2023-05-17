import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from '../axios';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);
    const imgUrl = "https://image.tmdb.org/t/p/w500";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [imgUrl]);


    return (
        <div className="row container">
            <h3>{title}</h3>
            <div className="row__movies">
                {
                    movies.map(
                        (movie) =>
                            ((isLargeRow && movie.poster_path) ||
                                (!isLargeRow && movie.backdrop_path)) && (
                                <img
                                    className={`row__movie ${isLargeRow && "row__movieLarge"}`}
                                    key={movie.id}
                                    src={`${imgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                        }`}
                                    alt={movie.name}
                                />
                            )
                    )}
            </div>
        </div>
    )
}

export default Row