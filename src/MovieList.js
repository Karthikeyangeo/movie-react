import React from 'react';
import { Movie,DeleteMovie } from './Movie';
import { useParams } from "react-router-dom";

function MovieList(props) {
  return (
    <section className="movie-details">
      {props.movie_data.map(({ name, pic, genre, summary, runningTime, rating },index) => (
        <Movie
          pic={pic}
          name={name}
          genre={genre}
          summary={summary}
          runningTime={runningTime}
          rating={rating} 
          index={index}
          />
      ))}
    </section>
  );
}


// function to show the full details of movie based on array index(id ) value
function MovieDetails({movies}){
  const { id } = useParams();
  const new_movie = movies[id];
 console.log(movies);
  
  return <div className="movie-detail-container">
          <iframe 
            width="100%" 
            height="541" 
            src={new_movie.trailer}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>

            </iframe>
          <div className="movie-details">
            <h1 className="movie-name">{new_movie.name}</h1>
            <h5 class="rating-star">IMDB Rating⭐ {new_movie.rating}</h5>
            <h5 className="genre">🎬 Genre: {new_movie.genre}</h5>
            <h5>⏲: {new_movie.runningTime}</h5>
            <p  className="movie-specs">{new_movie.summary}</p>
          </div>
          </div>
  
}

export{MovieList,MovieDetails};