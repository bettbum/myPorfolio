import Footer from 'layouts/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { Jura } from 'next/font/google';
import Wrapper from '@/layouts/Wrapper';
import Header from '@/layouts/Header';

const jura = Jura({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ng. Th. H. Phuc Portfolio',
  description: 'Cachep Technologies',
};

export default function RootLayout({
  children, params 
}: {
  children: React.ReactNode,
  params : {lng:'en'}
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={jura.className}>
        <Header params={params}/>
        <Wrapper>{children}</Wrapper>
        <Footer />
      </body>
    </html>
  );
}
