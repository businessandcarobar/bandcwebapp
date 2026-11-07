export default function HeroPattern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="hero-dot-grid"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#hero-dot-grid)" />
      <circle cx="340" cy="60" r="70" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="340" r="90" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M0 180 C 100 120, 300 240, 400 160"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
