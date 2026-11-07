import Link from 'next/link';
import HeroPattern from '@/components/icons/HeroPattern';
import { SITE_TAGLINE } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <HeroPattern className="pointer-events-none absolute inset-0 h-full w-full text-primary opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl lg:text-6xl">
          Business &amp; Carobar
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
          {SITE_TAGLINE}
        </p>
        <div className="mt-10">
          <Link
            href="/stories"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-md"
          >
            Read Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
