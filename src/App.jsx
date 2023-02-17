import React from 'react';
import SectionOne from './components/Section01/SectionOne';
import SectionTwo from './components/Section02/SectionTwo';
import SectionThree from './components/Section03/SectionThree';
import SectionFour from './components/Section04/SectionFour';
import SectionFive from './components/Section05/SectionFive';
// import SectionParallax from './components/Section05/SectionParallax';
import SectionContact from './components/SectionContact/SectionContact';

function App() {

  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      {/* <SectionParallax /> */}
      <SectionContact />
    </>
  )
}

export default App
