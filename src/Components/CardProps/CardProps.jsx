import React from "react";

const CardProps = ({ name, gender, age, location }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Gender:{gender}</p>
      <p>Age:{age}</p>
      <p>Location:{location}</p>
    </div>
  );
};

export default CardProps;
