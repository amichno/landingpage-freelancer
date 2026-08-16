export function BackgroundPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-50"
      style={{
        backgroundImage:
          "repeating-linear-gradient(115deg, transparent 0 6px, rgba(61,220,151,0.05) 6px 7px)",
        backgroundSize: "26px 26px",
      }}
    />
  );
}
