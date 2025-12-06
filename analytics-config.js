// Analytics Configuration
// Bu dosya .gitignore'a eklenecek - GitHub'a yüklenmeyecek

const ANALYTICS_CONFIG = {
    // Google Analytics 4 Measurement ID
    googleAnalyticsId: 'G-5F6M3DNQKZ',

    // Microsoft Clarity Project ID
    microsoftClarityId: 'D70C36C201F549FEA1899E6E3EAA7685', // Clarity ID'nizi buraya ekleyin

    // Analytics Settings
    settings: {
        anonymizeIp: true,
        cookieFlags: 'SameSite=None;Secure',
        debug: false // Production'da false olmalı
    }
};
