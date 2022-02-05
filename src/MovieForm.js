// Function to display the form and to collect the data

import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from  "formik";
import * as yup from 'yup';
import {API} from './global'

const formValidationSchema = yup.object({
  name: yup.string().required("Mandatory Field"),
  pic : yup.string().required("Mandatory Field").min(4,"Please share proper link"),
  summary : yup.string().required("Mandatory Field").min(25,"Please tell us story in more than 25 chars"),
  rating :yup.number("Please enter number").required("Mandatory Field").min(0,"Minimum value not less than 0").max(10 ,"Max value is 10"),
  genre :yup.string().required("Mandatory Field"),
  runningTime:yup.string().required("Mandatory Field"),
  trailer:yup.string().required("Mandatory Field").matches('embed',"Please share embeded code")

})

export function MovieForm() {

  const {handleSubmit,values,handleBlur,handleChange,errors,touched} = useFormik({
    initialValues:{name:"",pic:"",summary:"",rating:"",genre:"",runningTime:"",trailer:""},
    validationSchema:formValidationSchema,
    onSubmit:(newMovie)=>{
      console.log("On Submit",newMovie);
      addMovie(newMovie)
    }
  })
  // variables for getting data from input
  // const [name, setName] = useState("");
  // const [pic, setPic] = useState("");
  // const [summary, setSummary] = useState("");
  // const [rating, setRating] = useState("");
  // const [genre, setGenre] = useState("");
  // const [runningTime, setRunningTime] = useState("");
  // const [trailer,setTrailer] = useState("");
  const history = useHistory();

  // function to add the movie object to array 
  const addMovie = (newMovie) => {
    // const newMovie = { name : values.name, pic:values.pic, summary:values.summary, rating:values.rating, genre:values.genre, runningTime:values.runningTime ,trailer:values.trailer};
   

    fetch(`${API}/movies`,{
      method : "POST",
      body : JSON.stringify([newMovie]),
      headers :{'content-type':'application/json'}
    })  //returns a promise object
      .then(()=>history.push("/MovieList"))
    

  };


  const new_style = { width: '30%' };
  return( 
    <form onSubmit={handleSubmit}>
      <div className="movie-form">


      <TextField
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        label="Movie name"
        variant="outlined"
        onBlur={handleBlur}
        style={new_style} 
        error={errors.name && touched.name}
        helperText = {errors.name && touched.name ? errors.name : ""}/>
      
      <TextField
        id="pic"
        name="pic"
        value={values.pic}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Movie poster url"
        style={new_style} 
        error={errors.pic && touched.pic}
        helperText = {errors.pic && touched.pic ? errors.pic : ""}/>
      
      <TextField
        id="rating"
        name="rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Movie rating"
        style={new_style} 
        error={errors.rating && touched.rating }
        helperText = {errors.rating && touched.rating ? errors.rating : ""}/>


      <TextField
        id="genre"
        name="genre"
        value={values.genre}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Movie genre"
        style={new_style} 
        error = {errors.genre && touched.genre}
        helperText = {errors.genre && touched.genre ? errors.genre : ""}/>
      
      <TextField
        id="runningTime"
        name="runningTime"
        value={values.runningTime}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Movie running time"
        style={new_style} 
        error={errors.runningTime && touched.runningTime}
        helperText = {errors.runningTime && touched.runningTime ? errors.runningTime : ""}/>
      
      <TextField
        id="trailer"
        name="trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Movie trailer"
        placeholder="Enter the embeded code"
        style={new_style} 
        error={errors.trailer && touched.trailer}
        helperText = {errors.trailer && touched.trailer ? errors.trailer :""}/>
      
      <TextField
        id="summary"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Movie Summary"
        style={new_style} 
        error={errors.summary && touched.summary}
        helperText = {errors.summary && touched.summary ? errors.summary : ""}/>


      {/* Using button from Material  */}
      <Button variant="contained" type="submit" style={new_style} className="formButton">Add Movie</Button>

    </div>
  </form>
  )
}
