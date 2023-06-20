// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer';
import Page from './pages/Page.js'

function App() {
  return (
    <>
      <Navbar />
      <Page />
      <Footer />
    </>
  );
}

export default App;
