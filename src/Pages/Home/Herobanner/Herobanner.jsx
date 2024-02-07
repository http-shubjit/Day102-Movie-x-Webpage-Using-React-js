import React, { useState } from 'react'
import './Herobanner.scss'
import { useNavigate } from 'react-router-dom'
import Usefetch from '../../../Hooks/Usefetch'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Img from '../../../Components/Lazyloadimage/Img'
import Contentwrapper from '../../../Components/Contentwrapper/Contentwrapper'

const Herobanner = () => {

  const [background, setbackground] = useState("")
  const [query, setquery] = useState("")
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home)
  const { data, loading } = Usefetch("/movie/upcoming")

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)].backdrop_path
    setbackground(bg)
  }, [data]);


  const searchqueryhandler = (event) => {
    // console.log(event)
    if (event.key === "Enter" && query.length > 0 || event.type === "click" && query.length > 0) {

      navigate(`/search/${query}`)
    }
  }
  return (
    <div className='herobanner'>

      {!loading && <div className="backdropimg">
        <Img src={background} />
      </div>
      }
      <div className="opacitylayer">


      </div>

      <Contentwrapper>
        <div className="herobannercontent">
          <span className="tittle">Welcome.</span>
          <span className="subtittle">Millions of Movies , TV shows and people to discover. Explore Now</span>

          <div className="searchinput">
            <input type="text"
              placeholder="Search for a movie or tv show..."
              onChange={(e) => setquery(e.target.value)}
              value={query}
              onKeyUp={searchqueryhandler}
            />
            <button onClick={(e) => searchqueryhandler(e)}> Search</button>
          </div>

        </div>
      </Contentwrapper>




    </div >
  )
}

export default Herobanner