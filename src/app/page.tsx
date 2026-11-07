import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import SectionDivider from '@/components/SectionDivider';
import ArticleCard from '@/components/ArticleCard';
import JsonLd from '@/components/JsonLd';
import StoriesIcon from '@/components/icons/StoriesIcon';
import ChallengesIcon from '@/components/icons/ChallengesIcon';
import WinsIcon from '@/components/icons/WinsIcon';
import { dummyArticles } from '@/data/dummyArticles';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${SITE_NAME} | Grassroots Entrepreneur Stories & News`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} | Grassroots Entrepreneur Stories & News`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const whatWeDo = [
  {
    title: 'Stories',
    description: 'Real stories from real entrepreneurs — unfiltered, unpolished, honest.',
    Icon: StoriesIcon,
  },
  {
    title: 'Challenges',
    description: 'The problems small businesses face, told by the people living them.',
    Icon: ChallengesIcon,
  },
  {
    title: 'Wins',
    description: "Celebrating achievements that don't make mainstream headlines.",
    Icon: WinsIcon,
  },
];

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  sameAs: [],
};

export default function Home() {
  const latestStories = dummyArticles.slice(0, 3);

  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <HeroSection />
      <SectionDivider className="h-12 w-full text-background" />

      <section aria-label="What we do" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-secondary md:text-4xl">
            What We Do
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {whatWeDo.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-surface p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <Icon className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-bold text-secondary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Latest stories" className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-secondary md:text-4xl">
            Latest Stories
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestStories.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/stories"
              className="text-base font-semibold text-accent hover:underline"
            >
              View All Stories →
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Share your story" className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Have a story to share? We want to hear from you.
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-base font-semibold text-primary shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
