
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl serif">L</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-stone-900 leading-none">{t.title}</h1>
              <p className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">DaKES Institute</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-stone-100 border-none text-xs font-semibold rounded-full px-4 py-2 focus:ring-2 focus:ring-stone-400 outline-none cursor-pointer appearance-none text-center"
            >
              <option value={Language.EN}>EN</option>
              <option value={Language.ZH}>中文</option>
              <option value={Language.FR}>FR</option>
              <option value={Language.DE}>DE</option>
              <option value={Language.ES}>ES</option>
            </select>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm tracking-wide">{t.footerCredit}</p>
          <div className="mt-6 flex justify-center space-x-4">
            <div className="w-8 h-[1px] bg-stone-700 self-center"></div>
            <p className="text-[10px] uppercase tracking-tighter">Established for Excellence</p>
            <div className="w-8 h-[1px] bg-stone-700 self-center"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
