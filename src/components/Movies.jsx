import React, { useEffect, useState ,useCallback} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from './styled.module.css';

export const Movies = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const nameParam = queryParams.get('name');
  const [search, setSearch] = useState(nameParam || '');
  const [films, setFilms] = useState(null);


  const funcInput = (evt) => {
    setSearch(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newSearch = search.trim();
    if (newSearch) {
      const newSearchParams = new URLSearchParams({ name: newSearch });
      navigate(`?${newSearchParams.toString()}`);
      fetchMovies(newSearch);
    }
  };

  const fetchMovies = useCallback((query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTY0ODYxMTMxZjhiODMzOGRmYjRjNmE3YTU3MDAwMiIsInN1YiI6IjY0MzU1ODIyMDZmOTg0MDBmMWYyZWYyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RFiW-EEhPOTe-cZe4KpnRCYXBLY2gKFFlZExKvFtMUo',
        }
      }
    )
      .then((response) => response.json())
      .then((response) => setFilms(response.results))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    if (nameParam) {
      fetchMovies(nameParam);
    }
  }, [nameParam,fetchMovies]);

  return (
    <main className={styled.main}>
      <div className={styled.divInput}>
        <form onSubmit={handleSubmit}>
          <input
            className={styled.input}
            type="text"
            value={search}
            onChange={funcInput}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {films &&
            films.map((item) => (
              <li key={item.id}>
                <Link to={`/movies/${item.id}`} state={{ from: location }}>
                  {item.original_title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};