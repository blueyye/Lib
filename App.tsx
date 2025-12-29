
import React, { useState, useMemo } from 'react';
import Layout from './components/Layout';
import LibraryDetail from './components/LibraryDetail';
import { Language, Library } from './types';
import { TRANSLATIONS, LIBRARIES } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [selectedLibrary, setSelectedLibrary] = useState<Library | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const t = TRANSLATIONS[lang];

  const filteredLibraries = useMemo(() => {
    if (!searchQuery.trim()) return LIBRARIES;
    const query = searchQuery.toLowerCase();
    return LIBRARIES.filter(lib => 
      lib.name[lang].toLowerCase().includes(query) || 
      lib.location[lang].toLowerCase().includes(query) ||
      lib.description[lang].toLowerCase().includes(query)
    );
  }, [searchQuery, lang]);

  return (
    <Layout lang={lang} setLang={setLang}>
      {selectedLibrary ? (
        <LibraryDetail 
          library={selectedLibrary} 
          lang={lang} 
          onBack={() => setSelectedLibrary(null)} 
        />
      ) : (
        <div className="animate-in fade-in duration-1000">
          {/* Hero Section */}
          <section className="relative h-[50vh] flex items-center overflow-hidden bg-stone-900">
            <div className="absolute inset-0 opacity-40">
              <img 
                src="https://picsum.photos/id/1073/1920/1080" 
                alt="Library Hero" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-3xl space-y-6">
                <span className="text-stone-300 font-bold uppercase tracking-[0.3em] text-sm animate-in slide-in-from-left duration-700">
                  Global Heritage
                </span>
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-in slide-in-from-left duration-1000 delay-100">
                  {t.title}
                </h2>
                <p className="text-lg md:text-xl text-stone-300 serif italic animate-in slide-in-from-left duration-1000 delay-200">
                  {t.subtitle}
                </p>
              </div>
            </div>
          </section>

          {/* Search & Filter Section */}
          <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-stone-200 flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow w-full">
                <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchCatalog}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-stone-50 border-none focus:ring-2 focus:ring-stone-400 text-stone-800 transition-all outline-none"
                />
              </div>
            </div>
          </section>

          {/* Library Grid */}
          <section className="max-w-7xl mx-auto px-4 py-16">
            {filteredLibraries.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredLibraries.map((lib) => (
                  <div 
                    key={lib.id}
                    onClick={() => setSelectedLibrary(lib)}
                    className="group cursor-pointer bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img 
                        src={lib.image} 
                        alt={lib.name[lang]} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      <div className="absolute bottom-8 left-8 right-8 transition-transform duration-500 group-hover:-translate-y-2">
                        <p className="text-stone-300 text-xs font-bold uppercase tracking-widest mb-2">{lib.location[lang]}</p>
                        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{lib.name[lang]}</h3>
                        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                          {t.explore}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-stone-100 rounded-3xl border border-stone-200 border-dashed">
                <p className="text-stone-500 font-medium italic serif">{t.noResults}</p>
              </div>
            )}
          </section>

          {/* Institute Info */}
          <section className="bg-stone-100 py-24 border-y border-stone-200">
            <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
              <h3 className="text-3xl font-bold text-stone-900">About the Project</h3>
              <p className="text-lg text-stone-600 leading-relaxed italic serif">
                "The library is a fortress for the human soul and the repository of our collective memory."
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-stone-200 shadow-sm mb-4">
                  <span className="text-stone-900 font-bold text-xl serif">D</span>
                </div>
                <h4 className="font-bold text-stone-900 uppercase tracking-widest text-sm">DaKES Institute</h4>
                <p className="text-stone-500 text-xs mt-1">Curated by Fred Y. Ye (叶鹰)</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </Layout>
  );
};

export default App;
