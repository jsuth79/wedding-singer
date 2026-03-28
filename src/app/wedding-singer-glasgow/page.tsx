import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Wedding Singer Glasgow | Live Acoustic Music for Weddings | Nicola Mason",
  description:
    "Award-winning wedding singer in Glasgow. Scottish Wedding Awards Winner. Live acoustic music for ceremonies, drinks receptions & first dances. Serving Glasgow & Central Scotland.",
  alternates: {
    canonical: '/weddings',
  },
  openGraph: {
    title: 'Wedding Singer Glasgow | Nicola Mason',
    description: 'Award-winning wedding singer in Glasgow. Live acoustic music for ceremonies, receptions & first dances across Central Scotland.',
    url: 'https://www.nicolamason.co.uk/weddings',
    images: [
      {
        url: '/images/nicola-mason-wedding-events-singer.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedding Singer Glasgow',
      },
    ],
  },
};

export default function WeddingSingerGlasgowPage() {
  redirect('/weddings');
}
