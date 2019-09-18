import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Movie from './Movie.js';
import MovieList from './MovieList.js';
import './App.css';
const movies = [
  {
    id: 1,
    name: 'ALIENS',
  },
  {
    id: 2,
    name: 'HARRY POTTER',
  },
  {
    id: 3,
    name: 'BATMAN',
  },
];
const App = (props) => {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Route exact path="/" 
            render={(props)=><MovieList {...props} movies={movies}/>} />
        <Route path="/movie/:movieId" 
            render={(props)=><Movie {...props} movies={movies}/>} />
      </>
    </Router>
  );
};

export default App;
