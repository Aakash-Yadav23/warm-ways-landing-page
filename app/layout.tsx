import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alter - AI-Powered Marketing Platform',
  description:
    'Automate. Engage. Convert. Powered by AI. Your journey to AI-powered marketing starts here with seamless automation, real-time insights, and personalized engagement.',
  keywords: [
    'AI marketing',
    'automation',
    'customer engagement',
    'marketing platform',
    'AI-powered',
  ],
  authors: [{ name: 'Alter Team' }],
  creator: 'Alter',
  publisher: 'Alter',
  robots: 'index, follow',
  openGraph: {
    title: 'Alter - AI-Powered Marketing Platform',
    description:
      'Automate. Engage. Convert. Powered by AI. Your journey to AI-powered marketing starts here.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alter - AI-Powered Marketing Platform',
    description: 'Automate. Engage. Convert. Powered by AI.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
