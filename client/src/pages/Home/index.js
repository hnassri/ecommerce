import '../../App.css'
import React, { Component ,useState} from "react"
import SliderHome from '../../components/SliderHome/SlideHome'
import Header from '../../components/CommonComponents/Header/Header'



const Home = props => {
    return (
        <div class="main-wrapper">
        <Header/>
         <SliderHome/>
        </div>
    )
}

export default Home