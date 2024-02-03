
import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header/Header';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Home from './Home';
import MyProject from './components/MyProject/MyProject';



const App = () => {
  return (
    <Element class="bg-gradient-to-r from-purple-500 to-emerald-400">
      <section>
        <Header/>
        <Element name="home">
          <Home/>
        </Element>
        <Element name="profile-details">
          <ProfileDetails/>
        </Element>
        <Element name="skills">
          <Skills/>
        </Element>
        <Element name="myProject">
          <MyProject/>
        </Element>
        <Footer/>
      </section>
    </Element>
  );
};

export default App;

