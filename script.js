// Language switching functionality
const translations = {
    cs: {
        // Navigation
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
        
        // Exhibitions section
        'exhibitions-title': 'Virtuální výstavy',
        'exhibitions-subtitle': 'Kurátorské sbírky prezentující různé aspekty historických represí',
        'exhibitions-all': 'Všechny výstavy',
        'exhibitions-personal': 'Osobní příběhy',
        'exhibitions-institutional': 'Institucionální',
        'exhibitions-resistance': 'Odpor',
        'btn-explore': 'Prozkoumat výstavu',
        
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
        'footer-acknowledgment': 'Tento projekt je podporován granty od Národního fondu pro humanitní vědy a Nadace digitální historie.'
    },
    en: {
        // Navigation
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
        
        // Exhibitions section
        'exhibitions-title': 'Virtual Exhibitions',
        'exhibitions-subtitle': 'Curated collections showcasing various aspects of historical repressions',
        'exhibitions-all': 'All Exhibitions',
        'exhibitions-personal': 'Personal Stories',
        'exhibitions-institutional': 'Institutional',
        'exhibitions-resistance': 'Resistance',
        'btn-explore': 'Explore Exhibition',
        
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
        'footer-acknowledgment': 'This project is supported by grants from the National Endowment for the Humanities and the Digital History Foundation.'
    }
};

// Current language state
let currentLanguage = 'cs'; // Czech as default

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Language switching
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            
            // Update active language button
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Mobile navigation toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    
    // Timeline filtering
    const timelineFilters = document.querySelectorAll('.timeline-filter');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const period = this.getAttribute('data-period');
            
            // Update active filter
            timelineFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Filter timeline items
            timelineItems.forEach(item => {
                if (period === 'all' || item.getAttribute('data-period') === period) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Exhibition filtering
    const exhibitionFilters = document.querySelectorAll('.filter-btn');
    const exhibitionCards = document.querySelectorAll('.exhibition-card');
    
    exhibitionFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');
            
            // Update active filter
            exhibitionFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Filter exhibition cards
            exhibitionCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Document search and filtering
    const documentSearch = document.getElementById('documentSearch');
    const documentType = document.getElementById('documentType');
    const documentPeriod = document.getElementById('documentPeriod');
    const documentCards = document.querySelectorAll('.document-card');
    
    function filterDocuments() {
        const searchTerm = documentSearch.value.toLowerCase();
        const selectedType = documentType.value;
        const selectedPeriod = documentPeriod.value;
        
        documentCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.document-description').textContent.toLowerCase();
            const type = card.getAttribute('data-type');
            const period = card.getAttribute('data-period');
            
            const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
            const matchesType = selectedType === 'all' || type === selectedType;
            const matchesPeriod = selectedPeriod === 'all' || period === selectedPeriod;
            
            if (matchesSearch && matchesType && matchesPeriod) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.6s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    documentSearch.addEventListener('input', filterDocuments);
    documentType.addEventListener('change', filterDocuments);
    documentPeriod.addEventListener('change', filterDocuments);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Timeline item animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // Header background on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Exhibition and document card interactions
    const cards = document.querySelectorAll('.exhibition-card, .document-card, .news-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Timeline marker animations
    const timelineMarkers = document.querySelectorAll('.timeline-marker');
    
    const markerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'pulse 2s infinite';
            }
        });
    }, { threshold: 0.5 });
    
    timelineMarkers.forEach(marker => {
        markerObserver.observe(marker);
    });
    
    // Search functionality enhancements
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            documentSearch.focus();
        });
    }
    
    // Keyboard navigation enhancements
    document.addEventListener('keydown', function(e) {
        // Escape key to close mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
        
        // Enter key for search
        if (e.key === 'Enter' && document.activeElement === documentSearch) {
            filterDocuments();
        }
    });
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Print functionality
    function setupPrint() {
        const printButton = document.createElement('button');
        printButton.innerHTML = currentLanguage === 'cs' ? 'Tisknout stránku' : 'Print Page';
        printButton.className = 'btn btn-outline print-btn';
        printButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            display: none;
        `;
        
        printButton.addEventListener('click', function() {
            window.print();
        });
        
        // Show print button only on screen
        const mediaQuery = window.matchMedia('screen');
        if (mediaQuery.matches) {
            printButton.style.display = 'inline-flex';
        }
        
        document.body.appendChild(printButton);
    }
    
    // Initialize print functionality
    setupPrint();
    
    // Accessibility enhancements
    function enhanceAccessibility() {
        // Add skip link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = currentLanguage === 'cs' ? 'Přejít na hlavní obsah' : 'Skip to main content';
        skipLink.className = 'skip-link';
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add main landmark
        const main = document.querySelector('.main');
        if (main) {
            main.id = 'main';
            main.setAttribute('role', 'main');
        }
        
        // Enhance button accessibility
        document.querySelectorAll('button').forEach(button => {
            if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
                button.setAttribute('aria-label', currentLanguage === 'cs' ? 'Tlačítko' : 'Button');
            }
        });
    }
    
    // Initialize accessibility enhancements
    enhanceAccessibility();
    
    // Performance monitoring
    function trackPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', function() {
                setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                    }
                }, 0);
            });
        }
    }
    
    // Initialize performance tracking
    trackPerformance();
    
    // Initialize with Czech language
    switchLanguage('cs');
});

// Language switching function
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Switch to appropriate HTML file
    if (lang === 'en' && !window.location.pathname.includes('index-en.html')) {
        window.location.href = 'index-en.html';
        return;
    } else if (lang === 'cs' && window.location.pathname.includes('index-en.html')) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update document language attribute
    document.documentElement.lang = lang;
    
    // Update page title
    const titles = {
        cs: 'Virtuální muzeum historických represí',
        en: 'Virtual Museum of Historical Repressions'
    };
    document.title = titles[lang];
    
    // Update aria-labels and other accessibility attributes
    updateAccessibilityLabels(lang);
}

// Update accessibility labels based on language
function updateAccessibilityLabels(lang) {
    const navToggle = document.getElementById('navToggle');
    if (navToggle) {
        navToggle.setAttribute('aria-label', 
            lang === 'cs' ? 'Přepnout navigaci' : 'Toggle navigation'
        );
    }
    
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.setAttribute('aria-label', 
            lang === 'cs' ? 'Hledat dokumenty' : 'Search documents'
        );
    }
    
    // Update skip link text
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.textContent = lang === 'cs' ? 'Přejít na hlavní obsah' : 'Skip to main content';
    }
    
    // Update print button text
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.innerHTML = lang === 'cs' ? 'Tisknout stránku' : 'Print Page';
    }
}

// Additional CSS for animations and accessibility
const additionalStyles = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.1); opacity: 0.8; }
    }
    
    .skip-link:focus {
        top: 6px !important;
    }
    
    .print-btn {
        display: none;
    }
    
    @media screen {
        .print-btn {
            display: inline-flex;
        }
    }
    
    @media print {
        .print-btn {
            display: none !important;
        }
        .language-switcher {
            display: none !important;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);