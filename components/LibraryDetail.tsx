
import React from 'react';
import { Library, Language } from '../types';
import { TRANSLATIONS } from '../constants';
import AISearch from './AISearch';
import ImageEditor from './ImageEditor';

interface LibraryDetailProps {
  library: Library;
  lang: Language;
  onBack: () => void;
}

const LibraryDetail: React.FC<LibraryDetailProps> = ({ library, lang, onBack }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in duration-700">
      <button 
        onClick={onBack}
        className="mb-12 flex items-center text-stone-500 hover:text-stone-900 transition-colors group"
      >
        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-semibold uppercase tracking-widest">{t.back}</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Info */}
        <div className="lg:col-span-2 space-y-12">
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{t.founded} {library.founded}</span>
              <h2 className="text-5xl font-bold text-stone-900 leading-tight">{library.name[lang]}</h2>
              <p className="text-xl text-stone-500 italic serif">{library.location[lang]}</p>
            </div>
            <p className="text-lg text-stone-700 leading-relaxed max-w-3xl">
              {library.description[lang]}
            </p>
            <a 
              href={library.officialUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-stone-900 border-b-2 border-stone-900 pb-1 font-semibold hover:text-stone-600 hover:border-stone-600 transition-colors"
            >
              {t.visitOfficial}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </section>

          <section className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-stone-900 mr-4"></span>
                {t.treasures}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {library.treasures[lang].map((item, idx) => (
                  <div key={idx} className="bg-stone-100 p-6 rounded-2xl flex items-center space-x-4 border border-stone-200/50">
                    <div className="w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-stone-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <AISearch lang={lang} contextName={library.name[lang]} />
        </div>

        {/* Right Column: AI Visuals */}
        <div className="space-y-8">
          <ImageEditor lang={lang} initialImage={library.image} />
          
          <div className="bg-stone-900 text-stone-400 p-8 rounded-2xl space-y-4">
            <h4 className="text-stone-100 font-bold uppercase tracking-widest text-xs">Curator's Note</h4>
            <p className="text-sm leading-relaxed">
              These digital archives are powered by advanced Gemini AI models, providing real-time data from global repositories and enabling creative visualization of academic spaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryDetail;
