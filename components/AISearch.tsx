
import React, { useState } from 'react';
import { getAIResearch } from '../services/geminiService';
import { SearchResult, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface AISearchProps {
  lang: Language;
  contextName: string;
}

const AISearch: React.FC<AISearchProps> = ({ lang, contextName }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const research = await getAIResearch(`Context: ${contextName}. Research the following: ${query}`);
      setResult(research);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="p-6 border-b border-stone-100 bg-stone-50/50">
        <h3 className="text-lg font-bold text-stone-900 flex items-center">
          <svg className="w-5 h-5 mr-2 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {t.searchTitle}
        </h3>
      </div>
      <div className="p-6">
        <div className="flex space-x-3 mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="flex-grow bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-400 outline-none transition-all"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-stone-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-stone-800 disabled:opacity-50 transition-colors whitespace-nowrap"
          >
            {loading ? t.loading : t.askAI}
          </button>
        </div>

        {result && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="prose prose-stone max-w-none text-sm text-stone-700 leading-relaxed whitespace-pre-wrap">
              {result.text}
            </div>
            {result.links.length > 0 && (
              <div className="pt-4 border-t border-stone-100">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Sources</p>
                <div className="flex flex-wrap gap-2">
                  {result.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-stone-100 text-stone-600 px-3 py-1.5 rounded-full hover:bg-stone-200 transition-colors inline-flex items-center"
                    >
                      {link.title}
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AISearch;
