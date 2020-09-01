import React, { useState } from "react";
import { Info } from "./Style";
import Player from "react-player";

function Video() {
  const [completed, setCompleted] = useState(false);

  function handleCompleted(state) {
    if (state.played >= 0.8 && !completed) {
      setCompleted(true);
      console.log(state.played);
    }
  }
  return (
    <>
      <Player
        width="720px"
        height="420px"
        controls={true}
        onProgress={handleCompleted}
        url="https://www.youtube.com/watch?v=Rq5SEhs9lws"
      />
      <div>
        {completed ? (
          <Info>you have successfully completed watching the video !! </Info>
        ) : null}
      </div>
    </>
  );
}

export default Video;
