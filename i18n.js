// Multi-language support
const translations = {
    tr: {
        // Navigation
        'nav-tech': 'Teknoloji & Nasıl Çalışır',
        'nav-download': 'İndir',
        'nav-about': 'Hakkımızda',
        'nav-contact': 'İletişim',

        // Hero Section
        'hero-badge': '🚗 Flutter ile Geliştirildi',
        'hero-title': 'Güvenli ve Uygun<br>Yolculuk Paylaşımı',
        'hero-subtitle': 'Sürücüler ve yolcuları akıllı şekilde eşleştiren modern ulaşım çözümü. Kıbrıs\'ta ekonomik ve çevre dostu seyahat.',
        'hero-download': 'Uygulamayı İndir',
        'hero-explore': 'Özellikleri Keşfet',
        'stat-secure': 'Güvenli',
        'stat-savings': 'Tasarruf',
        'stat-support': 'Destek',

        // Features Section
        'features-title': 'Neden Paylaşalım?',
        'features-subtitle': 'Modern teknoloji ile güvenli yolculuk deneyimi',
        'feature1-title': 'Kullanıcı Yönetimi',
        'feature1-desc': 'Firebase Authentication ile güvenli kayıt, profil yönetimi ve değerlendirme sistemi.',
        'feature2-title': 'Akıllı Eşleştirme',
        'feature2-desc': 'Google Maps ile rota optimizasyonu, canlı takip ve mesafe hesaplama.',
        'feature3-title': 'Anlık Mesajlaşma',
        'feature3-desc': 'Güvenli iletişim, push bildirimler ve mesaj geçmişi ile kolay koordinasyon.',
        'feature4-title': 'Konum Servisleri',
        'feature4-desc': 'GPS entegrasyonu ile hassas konum tespiti ve yakın yolculuk önerileri.',
        'feature5-title': 'Güvenilir Topluluk',
        'feature5-desc': 'Şeffaf değerlendirme sistemi ile doğrulanmış sürücü ve yolcu profilleri.',
        'feature6-title': 'Uygun Fiyat',
        'feature6-desc': 'Yakıt ve yol masraflarını paylaş, %40\'a varan tasarruf sağla.',

        // How It Works
        'how-title': 'Nasıl Çalışır?',
        'how-subtitle': '3 basit adımda yolculuğa başla',
        'step1-title': 'Kayıt Ol',
        'step1-desc': 'Uygulamayı indir, hızlıca kayıt ol ve profilini oluştur.',
        'step2-title': 'Yolculuk Bul',
        'step2-desc': 'Rotana uygun yolculukları bul veya kendi yolculuğunu oluştur.',
        'step3-title': 'Seyahate Başla',
        'step3-desc': 'Anlaş, buluş ve güvenli bir şekilde yolculuğa çık.',

        // CTA Section
        'cta-title': 'Hemen Başla',
        'cta-subtitle': 'Uygulamayı indir, topluluğumuza katıl ve ekonomik yolculuğa başla.',
        'cta-download': 'Uygulamayı İndir',
        'cta-contact': 'İletişime Geç',
        'cta-learn': 'Daha Fazla Bilgi',

        // Footer
        'footer-privacy': 'Gizlilik ve Sorumluluk',
        'footer-kvkk': 'KVKK',
        'footer-copyright': '© 2025 Paylaşalım — Kuzey Kıbrıs. Tüm hakları saklıdır.',

        // Tech Page - How It Works
        'tech-how-title': 'Nasıl Çalışır?',
        'tech-how-subtitle': '5 basit adımda yolculuğa başla',
        'tech-step1-title': 'Kayıt Ol ve Profil Oluştur',
        'tech-step1-desc': 'Firebase ile güvenli kayıt, profil fotoğrafı ve tercihlerini ekle.',
        'tech-step2-title': 'Yolculuk Oluştur veya Ara',
        'tech-step2-desc': 'Sürücüysen yolculuğunu oluştur (başlangıç, bitiş, tarih, koltuk sayısı). Yolcuysan uygun yolculukları bul.',
        'tech-step3-title': 'Anlık Mesajlaşma ile Anlaş',
        'tech-step3-desc': 'Uygulama içi güvenli mesajlaşma ile detayları netleştir.',
        'tech-step4-title': 'Canlı Takip ile Yolculuğa Çık',
        'tech-step4-desc': 'Google Maps entegrasyonu ile gerçek zamanlı konum paylaşımı.',
        'tech-step5-title': 'Değerlendir ve Topluluğu Güçlendir',
        'tech-step5-desc': 'Yolculuk sonrası puanlama sistemiyle güvenilir bir topluluk oluştur.',

        // Tech Page - Technology Stack
        'tech-stack-title': 'Teknoloji Stack',
        'tech-stack-subtitle': 'Modern ve güvenilir teknolojiler',
        'tech-frontend-title': 'Frontend',
        'tech-frontend-desc': 'Flutter 3.7.0 • Dart 3.0+',
        'tech-backend-title': 'Backend',
        'tech-backend-desc': 'Firebase (Firestore, Auth, FCM)',
        'tech-maps-title': 'Harita',
        'tech-maps-desc': 'Google Maps API',
        'tech-state-title': 'State Management',
        'tech-state-desc': 'Provider',
        'tech-location-title': 'Konum',
        'tech-location-desc': 'Geolocator',
        'tech-notifications-title': 'Bildirimler',
        'tech-notifications-desc': 'Firebase Cloud Messaging',

        // Download Page
        'download-title': 'Uygulamayı İndir',
        'download-subtitle': 'iOS ve Android için yakında App Store ve Play Store\'da!',
        'download-appstore': '🍎 App Store\'dan İndir (Yakında)',
        'download-playstore': '📱 Google Play\'den İndir (Yakında)',
        'download-requirements': 'Minimum gereksinimler: Android 5.0+ • iOS 12.0+',

        // About Page
        'about-title': 'Hakkımızda',
        'about-subtitle': 'Kuzey Kıbrıs için geliştirilmiş güvenli paylaşımlı yolculuk uygulaması',
        'about-intro': '<strong>Paylaşalım</strong>, Kıbrıs\'ta yaşayan insanlar için geliştirilmiş, güvenli ve kullanıcı dostu bir paylaşımlı yolculuk uygulamasıdır.',
        'about-description': 'Uygulama, yolcuların ve sürücülerin bir araya gelmesini sağlayarak hem ekonomik hem de çevre dostu bir ulaşım çözümü sunar. Flutter ve Firebase teknolojileriyle geliştirilmiş modern bir mobil platformdur.',
        'about-feature1-title': 'Güvenli Firebase Authentication',
        'about-feature1-desc': 'Kullanıcı bilgileriniz Firebase ile güvence altında',
        'about-feature2-title': 'Çevre Dostu Paylaşım',
        'about-feature2-desc': 'Karşılıklı paylaşımla karbon ayak izini azalt',
        'about-feature3-title': 'Ekonomik Yolculuklar',
        'about-feature3-desc': 'Yakıt masraflarını paylaşarak tasarruf edin',

        // Contact Page
        'contact-title': 'İletişim',
        'contact-subtitle': 'Geri bildirim, kurumsal iş birlikleri, destek veya sorularınız için bize ulaşın',
        'contact-chat-label': 'Canlı Destek',
        'contact-chat-desc': 'Sağ alt köşedeki yeşil butona tıklayarak anında bizimle sohbet edebilirsiniz!',
        'contact-email-label': 'E-posta',
        'contact-website-label': 'Website'
    },
    en: {
        // Navigation
        'nav-tech': 'Technology & How It Works',
        'nav-download': 'Download',
        'nav-about': 'About Us',
        'nav-contact': 'Contact',

        // Hero Section
        'hero-badge': '🚗 Built with Flutter',
        'hero-title': 'Safe and Affordable<br>Ridesharing',
        'hero-subtitle': 'Modern transportation solution that smartly matches drivers and passengers. Economical and eco-friendly travel in Cyprus.',
        'hero-download': 'Download App',
        'hero-explore': 'Explore Features',
        'stat-secure': 'Secure',
        'stat-savings': 'Savings',
        'stat-support': 'Support',

        // Features Section
        'features-title': 'Why Paylaşalım?',
        'features-subtitle': 'Safe travel experience with modern technology',
        'feature1-title': 'User Management',
        'feature1-desc': 'Secure registration with Firebase Authentication, profile management and rating system.',
        'feature2-title': 'Smart Matching',
        'feature2-desc': 'Route optimization with Google Maps, live tracking and distance calculation.',
        'feature3-title': 'Instant Messaging',
        'feature3-desc': 'Secure communication, push notifications and message history for easy coordination.',
        'feature4-title': 'Location Services',
        'feature4-desc': 'Precise location detection with GPS integration and nearby trip suggestions.',
        'feature5-title': 'Trusted Community',
        'feature5-desc': 'Verified driver and passenger profiles with transparent rating system.',
        'feature6-title': 'Affordable Price',
        'feature6-desc': 'Share fuel and road costs, save up to 40%.',

        // How It Works
        'how-title': 'How It Works?',
        'how-subtitle': 'Start your journey in 3 simple steps',
        'step1-title': 'Sign Up',
        'step1-desc': 'Download the app, register quickly and create your profile.',
        'step2-title': 'Find a Ride',
        'step2-desc': 'Find trips that match your route or create your own trip.',
        'step3-title': 'Start Traveling',
        'step3-desc': 'Agree, meet and start your journey safely.',

        // CTA Section
        'cta-title': 'Get Started Now',
        'cta-subtitle': 'Download the app, join our community and start economical travel.',
        'cta-download': 'Download App',
        'cta-contact': 'Get in Touch',
        'cta-learn': 'Learn More',
        'cta-download': 'Download App',
        'cta-learn': 'Learn More',

        // Footer
        'footer-privacy': 'Privacy & Disclaimer',
        'footer-kvkk': 'GDPR',
        'footer-copyright': '© 2025 Paylaşalım — North Cyprus. All rights reserved.',

        // Tech Page - How It Works
        'tech-how-title': 'How It Works?',
        'tech-how-subtitle': 'Start your journey in 5 simple steps',
        'tech-step1-title': 'Register and Create Profile',
        'tech-step1-desc': 'Secure registration with Firebase, add profile photo and preferences.',
        'tech-step2-title': 'Create or Search Trip',
        'tech-step2-desc': 'If you\'re a driver, create your trip (start, end, date, seats). If you\'re a passenger, find suitable trips.',
        'tech-step3-title': 'Coordinate with Instant Messaging',
        'tech-step3-desc': 'Clarify details with secure in-app messaging.',
        'tech-step4-title': 'Travel with Live Tracking',
        'tech-step4-desc': 'Real-time location sharing with Google Maps integration.',
        'tech-step5-title': 'Rate and Strengthen Community',
        'tech-step5-desc': 'Build a trusted community with post-trip rating system.',

        // Tech Page - Technology Stack
        'tech-stack-title': 'Technology Stack',
        'tech-stack-subtitle': 'Modern and reliable technologies',
        'tech-frontend-title': 'Frontend',
        'tech-frontend-desc': 'Flutter 3.7.0 • Dart 3.0+',
        'tech-backend-title': 'Backend',
        'tech-backend-desc': 'Firebase (Firestore, Auth, FCM)',
        'tech-maps-title': 'Maps',
        'tech-maps-desc': 'Google Maps API',
        'tech-state-title': 'State Management',
        'tech-state-desc': 'Provider',
        'tech-location-title': 'Location',
        'tech-location-desc': 'Geolocator',
        'tech-notifications-title': 'Notifications',
        'tech-notifications-desc': 'Firebase Cloud Messaging',

        // Download Page
        'download-title': 'Download App',
        'download-subtitle': 'Coming soon to App Store and Play Store for iOS and Android!',
        'download-appstore': '🍎 Download from App Store (Coming Soon)',
        'download-playstore': '📱 Download from Google Play (Coming Soon)',
        'download-requirements': 'Minimum requirements: Android 5.0+ • iOS 12.0+',

        // About Page
        'about-title': 'About Us',
        'about-subtitle': 'Safe ridesharing app developed for North Cyprus',
        'about-intro': '<strong>Paylaşalım</strong> is a secure and user-friendly ridesharing app developed for people living in Cyprus.',
        'about-description': 'The app provides an economical and eco-friendly transportation solution by bringing passengers and drivers together. It is a modern mobile platform developed with Flutter and Firebase technologies.',
        'about-feature1-title': 'Secure Firebase Authentication',
        'about-feature1-desc': 'Your user information is secured with Firebase',
        'about-feature2-title': 'Eco-Friendly Sharing',
        'about-feature2-desc': 'Reduce carbon footprint with mutual sharing',
        'about-feature3-title': 'Economical Trips',
        'about-feature3-desc': 'Save money by sharing fuel costs',

        // Contact Page
        'contact-title': 'Contact',
        'contact-subtitle': 'Reach out to us for feedback, corporate partnerships, support or questions',
        'contact-chat-label': 'Live Support',
        'contact-chat-desc': 'Click the green button in the bottom right corner to chat with us instantly!',
        'contact-email-label': 'Email',
        'contact-website-label': 'Website'
    }
};

let currentLang = localStorage.getItem('language') || 'tr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        const flag = langToggle.querySelector('.lang-flag');
        const text = langToggle.querySelector('.lang-text');

        if (lang === 'tr') {
            flag.textContent = '🇬🇧';
            text.textContent = 'EN';
        } else {
            flag.textContent = '🇹🇷';
            text.textContent = 'TR';
        }
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    // Language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'tr' ? 'en' : 'tr';
            setLanguage(newLang);
        });
    }
});
