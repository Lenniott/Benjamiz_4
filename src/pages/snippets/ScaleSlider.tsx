import React, { useState } from "react";

interface Option {
  value: number;
  label: string;
}

interface ScaleSliderProps {
  options: Option[];
  initialValue: number;
  startNumber: number;
}

const ScaleSlider: React.FC<ScaleSliderProps> = ({
  startNumber,
  options,
  initialValue,
}) => {
  // Find the initial index based on the initialValue
  const initialIndex = options.findIndex((option) => option.value === initialValue);
  const [index, setIndex] = useState<number>(initialIndex);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndex(parseInt(e.target.value, 10));
  };

  const getLabelByIndex = (index: number): string => {
    return options[index] ? options[index].label : "";
  };

  return (
    <div className="flex flex-col items-center w-full px-4 py-6">
      <div className="flex justify-between w-full text-sm mb-2">
        <div className="flex flex-col gap-1 max-w-24 justify-end">
          <span>{options[0].label}</span>
        </div>
        <div className="flex flex-col gap-1 items-end max-w-24 justify-end">
          <span>{options[options.length - 1].label}</span>
        </div>
      </div>
      <div className="flex gap-2 w-full items-center justify-center">
        <span className="text-gray-700">{startNumber}</span>
        <input
          type="range"
          min={0}
          max={options.length - 1}
          value={index}
          onChange={handleSliderChange}
          className="w-full"
        />
        <span className="text-gray-700">{options.length - 1}</span>
      </div>
      <div className="mt-2 text-md text-gray-800 w-full flex flex-col items-center justify-center">
      <span>{index}</span>
        <span>{getLabelByIndex(index)}</span>
      </div>
    </div>
  );
};

export default ScaleSlider;
