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
