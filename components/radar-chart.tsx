import React from 'react';
import Svg, { Circle, Line, Polygon, Text as SvgText } from 'react-native-svg';

export type RadarDataPoint = {
  label: string;
  value: number; // 0–1 normalised
};

type RadarChartProps = {
  data: RadarDataPoint[];
  size?: number;
  accentColor?: string;
  gridColor?: string;
  labelColor?: string;
  dotStrokeColor?: string;
};

/** Returns N evenly-spaced points on a circle of radius `r` centred at (cx, cy).
 *  Rotation starts at the top (−π/2) so the first axis points straight up. */
function circlePoints(
  cx: number,
  cy: number,
  r: number,
  n: number,
): { x: number; y: number }[] {
  return Array.from({ length: n }, (_, i) => {
    const angle = -Math.PI / 2 + (2 * Math.PI * i) / n;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
}

function toSvgPoints(pts: { x: number; y: number }[]): string {
  return pts.map((p) => `${p.x},${p.y}`).join(' ');
}

export function RadarChart({
  data,
  size = 280,
  accentColor = '#f97316',
  gridColor = 'rgba(255,255,255,0.12)',
  labelColor = 'rgba(255,255,255,0.85)',
  dotStrokeColor = '#0d1117',
}: RadarChartProps) {
  const n = data.length;
  if (n < 3) return null;

  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.36;
  const labelR = maxR + 30;
  const gridLevels = 4;

  // Pre-compute axis outer points
  const axisOuter = circlePoints(cx, cy, maxR, n);

  // Grid rings (concentric polygons)
  const gridPolygons = Array.from({ length: gridLevels }, (_, i) => {
    const r = maxR * ((i + 1) / gridLevels);
    return toSvgPoints(circlePoints(cx, cy, r, n));
  });

  // Data polygon
  const dataPolygonPts = data.map((d, i) => {
    const r = maxR * Math.max(0, Math.min(1, d.value));
    const angle = -Math.PI / 2 + (2 * Math.PI * i) / n;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });

  // Label positions
  const labelPts = circlePoints(cx, cy, labelR, n);

  return (
    <Svg width={size} height={size}>
      {/* Grid rings */}
      {gridPolygons.map((pts, i) => (
        <Polygon
          key={`grid-${i}`}
          points={pts}
          fill={accentColor}
          fillOpacity={i === gridLevels - 1 ? 0.04 : 0}
          stroke={gridColor}
          strokeWidth={1}
        />
      ))}

      {/* Axis spokes */}
      {axisOuter.map((pt, i) => (
        <Line
          key={`axis-${i}`}
          x1={cx}
          y1={cy}
          x2={pt.x}
          y2={pt.y}
          stroke={gridColor}
          strokeWidth={1}
        />
      ))}

      {/* Data area fill */}
      <Polygon
        points={toSvgPoints(dataPolygonPts)}
        fill={accentColor}
        fillOpacity={0.2}
        stroke={accentColor}
        strokeWidth={2.5}
        strokeLinejoin="round"
      />

      {/* Data dots */}
      {dataPolygonPts.map((pt, i) => (
        <Circle
          key={`dot-${i}`}
          cx={pt.x}
          cy={pt.y}
          r={5}
          fill={accentColor}
          stroke={dotStrokeColor}
          strokeWidth={2}
        />
      ))}

      {/* Labels */}
      {data.map((d, i) => {
        const pt = labelPts[i];
        const angle = -Math.PI / 2 + (2 * Math.PI * i) / n;
        const textAnchor =
          Math.abs(Math.cos(angle)) < 0.15
            ? 'middle'
            : Math.cos(angle) > 0
              ? 'start'
              : 'end';
        return (
          <SvgText
            key={`label-${i}`}
            x={pt.x}
            y={pt.y}
            textAnchor={textAnchor}
            alignmentBaseline="middle"
            fill={labelColor}
            fontSize={11}
            fontWeight="700"
            letterSpacing={0.5}
          >
            {d.label.toUpperCase()}
          </SvgText>
        );
      })}
    </Svg>
  );
}
