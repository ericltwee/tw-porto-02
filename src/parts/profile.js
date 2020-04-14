import React from "react";
import avatar from "../circle-greenprofile.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";

const Profile = () => {
  return (
    <div className="row justify-content-center m-0">
      <div className="col-md-5 col-7 my-auto profilePic">
        <img src={avatar} alt="logo" />
      </div>
      <div className="col-md-5 col-7 textBox">
        <p>
          Transitioning from 1yr of hoteling + 8yrs of cafe mangement into the
          world of web development.
        </p>
        <p>"Hello World" literally.</p>
        <p>
          Huge fondness for front-end development, UI/UX, styling/designing.
        </p>
        <p>Let's make things FANCY!</p>
      </div>
    </div>
  );
};

export default Profile;
