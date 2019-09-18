import React from 'react';
import {Link} from 'react-router-dom';
const MovieList = props => {
  return (
    <ul>
      {props.movies.map(movie => (
        <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
                {movie.name}
            </Link>
        </li>
      ))}

    </ul>
  );
};

export default MovieList;
