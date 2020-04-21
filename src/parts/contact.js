import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../parts/contact.css";

const Contact = () => {
  return (
    <div>
      <Container className="contactbox">
        <Row>
          <Col sm className="contactinfo">
            <i class="fas fa-map-marker-alt fa-3x"></i>
            <p>Petaling Jaya, Selangor</p>
          </Col>
          <Col sm className="contactinfo">
            <i class="far fa-envelope fa-3x"></i>
            <p>ericltwee@gmail.com</p>
          </Col>
          <Col sm className="contactinfo">
            <i class="fab fa-whatsapp fa-3x"></i>
            <p>+6016 215 7746</p>
          </Col>
        </Row>
        <Row>
          <Col sm className="contactinfo">
            <a
              href="https://www.facebook.com/ericltwee"
              class="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook fa-3x"></i>
            </a>
            <p>Facebook</p>
          </Col>
          <Col sm className="contactinfo">
            <a
              href="https://www.instagram.com/ericltwee"
              class="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram fa-3x"></i>
            </a>
            <p>Instagram</p>
          </Col>
          <Col sm className="contactinfo">
            <a
              href="https://www.linkedin.com/in/ericltwee/"
              class="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin-in fa-3x"></i>
            </a>
            <p>Linkedin</p>
          </Col>
          <Col sm className="contactinfo">
            <a
              href="https://github.com/ericltwee"
              class="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github fa-3x"></i>
            </a>
            <p>Github</p>
          </Col>
        </Row>
      </Container>
      <h1 className="wallText">CONTACT</h1>
    </div>
  );
};

export default Contact;
