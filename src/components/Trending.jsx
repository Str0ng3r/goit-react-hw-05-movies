import { useState } from "react";


export const Trending = () => {
    const [films,setFilms] = useState(null)
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

        return (
            <div>
            <h1>Trending films</h1>
            <button onClick={()=> {console.log(films)}}>OK</button>

            <ul>
{films.map(item => (
    <li>
    <a href="">
<h2>{item.overview}</h2>
    </a>
    </li>
))}

            </ul>
            </div>
            )
    
}