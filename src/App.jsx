import React from 'react';
import ProgressBar from './components/ProgressBar';
import SideBar from './components/SideBar/SideBar';
import SectionOne from './components/Section01/SectionOne';
import SectionTwo from './components/Section02/SectionTwo';
import SectionThree from './components/Section03/SectionThree';
import SectionFour from './components/Section04/SectionFour';
import SectionFive from './components/Section05/SectionFive';
import SectionSix from './components/Section06/SectionSix';
import SectionContact from './components/SectionContact/SectionContact';
import Footer from './components/Footer';
import useScrollingProgress from './hooks/useScrollingProgress';
import useObserver from './hooks/useObserver';

function App() {
  const scrolling = useScrollingProgress();
  const obs = useObserver();

  return (
    <>
      <ProgressBar scrolling={scrolling + '%'}/>
      <SideBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionContact />
      <Footer />
    </>
  )
}

export default App;
