import React from 'react';
const Movie = (props) => {
    const movie = props.movies
        .find(({id}) => id === parseInt(props.match.params.movieId));
  return (
    <div>
      {movie.name}
    </div>
  );
};

export default Movie;
