import { useState } from "react";
import Button from '@mui/material/Button';
import { spacing } from '@mui/system';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';


export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(disLike + 1);
  return (
    <div>
      
      <IconButton  className="like-dislike" onClick={incrementLike} color="primary" aria-label="delete">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton  className="like-dislike" onClick={incrementDisLike} color="error" aria-label="delete">
      <Badge badgeContent={disLike} color="error">
        👎
      </Badge>
      </IconButton>
    </div>
  );
}
