// src/pages/Home/Home.js

import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header/Header';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import Skills from './components/Skills/Skills';


const Home = () => {
  return (
    <Element name="home">
      <section>
        <Header/>
        <Element name="profile-details">
          <ProfileDetails/>
        </Element>
        <Element name="skills">
          <Skills/>
        </Element>
      </section>
    </Element>
  );
};

export default Home;
