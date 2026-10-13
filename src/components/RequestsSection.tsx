import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { siteConfig } from '../config/siteConfig';

export const RequestsSection: React.FC = () => {
  const { navigate } = useRouter();
  const items = siteConfig.requestsBlock.items;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (!isExternal && href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <section id="requests" className="py-20 sm:py-28 border-t border-[#DDD5C8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1C211D] font-normal tracking-tight mb-4">
            {siteConfig.requestsBlock.title}
          </h2>
          <p className="text-base sm:text-lg text-[#505952] leading-relaxed font-normal">
            {siteConfig.requestsBlock.lead}
          </p>
        </div>

        {/* 
          Editorial Requests List:
          No card frames, no background plates, no shadows, no artificial 01/02 counters.
          Clean editorial rows with quiet hairlines and arrows.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {items.map((item) => (
            <div
              key={item.id}
              className="border-t border-[#DDD5C8] pt-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-editorial text-xl lg:text-2xl font-normal text-[#1C211D] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#505952] leading-relaxed mb-4 font-normal">
                  {item.description}
                </p>
                {item.subtext && (
                  <p className="text-xs text-[#79827B] italic mb-4">
                    {item.subtext}
                  </p>
                )}
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-[#EAE4DC] flex flex-col gap-2.5">
                {item.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center text-sm font-medium text-[#2E5A44] hover:text-[#1C211D] transition-colors group cursor-pointer"
                  >
                    <span>{link.label}</span>
                    {link.isExternal ? (
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
