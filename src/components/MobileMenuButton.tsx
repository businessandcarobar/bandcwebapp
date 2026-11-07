'use client';

import { useState } from 'react';
import Link from 'next/link';
import HamburgerIcon from '@/components/icons/HamburgerIcon';
import CloseIcon from '@/components/icons/CloseIcon';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/stories', label: 'Stories' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileMenuButton({ activePath }: { activePath: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="flex items-center justify-center rounded-md p-2 text-secondary hover:bg-accent-light"
      >
        {isOpen ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <HamburgerIcon className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 top-full w-full border-b border-border bg-surface shadow-md"
        >
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => {
              const isActive = activePath === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-base font-medium ${
                      isActive ? 'text-primary' : 'text-secondary'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
