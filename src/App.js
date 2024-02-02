

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProfileDetails />} />
            <Route path="/skills" element={<Skills />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

