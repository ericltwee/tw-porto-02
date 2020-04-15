import React from "react";
import logo from "./logo.svg";
import spin from "./spinn.png";
import "./App.css";
import HoverImage from "react-hover-image";

// import Profile from "./parts/profile";
// import History from "./parts/history";
// import Skills from "./parts/skills";
// import Contact from "./parts/contact";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <HoverImage className="App-logo" src={logo} hoverSrc={spin} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link lax" data-lax-opacity="0 1, (vh*0.05) 0">
          Scroll Down
        </a>
      </header>
    </div>
  );
}

export default Home;
