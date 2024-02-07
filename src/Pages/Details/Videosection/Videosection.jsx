import React, { useState } from "react";

import "./Videosection.scss";


import Img from "../../../Components/Lazyloadimage/Img";
import Videopopup from "../../../Components/Videopopup/Videopopup";
import Contentwrapper from "../../../Components/Contentwrapper/Contentwrapper";
import { Playicon } from "../Playicon";

const Videosection = ({ data, loading }) => {
  const [show, setshow] = useState(false);
  const [videoid, setvideoid] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videosSection">
      <Contentwrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video) => (
              <div
                key={video.id}
                className="videoItem"
                onClick={() => {
                  setvideoid(video.key);
                  setshow(true);
                }}
              >
                <div className="videoThumbnail">
                  <Img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <Playicon />
                </div>
                <div className="videoTitle">{video.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </Contentwrapper>
      <Videopopup
        show={show}
        setshow={setshow}
        videoid={videoid}
        setvideoid={setvideoid}
      />
    </div>
  );
};

export default Videosection;