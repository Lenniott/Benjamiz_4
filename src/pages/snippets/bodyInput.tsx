import React, { useRef, useState, useEffect } from "react";
import HumanBody from "../../components/ui/humanBody"; // Ensure the correct path

interface ClickPosition {
  x: number;
  y: number;
}

const BodyInput: React.FC = () => {
  const [clickPosition, setClickPosition] = useState<ClickPosition | null>(null);
  const [isZoom, setIsZoom] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

    if (containerRef.current) {
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const scrollLeft = (x * (isZoom ? 3 : 1)) - containerWidth / 2 ;
      const scrollTop = (y * (isZoom ? 2 : 1)) - containerHeight / 2 ;

      container.scrollTo({
        top: scrollTop,
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleZoomToggle = () => {
    setIsZoom(!isZoom);
  };

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      if (clickPosition) {
        const { x, y } = clickPosition;
        const scrollLeft = (x * (isZoom ? 1.8 : 1)) - containerWidth / 2;
        const scrollTop = (y * (isZoom ? 1.5 : 1)) - containerHeight / 2;

        container.scrollTo({
          top: scrollTop,
          left: scrollLeft,
          behavior: "smooth",
        });
      } else {
        const scrollLeft = (container.scrollWidth / 2) - (containerWidth / 2);
        const scrollTop = (container.scrollHeight / 2) - (containerHeight / 2);

        container.scrollTo({
          top: scrollTop,
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [isZoom, clickPosition]);

  return (
    <div className="relative h-full w-full">
      <button onClick={handleZoomToggle}>
        Toggle Zoom
      </button>
      <div ref={containerRef} className="body-container border-2 h-96 w-64 overflow-auto">
        <div className={`flex items-center justify-center ${isZoom ? 'h-[1200px] w-[600px]' : 'h-[380px] w-[252px]'}`}>
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
