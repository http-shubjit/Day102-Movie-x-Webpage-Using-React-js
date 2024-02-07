
import React from "react";
import ReactPlayer from "react-player/youtube";
import "./Videopopup.scss";

const Videopopup = ({ show, setshow, videoid, setvideoid }) => {
  const hidePopup = () => {
    setshow(false);
    setvideoid(null);
  };
  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoid}`}
          controls
          width="100%"
          height="100%"
        // playing={true}
        />
      </div>
    </div>
  );
};

export default Videopopup;