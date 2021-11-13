// Function to display the form and to collect the data

import React from 'react';
import { useState } from "react";
import { useHistory ,useParams} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function EditMovie({ movie_data, setMovie_data }) {
  const {id}= useParams();
  const selectedMovie = movie_data[id];
  console.log('selectedmovie',selectedMovie);
  const [name, setName] = useState(selectedMovie.name);
  const [pic, setPic] = useState(selectedMovie.pic);
  const [summary, setSummary] = useState(selectedMovie.summary);
  const [rating, setRating] = useState(selectedMovie.rating);
  const [genre, setGenre] = useState(selectedMovie.genre);
  const [runningTime, setRunningTime] = useState(selectedMovie.runningTime);
  const [trailer,setTrailer] =useState(selectedMovie.trailer);
  const history = useHistory();
  
  

  // function to reset the movie form
  const resetMovieForm = () => {
    
    setName("");
    setPic("");
    setRating("");
    setSummary("");
    setGenre("");
    setRunningTime("");
    setTrailer("");
  };
  // function to add the movie object to array 
  const editMovie = () => {
    const updatedMovie = { name, pic, summary, rating, genre, runningTime ,trailer};
    // copy of movies and then add the new movie to it
    const copyMovies = [...movie_data];
    copyMovies[id] = updatedMovie;
    setMovie_data(copyMovies);
    resetMovieForm();
    history.push("/MovieList");

  };


  const new_style = { width: '30%' };
  return <div className="movie-form">


    <TextField

      value={name}
      onChange={(event) => setName(event.target.value)}
      label="Movie name"
      variant="outlined"
      style={new_style} />
    <TextField

      value={pic}
      onChange={(event) => setPic(event.target.value)}
      label="Movie poster url"
      style={new_style} />
    <TextField

      value={rating}
      onChange={(event) => setRating(event.target.value)}
      label="Movie rating"
      style={new_style} />


    <TextField

      value={genre}
      onChange={(event) => setGenre(event.target.value)}
      label="Movie genre"
      style={new_style} />
    <TextField

      value={runningTime}
      onChange={(event) => setRunningTime(event.target.value)}
      label="Movie running time"
      style={new_style} />

    <TextField

      value={trailer}
      onChange={(event) => setTrailer(event.target.value)}
      label="Movie trailer"
      style={new_style} />

    <TextField
      value={summary}
      onChange={(event) => setSummary(event.target.value)}
      label="Movie Summary"
      style={new_style} />


    {/* Using button from Material  */}
    <Button variant="contained" color="success" onClick={editMovie} style={new_style} className="formButton">Save Movie</Button>

  </div>;
}
