import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { siteConfig } from '../config/siteConfig';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath, navigate } = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(path);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E7E1D7] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Single-element brand wordmark (returns to /) */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="text-lg sm:text-xl font-editorial font-medium tracking-tight text-[#1C211D] hover:text-[#2E5A44] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5A44] rounded py-1"
          >
            {siteConfig.specialist.fullName}
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-normal text-[#505952]" aria-label="Основное меню">
            {siteConfig.navigation.map((item) => {
              const isActive =
                currentPath === item.path ||
                (item.path === '/individual' && currentPath === '/long-term');
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`whitespace-nowrap shrink-0 py-1 transition-colors focus:outline-none focus-visible:underline ${
                    isActive
                      ? 'text-[#1C211D] font-medium border-b border-[#2E5A44]'
                      : 'hover:text-[#1C211D]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-sm font-medium text-white bg-[#2E5A44] hover:bg-[#254A37] rounded-md transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2E5A44] cursor-pointer"
            >
              Ознакомительный созвон
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C211D] hover:bg-[#EFEAE2] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5A44] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E7E1D7] px-4 pt-3 pb-6 space-y-4 shadow-sm animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-2" aria-label="Мобильная навигация">
            {siteConfig.navigation.map((item) => {
              const isActive =
                currentPath === item.path ||
                (item.path === '/individual' && currentPath === '/long-term');
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`text-base py-2 px-1 transition-colors ${
                    isActive ? 'text-[#2E5A44] font-medium' : 'text-[#1C211D] font-normal hover:text-[#2E5A44]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#E7E1D7]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center bg-[#2E5A44] hover:bg-[#224534] text-white px-5 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer"
            >
              Записаться на созвон
            </button>
            <p className="text-center text-xs text-[#79827B] mt-2">
              Бесплатно · 10–15 минут
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
