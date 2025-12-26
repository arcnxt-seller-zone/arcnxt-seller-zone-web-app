"use client";

type BenefitsMarqueeProps = {
  items: string[];
};

export default function BenefitsMarquee({ items }: BenefitsMarqueeProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full overflow-hidden bg-[#6B44AF] text-white">
      <div className="relative flex">
        {[0, 1].map((_, blockIndex) => (
          <div
            key={blockIndex}
            className="flex shrink-0 gap-12 py-3 text-sm font-medium arcnxt-marquee"
          >
            {items.map((item, i) => (
              <span key={`${blockIndex}-${i}`} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
