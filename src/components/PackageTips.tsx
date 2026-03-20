"use client";

import { useState } from "react";

interface PackageTipsProps {
  tips: string[];
  title?: string;
}

export default function PackageTips({ tips, title = "Top Tips from Nicola" }: PackageTipsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-[#C4A882] hover:text-[#A68B5B] text-sm font-medium transition-colors"
      >
        <span className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`}>▶</span>
        {title}
      </button>
      {isOpen && (
        <div className="mt-3 pl-6 space-y-2">
          {tips.map((tip, i) => (
            <p key={i} className="text-sm text-[#444444] flex items-start gap-2">
              <span className="text-[#C4A882] mt-0.5">•</span>
              {tip}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
