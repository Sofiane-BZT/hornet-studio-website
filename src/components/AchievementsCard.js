import "./AchievementsCard.css";
import React from "react";

const AchievementsCard = (props) => {
  // console.log("pictureUrl:", props.pictureUrl);
  // console.log("pictureAlt:", props.pictureAlt);
  return (
    <div className="work-card-container ">
      <img src={props.pictureUrl} alt={props.pictureAlt} />
    </div>
  );
};

export default AchievementsCard;
