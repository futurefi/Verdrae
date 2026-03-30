import Link from 'next/link';
import { primaryNav } from '@/lib/site';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-canvas/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-8 lg:px-12">
        <Link href="/" className="text-sm uppercase tracking-[0.22em] text-textSecondary transition hover:text-white">
          Fixing Broken Marketing
        </Link>
        <nav className="hidden gap-8 text-sm text-textSecondary md:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white focus:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/lifecycle"
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-textPrimary transition hover:border-white/30 hover:bg-white/5"
        >
          Start here
        </Link>
      </div>
    </header>
  );
}
