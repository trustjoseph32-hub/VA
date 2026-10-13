import React from 'react';
import { ExternalLink, Send } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IntroCallSection } from '../components/IntroCallSection';
import { OtherFormatsBlock } from '../components/OtherFormatsBlock';
import { siteConfig } from '../config/siteConfig';

interface ProgramsPageProps {
  onOpenBooking: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onOpenBooking }) => {
  const { programs } = siteConfig.formatsBlock;

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs currentPageTitle="Программы и приложения" />

        {/* Header */}
        <header className="mb-14 sm:mb-18 text-left">
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C211D] tracking-tight mb-6">
            {programs.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#505952] leading-[1.65] font-normal max-w-2xl">
            {programs.fullDescription}
          </p>
        </header>

        {/* Programs List — чистые колонки без плашек и рамок */}
        <section className="mb-16 sm:mb-20 pt-10 border-t border-[#DDD5C8] text-left">
          <div className="mb-8">
            <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D] mb-1">
              Доступные программы
            </h2>
            <p className="text-sm text-[#79827B]">
              Инструменты для самостоятельной и поддерживающей практики.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#DDD5C8] pt-8">
            {/* 1. Panic Attack Club */}
            <article className="flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#79827B] block mb-2 font-normal">
                  Telegram-приложение
                </span>
                <h3 className="font-editorial text-2xl font-normal text-[#1C211D] mb-3">
                  Panic Attack Club
                </h3>
                <p className="text-sm sm:text-base text-[#505952] leading-relaxed mb-6 font-normal">
                  Приложение в Telegram: SOS-практики, 14-дневный курс и отслеживание динамики состояния.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE4DC] flex flex-wrap items-center gap-3 mt-auto">
                {programs.items[0]?.landingUrl && programs.items[0].landingUrl.trim().length > 0 && (
                  <a
                    href={programs.items[0].landingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-[#DDD5C8] hover:border-[#1C211D] bg-transparent text-[#1C211D] px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span>Подробнее о приложении</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                )}

                {programs.items[0]?.telegramUrl && programs.items[0].telegramUrl.trim().length > 0 && (
                  <a
                    href={programs.items[0].telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#2E5A44] hover:bg-[#254A37] text-white px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 mr-1.5" />
                    <span>Открыть в Telegram</span>
                  </a>
                )}
              </div>
            </article>

            {/* 2. «Стоп-аллергия» */}
            <article className="flex flex-col justify-between md:border-l md:border-[#DDD5C8] md:pl-10">
              <div>
                <span className="text-xs text-[#79827B] block mb-2 font-normal">
                  Тематическая программа
                </span>
                <h3 className="font-editorial text-2xl font-normal text-[#1C211D] mb-3">
                  «Стоп-аллергия»
                </h3>
                <p className="text-sm sm:text-base text-[#505952] leading-relaxed mb-6 font-normal">
                  Программа по психологическим аспектам аллергии, связанным переживаниям и работе со стрессом.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE4DC] flex flex-wrap items-center gap-3 mt-auto">
                {programs.items[1]?.telegramUrl && programs.items[1].telegramUrl.trim().length > 0 && (
                  <a
                    href={programs.items[1].telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#2E5A44] hover:bg-[#254A37] text-white px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 mr-1.5" />
                    <span>Открыть в Telegram</span>
                  </a>
                )}
                {(!programs.items[1]?.telegramUrl || programs.items[1].telegramUrl.trim().length === 0) && (
                  <span className="text-xs text-[#79827B]">
                    Ссылка на участие появится после набора
                  </span>
                )}
              </div>
            </article>
          </div>
        </section>
      </div>

      {/* Intro call */}
      <IntroCallSection onOpenBooking={onOpenBooking} />

      {/* Other formats */}
      <OtherFormatsBlock currentPath="/programs" />
    </div>
  );
};
