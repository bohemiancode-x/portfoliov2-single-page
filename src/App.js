import React, {useEffect, useState} from "react";
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

  useEffect(() => {
    document.body.classList.toggle('modal-open', nav);

    return () => document.body.classList.remove('modal-open');
}, [nav])

  return (
    <div className="App bg-body">
      <Sidebar toggleNav={toggleNav} nav={nav}/>
      <div className="lg:w-3/4 ml-auto min-h-[100vh]">
        <section className="container">
        <Home pageIsVisible={pageIsVisible} />
        <About myRef={myRef} />
        <Work />
        <Education />
        <Contact />
        <Blog />

        </section>
      </div>
    </div>
  );
}

export default App;
