import React from "react";
import { useSelector } from "react-redux";

import "./Cast.scss";


import avatar from "../../../assets/avatar.png";
import Contentwrapper from "../../../Components/Contentwrapper/Contentwrapper";
import Img from "../../../Components/Lazyloadimage/Img";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">

      <Contentwrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item) => {
              let imgUrl = item.profile_path
                ? url.profile + item.profile_path
                : avatar;
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg">
                    <Img src={imgUrl} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">
                    {item.character}
                  </div>
                </div>
              );
            })}

            {/* {data.map((item) => {
              let imgurl = item.profile_path ? url.item + item.profile_path : avatar
              return (
                <div
                  key={item.id}
                  className="listItem">
                  <div className="profileImg">
                    <Img src={imgurl} />
                  </div>
                  <div className="name">
                    {item.name}
                  </div>
                  <div className="character">
                    {item.character}
                  </div>
                </div>
              )
            })} */}

          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </Contentwrapper>
    </div>
  );
};

export default Cast;