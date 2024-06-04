import React from "react";

interface RulerProps {
  length: number;
  orientation: "horizontal" | "vertical";
}

const Ruler: React.FC<RulerProps> = ({ length, orientation }) => {
  const isHorizontal = orientation === "horizontal";
  const rulerStyle = {
    display: "flex",
    flexDirection: isHorizontal ? "row" : "column",
    position: "absolute",
    top: isHorizontal ? 0 : "auto",
    bottom: isHorizontal ? "auto" : 0,
    left: isHorizontal ? "auto" : 0,
    right: isHorizontal ? 0 : "auto",
    zIndex: 10,
    backgroundColor: "#fff",
  } as React.CSSProperties;

  const tickStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: isHorizontal ? "50px" : "100%",
    height: isHorizontal ? "100%" : "50px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
    color: "#333",
    fontSize: "12px",
  } as React.CSSProperties;

  const ticks = [];
  for (let i = 0; i <= length; i += 50) {
    ticks.push(
      <div key={i} style={tickStyle}>
        {i}
      </div>
    );
  }

  return <div style={rulerStyle}>{ticks}</div>;
};

export default Ruler;
