import '../../App.css'
import React, { Component ,useState} from "react"
import SliderHome from '../../components/Home/SliderHome/SlideHome'
import Header from '../../components/CommonComponents/Header/Header'
import Collection from '../../components/Home/Collection/Collection'



const Home = props => {
    return (
        <div class="main-wrapper">
        <Header/>
         <SliderHome/>
         <Collection/>
        </div>
    )
}

export default Home