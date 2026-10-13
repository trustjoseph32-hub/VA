import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface IntroCallSectionProps {
  onOpenBooking: () => void;
}

export const IntroCallSection: React.FC<IntroCallSectionProps> = ({ onOpenBooking }) => {
  const { title, highlightBadge, description, disclaimer, ctaText } =
    siteConfig.introCallBlock;

  return (
    <section
      id="intro-call"
      className="py-20 sm:py-28 border-t border-b border-[#DDD5C8]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          
          <div className="max-w-xl">
            {/* Editorial metadata line */}
            <div className="text-xs sm:text-sm font-medium text-[#2E5A44] mb-3 select-none">
              {highlightBadge}
            </div>

            {/* Title */}
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C211D] tracking-tight mb-4 leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#505952] leading-relaxed mb-6 font-normal">
              {description}
            </p>

            {/* Important distinction */}
            <p className="text-xs sm:text-sm text-[#79827B] border-t border-[#EAE4DC] pt-4 leading-relaxed font-normal">
              {disclaimer}
            </p>
          </div>

          {/* Action button: Solid fill, no gradient */}
          <div className="shrink-0 flex flex-col items-start md:items-end justify-center w-full md:w-auto">
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#2E5A44] hover:bg-[#254A37] text-white px-8 py-4 rounded text-base font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2E5A44]"
            >
              <span>{ctaText}</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
            <p className="text-xs text-[#79827B] mt-2.5 text-left md:text-right">
              Бесплатно · Без скрытых обязательств
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
