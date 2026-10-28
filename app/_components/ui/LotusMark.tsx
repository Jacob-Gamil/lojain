const PETALS = [
  { angle: 0, scale: 1 },
  { angle: -33, scale: 0.92 },
  { angle: 33, scale: 0.92 },
  { angle: -62, scale: 0.76 },
  { angle: 62, scale: 0.76 },
  { angle: -86, scale: 0.58 },
  { angle: 86, scale: 0.58 },
];

const PETAL_PATH = "M100 170 C 82 140 82 100 100 64 C 118 100 118 140 100 170";

/**
 * Fine gold lotus line art — the brand's primary symbol.
 */
export default function LotusMark({
  className = "",
  strokeWidth = 1,
  innerStrokeWidth = 0.7,
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <g strokeWidth={strokeWidth}>
        {PETALS.map(({ angle, scale }) => (
          <path
            key={angle}
            d={PETAL_PATH}
            transform={`rotate(${angle} 100 170) translate(100 170) scale(${scale}) translate(-100 -170)`}
          />
        ))}
      </g>
      <g strokeWidth={innerStrokeWidth} opacity="0.55">
        <path d="M100 156 C 90 136 90 108 100 84" />
        <path d="M100 156 C 110 136 110 108 100 84" />
        <path d="M30 168 Q 100 182 170 168" />
        <path d="M46 177 Q 100 188 154 177" opacity="0.7" />
      </g>
    </svg>
  );
}
