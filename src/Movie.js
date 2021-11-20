import { useState } from "react";
import { Counter } from "./Counter";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router";



function Movie({ name, pic, rating, genre, runningTime, summary,id ,trailer,editbutton,deletebutton}) {
  const[show,setShow] = useState(true);
  const history = useHistory();
  const styles ={ display: show ? "block" : "none"};

  return ( 
    <Card  className="movie-container">
        <img className="moviepic" alt={name} src={pic} />
      <CardContent>
        <div className="movie_name_rating">
          <h1 className="movie-name">{name}</h1>
          <h5 class="rating-star">⭐ {rating}</h5>
        </div>
        <div className="movie-genre">
          <p className="genre">🎬:{genre}</p>
          <IconButton onClick={()=>history.push(`/movies/${id}`)} color="primary" >
          <InfoIcon />
          </IconButton>
          {/* Conditional rendering */}
          <IconButton onClick={()=>setShow(!show)} color="primary" >
            {show ? <ExpandLessIcon />:<ExpandMoreIcon />}
          </IconButton>
        </div>
        <p>⏲: {runningTime}</p>
        <p style={styles} className="movie-specs">{summary}</p>
        </CardContent>
        
        <CardActions className="card-footer">
        <Counter />
        <div className="edit-tools">
         {editbutton}
         {deletebutton}
        </div>
      </CardActions>
    </Card >
  );
}



export{Movie};
