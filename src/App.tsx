import React from 'react';
import { arc } from 'd3';

function App() {

  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;
  const radius = centerY - strokeWidth / 2;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 30;
  const mouthArc = arc();

  return (
    <svg width={width} height={height}>
      {/* grouping */}
      <g transform={`translate(${centerX}, ${centerY})`}>
        {/* cx: center of x, cy: center of y, stroke: border */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="yellow"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={centerX - eyeOffsetX}
          cy={centerY - eyeOffsetY}
          r={eyeRadius}
        />
        <circle
          cx={centerX + eyeOffsetX}
          cy={centerY - eyeOffsetY}
          r={eyeRadius}
        />
        {/* mouthArc returns string || null. However, d value type is string || undefined. Therefore when mouthArc is null => must return undefined. */}
        <path d={mouthArc({
          innerRadius: 90,
          outerRadius: 100,
          startAngle: 0,
          endAngle: Math.PI * 2
        }) || undefined} />
      </g>
    </svg>
  );
}

export default App;
// 1.21.40 second 07/26
