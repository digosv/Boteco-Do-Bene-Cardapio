import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Buttons from './components/Buttons';
import Header from './components/Header';
import PorcoesQuentes from './components/PorcoesQuentes';
import Cervejas from './components/Cervejas'


function App() {


  
  return (
    <Router>
    <div className='bg-amber-100 pt-24 min-h-screen'>
      <Header />
      <Buttons />
      <Routes>
        <Route path='/porcoesquentes' element={<PorcoesQuentes />}></Route>
        <Route path='/cervejas' element={<Cervejas />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
