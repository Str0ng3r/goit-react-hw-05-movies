import React, { useState} from 'react';
import { Link } from 'react-router-dom';
export const Movies = () => {
    const [search,setSearch] = useState('')
const [films,setFilms] = useState(null)

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTY0ODYxMTMxZjhiODMzOGRmYjRjNmE3YTU3MDAwMiIsInN1YiI6IjY0MzU1ODIyMDZmOTg0MDBmMWYyZWYyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RFiW-EEhPOTe-cZe4KpnRCYXBLY2gKFFlZExKvFtMUo'
        }
      };
      


return (
    <main>
        <div><input type="text" onChange={(evt)=> {setSearch(evt.target.value)}}/><button onClick={()=> {
                  fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
                  .then(response => response.json())
                  .then(response => setFilms(response.results))
                  .catch(err => console.error(err));
            console.log(films)}}>search</button>

<ul>
{films && films.map(item => (
  <li key={item.id}><Link to={`/film/${item.id}`}>
  {item.original_title}
</Link></li>
))}
</ul>


        </div>
    </main>
)
}