import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchDataFromApi } from '../../Utils/Api'
import Spinner from '../../Components/Spinner/Spinner'
import Contentwrapper from '../../Components/Contentwrapper/Contentwrapper'
import noResult from '../../assets/no-results.png'
import './Searchresult.scss'
import Moviecard from '../../Components/Moviecard/Moviecard'

const Searchresult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchintiadata = () => {
    setLoading(true)
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      setData(res)
      setPageNum((prev) => prev + 1)
      setLoading(false)
    })
  }
  const fetchNextpagedata = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
      .then((res) => {
        // console.log(data.results)
        if (data?.results) {
          setData({ ...data, results: [...data?.results, ...res.results] })

        }
        else {
          setData(res)
        }
        setPageNum((prev) => prev + 1)
      })
  }

  useEffect(() => {
    // console.log('Query:', query);
    setPageNum(1)
    fetchintiadata()
  }, [query])

  return (
    <div className='searchResultsPage'>
      {loading && <Spinner initial={true} />}
      {!loading && (
        <Contentwrapper>

          {data?.results?.length > 0 ?
            (
              <>
                <div className="pageTitle">
                  {`Search ${data?.total_results > 1 ? "Results of " : "Result of "}  '${query}'`}

                </div>
                <InfiniteScroll
                  className="content"
                  dataLength={data?.results.length || []}
                  next={fetchNextpagedata}
                  hasMore={pageNum <= data?.total_pages}
                  loader={<Spinner />}
                >
                  {data.results.map((item, index) => {
                    if (item.media_type === "person") return;
                    return (<Moviecard key={index} data={item} fromSearch={true} />)


                  })}
                </InfiniteScroll>

              </>

            ) : (<span className="resultNotFound">
              Sorry, Results Not  Found</span>)}

        </Contentwrapper>
      )}
    </div>
  )
}

export default Searchresult