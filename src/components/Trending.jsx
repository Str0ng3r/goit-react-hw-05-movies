import React, { useState, useEffect } from 'react';
import { Link,useLocation} from 'react-router-dom';

import styled from './styled.module.css'
export const Trending = () => {
  const location = useLocation()
  const [films, setFilms] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTY0ODYxMTMxZjhiODMzOGRmYjRjNmE3YTU3MDAwMiIsInN1YiI6IjY0MzU1ODIyMDZmOTg0MDBmMWYyZWYyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RFiW-EEhPOTe-cZe4KpnRCYXBLY2gKFFlZExKvFtMUo'
      }
    };
    
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(response => response.json())
      .then(response => setFilms(response.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styled.trendingCont}>
      <h1>Trending films</h1>
      <ul>

      {films &&
  films.map(item => (
    <li key={item.id}>
      <Link to={`/movies/${item.id}`} state={{from:location}}> 
  {item.original_title}
</Link>
    </li>
  ))}
      </ul>
    </div>
  );
};

