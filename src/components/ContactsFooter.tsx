import React from 'react';
import { Send, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { siteConfig } from '../config/siteConfig';

interface ContactsFooterProps {
  onOpenBooking: () => void;
}

export const ContactsFooter: React.FC<ContactsFooterProps> = ({ onOpenBooking }) => {
  const { navigate } = useRouter();
  const { specialist, contacts, legal } = siteConfig;

  const hasAnyContact =
    Boolean(contacts.telegram && contacts.telegram.trim().length > 0) ||
    Boolean(contacts.email && contacts.email.trim().length > 0) ||
    Boolean(contacts.otherSocials && contacts.otherSocials.length > 0);

  const hasAnyLegal =
    Boolean(legal.privacyPolicyUrl && legal.privacyPolicyUrl.trim().length > 0) ||
    Boolean(legal.termsOfServiceUrl && legal.termsOfServiceUrl.trim().length > 0) ||
    Boolean(legal.additionalDocuments && legal.additionalDocuments.length > 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacts" className="bg-[#1C211D] text-[#ECEEEB] pt-18 pb-12 border-t border-[#2D342E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2D342E]">
          
          {/* Col 1: Specialist Identity */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-white block mb-2">
                {specialist.fullName}
              </span>
              <p className="text-sm text-[#A5AEA7] mb-6 tracking-wide">
                {specialist.profession}
              </p>
              <p className="text-xs text-[#838C85] max-w-sm leading-relaxed">
                Индивидуальная психологическая помощь, терапевтические группы и программы работы с состоянием.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <span className="text-xs text-[#A5AEA7] font-normal block mb-4">
              Разделы
            </span>
            <ul className="space-y-3 text-sm text-[#D3D9D5]">
              {siteConfig.navigation.map((item) => (
                <li key={item.path}>
                  <button
                    type="button"
                    onClick={() => navigate(item.path)}
                    className="hover:text-white transition-colors focus:outline-none focus-visible:underline text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contacts (Only configured channels) */}
          <div className="md:col-span-4">
            <span className="text-xs text-[#A5AEA7] font-normal block mb-4">
              Связь и запись
            </span>

            {hasAnyContact ? (
              <div className="space-y-3">
                {contacts.telegram && contacts.telegram.trim().length > 0 && (
                  <a
                    href={contacts.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#D3D9D5] hover:text-white transition-colors p-2.5 rounded bg-[#252C27] border border-[#343D36]"
                  >
                    <Send className="w-4 h-4 mr-2 text-[#79A88E]" />
                    <span>Telegram</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-2 text-[#838C85]" />
                  </a>
                )}

                {contacts.email && contacts.email.trim().length > 0 && (
                  <a
                    href={`mailto:${contacts.email}`}
                    className="inline-flex items-center text-sm text-[#D3D9D5] hover:text-white transition-colors p-2.5 rounded bg-[#252C27] border border-[#343D36]"
                  >
                    <Mail className="w-4 h-4 mr-2 text-[#79A88E]" />
                    <span>{contacts.email}</span>
                  </a>
                )}

                {contacts.otherSocials?.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#D3D9D5] hover:text-white transition-colors p-2.5 rounded bg-[#252C27] border border-[#343D36]"
                  >
                    <span>{social.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-2 text-[#838C85]" />
                  </a>
                ))}
              </div>
            ) : (
              <div>
                <p className="text-xs text-[#A5AEA7] mb-3 leading-relaxed">
                  Запись на бесплатный ознакомительный созвон (10–15 минут):
                </p>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center bg-[#2E5A44] hover:bg-[#396D53] text-white px-5 py-2.5 rounded text-xs font-medium transition-colors cursor-pointer"
                >
                  Записаться на ознакомительный созвон
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom row: Legal & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#838C85] gap-4">
          <div>
            © {new Date().getFullYear()} {specialist.fullName}.
          </div>

          {/* Legal links (shown strictly when configured) */}
          {hasAnyLegal && (
            <div className="flex flex-wrap gap-5">
              {legal.privacyPolicyUrl && legal.privacyPolicyUrl.trim().length > 0 && (
                <a
                  href={legal.privacyPolicyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline transition-colors"
                >
                  Политика обработки персональных данных
                </a>
              )}
              {legal.termsOfServiceUrl && legal.termsOfServiceUrl.trim().length > 0 && (
                <a
                  href={legal.termsOfServiceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline transition-colors"
                >
                  Условия оказания услуг
                </a>
              )}
              {legal.additionalDocuments?.map((doc, idx) => (
                doc.url ? (
                  <a
                    key={idx}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline transition-colors"
                  >
                    {doc.label}
                  </a>
                ) : null
              ))}
            </div>
          )}

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center text-xs text-[#838C85] hover:text-white transition-colors focus:outline-none cursor-pointer"
            aria-label="Наверх"
          >
            <span>Наверх</span>
            <ArrowUp className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>

      </div>
    </footer>
  );
};
