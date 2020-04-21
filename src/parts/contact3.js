import React from "react";
import "../parts/contact.css";

const Contact3 = () => {
  return (
    <div>
      <form
        method="post"
        action="https://getform.io/{your-unique-getform-endpoint}"
      >
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Message
          <input type="text" name="message" />
        </label>
      </form>
      <div className="contactbox mx-auto">
        <div className="contactinfo">
          <i class="fas fa-map-marker-alt fa-3x"></i>
          <p>Petaling Jaya, Selangor</p>
        </div>
        <div className="contactinfo">
          <i class="fab fa-whatsapp fa-3x"></i>
          <p>+6016 215 7746</p>
        </div>
        <div className="contactinfo">
          <i class="far fa-envelope fa-3x"></i>
          <p>ericltwee@gmail.com</p>
        </div>
      </div>
      <div className="contactbox">
        <a
          href="https://www.facebook.com/ericltwee"
          class="facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-facebook-f fa-3x"></i>
        </a>
        <a
          href="https://www.instagram.com/ericltwee"
          class="instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram fa-3x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ericltwee/"
          class="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in fa-3x"></i>
        </a>
        <a
          href="https://github.com/ericltwee"
          class="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github fa-3x"></i>
        </a>
      </div>

      <h1 className="wallText">CONTACT</h1>
    </div>
  );
};

export default Contact3;
