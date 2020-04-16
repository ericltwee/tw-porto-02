import React from "react";
import "./App.css";
import Home from "./Home";
import Profile from "./parts/profile";
import Work from "./parts/Work";
import School from "./parts/School";
import Skills from "./parts/skills";
import Projects from "./parts/Projects";
import Contact from "./parts/contact";
import ReactFullpage from "@fullpage/react-fullpage";
import { useLax } from "use-lax";

const App = () => {
  useLax();
  return (
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
                ert
                <Work />
              </div>
              <div className="slide">
                hjk
                <School />
              </div>
            </div>
            <div className="section r4">
              <Skills />
            </div>
            <div className="section t5">
              <Projects />
            </div>
            <div className="section y6">
              <Contact />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
export default App;
