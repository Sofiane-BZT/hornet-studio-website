import "./AchievementsCard.css";

import React from "react";

const AchievementsCard = (props) => {
  return (
    <div className="work-card">
      <img src={props.imgsrc} alt="Tatto" />
    </div>
  );
};

export default AchievementsCard;
