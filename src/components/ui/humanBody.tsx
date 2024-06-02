import React from "react";

interface SVGProps {
  fill?: string;
  className?: string;
  onPathClick?: (event: React.MouseEvent<SVGPathElement>) => void;
  clickPositions?: { x: number; y: number }[]; // Add click positions as a prop
  isZoom?: boolean; // Add zoom state
  isBack: boolean;
}

const HumanBody: React.FC<SVGProps> = ({
  isBack = false,
  onPathClick,
  clickPositions = [], // Default click positions to an empty array
  isZoom = false,
}) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 338 825"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={`object-contain `}
    style={{ pointerEvents: "none" }}
  >
    <g style={{ transform: "translate(-85px, 42px)", pointerEvents: "none" }}>
      <text fontSize={32}>{isBack ? "Back" : "Front"}</text>
    </g>
    {!isBack && (
      <g style={{ transform: "translate(0px, 12px)", pointerEvents: "none" }}>
        <path
          d="M173.273 457.369C172.094 471.25 181.516 544.722 186.378 573.531C188.693 587.18 195.04 609.416 192.757 621.223C189.496 637.678 188.554 658.973 190.349 671.372C191.481 678.902 195.044 713.632 189.946 726.334C187.278 732.995 182.389 767.132 182.389 767.132C169.651 799.29 176.84 797.708 176.84 797.708C180.783 802.547 187.538 798.088 187.538 798.088C192.683 801.369 196.246 797.309 196.246 797.309C200.663 800.965 205.812 796.859 205.812 796.859C211.36 799.74 216.505 794.428 216.505 794.428C219.693 796.033 220.472 794.006 220.472 794.006C230.034 793.393 215.137 762.793 215.137 762.793C211.57 735.31 218.677 720.014 218.677 720.014C241.956 650.978 243.139 632.657 233.833 606.64C231.212 599.13 230.549 596.156 231.755 592.895C234.543 585.369 232.511 555.098 235.912 543.078C242.472 519.896 248.943 461.103 252.317 433.671C256.849 396.72 236.261 347.175 236.261 347.175C231.751 327.013 238.362 255.177 238.362 255.177C247.594 269.542 247.241 294.9 247.241 294.9C245.776 321.495 268.726 362.141 268.726 362.141C279.753 378.938 283.929 394.874 283.929 396.057C283.929 400.896 282.87 412.609 282.87 412.609L283.293 422.81C283.483 425.408 284.945 434.353 284.708 438.677C282.987 465.283 287.213 460.277 287.213 460.277C290.78 460.277 294.7 438.867 294.7 438.867C294.7 444.388 293.351 460.917 296.329 467.152C299.892 474.589 302.513 465.876 302.56 464.128C303.502 430.251 305.537 439.126 305.537 439.126C307.519 466.609 309.954 472.817 314.32 470.669C317.627 469.091 314.603 437.688 314.603 437.688C320.267 456.342 324.564 459.312 324.564 459.312C333.912 465.876 328.131 447.746 326.832 444.155C319.915 425.079 319.701 418.468 319.701 418.468C328.344 435.61 334.858 434.974 334.858 434.974C343.287 432.283 327.491 408.011 318.236 396.382C313.513 390.458 307.422 382.525 305.654 377.814C302.773 369.834 300.598 344.182 300.598 344.182C299.725 313.911 292.242 300.763 292.242 300.763C279.447 280.283 277.039 242.079 277.039 242.079L276.473 177.579C271.987 133.583 239.568 133.265 239.568 133.265C206.8 128.387 202.241 117.802 202.241 117.802C195.3 107.814 199.267 88.6674 199.267 88.6674C205.025 83.9836 207.246 71.5489 207.246 71.5489C216.808 64.2168 216.339 53.4882 211.922 53.6045C208.378 53.6975 209.181 50.7624 209.181 50.7624C215.16 2.466 172.284 0 172.284 0H165.739C165.739 0 122.844 2.466 128.815 50.7508C128.815 50.7508 129.618 53.6898 126.043 53.5929C121.638 53.4765 121.227 64.2052 130.754 71.5373C130.754 71.5373 132.972 83.9681 138.733 88.6558C138.733 88.6558 142.7 107.802 135.759 117.79C135.759 117.79 131.215 128.375 98.4321 133.253C98.4321 133.253 65.9592 133.571 61.5429 177.568L60.9303 242.067C60.9303 242.067 58.569 280.271 45.7233 300.751C45.7233 300.751 38.2749 313.903 37.4141 344.17C37.4141 344.17 35.2311 369.823 32.3619 377.802C30.6132 382.49 24.5258 390.423 19.7644 396.371C10.4277 407.976 -5.26398 432.198 3.1305 434.962C3.1305 434.962 9.67936 435.598 18.2871 418.456C18.2871 418.456 18.1087 425.021 11.2032 444.144C9.84609 447.688 4.07271 465.818 13.4249 459.3C13.4249 459.3 17.7559 456.326 23.3858 437.676C23.3858 437.676 20.3654 469.079 23.727 470.657C28.1201 472.809 30.5163 466.598 32.4976 439.115C32.4976 439.115 34.5294 430.24 35.4715 464.116C35.5181 465.865 38.081 474.577 41.6598 467.14C44.6803 460.906 43.3232 444.404 43.3232 438.855C43.3232 438.855 47.1967 460.266 50.8181 460.266C50.8181 460.266 55.0794 465.271 53.3307 438.665C53.0476 434.319 54.5714 425.397 54.7614 422.799L55.1724 412.598C55.1724 412.598 54.11 400.911 54.11 396.045C54.11 394.839 58.2898 378.927 69.3132 362.13C69.3132 362.13 92.24 321.464 90.7627 294.889C90.7627 294.889 90.4447 269.531 99.6767 255.165C99.6767 255.165 106.229 326.997 101.79 347.163C101.79 347.163 81.1662 396.708 85.7144 433.659C89.0644 461.165 95.5241 519.88 102.1 543.067C105.535 555.063 103.504 585.326 106.257 592.883C107.497 596.167 106.846 599.192 104.178 606.628C94.9231 632.645 96.1018 650.97 119.381 720.002C119.381 720.002 126.547 735.299 122.925 762.781C122.925 762.781 108.052 793.381 117.579 793.994C117.579 793.994 118.323 796.022 121.545 794.417C121.545 794.417 126.69 799.729 132.25 796.848C132.25 796.848 137.4 800.958 141.8 797.297C141.8 797.297 145.329 801.357 150.474 798.077C150.474 798.077 157.228 802.633 161.241 797.697C161.241 797.697 168.372 799.279 155.677 767.12C155.677 767.12 150.815 733.026 148.136 726.322C143.026 713.624 146.635 678.821 147.725 671.361C149.481 658.891 148.539 637.647 145.329 621.211C142.979 609.432 149.342 587.191 151.691 573.52C156.519 544.738 165.98 471.262 164.797 457.358L168.705 458.73C171.505 458.738 173.273 457.369 173.273 457.369Z"
          className="text-accent"
          pointerEvents="all"
          onClick={onPathClick}
          style={{ cursor: "pointer" }}
        />
        <path
          d="M161 56.5C161 57.8807 157.418 59 153 59C148.582 59 145 57.8807 145 56.5C145 55.1193 148.582 54 153 54C157.418 54 161 55.1193 161 56.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M196 56.5C196 57.8807 192.418 59 188 59C183.582 59 180 57.8807 180 56.5C180 55.1193 183.582 54 188 54C192.418 54 196 55.1193 196 56.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M181 90.5C181 91.3284 176.299 92 170.5 92C164.701 92 160 91.3284 160 90.5C160 89.6716 164.701 90.5 170.5 90.5C176.299 90.5 181 89.6716 181 90.5Z"
          fill="#D9D9D9"
        />
      </g>
    )}
    {isBack && (
      <g style={{ transform: "translate(0px, 12px)", pointerEvents: "none" }}>
        <path
          d="M173.273 457.369C172.094 471.25 181.516 544.722 186.378 573.531C188.693 587.18 195.04 609.416 192.757 621.223C189.496 637.678 188.554 658.973 190.349 671.372C191.481 678.902 195.044 713.632 189.946 726.334C187.278 732.995 182.389 767.132 182.389 767.132C179.5 797.697 190.349 797.697 190.349 797.697C199.5 797.697 203.5 797.697 212.5 797.697C221.5 797.697 215.137 762.793 215.137 762.793C211.57 735.31 218.677 720.014 218.677 720.014C241.956 650.978 243.139 632.657 233.833 606.64C231.212 599.13 230.549 596.156 231.755 592.895C234.543 585.369 232.511 555.098 235.912 543.078C242.472 519.896 248.943 461.103 252.317 433.671C256.849 396.72 236.261 347.175 236.261 347.175C231.751 327.013 238.362 255.177 238.362 255.177C247.594 269.542 247.241 294.9 247.241 294.9C245.776 321.495 268.726 362.142 268.726 362.142C279.753 378.938 283.929 394.874 283.929 396.057C283.929 400.896 282.87 412.609 282.87 412.609L283.293 422.811C283.483 425.408 284.945 434.353 284.708 438.677C282.987 465.283 287.213 460.277 287.213 460.277C290.78 460.277 294.7 438.867 294.7 438.867C294.7 444.388 293.351 460.917 296.329 467.152C299.892 474.589 302.513 465.876 302.56 464.128C303.502 430.251 305.537 439.126 305.537 439.126C307.519 466.609 309.954 472.817 314.32 470.669C317.627 469.091 314.603 437.688 314.603 437.688C320.267 456.342 324.564 459.312 324.564 459.312C333.912 465.876 328.131 447.746 326.832 444.155C319.915 425.079 319.701 418.468 319.701 418.468C328.344 435.61 334.858 434.974 334.858 434.974C343.287 432.283 327.491 408.011 318.236 396.383C313.513 390.458 307.422 382.525 305.654 377.814C302.773 369.834 300.598 344.182 300.598 344.182C299.725 313.911 292.242 300.763 292.242 300.763C279.447 280.283 277.039 242.079 277.039 242.079L276.473 177.579C271.987 133.583 239.568 133.265 239.568 133.265C206.8 128.387 202.241 117.802 202.241 117.802C195.3 107.814 199.267 88.6675 199.267 88.6675C205.025 83.9836 207.246 71.5489 207.246 71.5489C216.808 64.2168 216.339 53.4882 211.922 53.6045C208.379 53.6976 209.181 50.7624 209.181 50.7624C215.16 2.466 172.284 0 172.284 0H165.739C165.739 0 122.844 2.466 128.815 50.7508C128.815 50.7508 129.618 53.6898 126.043 53.5929C121.638 53.4765 121.227 64.2052 130.754 71.5373C130.754 71.5373 132.972 83.9681 138.733 88.6558C138.733 88.6558 142.7 107.802 135.759 117.79C135.759 117.79 131.215 128.376 98.4321 133.253C98.4321 133.253 65.9592 133.571 61.5429 177.568L60.9303 242.067C60.9303 242.067 58.569 280.271 45.7233 300.751C45.7233 300.751 38.2749 313.903 37.4141 344.17C37.4141 344.17 35.2311 369.823 32.3619 377.802C30.6132 382.49 24.5258 390.423 19.7644 396.371C10.4277 407.976 -5.26398 432.198 3.1305 434.962C3.1305 434.962 9.67936 435.598 18.2871 418.456C18.2871 418.456 18.1087 425.021 11.2032 444.144C9.84609 447.688 4.07271 465.818 13.4249 459.3C13.4249 459.3 17.7559 456.326 23.3858 437.676C23.3858 437.676 20.3654 469.079 23.727 470.657C28.1201 472.809 30.5163 466.598 32.4976 439.115C32.4976 439.115 34.5294 430.24 35.4715 464.116C35.5181 465.865 38.081 474.577 41.6598 467.14C44.6803 460.906 43.3232 444.404 43.3232 438.855C43.3232 438.855 47.1967 460.266 50.8181 460.266C50.8181 460.266 55.0794 465.272 53.3307 438.665C53.0476 434.319 54.5714 425.397 54.7614 422.799L55.1724 412.598C55.1724 412.598 54.11 400.911 54.11 396.045C54.11 394.839 58.2898 378.927 69.3132 362.13C69.3132 362.13 92.24 321.464 90.7627 294.889C90.7627 294.889 90.4447 269.531 99.6767 255.165C99.6767 255.165 106.229 326.997 101.79 347.163C101.79 347.163 81.1662 396.708 85.7144 433.659C89.0644 461.165 95.5241 519.88 102.1 543.067C105.535 555.063 103.504 585.326 106.257 592.883C107.497 596.167 106.846 599.192 104.178 606.628C94.9231 632.646 96.1018 650.97 119.381 720.002C119.381 720.002 126.547 735.299 122.925 762.781C122.925 762.781 115.473 797.084 125 797.697C132.5 799.394 137.158 797.697 145.329 797.697C153.5 797.697 156 780.263 153.5 767.132C151 754 146.641 744.258 148.136 726.323C150.943 692.645 146.635 678.821 147.725 671.361C149.481 658.891 148.539 637.647 145.329 621.211C142.979 609.432 149.342 587.191 151.691 573.52C156.519 544.738 165.98 471.262 164.797 457.358L168.705 458.73C171.505 458.738 173.273 457.369 173.273 457.369Z"
          className="text-accent"
          pointerEvents="all"
          onClick={onPathClick}
          style={{ cursor: "pointer" }}
        />
        {/* <path
            d="M220.106 453.178C196.321 461.64 170.006 456.388 170.006 456.388C170.006 456.388 139.664 460.175 119.4 453.178C99.1356 446.181 90.6435 434.629 87 427.499C87 427.499 95.8 442.499 119.4 450.499C143 458.499 170.006 454.499 170.006 454.499C170.006 454.499 194.606 459.499 220.106 450.499C243.873 442.111 251.911 428.076 252.894 426.207C252.965 426.071 253 425.999 253 425.999C253 425.999 252.966 426.071 252.894 426.207C251.817 428.275 242.42 445.239 220.106 453.178Z"
            className="text-secondary"
          /> */}
        <path
          className="text-secondary"
          d="M170.006 142C170.955 207.788 171.11 243.623 170.006 309.5C168.294 244.061 168.108 207.562 170.006 142Z"
        />
      </g>
    )}
    {clickPositions.map((pos, index) => (
      <g key={index}>
        <circle
          cx={pos.x}
          cy={pos.y - 12}
          r={isZoom ? 8 : 16}
          className="text-destructive"
        />
        <rect
          x={pos.x - (isZoom ? 30 : 50)}
          y={pos.y + (isZoom ? -1 : 16)}
          width={isZoom ? 60 : 100}
          height={isZoom ? 24 : 50}
          className="text-destructive"
          rx={5} // Rounded corners
        />
        <text
          x={pos.x}
          y={pos.y + (isZoom ? 16 : 56)} // Position the text slightly below the dot
          className="text-accent-foreground"
          fontSize={isZoom ? 16 : 42}
          textAnchor="middle"
        >
          Test
        </text>
      </g>
    ))}
  </svg>
);

export default HumanBody;
