import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Wedding Singer Edinburgh | Live Wedding Music | Nicola Mason",
  description:
    "Award-winning wedding singer in Edinburgh & The Lothians. Live acoustic music for ceremonies, drinks receptions & celebrations. Trusted at Edinburgh's finest venues.",
  alternates: {
    canonical: '/weddings',
  },
  openGraph: {
    title: 'Wedding Singer Edinburgh | Nicola Mason',
    description: 'Award-winning wedding singer in Edinburgh & The Lothians. Live acoustic music for ceremonies and receptions.',
    url: 'https://www.nicolamason.co.uk/weddings',
    images: [
      {
        url: '/images/nicola-mason-wedding-events-singer.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedding Singer Edinburgh',
      },
    ],
  },
};

export default function WeddingSingerEdinburghPage() {
  redirect('/weddings');
}
