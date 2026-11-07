import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION =
  'Share your entrepreneur story with Business & Carobar or get in touch with our team.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/contact`,
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
    canonical: `${SITE_URL}/contact`,
  },
};

const socialLinks = [
  { href: '#', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: '#', label: 'Twitter / X', Icon: TwitterIcon },
  { href: '#', label: 'Instagram', Icon: InstagramIcon },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
      <h1 className="text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
        Get in Touch
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-text-secondary">
        Want to share your story or know someone whose story deserves to be
        told? Reach out.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <ContactForm />
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-secondary">Contact Info</h2>
          <p className="mt-3 text-sm text-text-secondary">
            Email:{' '}
            <a
              href="mailto:businessandcarobar@gmail.com"
              className="text-accent hover:underline"
            >
              businessandcarobar@gmail.com
            </a>
          </p>

          <h2 className="mt-8 text-xl font-bold text-secondary">Follow Us</h2>
          <ul className="mt-3 flex gap-4">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-light text-accent transition-colors duration-200 hover:bg-primary hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
