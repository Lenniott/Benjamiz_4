
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import './TimeLine.css';
const TimeLine: React.FC = () => {
  const years = Array.from({ length: 15 }, (_, i) => 2010 + i);
  return (
    <div className="flex flex-col justify-between items-center">
            <Link to="/snippets">
        <Button variant={"link"} className="flex gap-2">
          <FaArrowLeft />
          Snippets
        </Button>
      </Link>
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
    </div>
  );

};

export default TimeLine;


