
export enum Language {
  EN = 'en',
  ZH = 'zh',
  FR = 'fr',
  DE = 'de',
  ES = 'es'
}

export interface Library {
  id: string;
  name: { [key in Language]: string };
  location: { [key in Language]: string };
  description: { [key in Language]: string };
  treasures: { [key in Language]: string[] };
  image: string;
  officialUrl: string;
  founded: number;
}

export interface SearchResult {
  text: string;
  links: { uri: string; title: string }[];
}

export interface TranslationStrings {
  title: string;
  subtitle: string;
  explore: string;
  treasures: string;
  founded: string;
  visitOfficial: string;
  searchTitle: string;
  searchPlaceholder: string;
  askAI: string;
  editImage: string;
  editPromptPlaceholder: string;
  applyEdit: string;
  footerCredit: string;
  back: string;
  loading: string;
  searchCatalog: string;
  noResults: string;
}
