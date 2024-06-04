import React from "react";
import ScaleSlider from "./ScaleSlider";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import phoneImage from "./iphone_12_mini.webp";

const options = [
  { value: 0, label: "Not at all so dont even bother" },
  { value: 1, label: "Very little" },
  { value: 2, label: "Little" },
  { value: 3, label: "Somewhat" },
  { value: 4, label: "Moderately" },
  { value: 5, label: "Neither agree nor disagree" },
  { value: 6, label: "Quite a bit" },
  { value: 7, label: "Much" },
  { value: 8, label: "Very much" },
  { value: 9, label: "Extremely" },
  { value: 10, label: "Very much that " },
];

const Slider: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-center w-[300px]">
      <Link to="/snippets">
        <Button variant={"link"} className="flex gap-2">
          <FaArrowLeft />
          Snippets
        </Button>
      </Link>
      <div className="relative w-full h-[610px]">
        <img
          src={phoneImage}
          alt="phone"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">

          <ScaleSlider label="How well do you agree with the following statements?" options={options} initialValue={5} startNumber={0} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
