
import React from "react";
import './Pagenot404.scss'
import Contentwrapper from "../../Components/Contentwrapper/Contentwrapper";

const Pagenot404 = () => {
  return (
    <div className="pageNotFound">
      <Contentwrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </Contentwrapper>
    </div>
  );
};

export default Pagenot404;