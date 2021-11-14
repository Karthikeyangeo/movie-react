import React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function AddColor() {
  const [color, setColor] = useState("");
  const styles = { backgroundColor: color };
  const [colors, setColors] = useState(["pink", "orange", "crimson", "violet"]);

  return (
    <div className="colorbox">
      <div className="inputBox">
        <TextField
          style={styles}
          className = "colorInput"
          onChange={(event) => setColor(event.target.value)}
          label="Enter a color"
          variant="outlined"
          />
        <Button variant="contained"  onClick={() => setColors([...colors, color])}>Add Color</Button>
      </div>
      {colors.map((clr) => (
        <ColorBox clr={clr} />
      ))}
    </div>
  );
}

export function ColorBox({clr}){

    const styles = {
      backgroundColor : clr, 
      height: "50px",
      width:"200px",
      margin:"10px  0px"
    }

    return(
      <div style = {styles}></div>
    )
  }