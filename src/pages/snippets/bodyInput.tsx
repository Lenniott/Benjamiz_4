import React, { useState } from "react";
import HumanBody from "../../components/ui/humanBody";

interface ClickPosition {
  x: number;
  y: number;
}

const BodyInput: React.FC = () => {
  const [clickPosition, setClickPosition] = useState<ClickPosition | null>(null);

  const handleImageClick = (event: React.MouseEvent<SVGPathElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log([x, y]);
    setClickPosition({ x, y });
  };

  return (
    <div className="relative">
      <div className="body-container">
        <HumanBody
          fill="currentColor"
          className="text-accent bg-yellow-400"
          height={400}
          onClick={handleImageClick}
        />
        {clickPosition && (
          <div
            className="absolute w-2.5 h-2.5 bg-red-500 rounded-full"
            style={{ left: clickPosition.x, top: clickPosition.y }}
          />
        )}
      </div>
    </div>
  );
};

export default BodyInput;
