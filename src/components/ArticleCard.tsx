import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  imageUrl?: string;
}

const categoryGradients: Record<string, string> = {
  'Food & Beverage': 'from-amber-400 to-orange-500',
  Retail: 'from-teal-400 to-cyan-600',
  Tech: 'from-indigo-400 to-blue-600',
  Services: 'from-rose-400 to-pink-600',
  Manufacturing: 'from-slate-400 to-slate-600',
};

export default function ArticleCard({
  title,
  excerpt,
  category,
  date,
  slug,
  imageUrl,
}: ArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const gradient = categoryGradients[category] ?? 'from-slate-300 to-slate-500';

  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <Link href={`/stories/${slug}`} className="block">
        {imageUrl ? (
          <div className="relative h-48 w-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
        ) : (
          <div
            className={`flex h-48 w-full items-center justify-center bg-gradient-to-br ${gradient}`}
          >
            <span className="px-4 text-center text-lg font-semibold text-white">
              {category}
            </span>
          </div>
        )}

        <div className="p-5">
          <span className="inline-block rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
            {category}
          </span>
          <h3 className="mt-3 text-lg font-bold leading-snug text-secondary group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-secondary">
            {excerpt}
          </p>
          <time dateTime={date} className="mt-4 block text-xs text-text-secondary">
            {formattedDate}
          </time>
        </div>
      </Link>
    </article>
  );
}
