interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  initials,
}: TeamMemberCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div
        aria-hidden="true"
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-light text-lg font-bold text-accent"
      >
        {initials}
      </div>
      <h3 className="mt-4 text-lg font-bold text-secondary">{name}</h3>
      <p className="text-sm font-medium text-primary">{role}</p>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{bio}</p>
    </div>
  );
}
