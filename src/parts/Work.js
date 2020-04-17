import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Work.css";

const Work = () => {
  return (
    <div>
      <Container className="workbox">
        <Row>
          <Col sm className="workcard">
            <p>Manager</p>
            <p>Secret Recipe Cakes & Cafes, Malaysia</p>
            <p>
              Cafe Manager of a franchise outlet in the KlangValley.
              Responsibilities include staff management, task delegations,
              recruitment & training, inventory & stock management, overseeing
              product quality, service standards and business performance.
            </p>
          </Col>
          <Col sm className="workcard">
            <p>Butler</p>
            <p>Marina Bay Sands, Singapore</p>
            <p>
              Assigned as a main point of contact for guests throughout their
              stay. Providing personalized service while working/coordinating
              with other hotel departments. Trained to be a "jack of all
              trades".
            </p>
          </Col>
          <Col sm className="workcard">
            <p>Intern</p>
            <p>Club Med Cherating, Malaysia</p>
            <p>
              6 months internship in various departments within the
              resort.Housekeeping, Front-desk, Restaurants, and the Bar.
            </p>
          </Col>
        </Row>
      </Container>

      <h1 className="wallword">EXPERIENCE</h1>
    </div>
  );
};

export default Work;
