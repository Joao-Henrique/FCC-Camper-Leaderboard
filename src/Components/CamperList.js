import React from "react";
import CamperItem from "./CamperItem";

const CamperList = ({ campers }) => {
  const Items = campers.map((camper, index) => {
    return <CamperItem key={index} camper={camper} number={index + 1} />;
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nº</th>
          <th>Username</th>
          <th>Last 30 Days</th>
          <th>All Time Points</th>
        </tr>
      </thead>
      <tbody>{Items}</tbody>
    </table>
  );
};

export default CamperList;
