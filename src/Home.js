import React from "react";
import logo from "./logo.svg";
import spin from "./spinn.png";
import "./App.css";
import HoverImage from "react-hover-image";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <HoverImage className="App-logo" src={logo} hoverSrc={spin} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-link lax" alt="asdf">
          Scroll Down <i class="fas fa-arrow-circle-down"></i>
        </p>
      </header>
    </div>
  );
}

export default Home;
