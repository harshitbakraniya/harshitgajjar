export default function Arrow({
  width,
  height,
  color = "white",
  className = "",
}) {
  const sizeProps =
    width != null ? { width, height: height ?? width } : {};

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={`shrink-0 ${className}`}
      {...sizeProps}
    >
      <path
        d="M75.7822 33.397C70.7817 40.2272 64.3299 58.5727 78.5265 77.3122"
        stroke={color}
        strokeWidth="8"
      />
      <path
        d="M33.2451 75.9358C40.0754 70.9353 58.4208 64.4835 77.1604 78.68"
        stroke={color}
        strokeWidth="8"
      />
      <line
        y1="-4"
        x2="75.8981"
        y2="-4"
        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.0674 77.9709)"
        stroke={color}
        strokeWidth="8"
      />
    </svg>
  );
}
