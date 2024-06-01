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
  const yCompinsation = (isZoom ? 125 : 120);
  const xCompinsation = (isZoom ? 83 : 35);
  const handlePathClick = (event: React.MouseEvent<SVGPathElement>) => {
    const svg = event.currentTarget.ownerSVGElement;
    if (!svg) return;

    const pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;

    const globalPoint = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    const x = (globalPoint.x - xCompinsation) / scale;
    const y = (globalPoint.y - yCompinsation) / scale;

    console.log("event", event.clientX, event.clientY);
    console.log("globalPoint", globalPoint.x, globalPoint.y);
    console.log([x, y]);

    setClickPosition({ x, y });
  };

  return (
    <div className="relative h-full w-full">
      <button onClick={() => { setIsZoom(!isZoom); setScale(isZoom ? 1 : 0.7); }}>
        Toggle Zoom
      </button>
      <div className="body-container border-2 h-96 w-64 overflow-auto flex items-center justify-center">
        <HumanBody
          fill="currentColor"
          className="text-accent bg-yellow-300 "
          onPathClick={handlePathClick}
          scale={scale} // Pass the scale prop
          clickPositions={clickPosition ? [clickPosition] : []}
          translate={{ x: xCompinsation, y: yCompinsation }}  // Pass the translate prop
        />
      </div>
    </div>
  );
};

export default BodyInput;
