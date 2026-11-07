export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const dummyTeam: TeamMember[] = [
  {
    name: 'Kartik Saxena',
    role: 'Founder',
    bio: 'Engineer by trade, storyteller by passion. Building a platform to give grassroots entrepreneurs the spotlight they deserve.',
    initials: 'KS',
  },
];
