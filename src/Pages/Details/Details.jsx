import React from 'react'
import './Details.scss'

import Usefetch from '../../Hooks/Usefetch'
import { useParams } from 'react-router-dom'
import Detailsbanner from './Detailsbanner/Detailsbanner'
import Cast from './Cast/Cast'
import Videosection from './Videosection/Videosection'
import Similar from '../Details/Carousels/Similar'
import Recommendation from '../Details/Carousels/Recommendation'


const Details = () => {
  const { mediaType, id } = useParams()
  const { data, loading } = Usefetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsloading } = Usefetch(`/${mediaType}/${id}/credits`)
  console.log(credits)
  return (
    <div>
      <Detailsbanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsloading} />
      <Videosection data={data} loading={loading} />
      <Similar
        mediaType={mediaType}
        id={id}
      />
      <Recommendation
        mediaType={mediaType}
        id={id}
      />
    </div>
  )
}

export default Details