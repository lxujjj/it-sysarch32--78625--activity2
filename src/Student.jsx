import React from "react";

function Student({ pic, name, email }) {
  return (
    <div className="card">
      <img src={pic} alt="profile" />
      <h2 id="name">{name}</h2>
      <p id="email">{email}</p>
    </div>
  );
}

export default Student;