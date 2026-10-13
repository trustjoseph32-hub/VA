import React, { useEffect } from 'react';
import { X, Send, Mail, ArrowUpRight, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export type ModalMode = 'call' | 'question' | 'waitlist';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: ModalMode;
  contextTitle?: string;
  directUrl?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  mode = 'call',
  contextTitle,
  directUrl,
}) => {
  const { bookingUrl, highlightBadge, disclaimer } = siteConfig.introCallBlock;
  const { telegram, email } = siteConfig.contacts;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasDirectUrl = Boolean(directUrl && directUrl.trim().length > 0);
  const hasConfiguredBookingUrl = Boolean(bookingUrl && bookingUrl.trim().length > 0);
  const hasTelegram = Boolean(telegram && telegram.trim().length > 0);
  const hasEmail = Boolean(email && email.trim().length > 0);

  // Generate contextual Telegram links with prefilled query text
  const getTelegramUrl = () => {
    if (!telegram) return '';
    const cleanBase = telegram.replace(/\/$/, '');
    let text = '';
    if (mode === 'question') {
      text = encodeURIComponent(
        `Здравствуйте, Василий! Хочу задать вопрос${contextTitle ? ` по формату ${contextTitle}` : ' по терапевтическим группам / интенсивам'}.`
      );
    } else if (mode === 'waitlist') {
      text = encodeURIComponent(
        `Здравствуйте, Василий! Хочу записаться в лист ожидания${contextTitle ? `: ${contextTitle}` : ' терапевтических групп / интенсивов'}.`
      );
    } else {
      text = encodeURIComponent('Здравствуйте, Василий! Хочу записаться на ознакомительный созвон.');
    }
    return cleanBase.includes('?') ? `${cleanBase}&text=${text}` : `${cleanBase}?text=${text}`;
  };

  const getEmailSubject = () => {
    if (mode === 'question') {
      return encodeURIComponent(`Вопрос: ${contextTitle || 'Терапевтические группы и интенсивы'}`);
    }
    if (mode === 'waitlist') {
      return encodeURIComponent(`Лист ожидания: ${contextTitle || 'Терапевтическая группа / интенсив'}`);
    }
    return encodeURIComponent('Запрос на ознакомительный созвон');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-in fade-in duration-150"
    >
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal card */}
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-lg p-7 sm:p-9 shadow-lg border border-[#E3DDD3] z-10 animate-in zoom-in-98 duration-150">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md text-[#505952] hover:text-[#1C211D] hover:bg-[#EFEAE2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5A44] cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dynamic Header according to Mode */}
        {mode === 'call' && (
          <div className="mb-6">
            <div className="text-xs font-medium text-[#2E5A44] mb-2 num-tabular">
              {highlightBadge}
            </div>
            <h3 id="modal-title" className="font-editorial text-2xl font-normal text-[#1C211D]">
              Запись на ознакомительный созвон
            </h3>
            <p className="text-sm text-[#505952] mt-2 leading-relaxed font-normal">
              10–15 минут для знакомства, ответов на вопросы и обсуждения формата работы с вашим запросом.
            </p>
            <div className="text-xs text-[#666F68] border-t border-b border-[#EAE4DC] py-3.5 my-5 leading-relaxed">
              {disclaimer}
            </div>
          </div>
        )}

        {mode === 'question' && (
          <div className="mb-6">
            <div className="text-xs font-medium text-[#2E5A44] mb-2">
              Вопрос специалисту
            </div>
            <h3 id="modal-title" className="font-editorial text-2xl font-normal text-[#1C211D]">
              Задать вопрос
            </h3>
            <p className="text-sm text-[#505952] mt-2 leading-relaxed font-normal">
              {contextTitle
                ? `Уточнить детали, расписание или формат участия в ${contextTitle}.`
                : 'Уточнить детали, расписание или формат терапевтических групп и интенсивов.'}
            </p>
          </div>
        )}

        {mode === 'waitlist' && (
          <div className="mb-6">
            <div className="text-xs font-medium text-[#2E5A44] mb-2">
              Лист ожидания
            </div>
            <h3 id="modal-title" className="font-editorial text-2xl font-normal text-[#1C211D]">
              Записаться в лист ожидания
            </h3>
            <p className="text-sm text-[#505952] mt-2 leading-relaxed font-normal">
              {contextTitle
                ? `Оставьте заявку на участие в ${contextTitle}. При открытии набора вы получите информацию первыми.`
                : 'Оставьте заявку на участие в терапевтических группах и интенсивах.'}
            </p>
          </div>
        )}

        {/* Content & Actions */}
        {mode === 'call' && hasConfiguredBookingUrl ? (
          <div>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center bg-[#2E5A44] hover:bg-[#224534] text-white px-6 py-3.5 rounded-md text-sm font-medium transition-colors cursor-pointer"
            >
              <span>Перейти к расписанию и записи</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        ) : hasDirectUrl ? (
          <div>
            <a
              href={directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center bg-[#2E5A44] hover:bg-[#224534] text-white px-6 py-3.5 rounded-md text-sm font-medium transition-colors cursor-pointer"
            >
              <span>Перейти к форме</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        ) : (
          <div className="space-y-3">
            {hasTelegram && (
              <a
                href={getTelegramUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-[#2E5A44] hover:bg-[#224534] text-white px-6 py-3.5 rounded-md text-sm font-medium transition-colors"
              >
                <Send className="w-4 h-4 mr-2" />
                <span>
                  {mode === 'waitlist'
                    ? 'Записаться через Telegram'
                    : mode === 'question'
                    ? 'Задать вопрос в Telegram'
                    : 'Написать Василию в Telegram'}
                </span>
                <ExternalLink className="w-3.5 h-3.5 ml-2" />
              </a>
            )}

            {hasEmail && (
              <a
                href={`mailto:${email}?subject=${getEmailSubject()}`}
                className="w-full inline-flex items-center justify-center bg-[#FAF8F5] hover:bg-[#F2ECE4] text-[#1C211D] border border-[#DDD5C8] px-6 py-3 rounded-md text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-[#505952]" />
                <span>
                  {mode === 'waitlist'
                    ? 'Записаться по почте'
                    : mode === 'question'
                    ? 'Задать вопрос по почте'
                    : `Написать на ${email}`}
                </span>
              </a>
            )}

            {!hasTelegram && !hasEmail && (
              <div className="border border-[#DDD5C8] rounded-md p-4 bg-white text-left">
                <p className="text-xs font-medium text-[#1C211D] mb-1">
                  Настройка каналов связи:
                </p>
                <p className="text-xs text-[#505952] leading-relaxed mb-2">
                  Для перехода к реальной связи укажите контакт в <code className="bg-[#F2ECE4] px-1 py-0.5 rounded font-mono text-[11px]">siteConfig.ts</code> в поле <code className="bg-[#F2ECE4] px-1 py-0.5 rounded font-mono text-[11px]">contacts.telegram</code> или прямую ссылку листа ожидания.
                </p>
                <p className="text-[11px] text-[#79827B]">
                  Сайт работает без имитации отправки и фиктивных статусов.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-[#79827B] hover:text-[#1C211D] underline focus:outline-none cursor-pointer"
          >
            Вернуться к сайту
          </button>
        </div>
      </div>
    </div>
  );
};
