import React from "react";

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
  return (
    <div className="App">
      <Sidebar />
      <div className="overflow-y-auto overscroll-y-contain md:w-3/4 ml-auto">
        <Home />
        <About />
        <Education />
        <Work />
        <Contact />
        <Blog />
      </div>
    </div>
  );
}

export default App;
