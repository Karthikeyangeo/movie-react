// Function to display the form and to collect the data

import React from 'react';
import { useState,useEffect } from "react";
import { useHistory ,useParams} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function EditMovie() {
  // getting id from clicked element
  const {id}= useParams();
  // using ID the object is selected
  const [selectedMovie,setSelectedMovie] = useState(null);
  useEffect (()=> {
    fetch(`https://61988db0164fa60017c230f1.mockapi.io/movies/${id}`,{
      method:"GET",
    })
    .then((data)=> data.json())
    .then((editmv) => setSelectedMovie(editmv))
  },[]);


  console.log('selectedmovie',selectedMovie);

  return selectedMovie ?<UpdatedMovie selectedMovie={selectedMovie} />: "";
}

function UpdatedMovie({selectedMovie}){
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
    const updMovie = { name, pic, summary, rating, genre, runningTime ,trailer};
    
    fetch(`https://61988db0164fa60017c230f1.mockapi.io/movies/${selectedMovie.id}`,{
      method : "PUT",
      body : JSON.stringify(updMovie),
      headers :{'content-type':'application/json'}
    })  //returns a promise object
      .then(()=>history.push("/MovieList"))
    
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

  </div>
}
