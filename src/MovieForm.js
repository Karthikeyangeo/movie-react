// Function to display the form and to collect the data

import React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function MovieForm({ movie_data, setMovie_data }) {
  // variables for getting data from input
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [runningTime, setRunningTime] = useState("");

  // function to reset the movie form
  const resetMovieForm = () => {
    setName("");
    setPic("");
    setRating("");
    setSummary("");
    setGenre("");
    setRunningTime("");
  };
  // function to add the movie object to array 
  const addMovie = () => {
    const newMovie = { name, pic, summary, rating, genre, runningTime };
    // copy of movies and then add the new movie to it
    setMovie_data([...movie_data, newMovie]);
    resetMovieForm();

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
      value={summary}
      onChange={(event) => setSummary(event.target.value)}
      label="Movie Summary"
      style={new_style} />


    {/* Using button from Material  */}
    <Button variant="contained" onClick={addMovie} style={new_style} className="formButton">Add Movie</Button>

  </div>;
}
