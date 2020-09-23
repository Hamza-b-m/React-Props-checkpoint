import React from "react";
import Profile from "./profile/Profile";
import myimage from "./res/imgcv.jpg";
import "./App.css";

function App() {
  let Name = "Hamza Ben Manâa";
  let bio = " I'm a full stack developer";
  let prof = "developer";

  const show = (e) => alert(e);

  return (
    <div className="App">
      <Profile bio={bio} prof={prof} show={show}>
        <img src={myimage} />
      </Profile>
    </div>
  );
}

export default App;
