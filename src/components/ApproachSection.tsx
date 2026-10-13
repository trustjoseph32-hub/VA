import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const ApproachSection: React.FC = () => {
  const { title, mainText, steps, methodsText } = siteConfig.approachBlock;

  return (
    <section id="approach" className="py-20 sm:py-28 border-t border-[#DDD5C8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14 sm:mb-18 text-left">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1C211D] font-normal tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#505952] leading-relaxed font-normal">
            {mainText}
          </p>
        </div>

        {/* 
          Steps of work:
          Natural human editorial pacing, zero artificial 01/02/03 counters, zero card boxes.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-14">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-t border-[#DDD5C8] pt-6 flex flex-col justify-start"
            >
              <h3 className="font-editorial text-xl sm:text-2xl font-normal text-[#1C211D] leading-snug mb-3">
                {step.title}
              </h3>
              {step.description && (
                <p className="text-sm sm:text-base text-[#505952] leading-relaxed font-normal">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Additional Methods note: Quiet typography on canvas, not an ornamental box */}
        <div className="max-w-3xl border-t border-[#DDD5C8] pt-8">
          <p className="text-sm sm:text-base text-[#505952] leading-relaxed font-normal">
            {methodsText}
          </p>
        </div>

      </div>
    </section>
  );
};
