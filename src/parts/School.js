import React from "react";
import { Container, Row } from "react-bootstrap";
import kdu from "../images/kdu.png";
import next from "../images/0next.png";

const School = () => {
  return (
    <div>
      <Container className="workbox">
        <Row className="workcard">
          <img className="brandlogo" src={next} alt="logo"></img>
        </Row>
        <Row className="workcard">
          <img className="brandlogo" src={kdu} alt="logo"></img>
        </Row>
        <Row className="workcard">
          <img className="brandlogo" src={kdu} alt="logo"></img>
        </Row>
      </Container>
      <h1 className="wallText">EDUCATION</h1>
    </div>
  );
};

export default School;
