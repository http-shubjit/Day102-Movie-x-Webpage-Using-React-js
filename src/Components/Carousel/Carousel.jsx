import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import Contentwrapper from "../Contentwrapper/Contentwrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import './Carousel.scss'
import CircleRating from '../CircleRating/CircleRating'
import Genres from '../Genres/Genres'

const Carousel = ({ data, loading, endpoint, title }) => {

  const caroselContainer = useRef()
  const { url } = useSelector((state) => state.home)
  const navigate = useNavigate();

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton">

        </div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    )
  }

  const navigation = (dir) => {
    const container = caroselContainer.current;
    const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20)

    container.scrollTo({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <div className="carousel">

      <Contentwrapper>
        {title && <div className="carouselTitle">{title}</div>}

        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />

        <BsFillArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigation("right")}
        />

        {!loading ?
          (<div className="carouselItems"
            ref={caroselContainer}
          >
            {data?.map((item) => {
              const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback
              return (<div key={item.id}
                className="carouselItem"
                onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}
              >
                <div className="posterBlock">
                  <Img src={posterUrl} />

                  <CircleRating rating={item.vote_average.toFixed(1)} />
                  <Genres data={item.genre_ids.slice(0, 2)} />
                </div>

                <div className="textBlock">
                  <span className="title">
                    {item.title || item.name}
                  </span>
                  <span className="title">
                    {dayjs(item.release_date).format("MM D, YYYY")}
                  </span>
                </div>

              </div>)
            })}
          </div>)
          : (
            <div className="loadingSkeleton">

              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}

            </div>)}



      </Contentwrapper>


    </div>
  )
}

export default Carousel