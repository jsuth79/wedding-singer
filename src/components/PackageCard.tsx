import Link from "next/link";
import Image from "next/image";
import PackageTips from "@/components/PackageTips";
import type { Package } from "@/data/packages";

const tipTitles: Record<string, string> = {
  "Ceremony": "Top Ceremony Tips from Nicola",
  "Drinks Reception": "Top Drinks Reception Music Tips from Nicola",
  "Dinner": "Top Wedding Dinner Music Tips from Nicola",
  "Daytime Package": "Top Daytime Music Tips from Nicola",
  "The Full Shebang": "Top Wedding Music Tips from Nicola",
  "First Dances": "Top First Dance Music Tips from Nicola",
};

type Props = {
  pkg: Package;
};

export default function PackageCard({ pkg }: Props) {
  return (
    <div
      className={`relative bg-white rounded-lg overflow-hidden ${
        pkg.popular
          ? "ring-2 ring-[#C4A882] shadow-xl"
          : "border border-stone-200"
      }`}
    >
      {pkg.popular && (
        <span className="absolute top-4 right-4 z-10 bg-[#C4A882] text-white text-sm uppercase tracking-wider px-3 py-1 rounded-full">
          Popular
        </span>
      )}
      <div className="aspect-[4/3] relative">
        <Image
          src={pkg.image}
          alt={pkg.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif text-[#1a1a1a] mb-1">{pkg.name}</h3>
        <p className="text-2xl font-serif text-[#C4A882] mb-1">{pkg.price}</p>
        <p className="text-[#888888] text-sm mb-4">{pkg.description}</p>
        <ul className="space-y-2 mb-6">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#444444]">
              <span className="text-[#C4A882] mt-0.5">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        {pkg.tips && (
          <PackageTips
            tips={pkg.tips}
            title={tipTitles[pkg.name] ?? "Top Tips from Nicola"}
          />
        )}
        {pkg.link ? (
          <a
            href={pkg.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-6 py-3 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
          >
            Find Out More
          </a>
        ) : (
          <Link
            href="/enquiry"
            className="block w-full text-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-6 py-3 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
          >
            Check My Availability
          </Link>
        )}
      </div>
    </div>
  );
}
