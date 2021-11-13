
import React from 'react';
import './App.css';

import { useState } from "react";
import { MovieList , MovieDetails} from './MovieList';
import { AddColor } from './AddColor';

// Material components


// Importing router dom 
import { Switch, Route, Link } from "react-router-dom";
import { NotFound } from './NotFound';
import { MovieForm } from './MovieForm';
import { INITIAL_MOVIES } from './INITIAL_MOVIES';

export default function App() {
 
  // using useState hook to add movie data dynamically 
    const [movie_data , setMovie_data] =useState(INITIAL_MOVIES);

  
  
  return (
    <div className="App">
      <div className="lists">
         {/* Change the url bar but dont refresh */}
        <ul>
          <li>
              <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/Movie-form">Movie Form</Link>
          </li>
          <li>
            <Link to ="/Movie-List">Movies</Link>
          </li>
          <li>
            <Link to="/color-game">Color Game</Link>
          </li>
          
        </ul>
      
      <hr />
        <Switch>
          {/* Each route is case, eg. - case '/about': */}
        
        <Route path="/Movie-form">
          < MovieForm 
            movie_data={movie_data}
            setMovie_data={setMovie_data}
          />
        </Route>

        <Route path="/movies/:id">
          <MovieDetails 
           movies={movie_data}
          />
        </Route>
        <Route path="/Movie-List">
          {/* Matcht url display the below component */}
          <MovieList movie_data={movie_data} setMovie_data={setMovie_data}/>
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
      
    </div>
  );

  
}



