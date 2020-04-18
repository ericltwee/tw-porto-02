import React from "react";
import { Container } from "react-bootstrap";
import "./Work.css";
import srcc from "../images/SR.png";
import mbs from "../images/mbs.jpg";
import club from "../images/clubmed.jpg";

const Work = () => {
  return (
    <div>
      <Container className="workbox">
        <div className="workcard">
          <div className="workside">
            <img className="brandlogo" src={srcc} alt="logo"></img>
            <p>Manager</p>
          </div>
          <div className="workdetails">
            <div className="worktitle">
              <h3 className="workplace">Secret Recipe, Malaysia</h3>
              <p>Nov 2011 -Nov 2019</p>
            </div>
            <p className="descript">
              Cafe Manager of a franchise outlet in the KlangValley.
              Responsibilities include staff management, task delegations,
              recruitment and training, inventory and stock management,
              overseeing product quality, service standards and business
              performance.
            </p>
          </div>
        </div>
        <div className="workcard">
          <div className="workside">
            <img className="brandlogo" src={mbs} alt="logo"></img>
            <p>Butler</p>
          </div>
          <div className="workdetails">
            <div className="worktitle">
              <h3 className="workplace">Marina Bay Sands, Singapore</h3>
              <p>Jan - Jun 2011</p>
            </div>
            <p className="descript">
              Assigned as a main point of contact for guests throughout their
              stay. Providing personalized service while working/coordinating
              with other hotel departments. Trained to be a "jack of all
              trades".
            </p>
          </div>
        </div>
        <div className="workcard">
          <div className="workside">
            <img className="brandlogo" src={club} alt="logo"></img>
            <p>Intern</p>
          </div>
          <div className="workdetails">
            <div className="worktitle">
              <h3 className="workplace">Club Med Cherating, Malaysia</h3>
              <p>Jan - Jun 2010</p>
            </div>
            <p className="descript">
              6 months internship in various departments within the resort. Area
              of training includes housekeeping, front-desk, restaurants, and
              the bar.
            </p>
          </div>
        </div>
      </Container>

      <h1 className="wallword">EXPERIENCE</h1>
    </div>
  );
};

export default Work;
