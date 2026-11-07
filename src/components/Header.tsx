import Link from 'next/link';
import { headers } from 'next/headers';
import MobileMenuButton from '@/components/MobileMenuButton';
import { SITE_NAME } from '@/lib/constants';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/stories', label: 'Stories' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = headers().get('x-pathname') ?? '/';

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 shadow-sm backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-secondary sm:text-2xl"
        >
          {SITE_NAME}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-primary underline underline-offset-4'
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <MobileMenuButton activePath={pathname} />
      </nav>
    </header>
  );
}
