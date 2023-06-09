import React from "react";
import AchievementsCard from "./AchievementsCard";

import "./Achievements.css";
const Achievements = () => {
  return (
    <div className="work-container">
      {WorkData.map((value, index) => {
        return <AchievementsCard key={index} imgsrc={value.imgsrc} />;
      })}
    </div>
  );
};

export default Achievements;
