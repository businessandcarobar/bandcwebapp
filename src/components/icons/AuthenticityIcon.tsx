export default function AuthenticityIcon({ className }: { className?: string }) {
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
      <path d="M12 20.5s-7-4.3-9.3-9A5 5 0 0 1 12 6a5 5 0 0 1 9.3 5.5c-2.3 4.7-9.3 9-9.3 9Z" />
    </svg>
  );
}
