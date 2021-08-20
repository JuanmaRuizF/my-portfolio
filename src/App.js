import './Styles/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from './Components/menu';
import HomePage from './Components/Home_Page'
import AboutMe from './Components/About_Me';
import EducationExperience from './Components/Education_Experience'
import Projects from './Components/Projects'
import {useEffect, useState} from 'react'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  return windowSize;
}

function App() {

  AOS.init();
  const size = useWindowSize();
  if (size["width"] > 1800){
    return (
      <div>
        <Menu></Menu>
        <HomePage></HomePage>
        <AboutMe></AboutMe>
        <EducationExperience></EducationExperience>
        <Projects></Projects>
      </div>
    );

  }else{
    return (
      <div className="mobile">
        <HomePage></HomePage>
        <AboutMe></AboutMe>
        <EducationExperience></EducationExperience>
        <Projects></Projects>

      </div>
    );

  }
  

}

export default App;
