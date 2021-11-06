import { useState } from "react";
import Button from '@mui/material/Button';
import { spacing } from '@mui/system';


export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(disLike + 1);
  return (
    <div>
      
      <Button sx={{ m: 2 }}variant="outlined" className="like-dislike" onClick={incrementLike}>
        👍{like}
      </Button>
      <Button variant="outlined" className="like-dislike" onClick={incrementDisLike}>
        👎{disLike}
      </Button>
    </div>
  );
}
