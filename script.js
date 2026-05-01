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
        { href: 'blog.html', i18n: 'nav-blog', text: 'Blog' },
        { href: 'faq.html', i18n: 'nav-faq', text: 'SSS' },
        { href: 'privacy.html#kvkk', i18n: 'footer-kvkk', text: 'KVKK' },
        { href: 'privacy.html', i18n: 'footer-privacy', text: 'Gizlilik ve Sorumluluk' },
        { href: 'delete-account.html', i18n: 'footer-delete-account', text: 'Hesabı Sil' }
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
        { href: 'https://www.instagram.com/paylasalimcyp', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
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

// Blog Card Click Handler
const blogCards = document.querySelectorAll('.blog-card[data-url]');

blogCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Eğer tıklanan element bir link değilse (başlık veya "Devamını Oku" linki)
        // kartın kendisine tıklanmış sayılır
        if (e.target.tagName !== 'A') {
            const url = card.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        }
    });

    // Erişilebilirlik için klavye desteği
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const url = card.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        }
    });
});

// Contact Info Card Click Handler
const infoCards = document.querySelectorAll('.info-item[data-url]');

infoCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Eğer tıklanan element zaten bir link değilse
        if (e.target.tagName !== 'A') {
            const url = card.getAttribute('data-url');
            const target = card.getAttribute('data-target');
            if (url) {
                if (target === '_blank') {
                    window.open(url, '_blank');
                } else {
                    window.location.href = url;
                }
            }
        }
    });

    // Erişilebilirlik için klavye desteği
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const url = card.getAttribute('data-url');
            const target = card.getAttribute('data-target');
            if (url) {
                if (target === '_blank') {
                    window.open(url, '_blank');
                } else {
                    window.location.href = url;
                }
            }
        }
    });
});

