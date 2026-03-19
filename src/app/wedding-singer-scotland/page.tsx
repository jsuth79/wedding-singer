import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Wedding Singer Scotland | Central Scotland & Edinburgh | Nicola Mason",
  description:
    "Professional wedding singer across Scotland. Serving Glasgow, Edinburgh, Lanarkshire, Stirling & The Lothians. Award-winning vocalist for ceremonies & receptions. From £325.",
  alternates: {
    canonical: '/weddings',
  },
  openGraph: {
    title: 'Wedding Singer Scotland | Nicola Mason',
    description: 'Professional wedding singer across Central Scotland. Serving Glasgow, Edinburgh, Lanarkshire, Stirling & The Lothians.',
    url: 'https://www.nicolamason.co.uk/wedding-singer-scotland',
    images: [
      {
        url: '/images/nicola-mason-wedding-events-singer.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedding Singer Scotland',
      },
    ],
  },
};

export default function WeddingSingerScotlandPage() {
  redirect('/weddings');
}
