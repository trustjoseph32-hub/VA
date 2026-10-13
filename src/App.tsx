import React, { useState } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RequestsSection } from './components/RequestsSection';
import { FormatsSection } from './components/FormatsSection';
import { ApproachSection } from './components/ApproachSection';
import { AboutSection } from './components/AboutSection';
import { IntroCallSection } from './components/IntroCallSection';
import { FaqSection } from './components/FaqSection';
import { ContactsFooter } from './components/ContactsFooter';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { BookingModal, ModalMode } from './components/BookingModal';
import { IndividualPage } from './pages/IndividualPage';
import { LongTermPage } from './pages/LongTermPage';
import { GroupsPage } from './pages/GroupsPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { siteConfig } from './config/siteConfig';

interface ModalState {
  isOpen: boolean;
  mode: ModalMode;
  contextTitle?: string;
  directUrl?: string;
}

function MainLayout() {
  const { currentPath, navigate } = useRouter();
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    mode: 'call',
  });

  const scrollToIntroCall = () => {
    const element = document.getElementById('intro-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on a page without immediate intro-call element or user is elsewhere, open modal
      setModalState({ isOpen: true, mode: 'call' });
    }
  };

  const handleBookingAction = () => {
    if (siteConfig.introCallBlock.bookingUrl && siteConfig.introCallBlock.bookingUrl.trim().length > 0) {
      window.open(siteConfig.introCallBlock.bookingUrl, '_blank', 'noopener,noreferrer');
    } else {
      setModalState({ isOpen: true, mode: 'call' });
    }
  };

  const handleAskQuestion = (groupName?: string) => {
    const matchedGroup = siteConfig.formatsBlock.groups.items.find(
      (g) => g.name === groupName
    );
    if (matchedGroup?.questionUrl && matchedGroup.questionUrl.trim().length > 0) {
      window.open(matchedGroup.questionUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setModalState({
      isOpen: true,
      mode: 'question',
      contextTitle: groupName,
    });
  };

  const handleJoinWaitlist = (groupName?: string) => {
    const matchedGroup = siteConfig.formatsBlock.groups.items.find(
      (g) => g.name === groupName
    );
    if (matchedGroup?.waitlistUrl && matchedGroup.waitlistUrl.trim().length > 0) {
      window.open(matchedGroup.waitlistUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setModalState({
      isOpen: true,
      mode: 'waitlist',
      contextTitle: groupName,
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C211D] selection:bg-[#2E5A44] selection:text-white flex flex-col font-sans">
      {/* Universal Header with 4-page navigation */}
      <Header onOpenBooking={scrollToIntroCall} />

      <main className="flex-grow">
        {currentPath === '/individual' ? (
          <IndividualPage onOpenBooking={handleBookingAction} />
        ) : currentPath === '/long-term' ? (
          <LongTermPage onOpenBooking={handleBookingAction} />
        ) : currentPath === '/groups' ? (
          <GroupsPage
            onOpenBooking={handleBookingAction}
            onAskQuestion={handleAskQuestion}
            onJoinWaitlist={handleJoinWaitlist}
          />
        ) : currentPath === '/programs' ? (
          <ProgramsPage onOpenBooking={handleBookingAction} />
        ) : (
          /* Main Page (/) */
          <>
            {/* 1. Hero */}
            <Hero onOpenBooking={handleBookingAction} />

            {/* 2. С какими запросами можно обратиться (5 направлений, без инвесторов) */}
            <RequestsSection />

            {/* 3. Форматы работы (3 равнозначных формата со ссылками на страницы) */}
            <FormatsSection />

            {/* 4. Подход */}
            <ApproachSection />

            {/* 5. Обо мне (остаётся на главной) */}
            <AboutSection />

            {/* Будущие кейсы (скрыты по умолчанию) */}
            <CaseStudiesSection />

            {/* 6. Бесплатный ознакомительный созвон */}
            <IntroCallSection onOpenBooking={handleBookingAction} />

            {/* 7. Частые вопросы */}
            <FaqSection />
          </>
        )}
      </main>

      {/* Universal Footer with configured links and documents */}
      <ContactsFooter onOpenBooking={handleBookingAction} />

      {/* Booking, Question & Waitlist Guidance Modal */}
      <BookingModal
        isOpen={modalState.isOpen}
        mode={modalState.mode}
        contextTitle={modalState.contextTitle}
        directUrl={modalState.directUrl}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainLayout />
    </RouterProvider>
  );
}
