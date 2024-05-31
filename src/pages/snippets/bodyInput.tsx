import React, { useState } from "react";
import HumanBody from "../../components/ui/humanBody"; // Ensure the correct path

interface ClickPosition {
  x: number;
  y: number;
}

const BodyInput: React.FC = () => {
  const [clickPosition, setClickPosition] = useState<ClickPosition | null>(null);
  const [isZoom, setIsZoom] = useState(false);
  const [scale, setScale] = useState(1); // Set the scale factor

  const handlePathClick = (event: React.MouseEvent<SVGPathElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / scale;
    const y = (event.clientY - rect.top) / scale;
    console.log([x, y]);
    setClickPosition({ x, y });
  };

  return (
    <div className="relative h-full w-full">
      <button onClick={() => { setIsZoom(!isZoom); setScale(isZoom ? 1 : 0.42); }}>
        Toggle Zoom
      </button>
      <div className="body-container h-96 w-full overflow-auto flex items-center justify-center">
        <HumanBody
          fill="currentColor"
          className="text-accent bg-yellow-400"
          onPathClick={handlePathClick}
          scale={scale} // Pass the scale prop
          clickPositions={clickPosition ? [clickPosition] : []}  // Pass the click positions
        />
      </div>
    </div>
  );
};

export default BodyInput;
