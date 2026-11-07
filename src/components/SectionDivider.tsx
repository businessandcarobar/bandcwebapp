export default function SectionDivider({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 80"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 32C240 72 480 72 720 48C960 24 1200 8 1440 32V80H0V32Z"
        fill="currentColor"
      />
    </svg>
  );
}
