
import React from 'react';
import './App.css';

import { useState,useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { MovieList , MovieDetails} from './MovieList';
import { AddColor } from './AddColor';
import {EditMovie} from './EditMovie';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';




// Importing router dom 
import { Switch, Route, Link } from "react-router-dom";
import { NotFound } from './NotFound';
import { MovieForm } from './MovieForm';
import { INITIAL_MOVIES } from './INITIAL_MOVIES';

export default function App() {
 
  // using useState hook to add movie data dynamically 
    const [movie_data , setMovie_data] =useState([]);
   
    useEffect(()=> {
      fetch(`https://61988db0164fa60017c230f1.mockapi.io/movies`,{
        method : "GET",
      })  //returns a promise object
      .then((data) => data.json())
      .then((mvs)=>setMovie_data(mvs));
    },[]  );
  


    const history = useHistory();
  
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick = {()=> history.push('/')}
          >
            Home
          </IconButton>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Movie Form"
            sx={{ mr: 2 }}
            onClick = {()=> history.push('/Movie-form')}
          >
            Movie Form
          </IconButton>
          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Movies"
            sx={{ mr: 2 }}
            onClick = {()=> history.push('/MovieList')}
          >
            Movies
          </IconButton>
          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Color Game"
            sx={{ mr: 2 }}
            onClick = {()=> history.push('/color-game')}
          >
            Color Game
          </IconButton>
          
        </Toolbar>
      </AppBar>

        <Switch>
          {/* Each route is case, eg. - case '/about': */}
        
        <Route path="/Movie-form">
          < MovieForm 
            movie_data={movie_data}
            setMovie_data={setMovie_data}
          />
        </Route>
        <Route path="/MovieList">
          {/* Matcht url display the below component */}
          <MovieList movie_data={movie_data} setMovie_data={setMovie_data}/>
        </Route>
        <Route path="/movies/edit/:id">
          <EditMovie 
          movie_data={movie_data}
          setMovie_data={setMovie_data}/>
        </Route>
        <Route path="/movies/:id">
          <MovieDetails 
           movies={movie_data}
          />
        </Route>
        
              
        <Route path="/color-game">
          <AddColor />
        </Route>
        
        <Route exact path ="/">
          <div className="home-page-content">
            <h1>Welcome to the movie App</h1> 
          </div>
        </Route>

        <Route path="**">
          <NotFound />
        </Route>

        </Switch>
     
      
    </div>
  );

  
}



