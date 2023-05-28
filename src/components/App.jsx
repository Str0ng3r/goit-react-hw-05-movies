import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Movies } from './Movies';
import { Header } from './Header';
import { Film } from './Film';
import { Actors } from './Actors';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path='/film/:productId' element={<Film></Film>}>
<Route path=':actorsId' element={<Actors></Actors>}></Route>
        </Route>
      </Routes>
    </div>
  );
};
