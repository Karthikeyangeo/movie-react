import React from 'react';
import { Movie } from './Movie';
import { useParams,useHistory } from "react-router-dom";
import { Button ,IconButton} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function MovieList({movie_data,setMovie_data}) {

  // to remove the movie when delete button is clicked
  const removeMovie =(index)=>{
    console.log(index);
    const removeIndex = index;

    // filter fn returns new array without selected movie
    const remainingMovies = movie_data.filter(
      (mv,id)=> id !== removeIndex
    );
    setMovie_data(remainingMovies);
  }

  return (
    <section className="movie-details">
      {movie_data.map(({ name, pic, genre, summary, runningTime, rating,trailer},index) => (
        <Movie
          pic={pic}
          name={name}
          genre={genre}
          summary={summary}
          runningTime={runningTime}
          rating={rating} 
          index={index}
          trailer={trailer}
          deletebutton ={
            <IconButton   color="error">
              < DeleteIcon 
              onClick={()=>removeMovie(index)} />
            </IconButton>}
          editbutton = {
            <IconButton >
            <EditIcon onClick={()=> console.log("hi")} />
          </IconButton>}
          />
      ))}
    </section>
  );
}


          
// function to show the full details of movie based on array index(id ) value
function MovieDetails({movies}){
  const { id } = useParams();
  const new_movie = movies[id];
  const history = useHistory();
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
