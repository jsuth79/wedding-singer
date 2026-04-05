import Link from "next/link";
import Image from "next/image";
import PackageTips from "@/components/PackageTips";
import type { Package } from "@/data/packages";

const PACKAGE_NAMES = ["The Full Shebang", "Daytime Package", "Drinks Reception", "Wedding Meal", "Ceremony", "First Dances"];

function highlightFeature(text: string) {
  const pattern = new RegExp(`(${PACKAGE_NAMES.map(n => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    PACKAGE_NAMES.includes(part)
      ? <span key={i} className="text-[#C4A882] font-medium">{part}</span>
      : part
  );
}

const tipTitles: Record<string, string> = {
  "Ceremony": "Top Ceremony Tips from Nicola",
  "Drinks Reception": "Top Drinks Reception Music Tips from Nicola",
  "Wedding Meal": "Top Wedding Meal Music Tips from Nicola",
  "Daytime Package": "Top Daytime Music Tips from Nicola",
  "The Full Shebang": "Top Wedding Music Tips from Nicola",
  "First Dances": "Top First Dance Music Tips from Nicola",
};

type Props = {
  pkg: Package;
  findOutMoreHref?: string;
  findOutMoreLabel?: string;
};

export default function PackageCard({
  pkg,
  findOutMoreHref,
  findOutMoreLabel = "Find Out More",
}: Props) {
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
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
              <span>{pkg.disableHighlight ? feature : highlightFeature(feature)}</span>
            </li>
          ))}
        </ul>
        {pkg.tips && (
          <PackageTips
            tips={pkg.tips}
            title={tipTitles[pkg.name] ?? "Top Tips from Nicola"}
          />
        )}
        {findOutMoreHref && (
          <Link
            href={findOutMoreHref}
            className="block w-full text-center border border-[#C4A882] text-[#C4A882] hover:bg-[#C4A882] hover:text-white px-6 py-3 text-sm tracking-wider transition-colors rounded-[4px] mb-3"
          >
            {findOutMoreLabel}
          </Link>
        )}
        {pkg.link ? (
          <a
            href={pkg.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center border border-[#C4A882] text-[#C4A882] hover:bg-[#C4A882] hover:text-white px-6 py-3 text-sm tracking-wider transition-colors rounded-[4px] mb-3"
          >
            Find Out More
          </a>
        ) : (
          <Link
            href="/enquiry"
            className="flex flex-col items-center w-full text-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-6 py-3 text-sm tracking-wider transition-colors rounded-[4px]"
          >
            <span>Check Your Date</span>
            <span className="text-xs normal-case tracking-normal mt-0.5 opacity-75">quick reply, no pressure</span>
          </Link>
        )}
      </div>
    </div>
  );
}
