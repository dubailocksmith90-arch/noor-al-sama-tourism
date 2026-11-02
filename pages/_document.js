import { Html, Head, Main, NextScript } from 'next/document';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Noor Al Sama Tourism L.L.C',
  url: 'https://nooralsamatour.com/',
  slogan:
    'Your ultimate gateway to unforgettable journeys and seamless travel experiences in the UAE!',
  telephone: '+971 58 148 1826',
  email: 'info@nas-travels.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bayat Complex, Office 118, Near Mamzar Center, Hor Al Anz (Alqeyada Metro Station)',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  areaServed: 'United Arab Emirates',
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <title>
          Noor Al Sama Tourism L.L.C | Dubai Visit Visas, Desert Safaris, City Tours &amp; Luxury Rent A Car
        </title>
        <meta
          name="description"
          content="Noor Al Sama Tourism L.L.C — your ultimate gateway to unforgettable journeys and seamless travel experiences in the UAE. Visit Visa & Family Visa assistance, airline tickets & tour packages, luxury rent a car, desert safaris, cruise tours, city tours and exclusive Abu Dhabi City Tours. Dubai office: Bayat Complex, Office 118, Near Mamzar Center, Hor Al Anz."
        />
        <meta
          name="keywords"
          content="Noor Al Sama Tourism, Dubai visit visa, family visa UAE, desert safari Dubai, Abu Dhabi city tour, Dubai city tour, cruise tours UAE, luxury rent a car Dubai, airline tickets Dubai, tour packages UAE"
        />
        <link rel="canonical" href="https://nooralsamatour.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Noor Al Sama Tourism L.L.C | Unforgettable Journeys in the UAE"
        />
        <meta
          property="og:description"
          content="From hassle-free Visit Visas and Family Visas to Luxury Rent A Car, thrilling Desert Safaris, City Tours, Cruise Tours, and exclusive Abu Dhabi City Tours — we handle every detail of your travel."
        />
        <meta property="og:url" content="https://nooralsamatour.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
