import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LegalBanner } from '@/components/legal-banner';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Patent Filing Platform',
  description: 'Automated patent filing with AI assistance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <LegalBanner />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}