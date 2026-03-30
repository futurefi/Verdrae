import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fixing Broken Marketing',
  description: 'From random acts of marketing to a structured growth system.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-canvas text-textPrimary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
