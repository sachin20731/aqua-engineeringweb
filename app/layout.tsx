import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Marck_Script } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const markScript = Marck_Script({
  variable: "--font-markScript",
  subsets: ["latin"],
  weight: "400",
});

const SITE_URL = "https://aquaengineering.lk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aqua Engineering Construction | Construction Company in Piliyandala, Sri Lanka",
    template: "%s | Aqua Engineering Construction",
  },
  description:
    "Aqua Engineering Construction delivers building & construction, architectural design, interior design, estimating & BOQ, renovation, and project management services across Sri Lanka.",
  keywords:
    "construction company Sri Lanka, building construction, architectural design Sri Lanka, interior design, estimating and BOQ, renovation and remodeling, project management, construction company Piliyandala, residential construction Sri Lanka, commercial construction Sri Lanka",
  authors: [{ name: "Aqua Engineering Construction" }],
  creator: "Aqua Engineering Construction",
  publisher: "Aqua Engineering Construction",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Aqua Engineering Construction — From Vision To Reality",
    description:
      "Cost-effective, high-quality construction solutions for residential, commercial, and industrial projects across Sri Lanka.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Aqua Engineering Construction",
    images: [
      {
        url: "/Aqua Engineering Logo.png",
        width: 1200,
        height: 630,
        alt: "Aqua Engineering Construction",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: SITE_URL,
  },
};

function organizationJsonLd() {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["Organization", "GeneralContractor"],
      name: "Aqua Engineering Construction",
      alternateName: "Aqua Engineering",
      description:
        "Aqua Engineering Construction is a Sri Lankan construction company delivering building & construction, architectural design, interior design, estimating & BOQ, renovation, and project management services.",
      url: SITE_URL,
      logo: `${SITE_URL}/Aqua Engineering Logo.png`,
      image: `${SITE_URL}/Aqua Engineering Logo.png`,
      telephone: "+94769770968",
      email: "info@aquaengineering.lk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kurunduwaththa Road",
        addressLocality: "Piliyandala",
        postalCode: "10300",
        addressCountry: "LK",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+94769770968",
        email: "info@aquaengineering.lk",
        contactType: "customer service",
        areaServed: "LK",
        availableLanguage: ["English", "Sinhala"],
      },
    }),
  };
}

function websiteJsonLd() {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Aqua Engineering Construction",
      alternateName: "Aqua Engineering",
      url: SITE_URL,
      description:
        "Aqua Engineering Construction delivers building & construction, architectural design, interior design, estimating & BOQ, renovation, and project management services across Sri Lanka.",
      publisher: {
        "@type": "Organization",
        name: "Aqua Engineering Construction",
        logo: `${SITE_URL}/Aqua Engineering Logo.png`,
      },
    }),
  };
}

function breadcrumbJsonLd() {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE_URL}/about` },
        { "@type": "ListItem", position: 3, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 4, name: "Experience", item: `${SITE_URL}/experience` },
        { "@type": "ListItem", position: 5, name: "Products Supply", item: `${SITE_URL}/products` },
        { "@type": "ListItem", position: 6, name: "Our Projects", item: `${SITE_URL}/partners` },
        { "@type": "ListItem", position: 7, name: "Contact Us", item: `${SITE_URL}/contact` },
      ],
    }),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${markScript.variable} antialiased`}
    >
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        <link rel="canonical" href={SITE_URL + "/"} />
        <meta property="og:site_name" content="Aqua Engineering Construction" />
        <meta property="og:url" content={SITE_URL + "/"} />
        <meta property="og:title" content="Aqua Engineering Construction" />
        <meta
          property="og:description"
          content="Cost-effective, high-quality construction solutions for residential, commercial, and industrial projects across Sri Lanka."
        />
        <meta property="og:image" content={`${SITE_URL}/Aqua Engineering Logo.png`} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL + "/"} />
        <meta name="color-scheme" content="light dark" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={organizationJsonLd()}
          key="organization-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={websiteJsonLd()}
          key="website-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={breadcrumbJsonLd()}
          key="breadcrumb-jsonld"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
