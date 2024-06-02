import React, { useRef, useState, useEffect } from "react";
import { HumanBody } from "../../components/ui/humanBody"; // Ensure the correct path
import bodyPartsData from "./bodyParts.json"; // Import JSON data
import { BodyPart } from "./bodyParts.d"; // Import the type
import { Button } from "../../components/ui/button";
import { FaMagnifyingGlassPlus, FaMagnifyingGlassMinus } from "react-icons/fa6";
interface ClickPosition {
  x: number;
  y: number;
}

const BodyInput: React.FC = () => {
  const [clickPosition, setClickPosition] = useState<ClickPosition | null>(
    null
  );
  const [isZoom, setIsZoom] = useState(false);
  const [isBack, setIsBack] = useState(false);
  const [selectedBodyPart, setSelectedBodyPart] = useState<BodyPart | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  const findClosestBodyPart = (
    x: number,
    y: number,
    parts: BodyPart[]
  ): BodyPart | null => {
    let closestPart: BodyPart | null = null;
    let closestDistance = Infinity;
    for (const part of parts) {
      const distance = Math.hypot(part.x - x, part.y - y);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestPart = part;
      }
    }
    return closestPart;
  };

  const handlePathClick = (event: React.MouseEvent<SVGPathElement>) => {
    const svg = event.currentTarget.ownerSVGElement;
    if (!svg) return;

    const pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;

    const globalPoint = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    const x = globalPoint.x;
    const y = globalPoint.y;

    setClickPosition({ x, y });
    const parts = isBack ? bodyPartsData.back : bodyPartsData.front;
    const bodyPart = findClosestBodyPart(x, y, parts);
    setSelectedBodyPart(bodyPart);
    console.log(bodyPart);
    if (containerRef.current) {
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const scrollLeft = x * (isZoom ? 3 : 1) - containerWidth / 2;
      const scrollTop = y * (isZoom ? 2 : 1) - containerHeight / 2;

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

  const handleIsBack = () => {
    setIsBack(!isBack);
    // Change the label to the opposite of what is currently selected (back or front)
    if (selectedBodyPart) {
      const oppositeParts = isBack ? bodyPartsData.front : bodyPartsData.back;
      const closestOppositePart = findClosestBodyPart(
        selectedBodyPart.x,
        selectedBodyPart.y,
        oppositeParts
      );
      setSelectedBodyPart(closestOppositePart);
      console.log(closestOppositePart);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      if (clickPosition) {
        const { x, y } = clickPosition;
        const scrollLeft = x * (isZoom ? 1.8 : 1) - containerWidth / 2;
        const scrollTop = y * (isZoom ? 1.5 : 1) - containerHeight / 2;

        container.scrollTo({
          top: scrollTop,
          left: scrollLeft,
          behavior: "smooth",
        });
      } else {
        const scrollLeft = container.scrollWidth / 2 - containerWidth / 2;
        const scrollTop = container.scrollHeight / 2 - containerHeight / 2;

        container.scrollTo({
          top: scrollTop,
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [isZoom, clickPosition]);

  return (
    <div className="relative h-full w-full flex flex-col gap-2 items-center">
      <div className="flex justify-between w-64">
        <Button className="w-[120px] flex gap-2 justify-between" onClick={handleZoomToggle} variant="secondary">
          {!isZoom ? <FaMagnifyingGlassPlus /> : <FaMagnifyingGlassMinus />}
          {!isZoom ? "Zoom in" : "Zoom out"}
        </Button>
        <Button onClick={handleIsBack} variant="secondary">
          {isBack ? "Front" : "Back"}
        </Button>
      </div>

      <div
        ref={containerRef}
        className="body-container border-2 h-96 w-64 overflow-auto"
      >
        <div
          className={`flex items-center justify-center ${
            isZoom ? "h-[1200px] w-[600px]" : "h-[380px] w-[252px]"
          }`}
        >
          <HumanBody
            isBack={isBack}
            onPathClick={handlePathClick}
            clickPositions={clickPosition ? [clickPosition] : []}
            isZoom={isZoom}
            selectedBodyPart={selectedBodyPart}
          />
        </div>
      </div>
    </div>
  );
};

export default BodyInput;
