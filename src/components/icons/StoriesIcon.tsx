export default function StoriesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 6c-1.5-1.3-3.6-2-6-2-1 0-2 .1-3 .4v14c1-.3 2-.4 3-.4 2.4 0 4.5.7 6 2 1.5-1.3 3.6-2 6-2 1 0 2 .1 3 .4V4.4c-1-.3-2-.4-3-.4-2.4 0-4.5.7-6 2Z" />
      <path d="M12 6v14" />
    </svg>
  );
}
