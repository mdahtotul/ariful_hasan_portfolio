import { TIconCompProps } from "@/types/commonTypes";
import { useState } from "react";

const NextJSIcon = ({
  className,
  stroke,
  hoverStroke,
  onClick,
}: TIconCompProps) => {
  const [strokeColor, setStrokeColor] = useState(stroke || "#141414");
  const setHoverColor = () => setStrokeColor(hoverStroke || "#917AEB");
  const removeHoverColor = () => setStrokeColor(stroke || "#141414");
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 506.68 306.34"
      width="48px"
      height="48px"
      className={className}
      onClick={onClick}
      onMouseEnter={setHoverColor}
      onMouseLeave={removeHoverColor}
    >
      <path
        fill={strokeColor}
        d="M119.55,79.9h95.57v7.61H128.31V144.8h81.63v7.61H128.31v62.9h87.8v7.62H119.55Zm104.13,0h10.15l45,62.9,46-62.9L387.37,0,284.6,149.41l53,73.52H327L278.83,156l-48.38,66.91H220.1l53.35-73.52L223.68,79.9Zm117.66,7.61V79.9h108.9v7.61H400.07V222.92h-8.76V87.51h-50ZM0,79.9H11l151,226.44-62.4-83.41L9.16,90.71l-.4,132.22H0ZM449.36,213a3.19,3.19,0,1,1,3.13-3.18,3.1,3.1,0,0,1-3.13,3.18Zm8.61-8.38h4.69a4.28,4.28,0,0,0,4.64,4.26c3.05,0,4.78-1.84,4.78-5.28V181.8h4.77v21.83c0,6.2-3.58,9.77-9.5,9.77-5.56,0-9.38-3.46-9.38-8.77Zm25.12-.27h4.73c.41,2.92,3.26,4.78,7.37,4.78,3.84,0,6.65-2,6.65-4.72,0-2.35-1.79-3.76-5.86-4.72l-4-1c-5.56-1.31-8.1-4-8.1-8.54,0-5.49,4.47-9.15,11.18-9.15,6.25,0,10.81,3.66,11.09,8.85h-4.65c-.45-2.84-2.92-4.62-6.5-4.62-3.77,0-6.28,1.82-6.28,4.6,0,2.2,1.62,3.47,5.62,4.41l3.39.83c6.31,1.47,8.91,4,8.91,8.68,0,5.9-4.57,9.6-11.85,9.6-6.82,0-11.4-3.53-11.74-9.05Z"
      />
    </svg>
  );
};

export default NextJSIcon;
