import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header/Header';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Home from './Home';
import MyProject from './components/MyProject/MyProject';
import LookingForI from './components/LookingForI/LookingForI';
import Contact from './components/Contact/Contact';
import BackToTopBtn from './components/BackToTopBtn/BackToTopBtn';
import Education from './components/Education/Education';



const App = () => {
  return (
    <Element className="">
      <section>
        <Header />
        <Element name="home">
          <Home />
        </Element>
        <Element name="profile-details">
          <ProfileDetails />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="Education">
         <Education/> 
        </Element>
        <Element name="myProject">
          <MyProject />
          <Element name="LookingForI">
         <LookingForI/> 
        </Element>
        </Element>
        <Element name="Contact">
          <Contact/>
        </Element>
        <Footer />
        <BackToTopBtn/>
      </section>
    </Element>
  );
};

export default App;
