import React, { Component ,useState} from "react"
import HomeCss from './Home.css'

const Home = props =>{

    return(
        <li className="drop-holder">
        <a href="index.html">Home</a>
        <ul className="drop-menu">
          <li>
            <a href="index.html">Home One</a>
          </li>
          <li>
            <a href="index-2.html">Home Two</a>
          </li>
        </ul>
      </li>

    )

} 

export default Home;