import { Counter } from "./Counter";

export function Movie({ name, pic, rating, genre, runningTime, summary }) {
  return (
    <div className="movie-container">
      <img className="moviepic" alt={name} src={pic} />
      <div className="movie_name_rating">
        <h1 className="movie-name">{name}</h1>
        <h5>⭐ {rating}</h5>
      </div>
      <div className="movie-genre">
        <p className="genre">🎬:{genre}</p>
        <p>⏲: {runningTime}</p>
      </div>
      <p className="movie-specs">{summary}</p>
      <Counter />
    </div>
  );
}
