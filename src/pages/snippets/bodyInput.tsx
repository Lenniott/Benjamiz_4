import React, { useState } from "react";
import HumanBody from "../../components/ui/humanBody"; // Ensure the correct path

interface ClickPosition {
  x: number;
  y: number;
}

const BodyInput: React.FC = () => {
  const [clickPosition, setClickPosition] = useState<ClickPosition | null>(null);
  const [isZoom, setIsZoom] = useState(false);

  const handlePathClick = (event: React.MouseEvent<SVGPathElement>) => {
    const svg = event.currentTarget.ownerSVGElement;
    if (!svg) return;

    const pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;

    const globalPoint = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    const x = globalPoint.x;
    const y = globalPoint.y;

    console.log("event", event.clientX, event.clientY);
    console.log("globalPoint", globalPoint.x, globalPoint.y);
    console.log([x, y]);

    setClickPosition({ x, y });
  };

  return (
    <div className="relative h-full w-full">
      <button onClick={() => setIsZoom(!isZoom)}>
        Toggle Zoom
      </button>
      <div className="body-container border-2 h-96 w-64 overflow-auto">
        <div className={`flex items-center justify-center ${isZoom ? 'h-[1200px] w-[600px]' : 'h-[800px] w-[400px]'}`}>
          <HumanBody
            fill="currentColor"
            className="text-accent bg-yellow-300"
            onPathClick={handlePathClick}
            clickPositions={clickPosition ? [clickPosition] : []}
            isZoom={isZoom}
          />
        </div>
      </div>
    </div>
  );
};

export default BodyInput;
