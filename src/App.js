import React, {useState} from "react";
import { useInView } from 'react-intersection-observer';

//pages
import Home from './pages/Home'
import About from "./pages/About";
import Blog from './pages/Blog'
import Education from './pages/Education'
import Work from './pages/Work'
import Contact from './pages/Contact'

//components
import Sidebar from "./components/sidebar";

function App() {
  const [nav, setNav] = useState(false);
  const {ref: myRef, inView: pageIsVisible} = useInView()

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="App">
      <Sidebar toggleNav={toggleNav} nav={nav}/>
      <div className={nav ? "lg:w-3/4 ml-auto h-[100vh]" : "lg:w-3/4 ml-auto h-[100vh]"}>
        <Home pageIsVisible={pageIsVisible} />
        <About myRef={myRef} />
        <Education />
        <Work />
        <Contact />
        <Blog />
      </div>
    </div>
  );
}

export default App;
