import React from "react";
import contacts from "../contacts";
function Solve(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.naam}</h2>
        <img className="circle-img" src={props.loc} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Solve
        naam="Beyonce"
        loc="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"
      />
      <Solve
        naam={contacts[1].name}
        loc={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Solve
        naam={contacts[2].name}
        loc={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
