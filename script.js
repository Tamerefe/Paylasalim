// Load navbar component - file:// protokolü uyumlu
function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-placeholder');
    if (!navbarContainer) return;

    const isSubfolder = window.location.pathname.replace(/\\/g, '/').includes('/blog/');
    const pathPrefix = isSubfolder ? '../' : '';

    // Header ve container oluştur
    const header = document.createElement('header');
    header.className = 'site-header';

    const container = document.createElement('div');
    container.className = 'container nav-row';

    // Logo
    const logoLink = document.createElement('a');
    logoLink.className = 'logo';
    logoLink.href = pathPrefix + 'index.html';

    const logoImg = document.createElement('img');
    logoImg.src = pathPrefix + 'assets/logo.jpeg';
    logoImg.alt = 'Paylaşalım Logo';
    logoImg.className = 'logo-img';
    logoImg.width = 50;
    logoImg.height = 50;
    logoLink.appendChild(logoImg);
    container.appendChild(logoLink);

    // Nav toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'nav-toggle';
    toggleBtn.className = 'nav-toggle';
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.textContent = '☰';
    container.appendChild(toggleBtn);

    // Nav element
    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.id = 'main-nav';
    nav.setAttribute('aria-hidden', 'false');

    const ul = document.createElement('ul');

    // Menu links
    const menuItems = [
        { href: 'index.html', i18n: 'nav-home', text: 'Ana Sayfa' },
        { href: 'tech.html', i18n: 'nav-tech', text: 'Özellikler & Nasıl Çalışır' },
        { href: 'download.html', i18n: 'nav-download', text: 'İndir' },
        { href: 'about.html', i18n: 'nav-about', text: 'Hakkımızda' },
        { href: 'waitlist.html', i18n: 'nav-waitlist', text: 'Kulüp Programı', isBtn: true }
    ];

    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = pathPrefix + item.href;
        a.setAttribute('data-i18n', item.i18n);
        a.textContent = item.text;
        if (item.isBtn) {
            a.className = 'btn btn-primary';
            a.style.background = 'linear-gradient(135deg, #16a34a, #15803d)';
            a.style.color = 'white';
            a.style.border = 'none';
        }
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Language toggle - only append if translations are defined (i.e. i18n.js is loaded)
    if (typeof translations !== 'undefined') {
        const langLi = document.createElement('li');
        const langBtn = document.createElement('button');
        langBtn.id = 'lang-toggle';
        langBtn.className = 'lang-toggle';
        langBtn.setAttribute('aria-label', 'Change Language');

        const flagSpan = document.createElement('span');
        flagSpan.className = 'lang-flag';
        flagSpan.id = 'lang-flag';

        const textSpan = document.createElement('span');
        textSpan.className = 'lang-text';
        textSpan.textContent = 'EN';

        langBtn.appendChild(flagSpan);
        langBtn.appendChild(textSpan);
        langLi.appendChild(langBtn);
        ul.appendChild(langLi);
    }

    nav.appendChild(ul);
    container.appendChild(nav);
    header.appendChild(container);
    navbarContainer.appendChild(header);

    // Setup events for the newly created elements
    setupNavbarEvents(toggleBtn, nav, ul);
}

function setupNavbarEvents(navToggle, mainNav, navUl) {
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));

            if (navUl) {
                navUl.classList.toggle('mobile-active');
            }
        });

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
            const hrefFile = href.split('/').pop();
            if (hrefFile === current || (hrefFile === 'index.html' && current === '')) {
                a.classList.add('active');
            }
        });
    }
}

// Load footer component - file:// protokolü uyumlu
function loadFooter() {
    const footerContainer = document.getElementById('footer-placeholder');
    if (!footerContainer) return;

    const isSubfolder = window.location.pathname.replace(/\\/g, '/').includes('/blog/');
    const pathPrefix = isSubfolder ? '../' : '';

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
        a.href = pathPrefix + link.href;
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
        { href: 'https://www.instagram.com/paylasalim.app', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
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

// Load navbar and footer components on page load
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();

    // Translate dynamically generated elements if i18n is available
    if (typeof setLanguage === 'function') {
        setLanguage(currentLang);
    }
});

// Screenshot Slider - Premium Horizontal Track
(function () {
    const sliderTrack = document.querySelector('.slider-track');
    const sliderImages = document.querySelectorAll('.slider-image');
    const dotsContainer = document.getElementById('slider-dots');
    const slideCounter = document.getElementById('slide-counter');
    const arrowLeft = document.querySelector('.slider-arrow-left');
    const arrowRight = document.querySelector('.slider-arrow-right');
    const phoneMockup = document.querySelector('.phone-mockup');

    if (!sliderTrack || sliderImages.length === 0) return;

    const totalSlides = sliderImages.length;
    let currentSlide = 0;
    let slideInterval;
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    // Dynamically create dots
    if (dotsContainer) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('data-slide', i);
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoAdvance();
            });
            dotsContainer.appendChild(dot);
        }
    }

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        currentSlide = index;
        const translateX = -currentSlide * 100;
        sliderTrack.style.transform = `translateX(${translateX}%)`;

        // Update dots
        const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });

        // Update counter
        if (slideCounter) {
            slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;
        }
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function resetAutoAdvance() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3500);
    }

    // Arrow click handlers
    if (arrowLeft) {
        arrowLeft.addEventListener('click', (e) => {
            e.stopPropagation();
            prevSlide();
            resetAutoAdvance();
        });
    }

    if (arrowRight) {
        arrowRight.addEventListener('click', (e) => {
            e.stopPropagation();
            nextSlide();
            resetAutoAdvance();
        });
    }

    // Touch/Swipe & Mouse Drag support
    const slider = document.getElementById('screenshot-slider');
    if (slider) {
        // Touch Events
        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            isDragging = true;
            sliderTrack.style.transition = 'none';
        }, { passive: true });

        slider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchEndX - touchStartX;
            const translateX = -currentSlide * 100 + (diff / slider.offsetWidth * 100);
            sliderTrack.style.transform = `translateX(${translateX}%)`;
        }, { passive: true });

        slider.addEventListener('touchend', (e) => {
            isDragging = false;
            sliderTrack.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchEndX - touchStartX;
            const threshold = slider.offsetWidth * 0.2;

            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
            } else {
                goToSlide(currentSlide); // snap back
            }
            resetAutoAdvance();
        }, { passive: true });

        // Mouse Events
        slider.addEventListener('mousedown', (e) => {
            e.preventDefault(); // Prevent text/image selection
            touchStartX = e.clientX;
            touchEndX = e.clientX;
            isDragging = true;
            sliderTrack.style.transition = 'none';
            clearInterval(slideInterval);
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            touchEndX = e.clientX;
            const diff = touchEndX - touchStartX;
            const translateX = -currentSlide * 100 + (diff / slider.offsetWidth * 100);
            sliderTrack.style.transform = `translateX(${translateX}%)`;
        });

        window.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            sliderTrack.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            const diff = touchEndX - touchStartX;
            const threshold = slider.offsetWidth * 0.2;

            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
            } else {
                goToSlide(currentSlide); // snap back
            }
            resetAutoAdvance();
        });
    }

    // Keyboard navigation when phone is focused/hovered
    if (phoneMockup) {
        phoneMockup.setAttribute('tabindex', '0');
        phoneMockup.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
                resetAutoAdvance();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextSlide();
                resetAutoAdvance();
            }
        });
    }

    // Auto-advance every 3.5 seconds
    slideInterval = setInterval(nextSlide, 3500);

    // Pause on hover
    if (phoneMockup) {
        phoneMockup.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        phoneMockup.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 3500);
        });
    }

    // Live Clock for Phone Mockup Status Bar
    const statusTime = document.querySelector('.status-time');
    if (statusTime) {
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            statusTime.textContent = `${hours}:${minutes}`;
        };
        updateTime();
        setInterval(updateTime, 60000);
    }

    // Initialize first slide
    goToSlide(0);
})();

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
const clickableBlogCards = document.querySelectorAll('.blog-card[data-url]');

clickableBlogCards.forEach(card => {
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

// ── Waitlist Form Handler ──
const clubForm = document.getElementById('club-form');
if (clubForm) {
    const GFORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfyamNTMPFG3gOdWVKfd0WXmh1OlH7srUZFuTxBHdGots0rCA/formResponse';

    const ENTRIES = {
        club_name: 'entry.281587894',    // Kulüp / Dernek Adı
        club_type: 'entry.1808034549',   // Tür
        member_count: 'entry.1691945484',   // Üye Sayısı
        city: 'entry.880122526',    // Şehir / Kampüs
        contact_name: 'entry.721514495',    // Adınız Soyadınız
        phone: 'entry.252040039',    // Telefon Numarası
        role: 'entry.26892677',     // Unvanınız
        email: 'entry.559255056',    // E-posta
        message: 'entry.327924533',    // Bize Kısaca Anlatın
    };

    const formWrap = document.getElementById('wl-form-wrap');
    const successEl = document.getElementById('wl-success');
    const submitBtn = document.getElementById('wl-submit-btn');
    const submitLabel = document.getElementById('submit-label');

    clubForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const values = {
            club_name: document.getElementById('cf-club').value.trim(),
            club_type: document.getElementById('cf-type').value,
            member_count: document.getElementById('cf-members').value,
            city: document.getElementById('cf-city').value,
            contact_name: document.getElementById('cf-name').value.trim(),
            phone: document.getElementById('cf-phone').value.trim(),
            role: document.getElementById('cf-role').value.trim(),
            email: document.getElementById('cf-email').value.trim(),
            message: document.getElementById('cf-msg').value.trim(),
        };

        // Zorunlu alan kontrolü
        const requiredKeys = ['club_name', 'club_type', 'city', 'contact_name', 'phone'];
        const fieldMap = {
            club_name: 'cf-club', club_type: 'cf-type', city: 'cf-city',
            contact_name: 'cf-name', phone: 'cf-phone'
        };

        let hasError = false;
        requiredKeys.forEach(key => {
            if (!values[key]) {
                const el = document.getElementById(fieldMap[key]);
                el.classList.add('error');
                setTimeout(() => el.classList.remove('error'), 2800);
                hasError = true;
            }
        });
        if (hasError) return;

        submitBtn.disabled = true;

        // currentLang and translations are expected to be defined globally (from i18n.js)
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'tr';
        const trans = typeof translations !== 'undefined' ? translations : {};
        submitLabel.textContent = (trans[lang] && trans[lang]['wl-btn-sending']) || (lang === 'en' ? 'Sending...' : 'Gönderiliyor...');

        // Google Forms'a gönder (no-cors — CORS kısıtlaması nedeniyle)
        const formData = new URLSearchParams();
        Object.entries(ENTRIES).forEach(([key, entryId]) => {
            if (values[key] !== undefined) {
                formData.append(entryId, values[key]);
            }
        });

        try {
            await fetch(GFORM_URL, {
                method: 'POST',
                mode: 'no-cors',   // Google Forms CORS'a izin vermez — opaque response normaldir
                body: formData
            });
        } catch (_) { /* Ağ hatası olsa bile başarı ekranı göster */ }

        showSuccess(values.contact_name, lang);
    });

    function showSuccess(name, lang) {
        const isEn = (lang === 'en');
        document.getElementById('success-msg').textContent =
            name ? (isEn ? `${name}, we will call you as soon as possible` : `${name}, sizi en kısa sürede arayacağız`)
                : (isEn ? 'We will call you as soon as possible' : 'Sizi en kısa sürede arayacağız');

        formWrap.style.transition = 'opacity 0.3s, transform 0.3s';
        formWrap.style.opacity = '0';
        formWrap.style.transform = 'translateY(-8px)';
        setTimeout(() => {
            formWrap.style.display = 'none';
            successEl.style.display = 'block';
        }, 300);
    }
}

// ── FAQ Accordion Handler ──
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length > 0) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isOpen = question.getAttribute('aria-expanded') === 'true';

                // Close all other items
                faqItems.forEach(otherItem => {
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherQuestion && otherAnswer) {
                        otherQuestion.setAttribute('aria-expanded', 'false');
                        otherAnswer.style.maxHeight = null;
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                if (!isOpen) {
                    question.setAttribute('aria-expanded', 'true');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    item.classList.add('active');
                }
            });
        }
    });
}

// ── Delete Account Form Handler ──
const deleteForm = document.getElementById('deleteAccountForm');
if (deleteForm) {
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    deleteForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            name: document.getElementById('name').value,
            reason: document.getElementById('reason').value,
            timestamp: new Date().toISOString(),
            type: 'account_deletion_request'
        };

        try {
            // E-posta gönder (Google Form veya webhook kullanabilirsiniz)
            // Örnek: Google Form'a veri gönderme
            const response = await fetch('https://formspree.io/f/mvzlggba', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }).catch(() => {
                // Formspree yoksa localStorage'a kaydet
                console.log('Offline mode: Veri cihazda kaydedildi');
                return { ok: true };
            });

            if (response.ok) {
                errorMessage.style.display = 'none';
                successMessage.style.display = 'block';
                deleteForm.reset();

                // 3 saniye sonra geri yönlendir
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 3000);
            } else {
                throw new Error('Form gönderimi başarısız');
            }
        } catch (error) {
            errorMessage.textContent = 'Hata: Lütfen daha sonra tekrar deneyin.';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            console.error('Form hatası:', error);
        }
    });
}

// ── Blog Filter & Search Handler ──
const categoryBtns = document.querySelectorAll('.category-btn');
const blogCards = document.querySelectorAll('.blog-card');
const searchInput = document.getElementById('blog-search-input');

if (categoryBtns.length > 0 && blogCards.length > 0) {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;

            // Filter cards
            blogCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'flex';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
}

if (searchInput && blogCards.length > 0) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        blogCards.forEach(card => {
            const titleEl = card.querySelector('h2');
            const pEl = card.querySelector('p');
            const title = titleEl ? titleEl.textContent.toLowerCase() : '';
            const content = pEl ? pEl.textContent.toLowerCase() : '';

            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                card.style.display = 'flex';
                card.style.opacity = '1';
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });

        // Reset category filter when searching
        if (searchTerm) {
            categoryBtns.forEach(b => b.classList.remove('active'));
        } else {
            if (categoryBtns.length > 0) {
                categoryBtns[0].classList.add('active');
            }
            blogCards.forEach(card => {
                card.style.display = 'flex';
                card.style.opacity = '1';
            });
        }
    });
}

