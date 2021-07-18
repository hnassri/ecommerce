import '../../App.css'
import React, { Component ,useState} from "react"
import SliderHome from '../../components/Home/SliderHome/SlideHome'
import Header from '../../components/CommonComponents/Header/Header'
import Collection from '../../components/Home/Collection/Collection'
import Video from '../../components/Home/Video/Video'



const Home = props => {
    return (
        <div class="main-wrapper">
        <Header/>
         <SliderHome/>
         <Collection/>
         <Video
         title="Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do
         <span>eiusmod tempor</span> incididunt."
         video="https://player.vimeo.com/video/172601404?autoplay=1"/>
        </div>
    )
}

export default Home