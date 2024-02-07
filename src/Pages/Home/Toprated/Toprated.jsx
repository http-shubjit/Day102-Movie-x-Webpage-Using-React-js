import Contentwrapper from '../../../Components/Contentwrapper/Contentwrapper'
import SwitchTabs from '../../../Components/SwitchTabs/SwitchTabs'
import { useState } from 'react'
import Usefetch from '../../../Hooks/Usefetch'
import Carousel from '../../../Components/Carousel/Carousel'

const Toprated = () => {

  const [endpoint, setendpoint] = useState("movie")
  const { data, loading } = Usefetch(`/${endpoint}/top_rated`)
  // console.log("Day/ week"+data)

  const ontabchange = (tab) => {
    setendpoint(tab === "Movies" ? "movie" : "tv")

  }
  return (
    <div className='carouselSection'>
      <Contentwrapper>
        <span className='carouselTitle'>Top Rated</span>
        <SwitchTabs data={["Movies", "Tv shows"]} ontabchange={ontabchange} />
      </Contentwrapper>
      <Carousel data={data?.results}
        loading={loading}
        endpoint={endpoint}
      />
    </div>
  )
}

export default Toprated