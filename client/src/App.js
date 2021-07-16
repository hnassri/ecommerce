import React from 'react';
import Navbar from './components/CommonComponents/Navbar/Navbar';
import CardItems from './components/CommonComponents/CardItems/CardItems';
import Carousel from './components/CommonComponents/BannerSlider/BannerSlider'
import './App.css';

const App = ()=>{
  return (
    <>
      <Navbar />
      <Carousel />
      <CardItems />
    </>
  );

}

export default App;
