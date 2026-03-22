import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Wedding Ceremony Singer Glasgow & Scotland | Nicola Mason | Acoustic Vocalist",
  description:
    "Professional wedding ceremony singer in Glasgow & Central Scotland. Live acoustic music for your aisle entrance, register signing & exit song. Award-winning vocalist. From £325.",
  alternates: {
    canonical: '/weddings',
  },
  openGraph: {
    title: 'Wedding Ceremony Singer Glasgow & Scotland | Nicola Mason',
    description: 'Professional wedding ceremony singer. Live acoustic music for your ceremony - aisle entrance, register signing & exit song across Central Scotland.',
    url: 'https://www.nicolamason.co.uk/wedding-ceremony-singer',
    images: [
      {
        url: '/images/nicola-mason-wedding-ceremony.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedding Ceremony Singer Glasgow',
      },
    ],
  },
};

export default function WeddingCeremonySingerPage() {
  redirect('/weddings#ceremony');
}
