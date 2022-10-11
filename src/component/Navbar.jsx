import React from 'react'
import { useState } from 'react'



import { Link } from 'react-router-dom'


// i have converted class based to funcion based to understand the concept of hooks

// export class Navbar extends Component {
const Navbar = (props) => {
  // render() {
  const [q, setq] = useState("")
 const search= ()=>{
  props.pullprops(q)
  
 
 } 
 
 
  
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">The Guardian</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/crypto">Crypto Currency</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/politics">Politics</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/publichealth">PublicHealth</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/pakistan">Local News</Link></li>
             
            </ul>
            <div className="d-flex" role="search"   >
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="q" id="q" value={q} onChange={e => setq(e.target.value)} required/>
              <Link  to="/search"><button disabled={q.length<3 || q.length===0}  className="btn btn-outline-success" state={q}  onClick={search} type="button">Search</button></Link>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}
// }
// }



export default Navbar;
