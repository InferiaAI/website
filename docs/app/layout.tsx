import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Define variable for Tailwind
});

export const metadata = {
  metadataBase: new URL('https://inferia.ai'),
  title: {
    default: 'Inferia - AI Inference Platform',
    template: '%s | Inferia'
  },
  description: 'Deploy and manage AI inference workloads with enterprise-grade security, monitoring, and scalability. Build production AI applications with ease.',
  keywords: ['AI inference', 'machine learning', 'LLM deployment', 'AI platform', 'MLOps', 'model serving'],
  authors: [{ name: 'Inferia Team' }],
  creator: 'Inferia',
  publisher: 'Inferia',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://inferia.ai',
    siteName: 'Inferia',
    title: 'Inferia - AI Inference Platform',
    description: 'Deploy and manage AI inference workloads with enterprise-grade security, monitoring, and scalability.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Inferia - AI Inference Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inferia - AI Inference Platform',
    description: 'Deploy and manage AI inference workloads with enterprise-grade security, monitoring, and scalability.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  const root = (
    // @ts-ignore React 19 types compatibility
    <RootProvider
      theme={{
        defaultTheme: 'dark',
      }}
    >
      {children}
    </RootProvider>
  );

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        {root}
      </body>
    </html>
  );
}
