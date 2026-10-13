import React from 'react';
import { useRouter } from '../context/RouterContext';

interface BreadcrumbsProps {
  currentPageTitle: string;
  parentItem?: {
    title: string;
    path: string;
  };
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPageTitle, parentItem }) => {
  const { navigate } = useRouter();

  return (
    <nav aria-label="Хлебные крошки" className="mb-6 sm:mb-8">
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-[#79827B]">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="hover:text-[#1C211D] transition-colors focus:outline-none focus-visible:underline cursor-pointer"
        >
          Главная
        </button>
        {parentItem && (
          <>
            <span aria-hidden="true" className="text-[#DDD5C8]">→</span>
            <button
              type="button"
              onClick={() => navigate(parentItem.path)}
              className="hover:text-[#1C211D] transition-colors focus:outline-none focus-visible:underline cursor-pointer"
            >
              {parentItem.title}
            </button>
          </>
        )}
        <span aria-hidden="true" className="text-[#DDD5C8]">→</span>
        <span className="text-[#1C211D] font-normal" aria-current="page">
          {currentPageTitle}
        </span>
      </div>
    </nav>
  );
};
