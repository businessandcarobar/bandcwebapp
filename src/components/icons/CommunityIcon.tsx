export default function CommunityIcon({ className }: { className?: string }) {
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
      <circle cx="7" cy="8" r="2.5" />
      <circle cx="17" cy="8" r="2.5" />
      <circle cx="12" cy="16" r="2.5" />
      <path d="M7 10.5V13M17 10.5V13M9.3 17.3 10.8 17M14.7 17.3 13.2 17" />
    </svg>
  );
}
