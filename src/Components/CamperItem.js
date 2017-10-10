import React from "react";

const CamperItem = ({ camper, number }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>
        <a href={`https://freecodecamp.com/${camper.username}`} target="_blank">
          <img className="nameRowImage" src={camper.img} alt="" />{" "}
          {camper.username}
        </a>
      </td>
      <td>{camper.recent}</td>
      <td>{camper.alltime}</td>
    </tr>
  );
};

export default CamperItem;
