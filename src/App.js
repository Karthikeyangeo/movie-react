
import React ,{useState} from 'react';
import './App.css';


import { useHistory } from 'react-router-dom';
import { MovieList , MovieDetails} from './MovieList';
import { AddColor } from './AddColor';
import {EditMovie} from './EditMovie';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';

// Importing router dom 
import { Switch, Route } from "react-router-dom";
import { NotFound } from './NotFound';
import { MovieForm } from './MovieForm';
import { BasicForm } from './BasicForm';




export default function App() {
 
    const[ appMode,setAppMode ] = useState("dark");
    const history = useHistory();
    const theme = createTheme({
          palette: {
            mode: appMode,
          }
        });
    const paperStyles = { borderRadius : 0 , minHeight: "100vh"}
  return (

    <ThemeProvider theme={theme}>
    <Paper elevation={3} style={paperStyles}>
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
          
          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Basic Form"
            sx={{ mr: 2 }}
            onClick = {()=> history.push('/basic-form')}
          >
            Basic Form
          </IconButton>
          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Mode"
            sx={{ mr: 2 }}      
            style={{marginLeft:"auto"}}    
            onClick = { ()=> setAppMode(appMode === 'dark' ? 'light':'dark')}
          >
            {appMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} Mode
          </IconButton>
          
        </Toolbar>
      </AppBar>

        <Switch>
          {/* Each route is case, eg. - case '/about': */}
        
        <Route path="/Movie-form">
          < MovieForm />
        </Route>
        <Route path="/MovieList">
          {/* Matcht url display the below component */}
          <MovieList />
        </Route>
        <Route path="/movies/edit/:id">
          <EditMovie />
        </Route>
        <Route path="/basic-form">
          <BasicForm />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
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
    </Paper>
    </ThemeProvider>
  );

  
}



