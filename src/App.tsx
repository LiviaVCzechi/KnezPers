import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Search, Calendar, BookOpen, FileText, Users, Award, ChevronRight } from 'lucide-react';

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
          header.style.background = 'rgba(255, 255, 255, 0.98)';
          header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        } else {
          header.style.background = 'rgba(255, 255, 255, 0.95)';
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-800" />
              <span className="text-xl font-bold text-blue-800">{t('nav-title')}</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-800 font-medium transition-colors">
                {t('nav-home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-800 font-medium transition-colors">
                {t('nav-about')}
              </button>
              <button onClick={() => scrollToSection('timeline')} className="text-gray-600 hover:text-blue-800 font-medium transition-colors">
                {t('nav-timeline')}
              </button>
              <button onClick={() => scrollToSection('exhibitions')} className="text-gray-600 hover:text-blue-800 font-medium transition-colors">
                {t('nav-exhibitions')}
              </button>
              <button onClick={() => scrollToSection('documents')} className="text-gray-600 hover:text-blue-800 font-medium transition-colors">
                {t('nav-documents')}
              </button>
              <button onClick={() => scrollToSection('news')} className="text-gray-600 hover:text-blue-800 font-medium transition-colors">
                {t('nav-news')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-800 font-medium transition-colors">
                {t('nav-contact')}
              </button>
            </div>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                <button
                  onClick={() => switchLanguage('cs')}
                  className={`px-3 py-1 text-sm font-semibold rounded transition-colors ${
                    currentLanguage === 'cs'
                      ? 'bg-blue-800 text-white'
                      : 'text-gray-600 hover:text-blue-800 border border-gray-300'
                  }`}
                >
                  CS
                </button>
                <button
                  onClick={() => switchLanguage('en')}
                  className={`px-3 py-1 text-sm font-semibold rounded transition-colors ${
                    currentLanguage === 'en'
                      ? 'bg-blue-800 text-white'
                      : 'text-gray-600 hover:text-blue-800 border border-gray-300'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-blue-800"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-left px-4 py-2 text-gray-600 hover:text-blue-800 font-medium">
                  {t('nav-home')}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left px-4 py-2 text-gray-600 hover:text-blue-800 font-medium">
                  {t('nav-about')}
                </button>
                <button onClick={() => scrollToSection('timeline')} className="text-left px-4 py-2 text-gray-600 hover:text-blue-800 font-medium">
                  {t('nav-timeline')}
                </button>
                <button onClick={() => scrollToSection('exhibitions')} className="text-left px-4 py-2 text-gray-600 hover:text-blue-800 font-medium">
                  {t('nav-exhibitions')}
                </button>
                <button onClick={() => scrollToSection('documents')} className="text-left px-4 py-2 text-gray-600 hover:text-blue-800 font-medium">
                  {t('nav-documents')}
                </button>
                <button onClick={() => scrollToSection('news')} className="text-left px-4 py-2 text-gray-600 hover:text-blue-800 font-medium">
                  {t('nav-news')}
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-2 text-gray-600 hover:text-blue-800 font-medium">
                  {t('nav-contact')}
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 leading-tight">
                  {t('hero-title')}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('hero-subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection('timeline')}
                    className="inline-flex items-center px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors"
                  >
                    {t('hero-btn-timeline')}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => scrollToSection('exhibitions')}
                    className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    {t('hero-btn-exhibitions')}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/159775/library-books-education-literature-159775.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Historical archives and documents"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
                {t('about-title')}
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                    {t('about-mission')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about-mission-text')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                    {t('about-significance')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about-significance-text')}
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                    <div className="text-sm font-medium text-gray-600">{t('stat-documents')}</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                    <div className="text-sm font-medium text-gray-600">{t('stat-stories')}</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                    <div className="text-sm font-medium text-gray-600">{t('stat-exhibits')}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Historical research and documentation"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
                {t('timeline-title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('timeline-subtitle')}
              </p>
            </div>

            {/* Timeline Controls */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['all', 'early', 'mid', 'late'].map((period) => (
                <button
                  key={period}
                  onClick={() => setActiveTimelinePeriod(period)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    activeTimelinePeriod === period
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-100 border border-gray-300'
                  }`}
                >
                  {t(`timeline-${period}`)}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-800 to-orange-600 h-full"></div>
              
              <div className="space-y-12">
                {filteredTimelineEvents.map((event, index) => (
                  <div key={event.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-800 border-4 border-white rounded-full shadow-lg z-10"></div>
                    
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="text-2xl font-bold text-orange-600 mb-2">{event.year}</div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-3">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        
                        {event.image && (
                          <img src={event.image} alt={event.title} className="w-full h-32 object-cover rounded-lg mb-4" />
                        )}
                        
                        {event.personality && (
                          <div className="flex items-center gap-3 mb-4">
                            <img src={event.personality.image} alt={event.personality.name} className="w-12 h-12 rounded-full object-cover" />
                            <span className="text-sm font-medium text-gray-700">{event.personality.name}</span>
                          </div>
                        )}
                        
                        {event.hasDocuments && (
                          <button
                            onClick={() => scrollToSection('documents')}
                            className="text-blue-800 font-medium hover:underline"
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
        <section id="exhibitions" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
                {t('exhibitions-title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('exhibitions-subtitle')}
              </p>
            </div>

            {/* Exhibition Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['all', 'personal', 'institutional', 'resistance'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveExhibitionFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    activeExhibitionFilter === filter
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-orange-100 border border-gray-300'
                  }`}
                >
                  {t(`exhibitions-${filter}`)}
                </button>
              ))}
            </div>

            {/* Exhibitions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredExhibitions.map((exhibition) => (
                <div key={exhibition.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">{exhibition.title}</h3>
                    <p className="text-gray-600 mb-4">{exhibition.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span className="font-medium">{exhibition.items} {t('items')}</span>
                      <span>{t('updated')} {exhibition.updated}</span>
                    </div>
                    <button className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition-colors">
                      {t('btn-explore')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section id="documents" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
                {t('documents-title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('documents-subtitle')}
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder={t('search-placeholder')}
                  value={documentSearch}
                  onChange={(e) => setDocumentSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <select
                  value={documentTypeFilter}
                  onChange={(e) => setDocumentTypeFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
              {/* Sample documents - in a real app, these would be filtered based on search and filters */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    {currentLanguage === 'cs' ? 'Administrativní dekret č. 247' : 'Administrative Decree No. 247'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {currentLanguage === 'cs' 
                      ? 'Úřední vládní dekret popisující nové administrativní postupy a omezení.'
                      : 'Official government decree outlining new administrative procedures and restrictions.'
                    }
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span>{currentLanguage === 'cs' ? '15. března 1937' : 'March 15, 1937'}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {currentLanguage === 'cs' ? 'Úřední dokument' : 'Official Document'}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-800 text-white py-2 px-3 rounded text-sm hover:bg-blue-900 transition-colors">
                      {t('btn-view')}
                    </button>
                    <button className="flex-1 border border-blue-800 text-blue-800 py-2 px-3 rounded text-sm hover:bg-blue-50 transition-colors">
                      {t('btn-download')}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Add more document cards as needed */}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
                {t('news-title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('news-subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="https://images.pexels.com/photos/159775/library-books-education-literature-159775.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="News"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{currentLanguage === 'cs' ? '15. prosince 2024' : 'December 15, 2024'}</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                      {currentLanguage === 'cs' ? 'Objev' : 'Discovery'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    {currentLanguage === 'cs' 
                      ? 'Významný archivní objev rozšiřuje sbírku'
                      : 'Major Archive Discovery Expands Collection'
                    }
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {currentLanguage === 'cs'
                      ? 'Nedávno objevené dokumenty ze státních archivů poskytují nové poznatky o administrativních procesech během období represí ve 30. letech.'
                      : 'Recently uncovered documents from state archives provide new insights into administrative processes during the 1930s period of repressions.'
                    }
                  </p>
                  <button className="text-blue-800 font-medium hover:underline">
                    {currentLanguage === 'cs' ? 'Číst celý článek' : 'Read Full Article'}
                  </button>
                </div>
              </article>
              
              {/* Add more news articles as needed */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">{t('footer-about')}</h3>
              <p className="text-gray-300 mb-6">{t('footer-about-text')}</p>
              <div>
                <h4 className="font-medium text-gray-200 mb-2">{t('footer-team')}</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>Dr. Sarah Chen - Project Director</li>
                  <li>Prof. Michael Rodriguez - Lead Historian</li>
                  <li>Elena Volkov - Digital Archivist</li>
                  <li>James Thompson - Technical Lead</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">{t('footer-contact')}</h3>
              <div className="text-gray-300 space-y-2">
                <p><strong>Email:</strong> info@virtualmuseum.org</p>
                <p><strong>{currentLanguage === 'cs' ? 'Výzkumné dotazy' : 'Research Inquiries'}:</strong> research@virtualmuseum.org</p>
                <p><strong>{currentLanguage === 'cs' ? 'Technická podpora' : 'Technical Support'}:</strong> support@virtualmuseum.org</p>
                <p><strong>{currentLanguage === 'cs' ? 'Adresa' : 'Address'}:</strong> Digital Humanities Institute, University Plaza</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">{t('footer-resources')}</h3>
              <ul className="text-gray-300 space-y-2">
                <li><button onClick={() => scrollToSection('timeline')} className="hover:text-orange-400 transition-colors">{t('nav-timeline')}</button></li>
                <li><button onClick={() => scrollToSection('exhibitions')} className="hover:text-orange-400 transition-colors">{t('nav-exhibitions')}</button></li>
                <li><button onClick={() => scrollToSection('documents')} className="hover:text-orange-400 transition-colors">{t('nav-documents')}</button></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">{currentLanguage === 'cs' ? 'Výzkumné pokyny' : 'Research Guidelines'}</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">{currentLanguage === 'cs' ? 'Vzdělávací materiály' : 'Educational Materials'}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">{t('footer-partners')}</h3>
              <ul className="text-gray-300 space-y-2">
                <li><a href="#" className="hover:text-orange-400 transition-colors">{currentLanguage === 'cs' ? 'Národní archiv' : 'National Archives'}</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">{currentLanguage === 'cs' ? 'Státní historická společnost' : 'State Historical Society'}</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">{currentLanguage === 'cs' ? 'Mezinárodní výzkumná síť' : 'International Research Network'}</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">{currentLanguage === 'cs' ? 'Pamětní organizace' : 'Memorial Organizations'}</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">{currentLanguage === 'cs' ? 'Akademičtí partneři' : 'Academic Partners'}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <p className="text-gray-400">{t('footer-copyright')}</p>
                <div className="flex gap-4 text-sm">
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                    {currentLanguage === 'cs' ? 'Zásady ochrany osobních údajů' : 'Privacy Policy'}
                  </a>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                    {currentLanguage === 'cs' ? 'Podmínky použití' : 'Terms of Use'}
                  </a>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center md:text-right">
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