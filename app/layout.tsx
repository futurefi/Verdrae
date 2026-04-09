import "./globals.css";

export const metadata = {
  title: "Fixing Broken Marketing",
  description: "From random acts of marketing to a growth system."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}