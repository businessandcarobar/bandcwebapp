import type { Metadata } from 'next';
import CategoryFilter from '@/components/CategoryFilter';
import ArticleCard from '@/components/ArticleCard';
import JsonLd from '@/components/JsonLd';
import { dummyArticles } from '@/data/dummyArticles';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const PAGE_TITLE = 'Stories';
const PAGE_DESCRIPTION =
  'Real entrepreneur stories from India\u2019s grassroots business community — food, retail, tech, services, and manufacturing.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/stories`,
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
    canonical: `${SITE_URL}/stories`,
  },
};

const articlesJsonLd = dummyArticles.map((article) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.excerpt,
  datePublished: article.date,
  author: { '@type': 'Organization', name: SITE_NAME },
  publisher: { '@type': 'Organization', name: SITE_NAME },
}));

export default function StoriesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
      <JsonLd data={articlesJsonLd} />
      <h1 className="text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
        Stories
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-text-secondary">
        Every business has a story. These are the ones worth telling.
      </p>

      <div className="mt-10">
        <CategoryFilter />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
}
