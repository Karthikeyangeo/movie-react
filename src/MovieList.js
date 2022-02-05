import React, { useEffect, useState } from 'react';
import { Movie } from './Movie';
import { useParams,useHistory } from "react-router-dom";
import { Button ,IconButton} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {API} from './global'


function MovieList() {

  // using useState hook to add movie data dynamically 
  const [movie_data , setMovie_data] =useState([]);
   
  // function to display the movies from API
  const getMovies =()=> {
    fetch(`${API}/movies`,{
      method : "GET",
    })  //returns a promise object
    .then((data) => data.json())
    .then((mvs)=>setMovie_data(mvs));
  }

  //getting data from API using useEffect function 
  useEffect(getMovies,[]);


  // to remove the movie when delete button is clicked
  const removeMovie =(id)=>{
    fetch(`${API}/movies/${id}`,{
      method : "Delete",
    }).then(()=> getMovies());

    // console.log(index);
    // const removeIndex = index;

    // // filter fn returns new array without selected movie
    // const remainingMovies = movie_data.filter(
    //   (mv,id)=> id !== removeIndex);
    // setMovie_data(remainingMovies);
  }

  const history = useHistory();

  return (
    <section className="movie-details">
      {movie_data.map(({ name, pic, genre, summary, runningTime, rating,trailer,id,_id},index) => (
        <Movie
          pic={pic}
          name={name}
          genre={genre}
          summary={summary}
          runningTime={runningTime}
          rating={rating} 
          id={_id}
          trailer={trailer}
          deletebutton ={
            <IconButton   color="error" onClick={()=>removeMovie(_id)}>
              < DeleteIcon  />
            </IconButton>}
          editbutton = {
            <IconButton onClick={()=> history.push(`/movies/edit/${_id}`)}>
            <EditIcon  />
          </IconButton>}
          />
      ))}
    </section>
  );
}


          
// function to show the full details of movie based on array index(id ) value
function MovieDetails(){
  const { id } = useParams();
  const history = useHistory();
   // const new_movie = movies[id];

  const [new_movie,setNewMovie] = useState({});
  useEffect(()=> {
    fetch(`${API}/movies/${id}`,{
      method : "GET",
    })  //returns a promise object
    .then((data) => data.json())
    .then((mv)=>setNewMovie(mv));
  },[id]);
 
  
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
          <Button
              onClick={()=>history.goBack()}
              variant="contained"
              startIcon={<KeyboardBackspaceIcon />}
            >
              Back
            </Button>
          </div>
  
}

export{MovieList,MovieDetails};
