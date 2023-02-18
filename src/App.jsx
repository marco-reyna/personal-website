import React from 'react';
import SectionOne from './components/Section01/SectionOne';
import SectionTwo from './components/Section02/SectionTwo';
import SectionThree from './components/Section03/SectionThree';
import SectionFour from './components/Section04/SectionFour';
import SectionFive from './components/Section05/SectionFive';
// import SectionParallax from './components/Section05/SectionParallax';
import SectionSix from './components/Section06/SectionSix';
import SectionContact from './components/SectionContact/SectionContact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      {/* <SectionParallax /> */}
      <SectionSix />
      <SectionContact />
      <Footer />
    </>
  )
}

export default App
