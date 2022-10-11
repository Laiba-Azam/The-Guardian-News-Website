import React, { useEffect, useState } from 'react'
import Newsitem from './NewsIt'
import Spin from './Spin'
import InfiniteScroll from "react-infinite-scroll-component";

const Newss = (props) => {
  const [articles, setarticles] = useState([])
  const [page, setpage] = useState(1)
  const [loading, setloading] = useState(true)
  const [totalResults, settotalresults] = useState(0)
 
  // document.title=`${this.props.category}-NewsMonkey`
  // static defaultProps={
  //   country:"in",
  //   pageSize:9,
  //   category:"general"
  // }
  // static propTypes={
  //   country:PropTypes.string,
  //   pageSize:PropTypes.number,
  //   category:PropTypes.string,
  // }

  // constructor is where you set state when work on class base componenet
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     articles: [],
  //     page:1,
  //     loading:false,
  //     totalResults:0

  //   }
  //   document.title=`${this.props.category}-NewsMonkey`
  // }
  // jab render run hojaiga uskay baad component did mount hoga to populate newsfeed witj latest news
  // asyn wait karega data k fetch hona ka await yani or phir humain data dega like jab tak sara data fetch nhi hoga ur say tab tak it will wait
  // async update(){
  //   this.props.setProgress(0)
  //   let ur=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b76001c145994bca80be22c2b9f7f847&page=${this.state.page}&pageSize=${this.props.pageSize}`
  //   this.props.setProgress(30)


  //   let data=await fetch(ur)
  //   let parseddata= await data.json()
  //   this.props.setProgress(600)

  //   this.setState({articles:parseddata.articles,
  //     totalResults:parseddata.totalResults,
  //    })
  //    this.props.setProgress(100)


  // }

  const update=async()=>{
    props.setProgress(0)

    let ur=`https://content.guardianapis.com/search?api-key=15ebaed4-bcef-47c3-94a6-3a28fa82300e&page=${page}&q=${props.q}&show-fields=thumbnail`
    setloading(false)
    props.setProgress(30)
    let data=await fetch(ur)
    let parseddata= await data.json()
    props.setProgress(60)
    setarticles(articles.concat(parseddata.response))

    settotalresults(parseddata.response.total)
     props.setProgress(100)

  }


  useEffect(() => {
    
    update()
     // eslint-disable-next-line react-hooks/exhaustive-deps
    
  }, [])

  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs

  let ur=`https://content.guardianapis.com/search?api-key=15ebaed4-bcef-47c3-94a6-3a28fa82300e&page=${page}&q=${props.q}&show-fields=thumbnail`
  setloading(false)
  setpage(page+1)
  let data=await fetch(ur)
  let parseddata= await data.json()
  setarticles(articles.concat(parseddata.response))
  settotalresults(parseddata.response.total) 

  }
  return (
    <>

      <h2 className='text-center' style={{ marginTop: "50px" }} >{`The Guardian Top ${props.q} Headlines`}</h2>
      {loading && <Spin />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spin />}
      >
        <div className="container my-3">
          <div className="row">
            {articles.map((element) => {
              return element.results.map((e) => {
                return (
                  <div key={e.webTitle} className="col-md-4">< Newsitem
                    description={e.webTitle ? e.webTitle : ""} newsurl={e.webUrl} date={e.webPublicationDate} imageurl={e.fields.thumbnail}/>
                  </div>
                )
              })


            })}
          </div>
        </div>

      </InfiniteScroll>


      {/* //       <div className="container">
//       <div className="btn-group d-flex flex-row justify-content-center align-items-center" role="group" aria-label="Basic outlined example">
//   <button type="button" disabled={this.state.page<=1} className="btn btn-outline-dark" onClick={this.handle_previous}>&larr; previous</button>
//   <button type="button" disabled={this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-outline-dark" onClick={this.handle_next}>Next &rarr;</button>
// </div>
//       </div>
     */}
    </>
  )
}

Newss.defaultProps = {


  q: "general"
}

export default Newss
