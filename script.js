// Load footer component - file:// protokolü uyumlu
function loadFooter() {
    const footerContainer = document.getElementById('footer-placeholder');
    if (!footerContainer) return;

    // Footer elementi oluştur - XSS korumalı
    const footer = document.createElement('footer');
    footer.className = 'site-footer';

    // Footer content
    const container = document.createElement('div');
    container.className = 'container footer-content';

    // Section 1 - About
    const section1 = document.createElement('div');
    section1.className = 'footer-section';
    const h4_1 = document.createElement('h4');
    h4_1.setAttribute('data-i18n', 'footer-about');
    h4_1.textContent = 'Paylaşalım';
    const p1 = document.createElement('p');
    p1.setAttribute('data-i18n', 'footer-description');
    p1.textContent = 'Kuzey Kıbrıs\'ta güvenli ve ekonomik paylaşımlı yolculuk platformu.';
    section1.appendChild(h4_1);
    section1.appendChild(p1);

    // Section 2 - Links
    const section2 = document.createElement('div');
    section2.className = 'footer-section';
    const h4_2 = document.createElement('h4');
    h4_2.setAttribute('data-i18n', 'footer-links-title');
    h4_2.textContent = 'Hızlı Bağlantılar';
    const nav = document.createElement('nav');
    nav.className = 'footer-nav';

    const links = [
        { href: 'privacy.html', i18n: 'footer-privacy', text: 'Gizlilik ve Sorumluluk' },
        { href: 'privacy.html#kvkk', i18n: 'footer-kvkk', text: 'KVKK' },
        { href: 'about.html', i18n: 'nav-about', text: 'Hakkımızda' },
        { href: 'contact.html', i18n: 'nav-contact', text: 'İletişim' }
    ];

    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.setAttribute('data-i18n', link.i18n);
        a.textContent = link.text;
        nav.appendChild(a);
    });

    section2.appendChild(h4_2);
    section2.appendChild(nav);

    // Section 3 - Social
    const section3 = document.createElement('div');
    section3.className = 'footer-section';
    const h4_3 = document.createElement('h4');
    h4_3.setAttribute('data-i18n', 'footer-social-title');
    h4_3.textContent = 'Sosyal Medya';
    const socialLinks = document.createElement('div');
    socialLinks.className = 'social-links';

    const socials = [
        { href: 'https://www.facebook.com', label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
        { href: 'https://twitter.com', label: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
        { href: 'https://www.instagram.com', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
        { href: 'https://www.linkedin.com', label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
    ];

    socials.forEach(social => {
        const a = document.createElement('a');
        a.href = social.href;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.setAttribute('aria-label', social.label);
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '24');
        svg.setAttribute('height', '24');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'currentColor');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', social.path);
        svg.appendChild(path);
        a.appendChild(svg);
        socialLinks.appendChild(a);
    });

    section3.appendChild(h4_3);
    section3.appendChild(socialLinks);

    // Combine sections
    container.appendChild(section1);
    container.appendChild(section2);
    container.appendChild(section3);

    // Footer bottom
    const footerBottom = document.createElement('div');
    footerBottom.className = 'footer-bottom';
    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'container';
    const copyright = document.createElement('p');
    copyright.setAttribute('data-i18n', 'footer-copyright');
    copyright.textContent = '© 2025 Paylaşalım — Kuzey Kıbrıs. Tüm hakları saklıdır.';
    bottomContainer.appendChild(copyright);
    footerBottom.appendChild(bottomContainer);

    // Assemble footer
    footer.appendChild(container);
    footer.appendChild(footerBottom);

    // Add to page
    footerContainer.appendChild(footer);
}

// Load footer on page load
document.addEventListener('DOMContentLoaded', () => {
    loadFooter();
});

// Mobil menü ve aktif link işlevleri
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
    const navUl = mainNav.querySelector('ul');

    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));

        if (navUl) {
            navUl.classList.toggle('mobile-active');
        }
    });

    // Menüde bir bağlantıya tıklandığında mobil menüyü kapat
    const links = mainNav.querySelectorAll('a');
    links.forEach(a => a.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            if (navUl) {
                navUl.classList.remove('mobile-active');
            }
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }));

    // Aktif link vurgulama — dosya adına bak
    const current = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(a => {
        const href = a.getAttribute('href') || '';
        if (href === current || (href === 'index.html' && current === '')) {
            a.classList.add('active');
        }
    });
}

// Screenshot Slider
const sliderImages = document.querySelectorAll('.slider-image');
const sliderDots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    // Remove active class from all images and dots
    sliderImages.forEach(img => img.classList.remove('active'));
    sliderDots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide
    if (sliderImages[index]) {
        sliderImages[index].classList.add('active');
    }
    if (sliderDots[index]) {
        sliderDots[index].classList.add('active');
    }

    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    showSlide(currentSlide);
}

// Auto-advance slider every 4 seconds
if (sliderImages.length > 0) {
    slideInterval = setInterval(nextSlide, 4000);

    // Dot click handlers
    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            slideInterval = setInterval(nextSlide, 4000);
        });
    });

    // Pause on hover
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        phoneMockup.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        phoneMockup.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 4000);
        });
    }
}

// Feature Cards Scroll Animation
const featureCards = document.querySelectorAll('.feature-card');

if (featureCards.length > 0) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    featureCards.forEach(card => observer.observe(card));
}
