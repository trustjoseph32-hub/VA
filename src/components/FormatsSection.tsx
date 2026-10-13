import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { siteConfig } from '../config/siteConfig';

export const FormatsSection: React.FC = () => {
  const { navigate } = useRouter();
  const { individual, groups, programs } = siteConfig.formatsBlock;

  return (
    <section id="formats" className="py-20 sm:py-28 border-t border-[#DDD5C8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1C211D] font-normal tracking-tight mb-4">
            {siteConfig.formatsBlock.title}
          </h2>
          <p className="text-base sm:text-lg text-[#505952] leading-relaxed font-normal">
            Три основных направления психологической помощи и практики: выберите формат под вашу задачу и темп.
          </p>
        </div>

        {/* 
          Editorial 3-Column Formats:
          Zero boxy card plates, zero borders, zero shadows.
          Pure editorial typography separated by subtle hairlines.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          
          {/* 1. Индивидуальная терапия */}
          <div className="border-t border-[#DDD5C8] pt-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-[#2E5A44] mb-3 select-none">
                Персонально
              </div>
              <h3 className="font-editorial text-2xl font-normal text-[#1C211D] mb-3 leading-snug">
                {individual.title}
              </h3>
              <p className="text-sm sm:text-base text-[#505952] leading-relaxed mb-6 font-normal">
                {individual.shortDescription}
              </p>

              {/* Long-term therapy block inside individual therapy — clean editorial subsection */}
              {individual.longTermTeaser && (
                <div className="border-t border-[#EAE4DC] pt-4 mb-6 text-left">
                  <div className="text-xs text-[#79827B] mb-1">
                    {individual.longTermTeaser.caption}
                  </div>
                  <div className="font-editorial text-base font-normal text-[#1C211D] mb-1">
                    {individual.longTermTeaser.title}
                  </div>
                  <p className="text-xs text-[#505952] leading-relaxed mb-3">
                    {individual.longTermTeaser.text}
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate(individual.longTermTeaser!.path)}
                    className="inline-flex items-center text-xs font-medium text-[#2E5A44] hover:text-[#1C211D] transition-colors cursor-pointer group"
                  >
                    <span>{individual.longTermTeaser.linkText}</span>
                    <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-[#DDD5C8] mt-auto">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs text-[#79827B]">Сессия</span>
                <span className="font-editorial text-xl font-normal text-[#1C211D] num-tabular">
                  {individual.prices.single}
                </span>
              </div>
              <button
                type="button"
                onClick={() => navigate('/individual')}
                className="w-full inline-flex items-center justify-center bg-[#2E5A44] hover:bg-[#254A37] text-white py-3 px-4 rounded text-sm font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5A44]"
              >
                <span>Подробнее об индивидуальной работе</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>

          {/* 2. Терапевтические группы */}
          <div className="border-t border-[#DDD5C8] pt-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-[#2E5A44] mb-3 select-none">
                Групповая работа
              </div>
              <h3 className="font-editorial text-2xl font-normal text-[#1C211D] mb-3 leading-snug">
                {groups.title}
              </h3>
              <p className="text-sm sm:text-base text-[#505952] leading-relaxed mb-6 font-normal">
                {groups.shortDescription}
              </p>

              {/* Group items */}
              <div className="space-y-4 mb-6">
                {groups.items.map((group) => (
                  <div key={group.id} className="border-t border-[#EAE4DC] pt-3">
                    <div className="font-editorial text-base text-[#1C211D] font-normal mb-1">
                      {group.name}
                    </div>
                    {group.statusNote && (
                      <div className="text-xs text-[#79827B]">
                        {group.statusNote}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#DDD5C8] mt-auto">
              <div className="mb-4">
                <span className="text-xs text-[#79827B] block">Участие</span>
                <span className="text-sm text-[#1C211D]">По набору группы</span>
              </div>
              <button
                type="button"
                onClick={() => navigate('/groups')}
                className="w-full inline-flex items-center justify-center border border-[#DDD5C8] hover:border-[#1C211D] bg-transparent text-[#1C211D] py-3 px-4 rounded text-sm font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5A44]"
              >
                <span>Подробнее о группах</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>

          {/* 3. Программы и приложения */}
          <div className="border-t border-[#DDD5C8] pt-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-[#2E5A44] mb-3 select-none">
                Самостоятельная практика
              </div>
              <h3 className="font-editorial text-2xl font-normal text-[#1C211D] mb-3 leading-snug">
                {programs.title}
              </h3>
              <p className="text-sm sm:text-base text-[#505952] leading-relaxed mb-6 font-normal">
                {programs.shortDescription}
              </p>

              <div className="space-y-4 mb-6">
                {programs.items.map((prog) => (
                  <div key={prog.id} className="border-t border-[#EAE4DC] pt-3">
                    <div className="font-editorial text-base text-[#1C211D] font-normal mb-1">
                      {prog.name}
                    </div>
                    {prog.subtext && (
                      <div className="text-xs text-[#79827B]">
                        {prog.subtext}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#DDD5C8] mt-auto">
              <div className="mb-4">
                <span className="text-xs text-[#79827B] block">Доступ</span>
                <span className="text-sm text-[#1C211D]">Онлайн и Telegram</span>
              </div>
              <button
                type="button"
                onClick={() => navigate('/programs')}
                className="w-full inline-flex items-center justify-center border border-[#DDD5C8] hover:border-[#1C211D] bg-transparent text-[#1C211D] py-3 px-4 rounded text-sm font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5A44]"
              >
                <span>Подробнее о программах</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
