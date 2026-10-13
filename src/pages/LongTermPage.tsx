import React, { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IntroCallSection } from '../components/IntroCallSection';
import { OtherFormatsBlock } from '../components/OtherFormatsBlock';
import { useRouter } from '../context/RouterContext';
import { siteConfig } from '../config/siteConfig';

interface LongTermPageProps {
  onOpenBooking: () => void;
}

export const LongTermPage: React.FC<LongTermPageProps> = ({ onOpenBooking }) => {
  const { navigate } = useRouter();
  const { longTermTherapy } = siteConfig.formatsBlock;

  // Accordion for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs with parent link to Individual Therapy */}
        <Breadcrumbs
          currentPageTitle="Долгосрочная терапия"
          parentItem={{ title: 'Индивидуальная терапия', path: '/individual' }}
        />

        {/* 1. Первый экран / Header */}
        <header className="mb-14 sm:mb-20 text-left">
          <div className="text-xs text-[#79827B] mb-3 font-normal">
            {longTermTherapy.badge}
          </div>

          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C211D] tracking-tight mb-5">
            {longTermTherapy.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#505952] leading-[1.68] font-normal max-w-2xl mb-6">
            {longTermTherapy.description}
          </p>

          {/* Highlight line — pure editorial typography, zero boxed chip */}
          <div className="font-editorial text-2xl sm:text-3xl text-[#1C211D] font-normal mb-8">
            {longTermTherapy.highlightLine}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center bg-[#2E5A44] hover:bg-[#254A37] text-white px-7 py-3.5 rounded text-sm font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5A44]"
              >
                {longTermTherapy.ctaText}
              </button>
              <div className="text-xs text-[#79827B] mt-2 num-tabular">
                {longTermTherapy.ctaSubtext}
              </div>
            </div>

            {/* Back link to /individual */}
            <button
              type="button"
              onClick={() => navigate('/individual')}
              className="inline-flex items-center text-sm text-[#505952] hover:text-[#1C211D] transition-colors cursor-pointer py-2 focus:outline-none focus-visible:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              <span>К общей странице индивидуальной терапии</span>
            </button>
          </div>
        </header>

        {/* 2. Раздел: «Когда стоит рассмотреть этот формат» — чистый редакционный ряд без рамок */}
        <section className="mb-16 sm:mb-20 pt-10 border-t border-[#DDD5C8] text-left">
          <div className="mb-8">
            <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D] mb-2">
              {longTermTherapy.whenSuitable.title}
            </h2>
            <p className="text-xs text-[#79827B]">
              {longTermTherapy.whenSuitable.caption}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-b border-[#DDD5C8] py-8">
            {longTermTherapy.whenSuitable.situations.map((sit, idx) => (
              <div key={idx} className="flex flex-col justify-start">
                <p className="text-base sm:text-lg text-[#1C211D] font-serif italic leading-relaxed">
                  {sit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Раздел: «С чем работаем» — без пересчета 01, 02, 03 */}
        <section className="mb-16 sm:mb-20 pt-10 border-t border-[#DDD5C8] text-left">
          <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D] mb-6 sm:mb-8">
            {longTermTherapy.topics.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 border-t border-b border-[#DDD5C8] py-8">
            {longTermTherapy.topics.items.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <span className="text-[#2E5A44] mr-3 font-medium select-none">
                  —
                </span>
                <div>
                  <p className="text-base text-[#1C211D] font-normal leading-snug">
                    {item.text}
                  </p>
                  {item.subtext && (
                    <p className="text-xs text-[#79827B] mt-1.5 leading-relaxed">
                      {item.subtext}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Раздел: «Время для изменений в реальной жизни» — без 01, 02 и без рамок */}
        <section className="mb-16 sm:mb-20 pt-10 border-t border-[#DDD5C8] text-left">
          <div className="max-w-2xl mb-8">
            <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D] mb-3">
              {longTermTherapy.whyLongTerm.title}
            </h2>
            <p className="text-sm sm:text-base text-[#505952] leading-relaxed">
              {longTermTherapy.whyLongTerm.text}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-b border-[#DDD5C8] py-8">
            {longTermTherapy.whyLongTerm.benefits.map((b, idx) => (
              <div key={idx} className="flex flex-col justify-start">
                <h3 className="font-editorial text-xl font-normal text-[#1C211D] mb-2">
                  {b.title}
                </h3>
                <p className="text-sm sm:text-base text-[#505952] leading-relaxed">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Раздел: «Форматы по длительности» (3, 6, 12 месяцев) — чистые колонки без плашек */}
        <section className="mb-16 sm:mb-20 pt-10 border-t border-[#DDD5C8] text-left">
          <div className="mb-8">
            <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D] mb-2">
              Форматы по длительности
            </h2>
            <p className="text-sm text-[#505952]">
              Согласованный период регулярной индивидуальной работы.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#DDD5C8] pt-8">
            {longTermTherapy.periods.map((period, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="font-editorial text-3xl font-normal text-[#1C211D] mb-1 num-tabular">
                    {period.duration}
                  </div>
                  <div className="text-xs text-[#79827B] mb-4">
                    {period.subtitle}
                  </div>
                  <p className="text-sm text-[#505952] leading-relaxed mb-6 font-normal">
                    {period.description}
                  </p>
                </div>

                {period.price && (
                  <div className="pt-4 border-t border-[#EAE4DC] mt-auto">
                    <div className="text-sm font-medium text-[#1C211D] num-tabular">
                      {period.price}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Clarification under columns */}
          <p className="text-xs sm:text-sm text-[#79827B] mt-8 leading-relaxed border-t border-[#DDD5C8] pt-4">
            {longTermTherapy.generalPeriodClarification}
          </p>
        </section>

        {/* 6. Раздел: «Как проходит работа» — без пересчета 01, 02, 03 */}
        <section className="mb-16 sm:mb-20 pt-10 border-t border-[#DDD5C8] text-left">
          <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D] mb-8">
            Как проходит работа
          </h2>

          <div className="space-y-6">
            {longTermTherapy.steps.map((step, idx) => (
              <div key={idx} className="border-t border-[#EAE4DC] pt-5">
                <h3 className="font-editorial text-xl text-[#1C211D] font-normal mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#505952] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Раздел: «Условия работы» — чистый текст без плашки/рамки */}
        <section className="mb-16 sm:mb-20 pt-10 border-t border-[#DDD5C8] text-left">
          <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D] mb-4">
            Условия работы
          </h2>
          <p className="text-sm sm:text-base text-[#505952] leading-relaxed mb-6">
            Формат, периодичность встреч и условия оплаты определяются индивидуально с учётом запроса и комфортного ритма работы.
          </p>

          <div className="border-t border-b border-[#DDD5C8] py-6 text-sm sm:text-base text-[#505952] space-y-3">
            <p>
              — Первоначальное знакомство и определение задач проходит на бесплатном ознакомительном созвоне (10–15 минут).
            </p>
            <p>
              — График регулярных встреч (как правило, 1 раз в неделю) фиксируется перед началом работы.
            </p>
            <p>
              — В процессе долгосрочной терапии цели и динамика регулярно пересматриваются вместе со специалистом.
            </p>
          </div>
        </section>
      </div>

      {/* 8. Ознакомительный созвон */}
      <IntroCallSection onOpenBooking={onOpenBooking} />

      {/* 9. Частые вопросы о долгосрочной терапии */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-left">
        <div className="mb-8">
          <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D]">
            Вопросы о долгосрочной терапии
          </h2>
        </div>
        <div className="divide-y divide-[#DDD5C8] border-t border-b border-[#DDD5C8]">
          {longTermTherapy.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5A44] py-1 cursor-pointer"
                >
                  <span className="font-editorial text-lg sm:text-xl font-normal text-[#1C211D] group-hover:text-[#2E5A44] transition-colors pr-6">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#79827B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#2E5A44]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pt-3 pb-1 text-sm sm:text-base text-[#505952] leading-relaxed animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 10. Другие форматы практики */}
      <OtherFormatsBlock currentPath="/long-term" />
    </div>
  );
};
