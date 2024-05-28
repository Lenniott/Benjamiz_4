
import React from "react";
import './TimeLine.css';
const TimeLine: React.FC = () => {
  const years = Array.from({ length: 15 }, (_, i) => 2010 + i);
  return (
    <div className="timeLineContainer">
      <ol>
        {years.map((year) => (
          <li
          data-tooltip={year}
            key={year}
          ><div className="line"></div></li>
        ))}
      </ol>
    </div>
  );
};

export default TimeLine;


