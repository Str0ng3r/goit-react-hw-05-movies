import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

 const Review = () => {
  const [reviews, setReviews] = useState(null);
  const { productId } = useParams(); // Change 'reviewId' to 'reviewsId'

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTY0ODYxMTMxZjhiODMzOGRmYjRjNmE3YTU3MDAwMiIsInN1YiI6IjY0MzU1ODIyMDZmOTg0MDBmMWYyZWYyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RFiW-EEhPOTe-cZe4KpnRCYXBLY2gKFFlZExKvFtMUo',
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${productId}/reviews?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => response.results.length > 0 ? setReviews(response.results) : setReviews(null))
      .catch(err => console.error(err));
  }, [productId]);

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews ? reviews.map(item => (
          <li key={item.id}><h1>{item.author}</h1>:{item.content}</li>
        )) : <h1>Not reviews</h1>}
      </ul>
    </div>
  );
};
export default Review