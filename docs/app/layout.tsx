import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Define variable for Tailwind
});

export const metadata = {
  metadataBase: new URL('https://inferia.ai'),
};

export default function Layout({ children }: LayoutProps<'/'>) {
  // @ts-expect-error React 19 types compatibility
  const root = <RootProvider>{children}</RootProvider>;

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        {root}
      </body>
    </html>
  );
}
