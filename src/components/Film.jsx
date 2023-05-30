import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import styled from './styled.module.css'

 const Film = () => {
  const { productId } = useParams();
  const [infoFilm, setInfoFilm] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTY0ODYxMTMxZjhiODMzOGRmYjRjNmE3YTU3MDAwMiIsInN1YiI6IjY0MzU1ODIyMDZmOTg0MDBmMWYyZWYyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RFiW-EEhPOTe-cZe4KpnRCYXBLY2gKFFlZExKvFtMUo'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${productId}?language=en-US`, options)
      .then(response => response.json())
      .then(response => setInfoFilm(response))
      .catch(err => console.error(err));
  }, [productId]);

  return (
    infoFilm && (
      <div className={styled.containerWrapFilm}>
        <div
className={styled.containerFilm}
        >
          <img
            src={`https://image.tmdb.org/t/p/w400${infoFilm.backdrop_path}`}
            alt="img-film"
           className={styled.imgFilm}
          />
          <div>
            <h1>{infoFilm.original_title}</h1>
            <p>Film popularity: {infoFilm.popularity}</p>
            <h2>Overview</h2>
            <p>{infoFilm.overview}</p>
            <h3>Genres</h3>
            <p>
              {infoFilm.genres.map(genre => genre.name).join(', ')}
            </p>
          </div>
        </div>
        <footer style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={`/movies/${productId}/reviews`}>Reviews</Link>
          <Link to={`/movies/${productId}/cast`}>Actors</Link>
        </footer>
        <Outlet/>
      </div>
    )
  );
};
export default Film