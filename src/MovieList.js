import React from 'react';
import { Movie } from './Movie';

export function MovieList(props) {
  return (
    <section className="movie-details">
      {props.movie_data.map(({ name, pic, genre, summary, runningTime, rating }) => (
        <Movie
          pic={pic}
          name={name}
          genre={genre}
          summary={summary}
          runningTime={runningTime}
          rating={rating} />
      ))}
    </section>
  );
}
