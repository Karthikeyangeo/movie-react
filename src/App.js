
import React from 'react';
import './App.css';

import { Movie } from './Movie';
import { useState } from "react";
export default function App() {
  const movie_data = [
    {
      name: "Iron Man",
      pic:
        "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg",
      summary:
        "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.",
      rating: 7.9,
      genre: "Action/Adventure/Sci-fi",
      runningTime: "2h 6m"
    },
    {
      name: "Avengers Endgame",
      pic:
        "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
      summary:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      rating: 9.4,
      genre: "Action/Adventure/Sci-fi",
      runningTime: "3h 2m"
    },
    {
      name: "Interstellar",
      pic:
        "https://doms2cents.com/wp-content/uploads/2021/09/interstellar-et00019066-19-02-2021-02-25-12.jpg",
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      rating: 8.6,
      genre: "Sci-fi/Adventure",
      runningTime: "2h 49m"
    },
    {
      name: "M.S. Dhoni: The Untold Story",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/3/33/M.S._Dhoni_-_The_Untold_Story_poster.jpg",
      summary:
        "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
      rating: 7.9,
      genre: "Sport/Drama/Biopic",
      runningTime: "3h 40m"
    },
    {
      name: "Southpaw",
      pic:
        "https://i.pinimg.com/originals/58/3f/06/583f062659b8ea30771871c5b770104f.jpg",
      rating: 7.4,
      genre: "Drama/Sport",
      runningTime: "2h 4m",
      summary:
        "Boxer Billy Hope hits rock-bottom after losing his family and falls into depression. His encounter with a former boxer gives him hope to stand up once again."
    }
  ];
  const [name,setName] = useState("");
  const[pic,setPic] = useState("");
  const[summary,setSummary] = useState("");
  const[rating,setRating] = useState("");
  const[genre,setGenre]= useState("");
  const[runningTime,setRunningTime]=useState("");
  return (
    <div className="App">
      <div className="movie-form">
        <input onChange={(event)=>setName(event.target.value)}placeholder="Enter a movie name" />
        <input onChange={(event)=>setPic(event.target.value)}placeholder="Enter a poster url" />
        <input onChange={(event)=>setRating(event.target.value)}placeholder="Enter movie rating" />
        <input onChange={(event)=>setGenre(event.target.value)}placeholder="Enter a movie genre" />
        <input onChange={(event)=>setRunningTime(event.target.value)}placeholder="Enter a movie running time" />
        <input onChange={(event)=>setSummary(event.target.value)}placeholder="Enter a movie Summary" />
        <button onClick={()=>{}}>Add Movie</button>
      </div>
      <div className="movie-details">
        {movie_data.map((x) => (
          <Movie
            pic={x.pic}
            name={x.name}
            genre={x.genre}
            summary={x.summary}
            runningTime={x.runningTime}
            rating={x.rating}
          />
        ))}
      </div>
    </div>
  );
}


