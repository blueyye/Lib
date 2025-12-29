
import React, { useState } from 'react';
import { editLibraryImage } from '../services/geminiService';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ImageEditorProps {
  lang: Language;
  initialImage: string;
}

const ImageEditor: React.FC<ImageEditorProps> = ({ lang, initialImage }) => {
  const [prompt, setPrompt] = useState('');
  const [currentImage, setCurrentImage] = useState(initialImage);
  const [loading, setLoading] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleEdit = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      // For the demo, we use the initial image URL. In a real app, you'd fetch the blob and convert to base64.
      // Since it's from picsum, we'll try to get it.
      const res = await fetch(currentImage);
      const blob = await res.blob();
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        const edited = await editLibraryImage(base64, prompt);
        if (edited) {
          setCurrentImage(edited);
        }
      };
      reader.readAsDataURL(blob);
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {t.editImage}
        </h3>
      </div>
      <div className="p-6 space-y-6">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
          <img 
            src={currentImage} 
            alt="Library View" 
            className={`w-full h-full object-cover transition-opacity duration-500 ${loading ? 'opacity-50' : 'opacity-100'}`} 
          />
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-stone-900 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={t.editPromptPlaceholder}
            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-400 outline-none transition-all"
          />
          <button
            onClick={handleEdit}
            disabled={loading}
            className="w-full bg-stone-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-stone-800 disabled:opacity-50 transition-colors"
          >
            {t.applyEdit}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
