import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const CaseStudiesSection: React.FC = () => {
  const { enabled, items } = siteConfig.caseStudiesConfig;

  if (!enabled || items.length === 0) {
    return null;
  }

  return (
    <section id="cases" className="py-20 sm:py-28 border-t border-[#DDD5C8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 text-left">
          <div className="text-xs uppercase tracking-wider text-[#2E5A44] font-medium mb-2">
            Опыт и динамика
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#1C211D] font-normal tracking-tight mb-4">
            Примеры из практики
          </h2>
          <p className="text-base text-[#505952]">
            Обезличенные примеры того, как строится работа с различными запросами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-t border-[#DDD5C8] pt-6 text-left"
            >
              <h3 className="font-editorial text-xl font-normal text-[#1C211D] mb-3">
                {item.title}
              </h3>
              <div className="space-y-4 text-sm text-[#505952]">
                <div>
                  <span className="font-medium text-[#1C211D] block mb-1">
                    Исходная ситуация:
                  </span>
                  <p>{item.context}</p>
                </div>
                <div>
                  <span className="font-medium text-[#1C211D] block mb-1">
                    Процесс работы:
                  </span>
                  <p>{item.process}</p>
                </div>
                <div>
                  <span className="font-medium text-[#1C211D] block mb-1">
                    Результат:
                  </span>
                  <p>{item.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
