import '../../Home/Home.scss'
import Contentwrapper from '../../../Components/Contentwrapper/Contentwrapper'
import SwitchTabs from '../../../Components/SwitchTabs/SwitchTabs'
import { useState } from 'react'
import Usefetch from '../../../Hooks/Usefetch'
import Carousel from '../../../Components/Carousel/Carousel'

const Trending = () => {

  const [endpoint, setendpoint] = useState("day")
  const { data, loading } = Usefetch(`/trending/all/${endpoint}`)
  // console.log("Day/ week"+data)

  const ontabchange = (tab) => {
    setendpoint(tab === "Day" ? "day" : "week")

  }
  return (
    <div className='carouselSection'>
      <Contentwrapper>
        <span className='carouselTitle'>Trending</span>
        <SwitchTabs data={["Day", "Week"]} ontabchange={ontabchange} />
      </Contentwrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending