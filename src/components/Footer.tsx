import Link from 'next/link';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import { SITE_NAME } from '@/lib/constants';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/stories', label: 'Stories' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: '#', label: 'Twitter / X', Icon: TwitterIcon },
  { href: '#', label: 'Instagram', Icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">{SITE_NAME}</p>
            <p className="mt-2 max-w-xs text-sm text-slate-300">
              Amplifying grassroots entrepreneurship.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Follow Us
            </h2>
            <ul className="mt-4 flex gap-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          © 2024 Business &amp; Carobar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
