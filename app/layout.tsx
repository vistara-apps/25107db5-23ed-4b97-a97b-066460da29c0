import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'PixelPerfect Studios',
  description: 'AI-Powered Visuals for Farcaster & Onchain',
  openGraph: {
    title: 'PixelPerfect Studios',
    description: 'AI-Powered Visuals for Farcaster & Onchain',
    images: ['/icon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
