import Link from 'next/link';

const footerLinks = [
  { href: '/#system', label: 'System overview' },
  { href: '/lifecycle', label: 'Lifecycle guide' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/#principles', label: 'Principles' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#about', label: 'About' }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0D1014]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-16">
        <div className="lg:col-span-5">
          <div className="text-sm uppercase tracking-[0.22em] text-textSecondary">Fixing Broken Marketing</div>
          <p className="mt-4 max-w-[44ch] text-sm leading-7 text-textMuted">
            A structured guide for turning disconnected marketing activity into a growth system.
          </p>
        </div>
        <div className="grid gap-3 lg:col-span-7 md:grid-cols-2">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-textSecondary transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
