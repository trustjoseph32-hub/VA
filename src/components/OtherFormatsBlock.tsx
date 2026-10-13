import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { siteConfig } from '../config/siteConfig';

interface OtherFormatsBlockProps {
  currentPath: string;
}

export const OtherFormatsBlock: React.FC<OtherFormatsBlockProps> = ({ currentPath }) => {
  const { navigate } = useRouter();
  const { individual, groups, programs } = siteConfig.formatsBlock;

  const allFormats = [
    {
      path: '/individual',
      title: individual.title,
      description: individual.shortDescription,
    },
    {
      path: '/groups',
      title: groups.title,
      description: groups.shortDescription,
    },
    {
      path: '/programs',
      title: programs.title,
      description: programs.shortDescription,
    },
  ];

  const filtered = allFormats.filter((f) => f.path !== currentPath);

  return (
    <section className="py-16 sm:py-24 border-t border-[#DDD5C8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-left">
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1C211D]">
            Другие форматы практики
          </h2>
        </div>

        {/* Clean editorial columns with top hairlines, zero card plates or boxes */}
        <div
          className={`grid grid-cols-1 ${
            filtered.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
          } gap-8 sm:gap-10`}
        >
          {filtered.map((item) => (
            <div
              key={item.path}
              className="border-t border-[#DDD5C8] pt-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-editorial text-xl font-normal text-[#1C211D] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#505952] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE4DC] mt-auto">
                <button
                  type="button"
                  onClick={() => navigate(item.path)}
                  className="inline-flex items-center text-sm font-medium text-[#2E5A44] hover:text-[#1C211D] transition-colors cursor-pointer group focus:outline-none focus-visible:underline"
                >
                  <span>Подробнее о формате</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
