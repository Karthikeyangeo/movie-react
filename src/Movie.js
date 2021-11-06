import { useState } from "react";
import { Counter } from "./Counter";
import Button from '@mui/material/Button';

export function Movie({ name, pic, rating, genre, runningTime, summary }) {
  const[show,setShow] = useState(true);
  const styles ={ display: show ? "block" : "none"};

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
      
      <Button variant="text" onClick={()=>setShow(!show)}style={{marginBottom: "10px"}}>
        {show ? "Hide" : "Show"} Description</Button>
      <p style={styles} className="movie-specs">{summary}</p>
      <Counter />
    </div>
  );
}
