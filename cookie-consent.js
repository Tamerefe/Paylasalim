// Cookie Consent Manager
class CookieConsent {
    constructor() {
        this.consentKey = 'paylasalim_cookie_consent';
        this.init();
    }

    init() {
        const consent = this.getConsent();

        if (consent === null) {
            // İlk ziyaret - banner göster
            this.showBanner();
        } else if (consent === 'accepted') {
            // Kabul edilmiş - analytics yükle
            this.loadAnalytics();
        }
        // Reddedilmişse hiçbir şey yapma
    }

    getConsent() {
        const value = localStorage.getItem(this.consentKey);
        return value;
    }

    setConsent(value) {
        localStorage.setItem(this.consentKey, value);
    }

    showBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.className = 'cookie-banner';

        const currentLang = localStorage.getItem('language') || 'tr';
        const content = this.getContent(currentLang);

        banner.innerHTML = `
            <div class="cookie-banner-content">
                <div class="cookie-icon">🍪</div>
                <div class="cookie-text">
                    <h3>${content.title}</h3>
                    <p>${content.description}</p>
                    <a href="privacy.html" class="cookie-link">${content.learnMore}</a>
                </div>
                <div class="cookie-actions">
                    <button id="cookie-accept" class="btn btn-primary btn-cookie">${content.accept}</button>
                    <button id="cookie-reject" class="btn btn-secondary btn-cookie">${content.reject}</button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        // Animasyon için küçük gecikme
        setTimeout(() => banner.classList.add('show'), 100);

        // Event listeners
        document.getElementById('cookie-accept').addEventListener('click', () => this.accept());
        document.getElementById('cookie-reject').addEventListener('click', () => this.reject());
    }

    hideBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => banner.remove(), 300);
        }
    }

    accept() {
        this.setConsent('accepted');
        this.hideBanner();
        this.loadAnalytics();

        // Kullanıcıya teşekkür mesajı göster (opsiyonel)
        this.showToast(this.getContent(localStorage.getItem('language') || 'tr').thanks);
    }

    reject() {
        this.setConsent('rejected');
        this.hideBanner();

        // Temel bilgilendirme (opsiyonel)
        this.showToast(this.getContent(localStorage.getItem('language') || 'tr').rejected);
    }

    loadAnalytics() {
        // Config dosyasını kontrol et
        if (typeof ANALYTICS_CONFIG === 'undefined') {
            console.warn('Analytics config not found. Please create analytics-config.js file.');
            return;
        }

        // Google Analytics 4
        this.loadGoogleAnalytics();

        // Microsoft Clarity
        this.loadMicrosoftClarity();
    }

    loadGoogleAnalytics() {
        // Config'den ID'yi al
        const GA_MEASUREMENT_ID = ANALYTICS_CONFIG.googleAnalyticsId;

        if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
            console.warn('Google Analytics ID not configured.');
            return;
        }

        // Google tag (gtag.js) script ekle
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script1);

        // gtag initialization
        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
                'anonymize_ip': ${ANALYTICS_CONFIG.settings.anonymizeIp},
                'cookie_flags': '${ANALYTICS_CONFIG.settings.cookieFlags}'
            });
        `;
        document.head.appendChild(script2);

        console.log('Google Analytics 4 loaded:', GA_MEASUREMENT_ID);
    }

    loadMicrosoftClarity() {
        // Config'den ID'yi al
        const CLARITY_PROJECT_ID = ANALYTICS_CONFIG.microsoftClarityId;

        if (!CLARITY_PROJECT_ID || CLARITY_PROJECT_ID === 'XXXXXXXXXX') {
            console.warn('Microsoft Clarity ID not configured.');
            return;
        }

        const script = document.createElement('script');
        script.innerHTML = `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        `;
        document.head.appendChild(script);

        console.log('Microsoft Clarity loaded:', CLARITY_PROJECT_ID);
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'cookie-toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    getContent(lang) {
        const translations = {
            tr: {
                title: 'Çerezleri Kullanıyoruz',
                description: 'Web sitemizi geliştirmek ve size daha iyi bir deneyim sunmak için Google Analytics ve Microsoft Clarity kullanıyoruz. Bu araçlar anonim kullanım verilerini toplar.',
                learnMore: 'Daha fazla bilgi',
                accept: 'Kabul Et',
                reject: 'Reddet',
                thanks: 'Teşekkürler! Analytics aktif edildi.',
                rejected: 'Tercihiniz kaydedildi. Sadece zorunlu çerezler kullanılacak.'
            },
            en: {
                title: 'We Use Cookies',
                description: 'We use Google Analytics and Microsoft Clarity to improve our website and provide you with a better experience. These tools collect anonymous usage data.',
                learnMore: 'Learn more',
                accept: 'Accept',
                reject: 'Reject',
                thanks: 'Thanks! Analytics enabled.',
                rejected: 'Your preference has been saved. Only essential cookies will be used.'
            }
        };

        return translations[lang] || translations.tr;
    }

    // Public method - consent'i sıfırlamak için (settings sayfasında kullanılabilir)
    resetConsent() {
        localStorage.removeItem(this.consentKey);
        window.location.reload();
    }
}

// Sayfa yüklendiğinde cookie consent'i başlat
document.addEventListener('DOMContentLoaded', () => {
    window.cookieConsent = new CookieConsent();
});
