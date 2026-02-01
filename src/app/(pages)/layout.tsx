import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.scss';
import { ContentContainer } from '@/shared/ui/ContentContainer';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Menu } from '@/widgets/Menu';

const montserrat = Montserrat({
  variable: '--font-accent',
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
        <main>
          <ContentContainer>{children}</ContentContainer>
        </main>
        <Footer />
      </body>
    </html>
  );
}
