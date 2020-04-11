import React from "react";
import avatar from "../circle-greenprofile.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const styling = {
    height: "50vh",
    color: "#80ff80",
  };

  return (
    <div className="row justify-content-center m-0">
      <div style={styling} className="col-md-5 col-7 my-auto">
        <img style={styling} src={avatar} />
      </div>
      <div style={styling} className="col-md-5 col-7 my-auto">
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
