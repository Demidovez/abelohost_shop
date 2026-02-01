import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.scss';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Menu } from '@/widgets/Menu';

import { PageContainer } from './_components/PageContainer';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AbeloHost Shop',
  description: 'AbeloHost Shop - best products for your home',
  icons: {
    icon: '/favicon.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <Menu />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </body>
    </html>
  );
}
