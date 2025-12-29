
import { Language, Library, TranslationStrings } from './types';

export const LIBRARIES: Library[] = [
  {
    id: 'loc',
    name: { en: 'Library of Congress', zh: '美国国会图书馆', fr: 'Bibliothèque du Congrès', de: 'Library of Congress', es: 'Biblioteca del Congreso' },
    location: { en: 'Washington, D.C., USA', zh: '美国华盛顿特区', fr: 'Washington, D.C., États-Unis', de: 'Washington, D.C., USA', es: 'Washington, D.C., EE. UU.' },
    description: { 
      en: 'The largest library in the world, with millions of books, recordings, photographs, newspapers, maps and manuscripts in its collections.',
      zh: '世界上最大的图书馆，藏有数千万册图书、录音、照片、报纸、地图和手稿。',
      fr: 'La plus grande bibliothèque au monde, avec des millions de livres, enregistrements, photographies, journaux, cartes et manuscrits.',
      de: 'Die größte Bibliothek der Welt mit Millionen von Büchern, Aufnahmen, Fotografien, Zeitungen, Karten und Manuskripten.',
      es: 'La biblioteca más grande del mundo, con millones de libros, grabaciones, fotografías, periódicos, mapas y manuscritos.'
    },
    treasures: { 
      en: ['Gutenberg Bible', 'Draft of the Declaration of Independence', 'The Giant Bible of Mainz'],
      zh: ['古腾堡圣经', '独立宣言草案', '美因茨大圣经'],
      fr: ['Bible de Gutenberg', 'Brouillon de la Déclaration d\'Indépendance', 'Grande Bible de Mayence'],
      de: ['Gutenberg-Bibel', 'Entwurf der Unabhängigkeitserklärung', 'Mainzer Riesenbibel'],
      es: ['Biblia de Gutenberg', 'Borrador de la Declaración de Independencia', 'Gran Biblia de Maguncia']
    },
    image: 'https://picsum.photos/id/1073/1200/800',
    officialUrl: 'https://www.loc.gov',
    founded: 1800
  },
  {
    id: 'bl',
    name: { en: 'British Library', zh: '大英图书馆', fr: 'British Library', de: 'British Library', es: 'Biblioteca Británica' },
    location: { en: 'London, UK', zh: '英国伦敦', fr: 'Londres, Royaume-Uni', de: 'London, Großbritannien', es: 'Londres, Reino Unido' },
    description: { 
      en: 'The national library of the United Kingdom and one of the largest libraries in the world, containing over 170 million items.',
      zh: '英国国家图书馆，世界最大图书馆之一，馆藏超过1.7亿件。',
      fr: 'La bibliothèque nationale du Royaume-Uni et l\'une des plus grandes au monde, avec plus de 170 millions d\'articles.',
      de: 'Die Nationalbibliothek des Vereinigten Königreichs und eine der größten Bibliotheken der Welt mit über 170 Millionen Objekten.',
      es: 'La biblioteca nacional del Reino Unido y una de las más grandes del mundo, con más de 170 millones de artículos.'
    },
    treasures: { 
      en: ['Magna Carta', 'The Diamond Sutra', 'Leonardo da Vinci\'s Notebook'],
      zh: ['大宪章', '金刚经', '列奥纳多·达·芬奇手稿'],
      fr: ['Magna Carta', 'Le Sūtra du Diamant', 'Carnet de Léonard de Vinci'],
      de: ['Magna Carta', 'Diamant-Sutra', 'Notizbuch von Leonardo da Vinci'],
      es: ['Magna Carta', 'El Sutra del Diamante', 'Cuaderno de Leonardo da Vinci']
    },
    image: 'https://picsum.photos/id/1015/1200/800',
    officialUrl: 'https://www.bl.uk',
    founded: 1973
  },
  {
    id: 'nlc',
    name: { en: 'National Library of China', zh: '中国国家图书馆', fr: 'Bibliothèque nationale de Chine', de: 'Chinesische Nationalbibliothek', es: 'Biblioteca Nacional de China' },
    location: { en: 'Beijing, China', zh: '中国北京', fr: 'Pékin, Chine', de: 'Peking, China', es: 'Pekín, China' },
    description: { 
      en: 'The national library of China, holding a vast collection of Chinese literature and historical documents.',
      zh: '中华人民共和国国家图书馆，拥有海量的中国文学和历史文献收藏。',
      fr: 'La bibliothèque nationale de Chine, détenant une vaste collection de littérature chinoise et de documents historiques.',
      de: 'Die Nationalbibliothek Chinas mit einer riesigen Sammlung chinesischer Literatur und historischer Dokumente.',
      es: 'La biblioteca nacional de China, con una vasta colección de literatura china y documentos históricos.'
    },
    treasures: { 
      en: ['Dunhuang Manuscripts', 'Yongle Encyclopedia', 'Siku Quanshu'],
      zh: ['敦煌遗书', '永乐大典', '四库全书'],
      fr: ['Manuscrits de Dunhuang', 'Encyclopédie de Yongle', 'Siku Quanshu'],
      de: ['Dunhuang-Manuskripte', 'Yongle-Enzyklopädie', 'Siku Quanshu'],
      es: ['Manuscritos de Dunhuang', 'Enciclopedia Yongle', 'Siku Quanshu']
    },
    image: 'https://picsum.photos/id/1043/1200/800',
    officialUrl: 'http://www.nlc.cn',
    founded: 1909
  },
  {
    id: 'bnf',
    name: { en: 'Bibliothèque nationale de France', zh: '法国国家图书馆', fr: 'Bibliothèque nationale de France', de: 'Französische Nationalbibliothek', es: 'Biblioteca Nacional de Francia' },
    location: { en: 'Paris, France', zh: '法国巴黎', fr: 'Paris, France', de: 'Paris, Frankreich', es: 'París, Francia' },
    description: { 
      en: 'The national library of France, the repository of all that is published in France.',
      zh: '法国国家图书馆，位于巴黎，是法国所有出版物的保存库。',
      fr: 'La bibliothèque nationale de France, dépositaire de tout ce qui est publié en France.',
      de: 'Die Nationalbibliothek Frankreichs, die alles sammelt, was in Frankreich veröffentlicht wird.',
      es: 'La biblioteca nacional de Francia, depositaria de todo lo que se publica en Francia.'
    },
    treasures: { 
      en: ['Psalter of Saint Louis', 'The Book of Hours of Rohan', 'Charlemagne\'s Bible'],
      zh: ['圣路易诗篇', '罗汉时祷书', '查理曼圣经'],
      fr: ['Psautier de Saint Louis', 'Les Heures de Rohan', 'Bible de Charlemagne'],
      de: ['Psalter von Saint Louis', 'Das Stundenbuch von Rohan', 'Karls des Großen Bibel'],
      es: ['Salterio de San Luis', 'El Libro de Horas de Rohan', 'Biblia de Carlomagno']
    },
    image: 'https://picsum.photos/id/1040/1200/800',
    officialUrl: 'https://www.bnf.fr',
    founded: 1461
  },
  {
    id: 'vatican',
    name: { en: 'Vatican Library', zh: '梵蒂冈图书馆', fr: 'Bibliothèque du Vatican', de: 'Vatikanische Bibliothek', es: 'Biblioteca Vaticana' },
    location: { en: 'Vatican City', zh: '梵蒂冈城', fr: 'Cité du Vatican', de: 'Vatikanstadt', es: 'Ciudad del Vaticano' },
    description: { 
      en: 'One of the oldest libraries in the world, containing a significant collection of historical texts.',
      zh: '世界上最古老的图书馆之一，收藏了极其重要的历史文献。',
      fr: 'L\'une des plus anciennes bibliothèques au monde, contenant une importante collection de textes historiques.',
      de: 'Eine der ältesten Bibliotheken der Welt mit einer bedeutenden Sammlung historischer Texte.',
      es: 'Una de las bibliotecas más antiguas del mundo, con una importante colección de textos históricos.'
    },
    treasures: { 
      en: ['Codex Vaticanus', 'Vergilius Vaticanus', 'Palatine Anthology'],
      zh: ['梵蒂冈抄本', '梵蒂冈维吉尔抄本', '帕拉蒂尼选集'],
      fr: ['Codex Vaticanus', 'Vergilius Vaticanus', 'Anthologie Palatine'],
      de: ['Codex Vaticanus', 'Vergilius Vaticanus', 'Palatinische Anthologie'],
      es: ['Códice Vaticano', 'Vergilius Vaticanus', 'Antología Palatina']
    },
    image: 'https://picsum.photos/id/1031/1200/800',
    officialUrl: 'https://www.vaticanlibrary.va',
    founded: 1475
  },
  {
    id: 'rsl',
    name: { en: 'Russian State Library', zh: '俄罗斯国立图书馆', fr: 'Bibliothèque d\'État de Russie', de: 'Russische Staatsbibliothek', es: 'Biblioteca Estatal de Rusia' },
    location: { en: 'Moscow, Russia', zh: '俄罗斯莫斯科', fr: 'Moscou, Russie', de: 'Moskau, Russland', es: 'Moscú, Rusia' },
    description: { 
      en: 'The national library of Russia, located in Moscow. It is the largest in the country and one of the largest in the world.',
      zh: '俄罗斯国家图书馆，位于莫斯科。它是该国最大的图书馆，也是世界上最大的图书馆之一。',
      fr: 'La bibliothèque nationale de Russie, située à Moscou. C\'est la plus grande du pays et l\'une des plus grandes au monde.',
      de: 'Die russische Nationalbibliothek in Moskau. Sie ist die größte des Landes und eine der größten der Welt.',
      es: 'La biblioteca nacional de Rusia, ubicada en Moscú. Es la más grande del país y una de las más grandes del mundo.'
    },
    treasures: { 
      en: ['Archangel Gospel', 'Mariinskoye Gospel', 'Pashkov House Archive'],
      zh: ['大天使福音书', '马林斯基福音书', '帕什科夫大楼档案馆'],
      fr: ['Évangile de l\'Archange', 'Évangile de Mariinskoye', 'Archives de la Maison Pashkov'],
      de: ['Archangel-Evangelium', 'Mariinskoye-Evangelium', 'Archiv des Paschkow-Hauses'],
      es: ['Evangelio del Arcángel', 'Evangelio de Mariinskoye', 'Archivo de la Casa Pashkov']
    },
    image: 'https://picsum.photos/id/1029/1200/800',
    officialUrl: 'https://www.rsl.ru',
    founded: 1862
  },
  {
    id: 'ndl',
    name: { en: 'National Diet Library', zh: '日本国立国会图书馆', fr: 'Bibliothèque nationale de la Diète', de: 'Nationale Parlamentsbibliothek', es: 'Biblioteca Nacional de la Dieta' },
    location: { en: 'Tokyo, Japan', zh: '日本东京', fr: 'Tokyo, Japon', de: 'Tokio, Japan', es: 'Tokio, Japón' },
    description: { 
      en: 'The only national library in Japan, established to assist members of the National Diet.',
      zh: '日本唯一的国家图书馆，旨在协助国会议员。',
      fr: 'La seule bibliothèque nationale du Japon, créée pour assister les membres de la Diète nationale.',
      de: 'Die einzige Nationalbibliothek Japans, die zur Unterstützung der Mitglieder des Parlaments (Diet) gegründet wurde.',
      es: 'La única biblioteca nacional de Japón, establecida para ayudar a los miembros de la Dieta Nacional.'
    },
    treasures: { 
      en: ['Hyakumanto Darani', 'Edo Period Maps', 'Modern Japanese Political History Documents'],
      zh: ['百万塔陀罗尼', '江户时代地图', '日本近现代政治史料'],
      fr: ['Hyakumanto Darani', 'Cartes de l\'époque d\'Edo', 'Documents d\'histoire politique japonaise moderne'],
      de: ['Hyakumanto Darani', 'Landkarten der Edo-Zeit', 'Dokumente zur modernen politischen Geschichte Japans'],
      es: ['Hyakumanto Darani', 'Mapas del período Edo', 'Documentos de historia política japonesa moderna']
    },
    image: 'https://picsum.photos/id/1033/1200/800',
    officialUrl: 'https://www.ndl.go.jp',
    founded: 1948
  },
  {
    id: 'nypl',
    name: { en: 'New York Public Library', zh: '纽约公共图书馆', fr: 'Bibliothèque publique de New York', de: 'New York Public Library', es: 'Biblioteca Pública de Nueva York' },
    location: { en: 'New York City, USA', zh: '美国纽约市', fr: 'New York, États-Unis', de: 'New York City, USA', es: 'Nueva York, EE. UU.' },
    description: { 
      en: 'A public library system in New York City. With nearly 53 million items, it is the second largest public library in the United States.',
      zh: '纽约市的公共图书馆系统。馆藏近5300万件，是美国第二大公共图书馆。',
      fr: 'Un système de bibliothèques publiques à New York. Avec près de 53 millions d\'articles, c\'est la deuxième plus grande bibliothèque publique des États-Unis.',
      de: 'Ein öffentliches Bibliothekssystem in New York City. Mit fast 53 Millionen Objekten ist sie die zweitgrößte öffentliche Bibliothek der USA.',
      es: 'Un sistema de bibliotecas públicas en la ciudad de Nueva York. Con casi 53 millones de artículos, es la segunda biblioteca pública más grande de los Estados Unidos.'
    },
    treasures: { 
      en: ['Gutenberg Bible (first in Americas)', 'Jefferson\'s Declaration of Independence', 'Winnie-the-Pooh original dolls'],
      zh: ['古腾堡圣经（美洲首本）', '杰斐逊的独立宣言手稿', '小熊维尼原始玩偶'],
      fr: ['Bible de Gutenberg (la première en Amérique)', 'Déclaration d\'Indépendance de Jefferson', 'Poupées originales de Winnie l\'ourson'],
      de: ['Gutenberg-Bibel (erste in Amerika)', 'Jeffersons Unabhängigkeitserklärung', 'Original Winnie-the-Pooh Puppen'],
      es: ['Biblia de Gutenberg (primera en América)', 'Declaración de Independencia de Jefferson', 'Muñecos originales de Winnie-the-Pooh']
    },
    image: 'https://picsum.photos/id/1035/1200/800',
    officialUrl: 'https://www.nypl.org',
    founded: 1895
  },
  {
    id: 'harvard',
    name: { en: 'Harvard Library', zh: '哈佛大学图书馆', fr: 'Bibliothèque de Harvard', de: 'Harvard Library', es: 'Biblioteca de Harvard' },
    location: { en: 'Cambridge, MA, USA', zh: '美国马萨诸塞州剑桥', fr: 'Cambridge, États-Unis', de: 'Cambridge, USA', es: 'Cambridge, EE. UU.' },
    description: { 
      en: 'The umbrella organization for the Harvard University libraries and shared services. It is the oldest library system in the United States.',
      zh: '哈佛大学图书馆系统的统称，是美国最古老的图书馆系统。',
      fr: 'L\'organisation faîtière des bibliothèques de l\'université de Harvard. C\'est le plus ancien système de bibliothèques des États-Unis.',
      de: 'Die Dachorganisation der Bibliotheken der Harvard University. Es ist das älteste Bibliothekssystem der Vereinigten Staaten.',
      es: 'La organización que agrupa a las bibliotecas de la Universidad de Harvard. Es el sistema de bibliotecas más antiguo de los Estados Unidos.'
    },
    treasures: { 
      en: ['Bay Psalm Book', 'John Audubon\'s Birds of America', 'Houghton Library Manuscripts'],
      zh: ['海湾圣诗', '奥杜邦《美洲鸟类》', '霍顿图书馆手稿'],
      fr: ['Bay Psalm Book', 'Les Oiseaux d\'Amérique de John Audubon', 'Manuscrits de la bibliothèque Houghton'],
      de: ['Bay Psalm Book', 'John Audubons Birds of America', 'Manuskripte der Houghton Library'],
      es: ['Bay Psalm Book', 'Birds of America de John Audubon', 'Manuscritos de la Biblioteca Houghton']
    },
    image: 'https://picsum.photos/id/1036/1200/800',
    officialUrl: 'https://library.harvard.edu',
    founded: 1638
  },
  {
    id: 'bodleian',
    name: { en: 'Bodleian Library', zh: '博德利图书馆', fr: 'Bibliothèque Bodléienne', de: 'Bodleian Library', es: 'Biblioteca Bodleiana' },
    location: { en: 'Oxford, UK', zh: '英国牛津', fr: 'Oxford, Royaume-Uni', de: 'Oxford, Großbritannien', es: 'Oxford, Reino Unido' },
    description: { 
      en: 'The main research library of the University of Oxford, and is one of the oldest libraries in Europe.',
      zh: '牛津大学的主要研究图书馆，也是欧洲最古老的图书馆之一。',
      fr: 'La principale bibliothèque de recherche de l\'université d\'Oxford, l\'une des plus anciennes d\'Europe.',
      de: 'Die Hauptforschungsbibliothek der Universität Oxford und eine der ältesten Bibliotheken Europas.',
      es: 'La principal biblioteca de investigación de la Universidad de Oxford, una de las más antiguas de Europa.'
    },
    treasures: { 
      en: ['Magna Carta (four copies)', 'Gutenberg Bible', 'Shakespeare\'s First Folio'],
      zh: ['大宪章（四份副本）', '古腾堡圣经', '莎士比亚第一对开本'],
      fr: ['Magna Carta (quatre copies)', 'Bible de Gutenberg', 'Premier Folio de Shakespeare'],
      de: ['Magna Carta (vier Kopien)', 'Gutenberg-Bibel', 'Shakespeares First Folio'],
      es: ['Magna Carta (cuatro copias)', 'Biblia de Gutenberg', 'Primer Folio de Shakespeare']
    },
    image: 'https://picsum.photos/id/1037/1200/800',
    officialUrl: 'https://www.bodleian.ox.ac.uk',
    founded: 1602
  }
];

export const TRANSLATIONS: { [key in Language]: TranslationStrings } = {
  [Language.EN]: {
    title: 'Libraries Explorer',
    subtitle: 'Discover the World\'s Intellectual Sanctuaries',
    explore: 'Explore Collections',
    treasures: 'Treasures of the Library',
    founded: 'Founded',
    visitOfficial: 'Visit Official Website',
    searchTitle: 'AI Research Assistant',
    searchPlaceholder: 'Ask about collections, recent events, or specific manuscripts...',
    askAI: 'Consult AI',
    editImage: 'AI Image Stylist',
    editPromptPlaceholder: 'e.g., "Make it look like a vintage painting"',
    applyEdit: 'Apply Transformation',
    footerCredit: 'Designed by DaKES Institute | Author: Fred Y. Ye (叶鹰)',
    back: 'Back to Explorer',
    loading: 'Consulting the archives...',
    searchCatalog: 'Search libraries by name or location...',
    noResults: 'No libraries match your search.'
  },
  [Language.ZH]: {
    title: '世界图书馆大观',
    subtitle: '探索全球知识圣殿与人类文明菁华',
    explore: '探索馆藏',
    treasures: '镇馆之宝',
    founded: '创立年份',
    visitOfficial: '访问官方网站',
    searchTitle: 'AI 研究助手',
    searchPlaceholder: '询问馆藏信息、近期活动或特定手稿...',
    askAI: '咨询 AI',
    editImage: 'AI 图像编辑',
    editPromptPlaceholder: '例如：“添加复古滤镜”',
    applyEdit: '应用变换',
    footerCredit: '设计：DaKES Institute | 作者：Fred Y. Ye (叶鹰)',
    back: '返回主页',
    loading: '正在查阅档案...',
    searchCatalog: '按名称或位置搜索图书馆...',
    noResults: '没有找到匹配的图书馆。'
  },
  [Language.FR]: {
    title: 'Explorateur de Bibliothèques',
    subtitle: 'Découvrez les Sanctuaires Intellectuels du Monde',
    explore: 'Explorer les Collections',
    treasures: 'Trésors de la Bibliothèque',
    founded: 'Fondée en',
    visitOfficial: 'Visiter le Site Officiel',
    searchTitle: 'Assistant de Recherche IA',
    searchPlaceholder: 'Posez des questions sur les collections ou manuscrits...',
    askAI: 'Consulter l\'IA',
    editImage: 'Styliste d\'Image IA',
    editPromptPlaceholder: 'ex: "Donnez-lui l\'aspect d\'une peinture ancienne"',
    applyEdit: 'Appliquer la Transformation',
    footerCredit: 'Conçu par l\'Institut DaKES | Auteur : Fred Y. Ye (叶鹰)',
    back: 'Retour à l\'Explorateur',
    loading: 'Consultation des archives...',
    searchCatalog: 'Rechercher par nom ou lieu...',
    noResults: 'Aucune bibliothèque ne correspond à votre recherche.'
  },
  [Language.DE]: {
    title: 'Bibliotheks-Entdecker',
    subtitle: 'Entdecken Sie die intellektuellen Heiligtümer der Welt',
    explore: 'Sammlungen erkunden',
    treasures: 'Schätze der Bibliothek',
    founded: 'Gegründet',
    visitOfficial: 'Offizielle Website besuchen',
    searchTitle: 'KI-Forschungsassistent',
    searchPlaceholder: 'Fragen Sie nach Sammlungen oder Manuskripten...',
    askAI: 'KI konsultieren',
    editImage: 'KI-Bildstylist',
    editPromptPlaceholder: 'z.B. "Lass es wie ein altes Gemälde aussehen"',
    applyEdit: 'Transformation anwenden',
    footerCredit: 'Entworfen vom DaKES Institute | Autor: Fred Y. Ye (叶鹰)',
    back: 'Zurück zum Entdecker',
    loading: 'Archive werden durchsucht...',
    searchCatalog: 'Bibliotheken nach Name oder Ort suchen...',
    noResults: 'Keine Bibliotheken entsprechen Ihrer Suche.'
  },
  [Language.ES]: {
    title: 'Explorador de Bibliotecas',
    subtitle: 'Descubre los Santuarios Intelectuales del Mundo',
    explore: 'Explorar Colecciones',
    treasures: 'Tesoros de la Biblioteca',
    founded: 'Fundada en',
    visitOfficial: 'Visitar Sitio Oficial',
    searchTitle: 'Asistente de Investigación IA',
    searchPlaceholder: 'Pregunta sobre colecciones o manuscritos...',
    askAI: 'Consultar IA',
    editImage: 'Estilista de Imagen IA',
    editPromptPlaceholder: 'ej: "Haz que parezca una pintura antigua"',
    applyEdit: 'Aplicar Transformación',
    footerCredit: 'Diseñado por DaKES Institute | Autor: Fred Y. Ye (叶鹰)',
    back: 'Volver al Explorador',
    loading: 'Consultando los archivos...',
    searchCatalog: 'Buscar bibliotecas por nombre o lugar...',
    noResults: 'No se encontraron bibliotecas que coincidan.'
  }
};
