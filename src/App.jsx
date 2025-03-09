import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Conteudo from './components/conteudo.jsx';
import Header from './components/Header.jsx';
import Objetivo from './components/Objetivo.jsx'
import Footer from './components/Footer.jsx';
import Mapa from './components/Mapa.jsx';


function App() {
  return (
    <body>
      <Header />
      <Objetivo />
      <Conteudo />
      <Mapa />
      <Footer />
    </body>
  );
}


export default App
