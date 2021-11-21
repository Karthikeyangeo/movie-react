// Function to display the form and to collect the data

import React from 'react';
import { useState,useEffect } from "react";
import { useHistory ,useParams} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from  "formik";
import * as yup from 'yup';

const formValidationSchema = yup.object({
  name: yup.string().required("Mandatory Field"),
  pic : yup.string().required("Mandatory Field").min(4,"Please share proper link"),
  summary : yup.string().required("Mandatory Field").min(25,"Please tell us story in more than 25 chars"),
  rating :yup.number("Please enter number").required("Mandatory Field").min(0,"Minimum value not less than 0").max(10 ,"Max value is 10"),
  genre :yup.string().required("Mandatory Field"),
  runningTime:yup.string().required("Mandatory Field"),
  trailer:yup.string().required("Mandatory Field").matches('embed',"Please share embeded code")

})
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

  const {handleSubmit,values,handleBlur,handleChange,errors,touched} = useFormik({
    initialValues:{
      name:selectedMovie.name,
      pic:selectedMovie.pic,
      summary:selectedMovie.summary,
      rating:selectedMovie.rating,
      genre:selectedMovie.genre,
      runningTime:selectedMovie.runningTime,
      trailer:selectedMovie.trailer
    },
    validationSchema:formValidationSchema,
  })
  // const [name, setName] = useState(selectedMovie.name);
  // const [pic, setPic] = useState(selectedMovie.pic);
  // const [summary, setSummary] = useState(selectedMovie.summary);
  // const [rating, setRating] = useState(selectedMovie.rating);
  // const [genre, setGenre] = useState(selectedMovie.genre);
  // const [runningTime, setRunningTime] = useState(selectedMovie.runningTime);
  // const [trailer,setTrailer] =useState(selectedMovie.trailer);
  const history = useHistory();
  
  

  // function to reset the movie form
  // const resetMovieForm = () => {
    
  //   setName("");
  //   setPic("");
  //   setRating("");
  //   setSummary("");
  //   setGenre("");
  //   setRunningTime("");
  //   setTrailer("");
  // };
  // function to add the movie object to array 
  const editMovie = () => {
    const updMovie = { name : values.name, pic:values.pic, summary:values.summary, rating:values.rating, genre:values.genre, runningTime:values.runningTime ,trailer:values.trailer};
    
    fetch(`https://61988db0164fa60017c230f1.mockapi.io/movies/${selectedMovie.id}`,{
      method : "PUT",
      body : JSON.stringify(updMovie),
      headers :{'content-type':'application/json'}
    })  //returns a promise object
      .then(()=>history.push("/MovieList"))
    
  };


  const new_style = { width: '30%' };
  return (
  <form onSubmit={handleSubmit}>
    <div className="movie-form">


    <TextField
      id="name"
      value={values.name}
      onChange={handleChange}
      label="Movie name"
      variant="outlined"
      onBlur={handleBlur}
      style={new_style} 
      helperText = {errors.name && touched.name ? errors.name : ""}/>
    
    <TextField
      id="pic"
      value={values.pic}
      onChange={handleChange}
      onBlur={handleBlur}
      label="Movie poster url"
      style={new_style} 
      helperText = {errors.pic && touched.pic ? errors.pic : ""}/>
    
    <TextField
      id="rating"
      value={values.rating}
      onChange={handleChange}
      onBlur={handleBlur}
      label="Movie rating"
      style={new_style} 
      helperText = {errors.rating && touched.rating ? errors.rating : ""}/>


    <TextField
      id="genre"
      value={values.genre}
      onChange={handleChange}
      onBlur={handleBlur}
      label="Movie genre"
      style={new_style} 
      helperText = {errors.genre && touched.genre ? errors.genre : ""}/>
    
    <TextField
      id="runningTime"
      value={values.runningTime}
      onChange={handleChange}
      onBlur={handleBlur}
      label="Movie running time"
      style={new_style} 
      helperText = {errors.runningTime && touched.runningTime ? errors.runningTime : ""}/>
    
    <TextField
      id="trailer"
      value={values.trailer}
      onChange={handleChange}
      onBlur={handleBlur}
      label="Movie trailer"
      placeholder="Enter the embeded code"
      style={new_style} 
      helperText = {errors.trailer && touched.trailer ? errors.trailer :""}/>
    
    <TextField
      id="summary"
      value={values.summary}
      onChange={handleChange}
      onBlur={handleBlur}
      label="Movie Summary"
      style={new_style} 
      helperText = {errors.summary && touched.summary ? errors.summary : ""}/>


    {/* Using button from Material  */}
    <Button variant="contained" onClick={editMovie} style={new_style} className="formButton">Save Movie</Button>

  </div>
</form>
  )
}
