import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const AboutSection: React.FC = () => {
  const {
    title,
    profession,
    bioParagraphs,
    approachesIntro,
    approaches,
    education,
    additionalTraining,
    experienceYears,
    documents,
  } = siteConfig.aboutBlock;

  const hasVerifiedData =
    (education && education.length > 0) ||
    (additionalTraining && additionalTraining.length > 0) ||
    Boolean(experienceYears) ||
    (documents && documents.length > 0);

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-[#DDD5C8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-[#DDD5C8] pb-8 mb-10 text-left">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1C211D] font-normal tracking-tight mb-2">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#505952] font-normal">
            {profession}
          </p>
        </div>

        {/* Bio text */}
        <div className="space-y-5 text-base sm:text-lg text-[#505952] leading-[1.72] mb-12 font-normal max-w-3xl text-left">
          {bioParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Подходы и инструменты в работе (без искусственного пересчета 01, 02, 03) */}
        {approaches && approaches.length > 0 && (
          <div className="pt-8 border-t border-[#DDD5C8] mb-12 text-left">
            <h3 className="font-editorial text-xl sm:text-2xl font-normal text-[#1C211D] mb-3">
              Подходы и практические методы
            </h3>
            {approachesIntro && (
              <p className="text-sm sm:text-base text-[#505952] leading-relaxed mb-6 max-w-3xl font-normal">
                {approachesIntro}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-b border-[#DDD5C8] py-6">
              {approaches.map((item, index) => (
                <div
                  key={index}
                  className="flex items-baseline text-sm sm:text-base text-[#1C211D] font-normal"
                >
                  <span className="text-[#2E5A44] mr-3 font-medium select-none">
                    —
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verified fields section (отображается при наличии данных) */}
        {hasVerifiedData && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#DDD5C8] text-left">
            {education && education.length > 0 && (
              <div>
                <h3 className="font-editorial text-base font-medium text-[#1C211D] mb-3">
                  Базовое образование
                </h3>
                <ul className="space-y-2 text-sm text-[#505952]">
                  {education.map((item, i) => (
                    <li key={i} className="leading-snug">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {additionalTraining && additionalTraining.length > 0 && (
              <div>
                <h3 className="font-editorial text-base font-medium text-[#1C211D] mb-3">
                  Повышение квалификации
                </h3>
                <ul className="space-y-2 text-sm text-[#505952]">
                  {additionalTraining.map((item, i) => (
                    <li key={i} className="leading-snug">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {experienceYears && (
              <div>
                <h3 className="font-editorial text-base font-medium text-[#1C211D] mb-3">
                  Практический опыт
                </h3>
                <p className="text-sm text-[#505952] num-tabular">
                  {experienceYears} практики в индивидуальном и групповом форматах.
                </p>
              </div>
            )}

            {documents && documents.length > 0 && (
              <div>
                <h3 className="font-editorial text-base font-medium text-[#1C211D] mb-3">
                  Документы
                </h3>
                <ul className="space-y-2 text-sm text-[#505952]">
                  {documents.map((doc, i) => (
                    <li key={i}>
                      {doc.url ? (
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-[#2E5A44]"
                        >
                          {doc.title}
                        </a>
                      ) : (
                        doc.title
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
