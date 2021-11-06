import { useState } from "react";


export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div>
      <button className="like-dislike" onClick={() => setLike(like + 1)}>
        👍{like}
      </button>
      <button className="like-dislike" onClick={() => setDisLike(disLike + 1)}>
        👎{disLike}
      </button>
    </div>
  );
}
