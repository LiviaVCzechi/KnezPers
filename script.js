// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
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
    
    searchBtn.addEventListener('click', function() {
        documentSearch.focus();
    });
    
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
        printButton.innerHTML = 'Print Page';
        printButton.className = 'btn btn-outline print-btn';
        printButton.style.position = 'fixed';
        printButton.style.bottom = '20px';
        printButton.style.right = '20px';
        printButton.style.zIndex = '1000';
        
        printButton.addEventListener('click', function() {
            window.print();
        });
        
        document.body.appendChild(printButton);
    }
    
    // Initialize print functionality
    setupPrint();
    
    // Accessibility enhancements
    function enhanceAccessibility() {
        // Add skip link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #1e3a8a;
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 2000;
            transition: top 0.3s;
        `;
        
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
                button.setAttribute('aria-label', 'Button');
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
});

// Additional CSS for animations
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
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);