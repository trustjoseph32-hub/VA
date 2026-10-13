import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-12 pb-16 sm:pt-18 sm:pb-24 lg:pt-22 lg:pb-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, Bio hook and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Context Badge */}
            <div className="mb-4 text-xs sm:text-sm font-medium tracking-wide uppercase text-[#2E5A44] select-none">
              {siteConfig.hero.badge}
            </div>

            {/* Main Title */}
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#1C211D] tracking-tight mb-6 sm:mb-8">
              {siteConfig.hero.title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-[#505952] leading-relaxed mb-8 sm:mb-10 max-w-2xl font-normal">
              {siteConfig.hero.description}
            </p>

            {/* Actions: Primary CTA and secondary anchor */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto mb-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center bg-[#2E5A44] hover:bg-[#254A37] text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-md text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2E5A44] cursor-pointer"
              >
                {siteConfig.hero.primaryCtaText}
              </button>

              <a
                href={siteConfig.hero.secondaryCtaTarget}
                className="inline-flex items-center justify-center text-[#1C211D] hover:text-[#2E5A44] px-4 py-3.5 text-base font-medium transition-colors focus:outline-none focus-visible:underline group"
              >
                <span>{siteConfig.hero.secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Microcopy disclaimer */}
            <div className="text-xs sm:text-sm text-[#79827B]">
              {siteConfig.hero.ctaSubtext}
            </div>
          </div>

          {/* Right Column: Serene Editorial Portrait Mount */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] bg-[#F2EDE5] border-t border-b border-[#DDD5C8] flex flex-col items-center justify-between p-8 sm:p-10 text-center">
              <div className="w-full flex justify-between items-center text-xs text-[#79827B] border-b border-[#DDD5C8] pb-3">
                <span className="font-editorial text-[#1C211D] font-normal">{siteConfig.specialist.fullName}</span>
                <span>{siteConfig.specialist.profession}</span>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center my-6 text-[#505952]">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#E8E1D6] flex items-center justify-center mb-5 text-3xl font-editorial text-[#2E5A44]">
                  ВА
                </div>
                <p className="font-editorial text-xl text-[#1C211D] mb-1.5 font-normal">
                  {siteConfig.specialist.fullName}
                </p>
                <p className="text-sm text-[#6A736C] max-w-[240px] leading-relaxed">
                  Очные приемы в Москве и регулярная онлайн-терапия
                </p>
              </div>

              <div className="w-full pt-3 border-t border-[#DDD5C8] text-left">
                <p className="text-xs text-[#79827B] leading-snug">
                  10+ лет клинической практики · Сертифицированные методы
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
