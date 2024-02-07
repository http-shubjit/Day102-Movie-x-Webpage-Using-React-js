import React from 'react'
import './Home.scss'
import Herobanner from './Herobanner/Herobanner'
import Trending from './Trending/Trending'
import Popular from './Popular/Popular'
import Toprated from './Toprated/Toprated'

const Home = () => {
  return (
    <div className='homepage'>
      <Herobanner />
      <Trending />
      <Popular />
      <Toprated />



    </div>
  )
}

export default Home