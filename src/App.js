import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Content from './components/Content/Content';
import {BrowserRouter } from "react-router-dom";

const App = (props) =>  {
    return (
     <BrowserRouter>
        <div className="App">
            <Header buttonEdit={props.buttonEdit} roomData={props.roomData}/>
            <Navbar/>
            <Content dataRoom={props.dataRoom} Addroom={props.Addroom} />
        </div>
      </BrowserRouter>
    );
}

export default App;
