import React from 'react'

// export class Newsitem extends Component {
  // render() {
    
    const Newsitem=(props)=>{ 
      //   this is called destructuring in js meas you can fetch description and title from single prop
      let { description,  newsurl, date,imageurl } = props
      return (<>
      <div className='my-3'>
        <div className="card" >
        <img src={ imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
           
            <h3 className="card-text">{description}...</h3>
  
            <p className="card-text"><small className="text-muted"> {date}</small></p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more...</a>
          </div>
        </div>
  
      </div>
    </>
     
    )}
//   }
// }

export default Newsitem
