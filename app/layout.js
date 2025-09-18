import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Star Glow Technical Services - Complete Construction & Technical Solutions Dubai",
  description: "Leading technical services company in Dubai, UAE. Expert plaster works, painting, tiling, plumbing, electrical, HVAC installation & maintenance. Licensed contractor serving Dubai and UAE.",
  keywords: "technical services Dubai, construction services UAE, plaster works, painting contracting, plumbing installation, electrical services, HVAC Dubai, tiling works, carpentry services, sanitary installation",
  authors: [{ name: "Star Glow Technical Services" }],
  robots: "index, follow",
  openGraph: {
    title: "Star Glow Technical Services - Complete Construction & Technical Solutions Dubai",
    description: "Leading technical services company in Dubai, UAE. Expert plaster works, painting, tiling, plumbing, electrical, HVAC installation & maintenance.",
    url: "https://startglowdxb.com/", // ✅ FIXED
    siteName: "Star Glow Technical Services",
    images: [
      {
        url: "https://startglowdxb.com/images/logo.jpg", // ✅ FIXED
        width: 1200,
        height: 630,
        alt: "Star Glow Technical Services Logo",
      },
    ],
    type: "website",
    locale: "en_AE",
  },
  alternates: {
    canonical: "https://startglowdxb.com/", // ✅ FIXED
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <link rel="canonical" href="https://startglowdxb.com/" />
        <link rel="icon" href="/favicon.ico" />
        {/* Business Schema for Star Glow Technical Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Star Glow Technical Services",
              "alternateName": "ستار جلو للخدمات الفنية",
              "description": "Complete technical and construction services in Dubai, UAE. Specializing in plaster works, painting, plumbing, electrical, and HVAC solutions.",
              "url": "https://startglowdxb.com/", // ✅ FIXED
              "logo": "https://startglowdxb.com/images/logo.jpg", // ✅ FIXED
              "image": "https://startglowdxb.com/images/logo.jpg", // ✅ FIXED
              "telephone": "+971505577870",
              "email": "yousufali_99@yahoo.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office 35 E, Arnko Marlene Investment LLC Building",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "addressCountry": "AE",
                "name": "Dubai, United Arab Emirates"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.2048",
                "longitude": "55.2708"
              },
              "openingHours": "Mo-Sa 08:00-18:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "State",
                "name": "United Arab Emirates"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Technical Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Plaster Works",
                      "description": "Professional plastering services for residential and commercial properties"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Painting Contracting",
                      "description": "Interior and exterior painting services with premium quality finishes"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Floor & Wall Tiling Works",
                      "description": "Expert tiling installation for floors and walls using quality materials"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Plumbing & Sanitary Installation", 
                      "description": "Complete plumbing solutions and sanitary fixture installations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Electromechanical Equipment Installation",
                      "description": "Professional installation and maintenance of electromechanical systems"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "HVAC Installation & Maintenance",
                      "description": "Air conditioning, ventilation, and air filtration system services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Carpentry & Wood Flooring",
                      "description": "Custom carpentry work and professional wood flooring installation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "False Ceiling & Light Partitions",
                      "description": "Modern false ceiling installation and lightweight partition solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Electrical Services",
                      "description": "Electrical fittings, fixtures repair and maintenance services"
                    }
                  }
                ]
              },
              "founder": {
                "@type": "Person",
                "name": "Yousoof Ali Hameed Sulthan",
                "jobTitle": "Managing Director",
                "nationality": "India"
              },
              "license": {
                "@type": "GovernmentPermit",
                "identifier": "1544180",
                "issuedBy": {
                  "@type": "GovernmentOrganization", 
                  "name": "Department of Economy and Tourism, Dubai"
                },
                "validFrom": "2025-08-21",
                "validUntil": "2026-08-20"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Dubai"
                },
                {
                  "@type": "Country", 
                  "name": "United Arab Emirates"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/starglowservices",
                "https://www.instagram.com/starglowservices",
                "https://www.linkedin.com/company/starglow-technical-services"
              ]
            })
          }}
        />

        {/* Additional Contact Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPoint",
              "telephone": "+971505577870",
              "contactType": "customer service",
              "email": "yousufali_99@yahoo.com",
              "availableLanguage": ["English", "Arabic", "Hindi"],
              "areaServed": "AE"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}