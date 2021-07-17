import React, { Component ,useState} from "react"
import PageCss from './Page.css'

const Page = props =>{

    return(
        <li className="drop-holder">
        <a href="#">Pages</a>
        <ul className="drop-menu">
          <li>
            <a href="faq.html">FAQ</a>
          </li>
          <li>
            <a href="404.html">Error 404</a>
          </li>
        </ul>
      </li>

    )

} 

export default Page;