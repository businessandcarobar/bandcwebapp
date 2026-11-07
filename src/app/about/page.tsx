import type { Metadata } from 'next';
import TeamMemberCard from '@/components/TeamMemberCard';
import StoriesIcon from '@/components/icons/StoriesIcon';
import ChallengesIcon from '@/components/icons/ChallengesIcon';
import WinsIcon from '@/components/icons/WinsIcon';
import AuthenticityIcon from '@/components/icons/AuthenticityIcon';
import CommunityIcon from '@/components/icons/CommunityIcon';
import ImpactIcon from '@/components/icons/ImpactIcon';
import { dummyTeam } from '@/data/dummyTeam';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION =
  'Business & Carobar gives grassroots entrepreneurs a platform to share their stories, challenges, and wins.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

const contentTypes = [
  { title: 'Stories', Icon: StoriesIcon },
  { title: 'Interviews', Icon: StoriesIcon },
  { title: 'Challenges', Icon: ChallengesIcon },
  { title: 'Wins', Icon: WinsIcon },
  { title: 'Industry Spotlights', Icon: ImpactIcon },
];

const values = [
  {
    title: 'Authenticity',
    description: 'We tell stories as they are — unfiltered and honest.',
    Icon: AuthenticityIcon,
  },
  {
    title: 'Community',
    description: 'We grow by lifting up the people building around us.',
    Icon: CommunityIcon,
  },
  {
    title: 'Impact',
    description: 'Every story we tell aims to create real, lasting change.',
    Icon: ImpactIcon,
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
      <h1 className="text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
        About Business &amp; Carobar
      </h1>

      <section aria-label="Our mission" className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold text-secondary md:text-3xl">
          Our Mission
        </h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-text-secondary">
          <p>
            Business &amp; Carobar exists because the biggest business stories in
            India aren&apos;t always the ones making headlines. They&apos;re
            happening in chai stalls, kirana stores, home kitchens, and
            one-room workshops — built by people with no investors, no PR
            teams, and no shortage of grit.
          </p>
          <p>
            We believe grassroots entrepreneurs deserve the same spotlight as
            unicorn startups. Their stories of struggle, adaptation, and
            quiet wins carry lessons that mainstream business media rarely
            captures.
          </p>
          <p>
            Our mission is simple: find these stories, tell them honestly,
            and give local business communities a platform to be seen and
            heard.
          </p>
        </div>
      </section>

      <section aria-label="What we cover" className="mt-16">
        <h2 className="text-2xl font-bold text-secondary md:text-3xl">
          What We Cover
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {contentTypes.map(({ title, Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-6 text-center shadow-sm"
            >
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="text-sm font-semibold text-secondary">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section aria-label="Our team" className="mt-16">
        <h2 className="text-2xl font-bold text-secondary md:text-3xl">
          Team
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {dummyTeam.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      <section aria-label="Our values" className="mt-16">
        <h2 className="text-2xl font-bold text-secondary md:text-3xl">
          Values
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-surface p-8 text-center shadow-sm"
            >
              <Icon className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 text-lg font-bold text-secondary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
