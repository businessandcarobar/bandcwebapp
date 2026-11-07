export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const dummyTeam: TeamMember[] = [
  {
    name: 'Deshdeep Saxena',
    role: 'Founder',
    bio: 'Storyteller by Profession. Building a platform to give grassroots entrepreneurs the spotlight they deserve.',
    initials: 'DS',
  },
  {
    name: 'Kartik Saxena',
    role: 'Co-Founder',
    bio: 'Engineer by trade, storyteller by passion.',
    initials: 'KS',
  }
];
