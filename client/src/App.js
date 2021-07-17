import React from 'react';
import Navbar from './components/CommonComponents/Navbar/Navbar';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/Login/index'
import Home from './pages/Home/index'
import Register from './pages/Register/index'
import CardItems from './components/CommonComponents/CardItems/CardItems';
import Carousel from './components/CommonComponents/BannerSlider/BannerSlider';
const App = ()=>{
  return (
    <>
      <Navbar />
      <Carousel />
      <CardItems />
      <HashRouter>
             <Switch>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
             </Switch>
      </HashRouter>
    </>
  );

}

export default App;
