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

        // Güvenli DOM manipülasyonu - XSS koruması
        const bannerContent = document.createElement('div');
        bannerContent.className = 'cookie-banner-content';

        const icon = document.createElement('div');
        icon.className = 'cookie-icon';
        icon.textContent = '🍪';

        const textDiv = document.createElement('div');
        textDiv.className = 'cookie-text';

        const title = document.createElement('h3');
        title.textContent = content.title;

        const desc = document.createElement('p');
        desc.textContent = content.description;

        const link = document.createElement('a');
        link.href = 'privacy.html';
        link.className = 'cookie-link';
        link.textContent = content.learnMore;

        textDiv.appendChild(title);
        textDiv.appendChild(desc);
        textDiv.appendChild(link);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'cookie-actions';

        const acceptBtn = document.createElement('button');
        acceptBtn.id = 'cookie-accept';
        acceptBtn.className = 'btn btn-primary btn-cookie';
        acceptBtn.textContent = content.accept;

        const rejectBtn = document.createElement('button');
        rejectBtn.id = 'cookie-reject';
        rejectBtn.className = 'btn btn-secondary btn-cookie';
        rejectBtn.textContent = content.reject;

        actionsDiv.appendChild(acceptBtn);
        actionsDiv.appendChild(rejectBtn);

        bannerContent.appendChild(icon);
        bannerContent.appendChild(textDiv);
        bannerContent.appendChild(actionsDiv);
        banner.appendChild(bannerContent);

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
        script2.textContent = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
                'anonymize_ip': ${ANALYTICS_CONFIG.settings.anonymizeIp},
                'cookie_flags': '${ANALYTICS_CONFIG.settings.cookieFlags}'
            });
        `;
        document.head.appendChild(script2);
    }

    loadMicrosoftClarity() {
        // Config'den ID'yi al
        const CLARITY_PROJECT_ID = ANALYTICS_CONFIG.microsoftClarityId;

        if (!CLARITY_PROJECT_ID || CLARITY_PROJECT_ID === 'XXXXXXXXXX') {
            console.warn('Microsoft Clarity ID not configured.');
            return;
        }

        const script = document.createElement('script');
        script.textContent = `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        `;
        document.head.appendChild(script);
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
