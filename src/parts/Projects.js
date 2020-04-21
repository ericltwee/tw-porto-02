import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../parts/project.css";

const Projects = () => {
  return (
    <div>
      <Container className="workbox">
        <Row>
          <Col sm className="projectcard">
            <h2>Tic Tac Toe</h2>
            <p>Coding the game on various platforms</p>
            <ul>
              <li>Using HTML, CSS and VanillaJS</li>
              <li>On React</li>
              <li>In terminal, using Python</li>
            </ul>
          </Col>
          <Col sm className="projectcard">
            <h2>Nextagram</h2>
            <p>Replicating Instagram app on REACT, functions include:</p>
            <ul>
              <li>User SignUp / Login /Logout</li>
              <li>Image hosting</li>
              <li>Updating users' details and/or images</li>
            </ul>
          </Col>
          <Col sm className="projectcard">
            <h2>Bloodi</h2>
            <p>
              Group project : an informative React web app on general blood
              info, blood drive/donations and/or events nearby.
            </p>
            <p>
              Was responsible of the overall UI/UX of the project while exposing
              to new React libraries
            </p>
            <ul>
              <li>react-bootstrap</li>
              <li>framer-motion</li>
              <li>react-transition-group</li>
              <li>react-toastify</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <h1 className="wallText">PROJECTS</h1>
    </div>
  );
};

export default Projects;
