
import React from 'react';


import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
