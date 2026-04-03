import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

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
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WFZ8M46R');`}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WFZ8M46R"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {root}
      </body>
    </html>
  );
}
