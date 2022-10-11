import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './component/Navbar'
import {
    BrowserRouter as Router,
    Routes,
    Route,
   
  } from "react-router-dom";
import Newss from './component/Newss';




export class App extends Component {
  constructor(props){
    super(props)
    this.state={a:""}
    this.state = {
      progress:0
    }
   
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  
  pullprops=(datafromnavbar)=>{
    this.setState({a:datafromnavbar}) 
  }
  
  render() {
    
    return (  
         
         <Router>
            <div>
          <Navbar pullprops={this.pullprops}/>
          <LoadingBar  height={3}
        color='#f11946'
        progress={this.state.progress} 
        />
        <Routes>
        <Route exact path="/" element={<Newss setProgress={this.setProgress}  key="general"  q="General"/>}/> 
        <Route exact path="/sports" element={<Newss setProgress={this.setProgress}  key="sports"  q="Sports"/>}/> 
        <Route exact path="/technology" element={<Newss setProgress={this.setProgress}  key="technology"  q="Technology"/>}/> 
        <Route exact path="/crypto" element={<Newss setProgress={this.setProgress}  key="crypto"  q="Crypto"/>}/> 
        <Route exact path="/business" element={<Newss setProgress={this.setProgress}  key="business" q="Business"/>}/> 
        <Route exact path="/politics" element={<Newss setProgress={this.setProgress}  key="politics" q="Politics"/>}/> 
       
        <Route exact path="/entertainment" element={<Newss setProgress={this.setProgress}  key="Entertainment" q="entertainment"/>}/> 
        <Route exact path="/pakistan" element={<Newss setProgress={this.setProgress}  key="pakistan" q="Pakistan"/>}/> 
        <Route exact path="/search" element={<Newss setProgress={this.setProgress}  key={this.state.a} q={this.state.a}/>}/> 
    </Routes>
      </div>
        </Router>
     
       
      
    )
  }
}

export default App
