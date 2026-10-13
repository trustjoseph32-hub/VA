import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IntroCallSection } from '../components/IntroCallSection';
import { OtherFormatsBlock } from '../components/OtherFormatsBlock';
import { useRouter } from '../context/RouterContext';
import { siteConfig } from '../config/siteConfig';

interface IndividualPageProps {
  onOpenBooking: () => void;
}

export const IndividualPage: React.FC<IndividualPageProps> = ({ onOpenBooking }) => {
  const { navigate } = useRouter();
  const { individual } = siteConfig.formatsBlock;
  const requests = siteConfig.requestsBlock.items;
  const steps = siteConfig.approachBlock.steps;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const individualFaqs = [
    {
      question: 'Как начинается индивидуальная работа?',
      answer:
        'Первый шаг — бесплатный ознакомительный созвон на 10–15 минут. Мы обсуждаем ваш запрос, вы знакомитесь со мной и моим подходом, после чего принимаем решение о начале работы.',
    },
    {
      question: 'Нужно ли заранее точно сформулировать запрос?',
      answer:
        'Нет. Достаточно рассказать о том, что вас беспокоит сейчас, и что хотелось бы изменить. Формулирование запроса — это часть совместной работы.',
    },
    {
      question: 'Сколько стоит участие?',
      answer:
        'Одна сессия — 15 000 ₽. Пакет из 6 сессий — 90 000 ₽. Стоимость одной сессии в обоих случаях одинаковая; шесть сессий не являются гарантированным сроком решения проблемы.',
    },
    {
      question: 'Обязательно ли использовать гипнотерапию?',
      answer:
        'Нет, методы подбираются индивидуально с учётом вашего запроса и комфорта. В зависимости от ситуации мы можем использовать когнитивно-поведенческие подходы, гипнотерапию или телесные техники.',
    },
  ];

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumbs currentPageTitle="Индивидуальная терапия" />

        {/* Hero / Header of the service */}
        <header className="mb-14 sm:mb-18 text-left">
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C211D] tracking-tight mb-6">
            {individual.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#505952] leading-[1.65] font-normal max-w-2xl mb-8">
            {individual.fullDescription}
          </p>
          <div>
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center bg-[#2E5A44] hover:bg-[#254A37] text-white px-7 py-3.5 rounded text-sm font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5A44]"
            >
              Записаться на ознакомительный созвон
            </button>
            <div className="text-xs text-[#79827B] mt-2 num-tabular">
              Бесплатно · 10–15 минут
            </div>
          </div>
        </header>

        {/* 1. С какими запросами можно обратиться — чистый редакционный список без плашек и рамок */}
        <section className="mb-16 sm:mb-20 pt-10 border-t border-[#DDD5C8] text-left">
          <div className="mb-8">
            <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D]">
              С какими запросами можно обратиться
            </h2>
          </div>

          <div className="divide-y divide-[#EAE4DC] border-t border-b border-[#DDD5C8]">
            {requests.map((item) => (
              <div
                key={item.id}
                className="py-6 flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-8"
              >
                <div className="md:w-1/3">
                  <h3 className="font-editorial text-lg sm:text-xl text-[#1C211D] font-normal">
                    {item.title}
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm sm:text-base text-[#505952] leading-relaxed">
                    {item.description}
                  </p>
                  {item.subtext && (
                    <p className="text-xs text-[#79827B] mt-2 italic">
                      {item.subtext}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Как начинается и проходит работа — без пересчета 01, 02, 03 */}
        <section className="mb-16 sm:mb-20 pt-10 border-t border-[#DDD5C8] text-left">
          <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D] mb-8">
            Как начинается и проходит работа
          </h2>
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="border-t border-[#EAE4DC] pt-5">
                <h3 className="font-editorial text-xl text-[#1C211D] font-normal mb-1.5">
                  {step.title}
                </h3>
                {step.description && (
                  <p className="text-sm sm:text-base text-[#505952] leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-[#DDD5C8] pt-6 text-sm text-[#505952] leading-relaxed">
            {siteConfig.approachBlock.methodsText}
          </div>
        </section>

        {/* 3. Стоимость — без рамок и плашек */}
        <section className="mb-16 sm:mb-20 pt-10 border-t border-[#DDD5C8] text-left">
          <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D] mb-4">
            Стоимость индивидуальной терапии
          </h2>
          <p className="text-sm sm:text-base text-[#505952] leading-relaxed mb-8">
            Оплата производится перед сессией. Стоимость одной встречи одинакова при разовой оплате и при выборе пакета.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-b border-[#DDD5C8] py-8">
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-xs text-[#79827B] mb-2 font-normal">
                  Разовая сессия
                </div>
                <div className="font-editorial text-3xl font-normal text-[#1C211D] mb-2 num-tabular">
                  {individual.prices.single}
                </div>
                <p className="text-sm text-[#505952] leading-relaxed">
                  Персональная терапевтическая встреча для работы с текущим состоянием и реакциями.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between sm:border-l sm:border-[#DDD5C8] sm:pl-8">
              <div>
                <div className="text-xs text-[#79827B] mb-2 font-normal">
                  Пакет из 6 сессий
                </div>
                <div className="font-editorial text-3xl font-normal text-[#1C211D] mb-2 num-tabular">
                  {individual.prices.package6}
                </div>
                <p className="text-sm text-[#505952] leading-relaxed">
                  6 сессий. Пакет не является скидкой, а 6 встреч не гарантируют полного решения запроса.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Долгосрочная терапия — чистый блок без фоновой плашки */}
        {individual.longTermTeaser && (
          <section className="mb-16 sm:mb-20 pt-10 border-t border-[#DDD5C8] text-left">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="text-xs text-[#79827B] mb-2 font-normal">
                  {individual.longTermTeaser.caption}
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D] mb-3">
                  {individual.longTermTeaser.title}
                </h2>
                <p className="text-sm sm:text-base text-[#505952] leading-relaxed font-normal">
                  {individual.longTermTeaser.text}
                </p>
              </div>
              <div className="shrink-0 pt-2">
                <button
                  type="button"
                  onClick={() => navigate(individual.longTermTeaser.path)}
                  className="inline-flex items-center text-sm font-medium text-[#2E5A44] hover:text-[#1C211D] transition-colors cursor-pointer group focus:outline-none focus-visible:underline"
                >
                  <span>{individual.longTermTeaser.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* 4. Ознакомительный созвон */}
      <IntroCallSection onOpenBooking={onOpenBooking} />

      {/* 5. Вопросы и ответы по индивидуальной терапии */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-left">
        <div className="mb-8">
          <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C211D]">
            Вопросы об индивидуальной терапии
          </h2>
        </div>
        <div className="divide-y divide-[#DDD5C8] border-t border-b border-[#DDD5C8]">
          {individualFaqs.map((faq, index) => {
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

      {/* 6. Другие форматы работы */}
      <OtherFormatsBlock currentPath="/individual" />
    </div>
  );
};
