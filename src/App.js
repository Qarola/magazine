import React from 'react';
import { BrowserRouter, Route,  Routes, } from "react-router-dom"; 

//import logo from './logo.svg';
import Main from './components/Main/Main';
//import './App.css';
import "./stylesheets/App.scss";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Main />} />
        </Routes>
       </BrowserRouter>
        
    </div>
  );
}

export default App;

//REACT-ROUTER-DOM V6 trajo un cambio en la forma de envolver los componentes para las rutas.