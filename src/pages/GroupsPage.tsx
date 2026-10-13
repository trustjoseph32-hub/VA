import React from 'react';
import { ExternalLink, Send } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IntroCallSection } from '../components/IntroCallSection';
import { OtherFormatsBlock } from '../components/OtherFormatsBlock';
import { siteConfig } from '../config/siteConfig';

interface GroupsPageProps {
  onOpenBooking: () => void;
  onAskQuestion: (groupName?: string) => void;
  onJoinWaitlist: (groupName?: string) => void;
}

export const GroupsPage: React.FC<GroupsPageProps> = ({
  onOpenBooking,
  onAskQuestion,
  onJoinWaitlist,
}) => {
  const { groups } = siteConfig.formatsBlock;

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs currentPageTitle="Терапевтические группы" />

        {/* Header */}
        <header className="mb-14 sm:mb-18 text-left">
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C211D] tracking-tight mb-6">
            {groups.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#505952] leading-[1.65] font-normal max-w-2xl">
            {groups.fullDescription}
          </p>
        </header>

        {/* 1. Как устроена работа в группе — без пересчета 01, 02, 03 и без рамок */}
        <section className="mb-16 sm:mb-20 pt-10 border-t border-[#DDD5C8] text-left">
          <div className="mb-8">
            <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D]">
              Особенности группового формата
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#DDD5C8] pt-8">
            {groups.points.map((point, idx) => (
              <div key={idx} className="flex flex-col justify-start">
                <p className="text-base text-[#505952] leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Проекты групповой работы — чистые статьи без рамок и плашек */}
        <section className="mb-16 sm:mb-20 pt-10 border-t border-[#DDD5C8] text-left">
          <div className="mb-8">
            <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D] mb-2">
              Проекты и форматы
            </h2>
            <p className="text-sm text-[#505952]">
              Текущие и проведённые групповые программы Василия Алешина.
            </p>
          </div>

          <div className="space-y-12">
            {groups.items.map((item) => (
              <article
                key={item.id}
                className="border-t border-[#DDD5C8] pt-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-editorial text-2xl font-normal text-[#1C211D]">
                      {item.name}
                    </h3>
                    {item.typeLabel && (
                      <span className="text-xs text-[#79827B]">
                        {item.typeLabel}
                      </span>
                    )}
                  </div>
                  {item.statusNote && (
                    <span className="text-xs text-[#79827B]">
                      {item.statusNote}
                    </span>
                  )}
                </div>

                <p className="text-base text-[#505952] leading-relaxed mb-6 font-normal max-w-2xl">
                  {item.description}
                </p>

                {/* Actions: Задать вопрос, Записаться в лист ожидания, Подробнее */}
                <div className="pt-4 border-t border-[#EAE4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onAskQuestion(item.name)}
                      className="inline-flex items-center justify-center border border-[#DDD5C8] hover:border-[#1C211D] bg-transparent text-[#1C211D] px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                    >
                      <span>Задать вопрос о группе</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onJoinWaitlist(item.name)}
                      className="inline-flex items-center justify-center bg-[#2E5A44] hover:bg-[#254A37] text-white px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                    >
                      <span>Лист ожидания</span>
                    </button>
                  </div>

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs sm:text-sm font-medium text-[#2E5A44] hover:text-[#1C211D] transition-colors"
                    >
                      <span>Подробнее о группе</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* 3. Ознакомительный созвон */}
      <IntroCallSection onOpenBooking={onOpenBooking} />

      {/* 4. Другие форматы практики */}
      <OtherFormatsBlock currentPath="/groups" />
    </div>
  );
};
