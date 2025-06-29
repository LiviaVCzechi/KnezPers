import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Calendar, BookOpen, FileText, Users, Award, ChevronRight } from 'lucide-react';

interface Translation {
  [key: string]: string;
}

interface Translations {
  cs: Translation;
  en: Translation;
}

const translations: Translations = {
  cs: {
    // Navigation
    'nav-title': 'Virtuální muzeum',
    'nav-home': 'Domů',
    'nav-about': 'O projektu',
    'nav-timeline': 'Časová osa',
    'nav-exhibitions': 'Výstavy',
    'nav-documents': 'Dokumenty',
    'nav-news': 'Aktuality',
    'nav-contact': 'Kontakt',
    
    // Hero section
    'hero-title': 'Zachování historie, uctění paměti',
    'hero-subtitle': 'Zkoumání mnohostranné historie represí prostřednictvím přístupných digitálních výstav, interaktivních časových os a komplexních archivů.',
    'hero-btn-timeline': 'Prozkoumat časovou osu',
    'hero-btn-exhibitions': 'Zobrazit výstavy',
    
    // About section
    'about-title': 'O projektu',
    'about-mission': 'Mise a vize',
    'about-mission-text': 'Naše virtuální muzeum si klade za cíl vytvořit poutavou online platformu prezentující historické represe, poskytující přístupné digitální výstavy a vzdělávací zdroje. Usilujeme o zachování historické paměti a podporu porozumění prostřednictvím komplexního výzkumu a interaktivních prezentací.',
    'about-significance': 'Význam projektu',
    'about-significance-text': 'Tento digitální archiv slouží jako zásadní zdroj pro výzkumníky, pedagogy a širokou veřejnost zajímající se o pochopení složité historie politických a sociálních represí. Naše platforma nabízí bezprecedentní přístup k dokumentům, svědectvím a vědeckým analýzám.',
    'stat-documents': 'Historických dokumentů',
    'stat-stories': 'Osobních příběhů',
    'stat-exhibits': 'Interaktivních exponátů',
    
    // Timeline section
    'timeline-title': 'Interaktivní časová osa',
    'timeline-subtitle': 'Procházejte klíčovými historickými událostmi a osobnostmi',
    'timeline-all': 'Všechna období',
    'timeline-early': '1900-1930',
    'timeline-mid': '1930-1960',
    'timeline-late': '1960-1990',
    
    // Timeline events
    'event-1917-title': 'Revoluční změny',
    'event-1917-desc': 'Významné politické otřesy vedoucí k zásadním společenským a institucionálním transformacím.',
    'event-1925-title': 'Institucionální reformy',
    'event-1925-desc': 'Ustanovení nových administrativních struktur a právních rámců ovlivňujících občanské svobody.',
    'event-1937-title': 'Období zostření',
    'event-1937-desc': 'Významná eskalace politických represí postihující různé společenské skupiny a instituce.',
    'event-1953-title': 'Přechodné období',
    'event-1953-desc': 'Změny ve vedení a směřování politiky vedoucí k postupným posunům v represivních praktikách.',
    'event-1968-title': 'Společenská hnutí',
    'event-1968-desc': 'Vznik občanskoprávních hnutí a zvýšený odpor vůči autoritářským praktikám.',
    'event-1989-title': 'Demokratické přechody',
    'event-1989-desc': 'Pád autoritářských režimů a začátek demokratických reforem a komisí pravdy.',
    
    // Exhibitions section
    'exhibitions-title': 'Virtuální výstavy',
    'exhibitions-subtitle': 'Kurátorské sbírky prezentující různé aspekty historických represí',
    'exhibitions-all': 'Všechny výstavy',
    'exhibitions-personal': 'Osobní příběhy',
    'exhibitions-institutional': 'Institucionální',
    'exhibitions-resistance': 'Odpor',
    'btn-explore': 'Prozkoumat výstavu',
    
    // Exhibition titles
    'exhibition-voices-title': 'Hlasy umlčených',
    'exhibition-voices-desc': 'Osobní svědectví a příběhy jednotlivců, kteří zažili politické represe na vlastní kůži.',
    'exhibition-apparatus-title': 'Aparát kontroly',
    'exhibition-apparatus-desc': 'Zkoumání institucionálních mechanismů a byrokratických struktur, které umožnily systematické represe.',
    'exhibition-courage-title': 'Činy odvahy',
    'exhibition-courage-desc': 'Příběhy odporu, solidarity a lidské důstojnosti tváří v tvář útlaku a pronásledování.',
    'exhibition-legal-title': 'Právní rámce',
    'exhibition-legal-desc': 'Analýza zákonů, nařízení a soudních procesů, které legitimizovaly represivní opatření.',
    'exhibition-letters-title': 'Dopisy z vězení',
    'exhibition-letters-desc': 'Korespondence a osobní spisy poskytující intimní pohledy na lidské náklady represí.',
    'exhibition-networks-title': 'Podzemní sítě',
    'exhibition-networks-desc': 'Skryté sítě podpory, komunikace a odporu, které udržovaly naději v temných časech.',
    
    // Documents section
    'documents-title': 'Archiv dokumentů',
    'documents-subtitle': 'Přístup k historickým dokumentům, archivům a publikacím',
    'search-placeholder': 'Hledat dokumenty...',
    'filter-all-types': 'Všechny typy',
    'filter-official': 'Úřední dokumenty',
    'filter-personal': 'Osobní spisy',
    'filter-photographs': 'Fotografie',
    'filter-recordings': 'Audio/Video',
    'filter-all-periods': 'Všechna období',
    'btn-view': 'Zobrazit dokument',
    'btn-download': 'Stáhnout PDF',
    
    // News section
    'news-title': 'Nejnovější aktuality',
    'news-subtitle': 'Nedávné přírůstky, výzkumné poznatky a oznámení o projektu',
    
    // Footer
    'footer-about': 'O nás',
    'footer-about-text': 'Specializovaný tým historiků, výzkumníků a digitálních archivářů věnující se zachování historické paměti a podpoře porozumění minulým represím.',
    'footer-team': 'Projektový tým',
    'footer-contact': 'Kontaktní informace',
    'footer-resources': 'Zdroje',
    'footer-partners': 'Zdroje a partneři',
    'footer-copyright': '© 2024 Virtuální muzeum historických represí. Všechna práva vyhrazena.',
    'footer-acknowledgment': 'Tento projekt je podporován granty od Národního fondu pro humanitní vědy a Nadace digitální historie.',
    
    // Common
    'items': 'položek',
    'updated': 'Aktualizováno',
    'view-related-docs': 'Zobrazit související dokumenty',
    'notable-figure': 'Významná osobnost'
  },
  en: {
    // Navigation
    'nav-title': 'Virtual Museum',
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-timeline': 'Timeline',
    'nav-exhibitions': 'Exhibitions',
    'nav-documents': 'Documents',
    'nav-news': 'News',
    'nav-contact': 'Contact',
    
    // Hero section
    'hero-title': 'Preserving History, Honoring Memory',
    'hero-subtitle': 'Exploring the multifaceted history of repressions through accessible digital exhibitions, interactive timelines, and comprehensive archives.',
    'hero-btn-timeline': 'Explore Timeline',
    'hero-btn-exhibitions': 'View Exhibitions',
    
    // About section
    'about-title': 'About the Project',
    'about-mission': 'Mission & Vision',
    'about-mission-text': 'Our virtual museum aims to create an engaging online platform showcasing historical repressions, providing accessible digital exhibitions and educational resources. We strive to preserve historical memory and promote understanding through comprehensive research and interactive presentations.',
    'about-significance': 'Project Significance',
    'about-significance-text': 'This digital archive serves as a vital resource for researchers, educators, and the general public interested in understanding the complex history of political and social repressions. Our platform offers unprecedented access to documents, testimonies, and scholarly analysis.',
    'stat-documents': 'Historical Documents',
    'stat-stories': 'Personal Stories',
    'stat-exhibits': 'Interactive Exhibits',
    
    // Timeline section
    'timeline-title': 'Interactive Timeline',
    'timeline-subtitle': 'Navigate through key historical events and personalities',
    'timeline-all': 'All Periods',
    'timeline-early': '1900-1930',
    'timeline-mid': '1930-1960',
    'timeline-late': '1960-1990',
    
    // Timeline events
    'event-1917-title': 'Revolutionary Changes',
    'event-1917-desc': 'Major political upheavals leading to significant social and institutional transformations.',
    'event-1925-title': 'Institutional Reforms',
    'event-1925-desc': 'Establishment of new administrative structures and legal frameworks affecting civil liberties.',
    'event-1937-title': 'Period of Intensification',
    'event-1937-desc': 'Significant escalation in political repressions affecting various social groups and institutions.',
    'event-1953-title': 'Transitional Period',
    'event-1953-desc': 'Changes in leadership and policy direction leading to gradual shifts in repressive practices.',
    'event-1968-title': 'Social Movements',
    'event-1968-desc': 'Emergence of civil rights movements and increased resistance to authoritarian practices.',
    'event-1989-title': 'Democratic Transitions',
    'event-1989-desc': 'Fall of authoritarian regimes and beginning of democratic reforms and truth commissions.',
    
    // Exhibitions section
    'exhibitions-title': 'Virtual Exhibitions',
    'exhibitions-subtitle': 'Curated collections showcasing various aspects of historical repressions',
    'exhibitions-all': 'All Exhibitions',
    'exhibitions-personal': 'Personal Stories',
    'exhibitions-institutional': 'Institutional',
    'exhibitions-resistance': 'Resistance',
    'btn-explore': 'Explore Exhibition',
    
    // Exhibition titles
    'exhibition-voices-title': 'Voices of the Silenced',
    'exhibition-voices-desc': 'Personal testimonies and stories from individuals who experienced political repressions firsthand.',
    'exhibition-apparatus-title': 'Apparatus of Control',
    'exhibition-apparatus-desc': 'Examining the institutional mechanisms and bureaucratic structures that enabled systematic repressions.',
    'exhibition-courage-title': 'Acts of Courage',
    'exhibition-courage-desc': 'Stories of resistance, solidarity, and human dignity in the face of oppression and persecution.',
    'exhibition-legal-title': 'Legal Frameworks',
    'exhibition-legal-desc': 'Analysis of laws, regulations, and judicial processes that legitimized repressive measures.',
    'exhibition-letters-title': 'Letters from Prison',
    'exhibition-letters-desc': 'Correspondence and personal writings that provide intimate glimpses into the human cost of repression.',
    'exhibition-networks-title': 'Underground Networks',
    'exhibition-networks-desc': 'The hidden networks of support, communication, and resistance that sustained hope during dark times.',
    
    // Documents section
    'documents-title': 'Document Archive',
    'documents-subtitle': 'Access to historical documents, archives, and publications',
    'search-placeholder': 'Search documents...',
    'filter-all-types': 'All Types',
    'filter-official': 'Official Documents',
    'filter-personal': 'Personal Papers',
    'filter-photographs': 'Photographs',
    'filter-recordings': 'Audio/Video',
    'filter-all-periods': 'All Periods',
    'btn-view': 'View Document',
    'btn-download': 'Download PDF',
    
    // News section
    'news-title': 'Latest Updates',
    'news-subtitle': 'Recent additions, research findings, and project announcements',
    
    // Footer
    'footer-about': 'About Us',
    'footer-about-text': 'A dedicated team of historians, researchers, and digital archivists committed to preserving historical memory and promoting understanding of past repressions.',
    'footer-team': 'Project Team',
    'footer-contact': 'Contact Information',
    'footer-resources': 'Resources',
    'footer-partners': 'Sources & Partners',
    'footer-copyright': '© 2024 Virtual Museum of Historical Repressions. All rights reserved.',
    'footer-acknowledgment': 'This project is supported by grants from the National Endowment for the Humanities and the Digital History Foundation.',
    
    // Common
    'items': 'Items',
    'updated': 'Updated',
    'view-related-docs': 'View Related Documents',
    'notable-figure': 'Notable Figure'
  }
};

// Logo component using the crucifix symbol
const LogoIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center`}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2C12.5523 2 13 2.44772 13 3V10H16C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V12H8C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10H11V3C11 2.44772 11.4477 2 12 2Z"/>
      <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
      <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
      <circle cx="8.5" cy="11" r="1" fill="currentColor"/>
      <circle cx="15.5" cy="11" r="1" fill="currentColor"/>
    </svg>
  </div>
);

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<'cs' | 'en'>('cs');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTimelinePeriod, setActiveTimelinePeriod] = useState('all');
  const [activeExhibitionFilter, setActiveExhibitionFilter] = useState('all');
  const [documentSearch, setDocumentSearch] = useState('');
  const [documentTypeFilter, setDocumentTypeFilter] = useState('all');
  const [documentPeriodFilter, setDocumentPeriodFilter] = useState('all');

  const t = (key: string): string => {
    return translations[currentLanguage][key] || key;
  };

  const switchLanguage = (lang: 'cs' | 'en') => {
    setCurrentLanguage(lang);
    document.documentElement.lang = lang;
    document.title = lang === 'cs' 
      ? 'Virtuální muzeum historických represí' 
      : 'Virtual Museum of Historical Repressions';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const timelineEvents = [
    {
      year: '1917',
      period: 'early',
      title: t('event-1917-title'),
      description: t('event-1917-desc'),
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      year: '1925',
      period: 'early',
      title: t('event-1925-title'),
      description: t('event-1925-desc'),
      personality: {
        image: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=100',
        name: t('notable-figure') + ' A'
      }
    },
    {
      year: '1937',
      period: 'mid',
      title: t('event-1937-title'),
      description: t('event-1937-desc'),
      hasDocuments: true
    },
    {
      year: '1953',
      period: 'mid',
      title: t('event-1953-title'),
      description: t('event-1953-desc')
    },
    {
      year: '1968',
      period: 'late',
      title: t('event-1968-title'),
      description: t('event-1968-desc')
    },
    {
      year: '1989',
      period: 'late',
      title: t('event-1989-title'),
      description: t('event-1989-desc')
    }
  ];

  const exhibitions = [
    {
      id: 'voices',
      category: 'personal',
      title: t('exhibition-voices-title'),
      description: t('exhibition-voices-desc'),
      items: 45,
      updated: currentLanguage === 'cs' ? 'prosinec 2024' : 'Dec 2024',
      image: 'https://images.pexels.com/photos/8386399/pexels-photo-8386399.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'apparatus',
      category: 'institutional',
      title: t('exhibition-apparatus-title'),
      description: t('exhibition-apparatus-desc'),
      items: 32,
      updated: currentLanguage === 'cs' ? 'listopad 2024' : 'Nov 2024',
      image: 'https://images.pexels.com/photos/8849293/pexels-photo-8849293.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'courage',
      category: 'resistance',
      title: t('exhibition-courage-title'),
      description: t('exhibition-courage-desc'),
      items: 28,
      updated: currentLanguage === 'cs' ? 'říjen 2024' : 'Oct 2024',
      image: 'https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'legal',
      category: 'institutional',
      title: t('exhibition-legal-title'),
      description: t('exhibition-legal-desc'),
      items: 38,
      updated: currentLanguage === 'cs' ? 'září 2024' : 'Sep 2024',
      image: 'https://images.pexels.com/photos/6664851/pexels-photo-6664851.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'letters',
      category: 'personal',
      title: t('exhibition-letters-title'),
      description: t('exhibition-letters-desc'),
      items: 52,
      updated: currentLanguage === 'cs' ? 'srpen 2024' : 'Aug 2024',
      image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'networks',
      category: 'resistance',
      title: t('exhibition-networks-title'),
      description: t('exhibition-networks-desc'),
      items: 41,
      updated: currentLanguage === 'cs' ? 'červenec 2024' : 'Jul 2024',
      image: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filteredTimelineEvents = timelineEvents.filter(event => 
    activeTimelinePeriod === 'all' || event.period === activeTimelinePeriod
  );

  const filteredExhibitions = exhibitions.filter(exhibition => 
    activeExhibitionFilter === 'all' || exhibition.category === activeExhibitionFilter
  );

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(0, 0, 0, 0.95)';
          header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
          header.style.background = 'rgba(0, 0, 0, 0.8)';
          header.style.boxShadow = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 transition-all duration-300">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <LogoIcon className="w-8 h-8 text-black" />
              </div>
              <span className="text-2xl font-bold text-white tracking-wide">{t('nav-title')}</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white font-medium transition-colors duration-300 tracking-wide">
                {t('nav-home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white font-medium transition-colors duration-300 tracking-wide">
                {t('nav-about')}
              </button>
              <button onClick={() => scrollToSection('timeline')} className="text-gray-300 hover:text-white font-medium transition-colors duration-300 tracking-wide">
                {t('nav-timeline')}
              </button>
              <button onClick={() => scrollToSection('exhibitions')} className="text-gray-300 hover:text-white font-medium transition-colors duration-300 tracking-wide">
                {t('nav-exhibitions')}
              </button>
              <button onClick={() => scrollToSection('documents')} className="text-gray-300 hover:text-white font-medium transition-colors duration-300 tracking-wide">
                {t('nav-documents')}
              </button>
              <button onClick={() => scrollToSection('news')} className="text-gray-300 hover:text-white font-medium transition-colors duration-300 tracking-wide">
                {t('nav-news')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white font-medium transition-colors duration-300 tracking-wide">
                {t('nav-contact')}
              </button>
            </div>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                <button
                  onClick={() => switchLanguage('cs')}
                  className={`px-4 py-2 text-sm font-semibold rounded transition-colors duration-300 ${
                    currentLanguage === 'cs'
                      ? 'bg-white text-black'
                      : 'text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400'
                  }`}
                >
                  CS
                </button>
                <button
                  onClick={() => switchLanguage('en')}
                  className={`px-4 py-2 text-sm font-semibold rounded transition-colors duration-300 ${
                    currentLanguage === 'en'
                      ? 'bg-white text-black'
                      : 'text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-left px-4 py-3 text-gray-300 hover:text-white font-medium">
                  {t('nav-home')}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left px-4 py-3 text-gray-300 hover:text-white font-medium">
                  {t('nav-about')}
                </button>
                <button onClick={() => scrollToSection('timeline')} className="text-left px-4 py-3 text-gray-300 hover:text-white font-medium">
                  {t('nav-timeline')}
                </button>
                <button onClick={() => scrollToSection('exhibitions')} className="text-left px-4 py-3 text-gray-300 hover:text-white font-medium">
                  {t('nav-exhibitions')}
                </button>
                <button onClick={() => scrollToSection('documents')} className="text-left px-4 py-3 text-gray-300 hover:text-white font-medium">
                  {t('nav-documents')}
                </button>
                <button onClick={() => scrollToSection('news')} className="text-left px-4 py-3 text-gray-300 hover:text-white font-medium">
                  {t('nav-news')}
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-3 text-gray-300 hover:text-white font-medium">
                  {t('nav-contact')}
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="py-24 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 mb-8">
                  <LogoIcon className="w-16 h-16 text-white" />
                  <div className="w-px h-16 bg-gray-600"></div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest">
                    {currentLanguage === 'cs' ? 'Historická paměť' : 'Historical Memory'}
                  </div>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  {t('hero-title')}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {t('hero-subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <button
                    onClick={() => scrollToSection('timeline')}
                    className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors duration-300"
                  >
                    {t('hero-btn-timeline')}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => scrollToSection('exhibitions')}
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    {t('hero-btn-exhibitions')}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10 rounded-2xl"></div>
                <img
                  src="https://images.pexels.com/photos/159775/library-books-education-literature-159775.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Historical archives and documents"
                  className="rounded-2xl shadow-2xl w-full h-auto filter grayscale"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 tracking-tight">
                {t('about-title')}
              </h2>
              <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-16 items-start">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h3 className="text-3xl font-semibold text-black mb-6 tracking-tight">
                    {t('about-mission')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t('about-mission-text')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-3xl font-semibold text-black mb-6 tracking-tight">
                    {t('about-significance')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t('about-significance-text')}
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-8 pt-12">
                  <div className="text-center p-8 bg-gray-100 border border-gray-300">
                    <div className="text-4xl font-bold text-black mb-3">500+</div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{t('stat-documents')}</div>
                  </div>
                  <div className="text-center p-8 bg-gray-100 border border-gray-300">
                    <div className="text-4xl font-bold text-black mb-3">100+</div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{t('stat-stories')}</div>
                  </div>
                  <div className="text-center p-8 bg-gray-100 border border-gray-300">
                    <div className="text-4xl font-bold text-black mb-3">50+</div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{t('stat-exhibits')}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Historical research and documentation"
                  className="w-full h-auto border border-gray-300 filter grayscale"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-24 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 tracking-tight">
                {t('timeline-title')}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t('timeline-subtitle')}
              </p>
              <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
            </div>

            {/* Timeline Controls */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {['all', 'early', 'mid', 'late'].map((period) => (
                <button
                  key={period}
                  onClick={() => setActiveTimelinePeriod(period)}
                  className={`px-8 py-3 font-medium transition-colors duration-300 border-2 ${
                    activeTimelinePeriod === period
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-gray-400 hover:border-black'
                  }`}
                >
                  {t(`timeline-${period}`)}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-black h-full"></div>
              
              <div className="space-y-16">
                {filteredTimelineEvents.map((event, index) => (
                  <div key={event.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black border-4 border-white shadow-lg z-10"></div>
                    
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="bg-white p-8 border border-gray-300 shadow-lg">
                        <div className="text-3xl font-bold text-black mb-3">{event.year}</div>
                        <h3 className="text-2xl font-semibold text-black mb-4">{event.title}</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>
                        
                        {event.image && (
                          <img src={event.image} alt={event.title} className="w-full h-40 object-cover border border-gray-300 mb-6 filter grayscale" />
                        )}
                        
                        {event.personality && (
                          <div className="flex items-center gap-4 mb-6">
                            <img src={event.personality.image} alt={event.personality.name} className="w-16 h-16 object-cover border border-gray-300 filter grayscale" />
                            <span className="text-sm font-medium text-gray-700">{event.personality.name}</span>
                          </div>
                        )}
                        
                        {event.hasDocuments && (
                          <button
                            onClick={() => scrollToSection('documents')}
                            className="text-black font-medium hover:underline border-b border-black"
                          >
                            {t('view-related-docs')}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Exhibitions Section */}
        <section id="exhibitions" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 tracking-tight">
                {t('exhibitions-title')}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t('exhibitions-subtitle')}
              </p>
              <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
            </div>

            {/* Exhibition Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {['all', 'personal', 'institutional', 'resistance'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveExhibitionFilter(filter)}
                  className={`px-8 py-3 font-medium transition-colors duration-300 border-2 ${
                    activeExhibitionFilter === filter
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-gray-400 hover:border-black'
                  }`}
                >
                  {t(`exhibitions-${filter}`)}
                </button>
              ))}
            </div>

            {/* Exhibitions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredExhibitions.map((exhibition) => (
                <div key={exhibition.id} className="bg-white border border-gray-300 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 filter grayscale"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-black mb-4">{exhibition.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{exhibition.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-6">
                      <span className="font-medium">{exhibition.items} {t('items')}</span>
                      <span>{t('updated')} {exhibition.updated}</span>
                    </div>
                    <button className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors duration-300 font-medium">
                      {t('btn-explore')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section id="documents" className="py-24 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 tracking-tight">
                {t('documents-title')}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t('documents-subtitle')}
              </p>
              <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder={t('search-placeholder')}
                  value={documentSearch}
                  onChange={(e) => setDocumentSearch(e.target.value)}
                  className="w-full pl-16 pr-4 py-4 border-2 border-gray-400 focus:border-black focus:outline-none text-lg"
                />
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500" />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <select
                  value={documentTypeFilter}
                  onChange={(e) => setDocumentTypeFilter(e.target.value)}
                  className="px-6 py-3 border-2 border-gray-400 focus:border-black focus:outline-none"
                >
                  <option value="all">{t('filter-all-types')}</option>
                  <option value="official">{t('filter-official')}</option>
                  <option value="personal">{t('filter-personal')}</option>
                  <option value="photographs">{t('filter-photographs')}</option>
                  <option value="recordings">{t('filter-recordings')}</option>
                </select>
                
                <select
                  value={documentPeriodFilter}
                  onChange={(e) => setDocumentPeriodFilter(e.target.value)}
                  className="px-6 py-3 border-2 border-gray-400 focus:border-black focus:outline-none"
                >
                  <option value="all">{t('filter-all-periods')}</option>
                  <option value="1900-1930">1900-1930</option>
                  <option value="1930-1960">1930-1960</option>
                  <option value="1960-1990">1960-1990</option>
                </select>
              </div>
            </div>

            {/* Documents Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-300 overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center border-b border-gray-300">
                  <FileText className="h-20 w-20 text-gray-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {currentLanguage === 'cs' ? 'Administrativní dekret č. 247' : 'Administrative Decree No. 247'}
                  </h3>
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {currentLanguage === 'cs' 
                      ? 'Úřední vládní dekret popisující nové administrativní postupy a omezení.'
                      : 'Official government decree outlining new administrative procedures and restrictions.'
                    }
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-600 mb-6">
                    <span>{currentLanguage === 'cs' ? '15. března 1937' : 'March 15, 1937'}</span>
                    <span className="bg-gray-200 text-black px-3 py-1 text-xs font-medium uppercase tracking-wide">
                      {currentLanguage === 'cs' ? 'Úřední dokument' : 'Official Document'}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-black text-white py-3 px-4 text-sm hover:bg-gray-800 transition-colors duration-300 font-medium">
                      {t('btn-view')}
                    </button>
                    <button className="flex-1 border-2 border-black text-black py-3 px-4 text-sm hover:bg-black hover:text-white transition-colors duration-300 font-medium">
                      {t('btn-download')}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Additional document cards */}
              <div className="bg-white border border-gray-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Personal diary"
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {currentLanguage === 'cs' ? 'Osobní deník Marie K.' : 'Personal Diary of Maria K.'}
                  </h3>
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {currentLanguage === 'cs' 
                      ? 'Soukromé deníkové záznamy dokumentující každodenní život během období politické nejistoty.'
                      : 'Private diary entries documenting daily life during periods of political uncertainty.'
                    }
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-600 mb-6">
                    <span>1938-1942</span>
                    <span className="bg-gray-200 text-black px-3 py-1 text-xs font-medium uppercase tracking-wide">
                      {currentLanguage === 'cs' ? 'Osobní spisy' : 'Personal Papers'}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-black text-white py-3 px-4 text-sm hover:bg-gray-800 transition-colors duration-300 font-medium">
                      {t('btn-view')}
                    </button>
                    <button className="flex-1 border-2 border-black text-black py-3 px-4 text-sm hover:bg-black hover:text-white transition-colors duration-300 font-medium">
                      {t('btn-download')}
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/8849293/pexels-photo-8849293.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Historical photographs"
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {currentLanguage === 'cs' ? 'Dokumentace protestů' : 'Protest Documentation'}
                  </h3>
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {currentLanguage === 'cs' 
                      ? 'Sbírka fotografií dokumentujících veřejné demonstrace a občanskoprávní hnutí.'
                      : 'Collection of photographs documenting public demonstrations and civil rights movements.'
                    }
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-600 mb-6">
                    <span>1968-1975</span>
                    <span className="bg-gray-200 text-black px-3 py-1 text-xs font-medium uppercase tracking-wide">
                      {currentLanguage === 'cs' ? 'Fotografie' : 'Photographs'}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-black text-white py-3 px-4 text-sm hover:bg-gray-800 transition-colors duration-300 font-medium">
                      {currentLanguage === 'cs' ? 'Zobrazit galerii' : 'View Gallery'}
                    </button>
                    <button className="flex-1 border-2 border-black text-black py-3 px-4 text-sm hover:bg-black hover:text-white transition-colors duration-300 font-medium">
                      {currentLanguage === 'cs' ? 'Stáhnout archiv' : 'Download Archive'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 tracking-tight">
                {t('news-title')}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t('news-subtitle')}
              </p>
              <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white border border-gray-300 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://images.pexels.com/photos/159775/library-books-education-literature-159775.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="News"
                  className="w-full h-64 object-cover filter grayscale"
                />
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>{currentLanguage === 'cs' ? '15. prosince 2024' : 'December 15, 2024'}</span>
                    <span className="bg-black text-white px-3 py-1 text-xs font-medium uppercase tracking-wide">
                      {currentLanguage === 'cs' ? 'Objev' : 'Discovery'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-4">
                    {currentLanguage === 'cs' 
                      ? 'Významný archivní objev rozšiřuje sbírku'
                      : 'Major Archive Discovery Expands Collection'
                    }
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {currentLanguage === 'cs'
                      ? 'Nedávno objevené dokumenty ze státních archivů poskytují nové poznatky o administrativních procesech během období represí ve 30. letech.'
                      : 'Recently uncovered documents from state archives provide new insights into administrative processes during the 1930s period of repressions.'
                    }
                  </p>
                  <button className="text-black font-medium hover:underline border-b border-black">
                    {currentLanguage === 'cs' ? 'Číst celý článek' : 'Read Full Article'}
                  </button>
                </div>
              </article>
              
              <article className="bg-white border border-gray-300 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>{currentLanguage === 'cs' ? '10. prosince 2024' : 'December 10, 2024'}</span>
                    <span className="bg-black text-white px-3 py-1 text-xs font-medium uppercase tracking-wide">
                      {currentLanguage === 'cs' ? 'Výstava' : 'Exhibition'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-4">
                    {currentLanguage === 'cs' 
                      ? 'Nová virtuální výstava: "Hlasy odporu"'
                      : 'New Virtual Exhibition: "Voices of Resistance"'
                    }
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {currentLanguage === 'cs'
                      ? 'Naše nejnovější výstava se zaměřuje na činy odvahy a solidarity během období intenzivních politických represí.'
                      : 'Our latest exhibition focuses on acts of courage and solidarity during periods of intense political repression.'
                    }
                  </p>
                  <button 
                    onClick={() => scrollToSection('exhibitions')}
                    className="text-black font-medium hover:underline border-b border-black"
                  >
                    {currentLanguage === 'cs' ? 'Zobrazit výstavu' : 'View Exhibition'}
                  </button>
                </div>
              </article>

              <article className="bg-white border border-gray-300 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>{currentLanguage === 'cs' ? '5. prosince 2024' : 'December 5, 2024'}</span>
                    <span className="bg-black text-white px-3 py-1 text-xs font-medium uppercase tracking-wide">
                      {currentLanguage === 'cs' ? 'Výzkum' : 'Research'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-4">
                    {currentLanguage === 'cs' 
                      ? 'Spuštěn kolaborativní výzkumný projekt'
                      : 'Collaborative Research Project Launched'
                    }
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {currentLanguage === 'cs'
                      ? 'Partnerství s mezinárodními institucemi pro digitalizaci a analýzu přeshraničních vzorců politického pronásledování.'
                      : 'Partnership with international institutions to digitize and analyze cross-border patterns of political persecution.'
                    }
                  </p>
                  <button className="text-black font-medium hover:underline border-b border-black">
                    {currentLanguage === 'cs' ? 'Dozvědět se více' : 'Learn More'}
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">{t('footer-about')}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{t('footer-about-text')}</p>
              <div>
                <h4 className="font-medium text-gray-300 mb-4">{t('footer-team')}</h4>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>Dr. Sarah Chen - Project Director</li>
                  <li>Prof. Michael Rodriguez - Lead Historian</li>
                  <li>Elena Volkov - Digital Archivist</li>
                  <li>James Thompson - Technical Lead</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">{t('footer-contact')}</h3>
              <div className="text-gray-400 space-y-3">
                <p><strong className="text-white">Email:</strong> info@virtualmuseum.org</p>
                <p><strong className="text-white">{currentLanguage === 'cs' ? 'Výzkumné dotazy' : 'Research Inquiries'}:</strong> research@virtualmuseum.org</p>
                <p><strong className="text-white">{currentLanguage === 'cs' ? 'Technická podpora' : 'Technical Support'}:</strong> support@virtualmuseum.org</p>
                <p><strong className="text-white">{currentLanguage === 'cs' ? 'Adresa' : 'Address'}:</strong> Digital Humanities Institute, University Plaza</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">{t('footer-resources')}</h3>
              <ul className="text-gray-400 space-y-3">
                <li><button onClick={() => scrollToSection('timeline')} className="hover:text-white transition-colors duration-300">{t('nav-timeline')}</button></li>
                <li><button onClick={() => scrollToSection('exhibitions')} className="hover:text-white transition-colors duration-300">{t('nav-exhibitions')}</button></li>
                <li><button onClick={() => scrollToSection('documents')} className="hover:text-white transition-colors duration-300">{t('nav-documents')}</button></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">{currentLanguage === 'cs' ? 'Výzkumné pokyny' : 'Research Guidelines'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">{currentLanguage === 'cs' ? 'Vzdělávací materiály' : 'Educational Materials'}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">{t('footer-partners')}</h3>
              <ul className="text-gray-400 space-y-3">
                <li><a href="#" className="hover:text-white transition-colors duration-300">{currentLanguage === 'cs' ? 'Národní archiv' : 'National Archives'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">{currentLanguage === 'cs' ? 'Státní historická společnost' : 'State Historical Society'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">{currentLanguage === 'cs' ? 'Mezinárodní výzkumná síť' : 'International Research Network'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">{currentLanguage === 'cs' ? 'Pamětní organizace' : 'Memorial Organizations'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">{currentLanguage === 'cs' ? 'Akademičtí partneři' : 'Academic Partners'}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <p className="text-gray-500">{t('footer-copyright')}</p>
                <div className="flex gap-6 text-sm">
                  <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                    {currentLanguage === 'cs' ? 'Zásady ochrany osobních údajů' : 'Privacy Policy'}
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                    {currentLanguage === 'cs' ? 'Podmínky použití' : 'Terms of Use'}
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm text-center md:text-right">
                {t('footer-acknowledgment')}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;