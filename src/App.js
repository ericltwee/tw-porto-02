import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./parts/profile";
import History from "./parts/history";
import Skills from "./parts/skills";
import Contact from "./parts/contact";
import ReactFullpage from "@fullpage/react-fullpage";

const App = () => (
  <ReactFullpage
    navigation={true}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section q1">
            <Home />
          </div>
          <div className="section w2">
            <Profile />
          </div>
          <div className="section e3">
            <div className="slide">
              <h1>Slide 3: History</h1>
            </div>
            <div className="slide">
              <h1>Slide 3.2: History</h1>
            </div>
            <div class="fp-controlArrow fp-prev"></div>
            <div class="fp-controlArrow fp-next"></div>
          </div>
          <div className="section r4">
            <h1>Slide 4 : Skills</h1>
          </div>
          <div className="section t5">
            <h1>Slide 5: Project</h1>
          </div>
          <div className="section y6">
            <h1>Slide 6 : Contact</h1>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
// function App = () => {
//   return (
//     <div className="App">
//       <Route exact path="/">
//         <Home />
//       </Route>
//       <Profile />
//       <History />
//       <Skills />
//       <Contact />
//     </div>
//   );
// }

// export default App;
