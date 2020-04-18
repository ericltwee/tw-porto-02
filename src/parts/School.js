import React from "react";
import { Container } from "react-bootstrap";
import kdu from "../images/kdu.png";
import next from "../images/0next.png";
import "./Work.css";

const School = () => {
  return (
    <div>
      <Container className="workbox">
        <div className="workcard">
          <div className="workside">
            <img className="brandlogo" src={next} alt="logo"></img>
          </div>
          <div className="workdetails">
            <div className="worktitle">
              <h3 className="workplace">NEXT ACADEMY, GLO DAMANSARA</h3>
              <p className="workdate">Jan - Mar 2020</p>
            </div>
            <p className="descript">Full Stack Web Development Bootcamp</p>
          </div>
        </div>
        <div className="workcard">
          <div className="workside">
            <img className="brandlogo" src={kdu} alt="logo"></img>
          </div>
          <div className="workdetails">
            <div className="worktitle">
              <h3 className="workplace">
                UOW MALAYSIA KDU COLLEGE DAMANSARA JAYA
              </h3>
              <p className="workdate">Jun 2008 - Dec 2009</p>
            </div>
            <p className="descript">
              Bachelor of Arts in International Hotel & Tourism Management
            </p>
          </div>
        </div>
        <div className="workcard">
          <div className="workside">
            <img className="brandlogo" src={kdu} alt="logo"></img>
          </div>
          <div className="workdetails">
            <div className="worktitle">
              <h3 className="workplace">
                UOW MALAYSIA KDU COLLEGE DAMANSARA JAYA
              </h3>
              <p className="workdate">Mar 2007 -Jun 2008</p>
            </div>
            <p className="descript">
              Diploma in International Hotel & Tourism Management
            </p>
          </div>
        </div>
      </Container>
      <h1 className="wallText">EDUCATION</h1>
    </div>
  );
};

export default School;
