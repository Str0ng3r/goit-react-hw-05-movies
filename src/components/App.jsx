import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Movies } from './Movies';
import { Header } from './Header';
import { lazy, Suspense } from "react";

// import { Film } from './Film';
// import { Actors } from './Actors';
// import { Review } from './Reviews';

// З ОСЬ ЦИМИ ІМПОРТАМИ ВСЕ РОБЕ ОК




export const App = () => {

  const Film = lazy(()=> import('./Film'))
const Actors = lazy(()=> import('./Actors'))
const Review = lazy(()=> import('./Reviews'))

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Header /> 
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path='/movies/:movieId' element={<Film></Film>}>
<Route path='/movies/:movieId/cast' element={<Actors></Actors>}></Route>
<Route path='/movies/:movieId/reviews' element={<Review></Review>}></Route>
        </Route>
      </Routes>
      </Suspense>
    </div>
  );
};
