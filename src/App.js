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
    navigationTooltips={[
      "Home",
      "Profile",
      "History",
      "Skills",
      "Projects",
      "Contact",
    ]}
    showActiveTooltip={true}
    controlArrows={false}
    slidesNavigation={true}
    slideTooltips={["Work Experience", "Education background"]}
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
              <h1>Slide 3: Working Experience</h1>
            </div>
            <div className="slide">
              <h1>Slide 3.2: Education Background</h1>
            </div>
            {/* <div class="fp-controlArrow fp-prev"></div>
            <div class="fp-controlArrow fp-next"></div>
            <div class="fp-slidesNav fp-bottom">
              <ul>
                <li>
                  <a href="#">
                    <span class="fp-sr-only">fullPage</span>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fp-sr-only">Open</span>
                    <span></span>
                  </a>
                </li>
              </ul>
            </div> */}
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
