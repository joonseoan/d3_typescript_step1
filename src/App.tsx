import React, { FC } from 'react';
import { arc } from 'd3';


const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const radius = centerY - strokeWidth / 2;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 30;
const mouthWidth = 20;
const mouthRadius = 140;


const BackgroundCircle: FC = () => {
  return (
    <circle
    // Since we use group and transform, we do not need these.
    // cx={centerX}
    // cy={centerY}
    r={radius}
    fill="yellow"
    stroke="black"
    strokeWidth={strokeWidth}
  />
  );
}

function App() {

  const mouthArc = arc();

  return (
    <svg width={width} height={height}>
      {/* grouping */}
      <g transform={`translate(${centerX}, ${centerY})`}>
        {/* <BackgroundCircle />  It works as well */}
        {/* cx: center of x, cy: center of y, stroke: border */}
        <circle
          // Since we use group and transform, we do not need these.
          // cx={centerX}
          // cy={centerY}
          r={radius}
          fill="yellow"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <circle
          // Since we use group and transform.
          // just from the center.
          cx={-eyeOffsetX}
          cy={-eyeOffsetY}
          // cx={centerX - eyeOffsetX}
          // cy={centerY - eyeOffsetY}
          r={eyeRadius}
        />
        <circle
          // just from the center.
          cx={eyeOffsetX}
          cy={-eyeOffsetY}
          r={eyeRadius}
        />
        {/* mouthArc returns string || null. However, d value type is string || undefined. Therefore when mouthArc is null => must return undefined. */}
        <path d={mouthArc({
          innerRadius: mouthRadius,
          outerRadius: mouthRadius + mouthWidth,
          startAngle: Math.PI / 2,
          endAngle: Math.PI * 1.5
        }) || undefined} />
      </g>
    </svg>
  );
}

export default App;
// 1.21.40 second 07/26
