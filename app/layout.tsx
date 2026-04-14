import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CineDraft League',
  description: 'Fantasy box office for your movie community.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
