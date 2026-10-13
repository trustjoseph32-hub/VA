import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FaqSection: React.FC = () => {
  const { title, items } = siteConfig.faqBlock;
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-18 sm:py-26 bg-[#FAF8F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-10 text-left">
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#1C211D] font-normal tracking-tight">
            {title}
          </h2>
        </div>

        {/* Accordion list */}
        <div className="divide-y divide-[#E3DDD3] border-t border-b border-[#E3DDD3]">
          {items.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            const questionId = `faq-q-${index}`;
            const answerId = `faq-a-${index}`;

            return (
              <div key={index} className="py-5 sm:py-6">
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5A44] rounded py-1 cursor-pointer"
                >
                  <span className="font-editorial text-lg sm:text-xl font-normal text-[#1C211D] group-hover:text-[#2E5A44] transition-colors pr-6">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#79827B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#2E5A44]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="pt-3 pb-2 text-base text-[#505952] leading-relaxed animate-in fade-in duration-150 font-normal"
                  >
                    <p className="num-tabular">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
