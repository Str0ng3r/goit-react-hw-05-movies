import React, { useState, useEffect } from 'react';

export const Trending = () => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US')
      .then(response => response.json())
      .then(response => setFilms(response.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Trending films</h1>
      <button onClick={() => { console.log(films) }}>OK</button>

      <ul>
        {films &&
          films.map(item => (
            <li key={item.id}>
              <a href="556456">
                <h2>{item.overview}</h2>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};