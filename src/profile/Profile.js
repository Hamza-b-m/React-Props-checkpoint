import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <>
      <div>{props.Name}</div>
      {props.children}
      <div>{props.bio}</div>
      <div>{props.prof}</div>
      <button onClick={() => props.show(props.Name)}>Click me</button>
    </>
  );
};

Profile.defaultProps = {
  Name: "Ahmed Ben Manâa",
  bio: "i enjoy traveling",
  prof: "engineer",
};

Profile.propTypes = {
  Name: PropTypes.string,
  bio: PropTypes.string,
  prof: PropTypes.string,
  alert: PropTypes.func,
};

export default Profile;
