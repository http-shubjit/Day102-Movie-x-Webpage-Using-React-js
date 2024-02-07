import { useEffect } from "react"
import { fetchDataFromApi } from './Utils/Api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from "./Store/Homeslice"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./Components/Header/Header"
import Footer from "./Components/Fotter/Fotter"
import Details from './Pages/Details/Details'
import Explore from './Pages/Explore/Explore'
import Home from "./Pages/Home/Home"
import Pagenot404 from './Pages/Pagenotfound/Pagenot404'
import Searchresult from './Pages/Searchresult/Searchresult'


const App = () => {
  const dispatch = useDispatch()

  const { url } = useSelector((state) => state.home)

  useEffect(() => {
    Fetchapiconfig()
    genresCall()
  }, [])

  const Fetchapiconfig = () => {
    fetchDataFromApi('/configuration')
      .then((res) => {
        // console.log(res)

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original"
        }
        dispatch(getApiConfiguration(url))
      })
      .catch((err) => console.error(err));

  }

  const genresCall = async () => {
    let promises = []
    let endpoints = ["tv", "movie"]
    let allGenres = {}
    endpoints.forEach((url) => {

      promises.push(fetchDataFromApi(`/genre/${url}/list`))

    })

    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      // console.log(data)
      return genres.map((item) => (allGenres[item.id] = item))
    })

    dispatch(getGenres(allGenres))
  }

  // console.log(allGenres)

  return (
    <div className="app">

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />
          } />

          <Route path="/:mediaType/:id" element={<Details />
          } />

          <Route path="/search/:query" element={<Searchresult />
          } />

          <Route path="/explore/:mediaType" element={<Explore />} />

          <Route path="*" element={<Pagenot404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>




    </div >
  )
}

export default App