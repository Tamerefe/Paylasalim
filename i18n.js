// Multi-language support
const translations = {
    tr: {
        // Navigation
        'nav-home': 'Ana Sayfa',
        'nav-tech': 'Teknoloji & Nasıl Çalışır',
        'nav-search': 'Yolculuk Ara',
        'nav-download': 'İndir',
        'nav-blog': 'Blog',
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
        'footer-about': 'Paylaşalım',
        'footer-description': 'Kuzey Kıbrıs\'ta güvenli ve ekonomik paylaşımlı yolculuk platformu.',
        'footer-links-title': 'Hızlı Bağlantılar',
        'footer-social-title': 'Sosyal Medya',
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
        'tech-maps-title': 'Harita ve Konum',
        'tech-maps-desc': 'Google Maps API • Geolocator',
        'tech-state-title': 'State Management',
        'tech-state-desc': 'Provider',
        'tech-location-title': 'Konum',
        'tech-location-desc': 'Geolocator',
        'tech-notifications-title': 'Bildirimler',
        'tech-notifications-desc': 'Firebase Cloud Messaging',

        // Download Page
        'download-title': 'Uygulamayı İndir',
        'download-subtitle': 'iOS ve Android için yakında App Store ve Play Store\'da!',
        'download-appstore': 'App Store\'dan İndir (Yakında)',
        'download-playstore': 'Google Play\'den İndir (Yakında)',
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
        'contact-email-label': 'E-posta',
        'contact-website-label': 'Website',

        // Search Page
        'search-title': '🔍 Yolculuk Ara',
        'search-subtitle': 'Rotana uygun yolculukları bul ve sürücülerle iletişime geç',
        'search-from': '📍 Nereden',
        'search-to': '🎯 Nereye',
        'search-date': '📅 Tarih',
        'search-seats': '👥 Koltuk',
        'search-button': '🔎 Ara',
        'search-loading': 'Yolculuklar yükleniyor...',
        'search-empty-title': 'Yolculuk Bulunamadı',
        'search-empty-desc': 'Filtreleri değiştirerek tekrar deneyin veya uygulamadan yeni yolculuk oluşturun.',
        'search-download-app': 'Uygulamayı İndir',
        'search-seats-all': 'Tümü',

        // Privacy Page
        'privacy-title': 'Gizlilik Politikası ve Sorumluluk Reddi',
        'privacy-subtitle': 'Kişisel Verilerin Korunması ve Kullanım Şartları',
        'privacy-page-title': 'Gizlilik ve Sorumluluk Reddi | Paylaşalım',
        'search-page-title': 'Yolculuk Ara | Paylaşalım'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-tech': 'Technology & How It Works',
        'nav-search': 'Search Trips',
        'nav-download': 'Download',
        'nav-blog': 'Blog',
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
        'footer-about': 'Paylaşalım',
        'footer-description': 'Safe and economical ridesharing platform in North Cyprus.',
        'footer-links-title': 'Quick Links',
        'footer-social-title': 'Social Media',
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
        'tech-maps-title': 'Map and Location',
        'tech-maps-desc': 'Google Maps API • Geolocator',
        'tech-state-title': 'State Management',
        'tech-state-desc': 'Provider',
        'tech-location-title': 'Location',
        'tech-location-desc': 'Geolocator',
        'tech-notifications-title': 'Notifications',
        'tech-notifications-desc': 'Firebase Cloud Messaging',

        // Download Page
        'download-title': 'Download App',
        'download-subtitle': 'Coming soon to App Store and Play Store for iOS and Android!',
        'download-appstore': 'Download from App Store (Coming Soon)',
        'download-playstore': 'Download from Google Play (Coming Soon)',
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
        'contact-email-label': 'Email',
        'contact-website-label': 'Website',

        // Search Page
        'search-title': '🔍 Search Trips',
        'search-subtitle': 'Find trips that match your route and connect with drivers',
        'search-from': '📍 From',
        'search-to': '🎯 To',
        'search-date': '📅 Date',
        'search-seats': '👥 Seats',
        'search-button': '🔎 Search',
        'search-loading': 'Loading trips...',
        'search-empty-title': 'No Trips Found',
        'search-empty-desc': 'Try changing filters or create a new trip from the app.',
        'search-download-app': 'Download App',
        'search-seats-all': 'All',

        // Privacy Page
        'privacy-title': 'Privacy Policy and Disclaimer',
        'privacy-subtitle': 'Personal Data Protection and Terms of Use',
        'privacy-page-title': 'Privacy & Disclaimer | Paylaşalım',
        'search-page-title': 'Search Trips | Paylaşalım'
    }
};

let currentLang = localStorage.getItem('language') || 'tr'; // localStorage'dan dil tercihini oku, yoksa Türkçe başlat

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update page title if exists
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        const pageTitleKey = pageTitle.getAttribute('data-i18n-title');
        if (pageTitleKey && translations[lang][pageTitleKey]) {
            pageTitle.textContent = translations[lang][pageTitleKey];
        }
    }

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            const content = translations[lang][key];

            // Güvenli içerik güncellemesi
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = content;
            } else if (content.includes('<br>') || content.includes('<strong>')) {
                // XSS koruması: Sadece <br> ve <strong> taglarına izin ver
                // Diğer HTML taglarını escape et
                const safeBr = content.replace(/<br>/g, '___BR___');
                const safeStrong = safeBr.replace(/<strong>/g, '___STRONG___').replace(/<\/strong>/g, '___/STRONG___');
                const textNode = document.createTextNode(safeStrong);
                const tempDiv = document.createElement('div');
                tempDiv.appendChild(textNode);
                const safeHtml = tempDiv.innerHTML
                    .replace(/___BR___/g, '<br>')
                    .replace(/___STRONG___/g, '<strong>')
                    .replace(/___\/STRONG___/g, '</strong>');
                element.innerHTML = safeHtml;
            } else {
                // Diğerleri için güvenli textContent
                element.textContent = content;
            }
        }
    });

    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        const flag = langToggle.querySelector('.lang-flag');
        const text = langToggle.querySelector('.lang-text');

        if (lang === 'tr') {
            // İngilizce bayrağı göster (mevcut dil Türkçe ise)
            flag.innerHTML = '<svg height="24px" width="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#41479B" d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621C512,105.443,494.833,88.276,473.655,88.276z"/><path fill="#F5F5F5" d="M511.469,120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54,107.147V88.276h-88.276v107.147L48.322,88.276h-9.977c-19.017,0-34.792,13.847-37.814,32.007l139.778,91.58H0v88.276h140.309L0.531,391.717c3.022,18.159,18.797,32.007,37.814,32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54,107.147h9.977c19.017,0,34.792-13.847,37.814-32.007l-139.778-91.58H512v-88.276H371.691L511.469,120.282z"/><g><polygon fill="#FF4B55" points="282.483,88.276 229.517,88.276 229.517,229.517 0,229.517 0,282.483 229.517,282.483 229.517,423.724 282.483,423.724 282.483,282.483 512,282.483 512,229.517 282.483,229.517"/><path fill="#FF4B55" d="M24.793,421.252l186.583-121.114h-32.428L9.224,410.31C13.377,415.157,18.714,418.955,24.793,421.252z"/><path fill="#FF4B55" d="M346.388,300.138H313.96l180.716,117.305c5.057-3.321,9.277-7.807,12.287-13.075L346.388,300.138z"/><path fill="#FF4B55" d="M4.049,109.475l157.73,102.387h32.428L15.475,95.842C10.676,99.414,6.749,104.084,4.049,109.475z"/><path fill="#FF4B55" d="M332.566,211.862l170.035-110.375c-4.199-4.831-9.578-8.607-15.699-10.86L300.138,211.862H332.566z"/></g></svg>';
            text.textContent = 'EN';
        } else {
            // Türkiye bayrağı göster (mevcut dil İngilizce ise)
            flag.innerHTML = '<svg height="24px" width="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ED1F34" d="M8.258,126.624v258.753c0,19.763,16.022,35.785,35.785,35.785h423.914c19.763,0,35.785-16.022,35.785-35.785V126.624c0-19.763-16.022-35.785-35.785-35.785H44.043C24.28,90.839,8.258,106.86,8.258,126.624z"/><g><path fill="#FFFFFF" d="M210.305,337.677c-45.109,0-81.677-36.568-81.677-81.677s36.568-81.677,81.677-81.677c22.245,0,42.402,8.906,57.133,23.33c-19.526-31.397-54.323-52.311-94.019-52.311c-61.115,0-110.658,49.543-110.658,110.658s49.543,110.658,110.658,110.658c39.696,0,74.492-20.915,94.019-52.312C252.708,328.771,232.55,337.677,210.305,337.677z"/><polygon fill="#FFFFFF" points="277.628,256 309.847,243.659 311.627,209.204 333.32,236.033 366.638,227.079 347.826,256 366.638,284.921 333.32,275.967 311.627,302.796 309.847,268.341"/></g><g><path fill="#121B21" d="M373.32,222.225c-2.012-2.768-5.522-4.01-8.824-3.122l-28.132,7.56l-18.315-22.651c-2.15-2.66-5.718-3.719-8.974-2.661c-3.254,1.057-5.519,4.011-5.695,7.428l-1.503,29.092l-27.202,10.418c-3.194,1.223-5.304,4.291-5.304,7.712s2.11,6.489,5.304,7.712l27.202,10.418l1.503,29.091c0.177,3.416,2.442,6.371,5.695,7.428c0.839,0.273,1.699,0.405,2.551,0.405c2.45,0,4.826-1.092,6.423-3.066l18.315-22.651l28.132,7.56c3.301,0.887,6.813-0.353,8.824-3.122c2.011-2.768,2.106-6.489,0.241-9.357L357.678,256l15.883-24.419C375.426,228.713,375.33,224.993,373.32,222.225z M340.904,260.502l7.057,10.848l-12.498-3.358c-3.152-0.846-6.511,0.243-8.564,2.782l-8.137,10.063l-0.667-12.923c-0.168-3.261-2.243-6.118-5.293-7.286l-12.084-4.629l12.084-4.629c3.05-1.168,5.124-4.024,5.293-7.286l0.667-12.923l8.137,10.063c2.053,2.539,5.415,3.627,8.564,2.782l12.498-3.358l-7.057,10.848C339.124,254.235,339.124,257.765,340.904,260.502z"/><path fill="#121B21" d="M272.605,307.905c-3.261-2.615-7.961-2.384-10.946,0.542c-13.81,13.525-32.048,20.972-51.354,20.972c-34.701,0-64.946-24.63-71.915-58.564c-0.917-4.467-5.281-7.343-9.75-6.428c-4.468,0.917-7.345,5.283-6.428,9.75c8.539,41.579,45.588,71.757,88.094,71.757c4.804,0,9.554-0.377,14.216-1.115c-15.252,8.787-32.767,13.581-51.102,13.581c-56.463,0-102.4-45.937-102.4-102.4s45.937-102.4,102.4-102.4c18.335,0,35.851,4.795,51.102,13.581c-4.662-0.739-9.412-1.115-14.216-1.115c-42.506,0-79.555,30.178-88.094,71.757c-0.918,4.468,1.96,8.833,6.428,9.75c4.463,0.916,8.833-1.96,9.75-6.428c6.969-33.934,37.213-58.564,71.915-58.564c19.306,0,37.544,7.448,51.354,20.972c2.986,2.923,7.685,3.156,10.946,0.542c3.259-2.615,4.052-7.254,1.844-10.803c-21.888-35.195-59.657-56.207-101.03-56.207c-65.57,0-118.916,53.346-118.916,118.916s53.346,118.916,118.916,118.916c41.373,0,79.141-21.013,101.03-56.209C276.657,315.159,275.866,310.52,272.605,307.905z"/><path fill="#121B21" d="M468.324,82.581H43.676C19.593,82.581,0,102.173,0,126.256v259.487c0,24.084,19.593,43.676,43.676,43.676h424.648c24.083,0,43.675-19.593,43.675-43.676V126.256C512,102.173,492.407,82.581,468.324,82.581z M495.484,385.743c0,14.977-12.183,27.16-27.16,27.16H43.676c-14.977,0-27.16-12.183-27.16-27.16V126.256c0-14.976,12.183-27.159,27.16-27.159h424.648c14.976,0,27.159,12.183,27.159,27.159V385.743z"/></g></svg>';
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
