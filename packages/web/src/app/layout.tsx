import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'On Bouffe Quoi',
  description: 'Find what to eat',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
} 