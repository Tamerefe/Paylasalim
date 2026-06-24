// Multi-language support
const translations = {
    tr: {
        // Navigation
        'nav-home': 'Ana Sayfa',
        'nav-tech': 'Özellikler & Nasıl Çalışır',
        'nav-download': 'İndir',
        'nav-blog': 'Blog',
        'nav-faq': 'SSS',
        'nav-about': 'Hakkımızda',
        'nav-contact': 'İletişim',
        'nav-waitlist': 'Kulüp Programı',

        // Hero Section
        'hero-title': 'Sosyal Keşif ve<br>Yolculuk Paylaşımı',
        'hero-subtitle': 'Etkinlikleri keşfet, insanlarla eşleşip birlikte katıl ve masrafları paylaş!',
        'hero-download': 'Uygulamayı İndir',
        'hero-explore': 'Özellikleri Keşfet',
        'stat-secure': 'Güvenli',
        'stat-savings': 'Tasarruf',

        // Page Titles
        'page-title': 'Paylaşalım - Sosyal Keşif ve Yolculuk Paylaşım Platformu',
        'about-page-title': 'Hakkımızda | Paylaşalım - Sosyal Keşif ve Yolculuk Paylaşımı',
        'tech-page-title': 'Özellikler & Nasıl Çalışır | Paylaşalım - Sosyal Keşif ve Yolculuk Paylaşımı',
        'download-page-title': 'İndir | Paylaşalım - Sosyal Keşif ve Yolculuk Paylaşımı',
        'faq-page-title': 'Sık Sorulan Sorular | Paylaşalım - Sosyal Keşif ve Yolculuk Paylaşımı',
        'delete-page-title': 'Hesabı Sil | Paylaşalım - Sosyal Keşif ve Yolculuk Paylaşımı',
        'privacy-page-title': 'Gizlilik ve Sorumluluk Reddi | Paylaşalım - Sosyal Keşif ve Yolculuk Paylaşımı',
        'blog-page-title': 'Blog | Paylaşalım - Sosyal Keşif ve Yolculuk Paylaşımı',
        'waitlist-page-title': 'Kulüp Programı | Paylaşalım - Sosyal Keşif ve Yolculuk Paylaşımı',

        // Features Section
        'features-title': 'Neden Paylaşalım?',
        'features-subtitle': 'Sosyal keşif ve güvenli yolculuk deneyimi',

        // New Features
        'feature-event-match-title': 'Etkinlik Eşleşme',
        'feature-event-match-desc': 'Gitmek istediğin bir konseri, tiyatroyu veya partiyi seç, o etkinliğe katılmak isteyen diğer kullanıcılarla eşleş! Uygulama üzerinden tanış, yolculuğu beraber planla ve etkinlikte yalnız kalma.',
        'feature-event-discovery-title': 'Etkinlik ve Aktivite Keşfi',
        'feature-event-discovery-desc': 'Çevrendeki kullanıcılar tarafından oluşturulan spor müsabakaları, kahve buluşmaları veya doğa yürüyüşlerine katıl. İstersen kendi aktiviteni oluşturarak ilgini çeken insanları davet et.',
        'feature-ai-discovery-title': 'Yapay Zeka Destekli "Çevrende Ne Var?"',
        'feature-ai-discovery-desc': 'Instagram\'da veya bir bilet sitesinde gördüğün etkinliğin linkini uygulamaya yapıştır, yapay zeka senin için anında etkinliği oluştursun! Şehrin nabzını tutan tüm etkinlikleri tek ekranda gör.',
        'feature-ride-sharing-title': 'Yolculuk Paylaşımı',
        'feature-ride-sharing-desc': 'Aynı yöne giden kullanıcılarla kolayca eşleş. Sürücü olarak akaryakıt masraflarınızı düşür, yolcu olarak uygun fiyatlı ve konforlu seyahat et.',
        'feature-messaging-security-title': 'Mesajlaşma ve Güvenlik',
        'feature-messaging-security-desc': 'Kullanıcı değerlendirmeleri ve profilleri sayesinde kiminle eşleştiğini bil. Uygulama içi şifreli mesajlaşma özelliği ile güvenle buluşma planı yap.',

        // Old Features (maintained for compatibility)
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
        'feature7-title': 'Yeni İnsanlarla Tanış',
        'feature7-desc': 'Benzer ilgi alanlarına sahip insanlarla tanışın, dostluk kurun ve sosyalleşin.',

        // Community & Socialization Section
        'community-badge': 'Sosyal Ağ Özellikleri',
        'community-title': 'Sadece Yolculuk Değil,<br>Yeni Arkadaşlıklar Kur',
        'community-desc': 'Paylaşalım\'da her yolculuk bir fırsat. Benzer rotaları kullanan, aynı çıkış saatlerine sahip insanlarla tanışın ve yeni dostluklar kurun.',
        'community-feature1': 'Benzer İnsanları Bul',
        'community-feature1-desc': 'Profil tercihlerine ve yolculuk rutinine göre uygun insanları keşfet.',
        'community-feature2': 'Rahat İletişim',
        'community-feature2-desc': 'Yolculuktan önce sohbet et, tanış ve konuşarak bağlantı kur.',
        'community-feature3': 'Güvenli & Doğrulanmış',
        'community-feature3-desc': 'Her kullanıcı doğrulanmış ve değerlendirilmiş, güvenle tanış.',
        'community-feature4': 'Kuzey Kıbrıs Topluluğu',
        'community-feature4-desc': 'Girne, Lefkoşa, Gazimağusa ve çevresinde aktif topluluk.',
        'community-feature5': 'Ortak İlgiler',
        'community-feature5-desc': 'İlgi alanlarına göre filtrele ve ortak noktaları olan insanları bul.',
        'community-feature6': 'Uzun Süreli Dostluk',
        'community-feature6-desc': 'Tekrar tekrar yolculuk yapan kişilerle düzenli arkadaşlıklar kur.',

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
        'footer-description': 'Sosyal keşif, etkinlik eşleşmesi ve yolculuk paylaşım platformu.',
        'footer-links-title': 'Hızlı Bağlantılar',
        'footer-social-title': 'Sosyal Medya',
        'footer-privacy': 'Gizlilik ve Sorumluluk',
        'footer-kvkk': 'KVKK',
        'footer-delete-account': 'Hesabı Sil',
        'footer-copyright': '© 2025 Paylaşalım — Kuzey Kıbrıs. Tüm hakları saklıdır.',

        // Delete Account Page
        'delete-title': 'Hesabı Sil',
        'delete-subtitle': 'Hesabınızı silmek için lütfen aşağıdaki formu doldurun. Talebiniz incelenecek ve işlem gerçekleştirilecektir.',
        'delete-warning-title': '⚠️ Uyarı',
        'delete-warning-text': 'Hesabınızı sildikten sonra tüm verileriniz silinecek ve bu işlem geri alınamaz. Lütfen emin olun.',
        'delete-email-label': 'E-Posta Adresi',
        'delete-phone-label': 'Telefon Numarası',
        'delete-name-label': 'Ad Soyad',
        'delete-reason-label': 'Hesabı Silme Nedeni (İsteğe Bağlı)',
        'delete-cancel': 'İptal Et',
        'delete-submit': 'Hesabı Sil',
        'delete-success': '✓ Talebiniz başarıyla gönderildi. En kısa sürede hesabınız silinecektir.',

        // Tech Page - How It Works
        'tech-how-title': 'Nasıl Çalışır?',
        'tech-how-subtitle': '4 basit adımda sosyalleşmeye ve masrafları paylaşmaya başla',
        'tech-step1-title': 'Sekmeleri Gezin',
        'tech-step1-desc': 'İhtiyacına göre Yolculuk Ara, Etkinlik Bul veya Çevrende Ne Var sekmelerinde gezin.',
        'tech-step2-title': 'Katılma İsteği Gönder ve Eşleş',
        'tech-step2-desc': 'İlgi duyduğun bir etkinliğe katılma isteği göndererek diğer kullanıcılarla eşleşmeye başla.',
        'tech-step3-title': 'İlan Oluştur',
        'tech-step3-desc': 'Kendi etkinlik veya yolculuk ilanını saniyeler içinde oluştur.',
        'tech-step4-title': 'Paylaş ve Sosyalleş',
        'tech-step4-desc': 'Sana uygun kişilerle eşleş, masrafları paylaş, etkinliklere birlikte git ve sosyalleş!',

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

        // Events Feature Section
        'events-badge': 'YENİ ÖZELLİK!',
        'events-title': 'Artık Etkinlik Oluşturabilisin',
        'events-subtitle': 'Paylaşalım şimdi sadece paylaşımlı yolculuk değil; etkinlik oluşturma ve etkinliğe katılma deneyimi de sunuyor.',
        'events-how-title': 'NASIL KULLANILIR?',
        'event-step1': '1. Etkinlik bilgilerini gir',
        'event-step1-desc': 'Başlık, kategori ve açıklamayı belirle',
        'event-step2': '2. Tarih, saat ve konumu seç',
        'event-step2-desc': 'Etkinliğin gerçekleşeceği zamanı ve yeri belirle',
        'event-step3': '3. Oluştur ve katılımcıları bekle',
        'event-step3-desc': 'Etkinliğini yayınla ve uygun katılımcıları bul',
        'events-highlight': 'Etkinlikleri keşfet, katıl ve sosyalleş!',
        'events-cta': 'Hemen Dene',

        // Trip Feature Section
        'trip-badge': 'YOLCULUK PAYLAŞIMI',
        'trip-title': 'Hızlıca Yolculuk İlanı Oluşturun',
        'trip-subtitle': 'Kendi aracınızla seyahat ederken boş koltuklarınızı paylaşın, masrafları bölüşün ve yeni insanlarla tanışın.',
        'trip-how-title': 'NASIL KULLANILIR?',
        'trip-step1': '1. Kalkış ve varış noktalarını gir',
        'trip-step1-desc': 'Nereden nereye gideceğinizi ve rotanızı seçin',
        'trip-step2': '2. Tarih, saat ve koltuk sayısını belirle',
        'trip-step2-desc': 'Seyahat zamanını ve kaç yolcu alabileceğinizi seçin',
        'trip-step3': '3. İstekleri incele ve yola çık',
        'trip-step3-desc': 'İstek gönderen yolcuların profillerini inceleyip onaylayın',
        'trip-highlight': 'Yolculuk paylaş, masrafları bölüş ve karbon ayak izini azalt!',
        'trip-cta': 'Hemen Yolculuk Paylaş',
        'trip-badge-float': 'Hemen yolculuğunu paylaş!',

        // Download Page
        'download-title': 'Uygulamayı İndir',
        'download-subtitle': 'iOS ve Android için App Store ve Play Store\'da!',
        'download-appstore': 'App Store\'dan İndir',
        'download-playstore': 'Google Play\'den İndir',
        'download-requirements': 'Minimum gereksinimler: Android 5.0+ • iOS 12.0+',

        // About Page
        'about-title': 'Hakkımızda',
        'about-subtitle': 'Kuzey Kıbrıs\'ın ilk sosyal keşif ve yolculuk paylaşım platformu',
        'about-intro': '<strong>Paylaşalım</strong>, çevrendeki etkinlikleri keşfedebileceğin, yeni insanlarla eşleşip etkinliklere birlikte katılabileceğin ve yolculuklarını paylaşarak sosyalleşebileceğin yeni nesil bir platformdur.',
        'about-description': 'Paylaşalım sadece bir ulaşım uygulaması değil; konserlerden spor müsabakalarına, doğa yürüyüşlerinden kahve buluşmalarına kadar çevrendeki aktiviteleri keşfetmeni ve kafa dengi insanlarla eşleşerek birlikte katılmanı sağlayan sosyal keşif ve yolculuk paylaşım topluluğudur.',
        'about-feature1-title': 'Güvenli Eşleşme',
        'about-feature1-desc': 'Doğrulanmış profiller ve şeffaf değerlendirmeler ile güvenle sosyalleşin.',
        'about-feature2-title': 'Sosyal Keşif',
        'about-feature2-desc': 'Çevrendeki spor, konser ve sosyal aktiviteleri keşfedip yeni insanlarla tanışın.',
        'about-feature3-title': 'Yolculuk Paylaşımı',
        'about-feature3-desc': 'Aynı yöne giden kişilerle masrafları paylaşarak karbon ayak izinizi ve seyahat giderlerinizi azaltın.',


        // Privacy Page
        'privacy-title': 'Gizlilik Politikası ve Sorumluluk Reddi',
        'privacy-subtitle': 'Kişisel Verilerin Korunması ve Kullanım Şartları',
        'privacy-page-title': 'Gizlilik ve Sorumluluk Reddi | Paylaşalım',

        // Privacy Page - Section 1
        'privacy-section1-title': '1. Genel Bilgiler',
        'privacy-section1-text': 'Paylaşalım uygulaması, kullanıcılar arasında paylaşımlı yolculuk organizasyonunu kolaylaştırmak amacıyla geliştirilmiş bir platformdur. Bu uygulama herhangi bir ticari kuruluş, şirket veya resmi kurum tarafından işletilmemektedir.',

        // Privacy Page - Section 2
        'privacy-section2-title': '2. Sorumluluk Reddi',
        'privacy-section2-intro': '<strong>Paylaşalım platformu ve geliştiricileri, aşağıdaki konularda hiçbir sorumluluk kabul etmez:</strong>',
        'privacy-section2-li1': 'Kullanıcılar arasında gerçekleşen yolculuklar sırasında meydana gelebilecek kaza, yaralanma, ölüm veya maddi/manevi zararlar,',
        'privacy-section2-li2': 'Kullanıcılar arasındaki anlaşmazlıklar, tartışmalar veya hukuki uyuşmazlıklar,',
        'privacy-section2-li3': 'Sürücülerin trafik kurallarına uymaması, yetersiz araç bakımı veya güvenliksiz sürüş davranışları,',
        'privacy-section2-li4': 'Kullanıcıların birbirlerine karşı gerçekleştirdiği dolandırıcılık, hırsızlık veya suç teşkil eden eylemler,',
        'privacy-section2-li5': 'Ödeme anlaşmazlıkları, para transferi sorunları veya finansal kayıplar,',
        'privacy-section2-li6': 'Uygulama üzerinden paylaşılan kişisel bilgilerin kötüye kullanılması,',
        'privacy-section2-li7': 'Teknik aksaklıklar, hizmet kesintileri veya veri kayıpları nedeniyle oluşabilecek zararlar,',
        'privacy-section2-li8': 'Üçüncü taraf servislerin (Google Maps, Firebase vb.) çalışmamasından kaynaklanan sorunlar.',
        'privacy-section2-conclusion': '<strong>Kullanıcılar, platformu kullanarak bu riskleri kabul etmiş sayılırlar ve tüm sorumluluğun kendilerine ait olduğunu beyan ederler.</strong>',

        // Privacy Page - Section 3
        'privacy-section3-title': '3. 🍪 Çerez (Cookie) Aydınlatma Metni',
        'privacy-section3-intro': 'Bu internet sitesinde, kullanıcı deneyimini geliştirmek, site performansını analiz etmek ve hizmet kalitesini artırmak amacıyla çerezler (cookies) kullanılmaktadır.',
        'privacy-section3-types-title': '<strong>Kullanılan çerez türleri:</strong>',
        'privacy-section3-type1': '<strong>✅ Zorunlu Çerezler:</strong> Sitenin düzgün çalışması için gereklidir.',
        'privacy-section3-type2': '<strong>✅ Analitik Çerezler:</strong> Ziyaretçi davranışlarını anonim olarak analiz etmek için kullanılır (Google Analytics 4, Microsoft Clarity).',
        'privacy-section3-type3': '<strong>✅ Performans Çerezleri:</strong> Sayfa yüklenme hızı ve kullanım performansını ölçer.',
        'privacy-section3-data-title': '<strong>Toplanan veriler:</strong>',
        'privacy-section3-data1': 'IP adresinin anonimleştirilmiş hali',
        'privacy-section3-data2': 'Ziyaret edilen sayfalar',
        'privacy-section3-data3': 'Tıklama, kaydırma (scroll), oturum süresi',
        'privacy-section3-data4': 'Cihaz, tarayıcı ve ekran bilgileri',
        'privacy-section3-note1': 'Bu veriler kimlik bilgileriyle ilişkilendirilmez, tamamen istatistiksel analiz amacıyla işlenir.',
        'privacy-section3-note2': 'Çerezleri tarayıcı ayarlarınızdan dilediğiniz zaman silebilir veya engelleyebilirsiniz. Ancak bazı çerezlerin devre dışı bırakılması sitenin bazı işlevlerinin düzgün çalışmamasına neden olabilir.',
        'privacy-section3-accept': '<strong>Siteyi kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz.</strong>',

        // Privacy Page - Section 4
        'privacy-section4-title': '4. 🔐 KVKK Aydınlatma Metni (Kişisel Verilerin Korunması)',
        'privacy-section4-intro': '6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, bu internet sitesi üzerinden elde edilen kişisel verileriniz aşağıda belirtilen amaçlar doğrultusunda işlenmektedir.',
        'privacy-section4-web-title': '<strong>✅ İşlenen Veriler (Web Sitesi):</strong>',
        'privacy-section4-web1': 'IP adresi (anonimleştirilmiş)',
        'privacy-section4-web2': 'Site üzerindeki gezinme ve kullanım hareketleri',
        'privacy-section4-web3': 'Cihaz ve tarayıcı bilgileri',
        'privacy-section4-web4': 'Çerez (cookie) verileri',
        'privacy-section4-app-title': '<strong>✅ İşlenen Veriler (Uygulama):</strong>',
        'privacy-section4-app1': '<strong>Kimlik Bilgileri:</strong> Ad, soyad, profil fotoğrafı',
        'privacy-section4-app2': '<strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası',
        'privacy-section4-app3': '<strong>Konum Bilgileri:</strong> GPS koordinatları, yolculuk rotaları',
        'privacy-section4-app4': '<strong>İşlem Bilgileri:</strong> Yolculuk geçmişi, değerlendirmeler, mesajlaşma kayıtları',
        'privacy-section4-purposes-title': '<strong>✅ Veri İşleme Amaçları:</strong>',
        'privacy-section4-purpose1': 'Hizmet kalitesinin artırılması',
        'privacy-section4-purpose2': 'Site performansının analiz edilmesi',
        'privacy-section4-purpose3': 'Kullanıcı deneyiminin iyileştirilmesi',
        'privacy-section4-purpose4': 'Güvenlik ve teknik sorunların tespiti',
        'privacy-section4-purpose5': 'Kullanıcı profili oluşturma ve kimlik doğrulama',
        'privacy-section4-purpose6': 'Yolculuk eşleştirme ve konum bazlı hizmetler',
        'privacy-section4-purpose7': 'Kullanıcılar arası iletişim (mesajlaşma)',
        'privacy-section4-sharing-title': '<strong>✅ Veri Paylaşımı:</strong>',
        'privacy-section4-sharing-text': 'Verileriniz, yalnızca analiz hizmeti sağlayıcıları olan <strong>Google Analytics 4</strong> ve <strong>Microsoft Clarity</strong> ile, KVKK ve GDPR uyumlu şekilde paylaşılmaktadır. Üçüncü şahıslarla ticari amaçla paylaşılmaz.',
        'privacy-section4-security-title': '<strong>✅ Veri Güvenliği:</strong>',
        'privacy-section4-security-text': 'Kişisel verileriniz, yetkisiz erişime karşı korunmakta ve güvenli sunucularda saklanmaktadır. Firebase platformu üzerinde şifrelenmiş veri depolama sağlanmaktadır.',
        'privacy-section4-rights-title': '<strong>✅ Haklarınız (KVKK Madde 11):</strong>',
        'privacy-section4-rights-intro': 'Kişisel verilerinizle ilgili olarak:',
        'privacy-section4-right1': 'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
        'privacy-section4-right2': 'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
        'privacy-section4-right3': 'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme',
        'privacy-section4-right4': 'Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme',
        'privacy-section4-right5': 'Verilerin silinmesini veya yok edilmesini talep etme',
        'privacy-section4-right6': 'Düzeltme ve silme işlemlerinin paylaşıldığı üçüncü kişilere bildirilmesini isteme',
        'privacy-section4-right7': 'Verilerin münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonuç doğması halinde itiraz etme',
        'privacy-section4-right8': 'Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme',
        'privacy-section4-contact': 'Bu haklarınızı kullanmak için <a href="mailto:info@paylasalim.com.tr">info@paylasalim.com.tr</a> adresine başvurabilirsiniz.',

        // Privacy Page - Section 5
        'privacy-section5-title': '5. Veri Güvenliği',
        'privacy-section5-text': '<strong>Ancak, dijital platformlarda %100 güvenlik garanti edilemez. Kullanıcılar bu riski kabul ederek platformu kullanmalıdır.</strong>',

        // Privacy Page - Section 6
        'privacy-section6-title': '6. Veri Paylaşımı (Uygulama)',
        'privacy-section6-intro': 'Kişisel verileriniz üçüncü şahıslarla <strong>asla ticari amaçla paylaşılmaz</strong>. Ancak, aşağıdaki durumlar için sınırlı veri paylaşımı yapılabilir:',
        'privacy-section6-li1': 'Yolculuk eşleştirmesi için diğer kullanıcılarla ad, profil fotoğrafı ve konum bilgisi paylaşımı',
        'privacy-section6-li2': 'Yasal zorunluluklar gereği (mahkeme kararı, emniyet talebi vb.)',
        'privacy-section6-li3': 'Google Maps API ile konum hizmetleri',

        // Privacy Page - Section 7
        'privacy-section7-title': '7. Kullanıcı Hakları',
        'privacy-section7-text1': 'Hesabınızı kapatma ve tüm verilerinizin silinmesini isteme hakkınız bulunmaktadır.',
        'privacy-section7-text2': 'Bu talepleriniz için <a href="mailto:info@paylasalim.com.tr">info@paylasalim.com.tr</a> adresine başvurabilirsiniz.',

        // Privacy Page - Section 8
        'privacy-section8-title': '8. Kullanım Şartları',
        'privacy-section8-intro': 'Uygulamayı kullanarak aşağıdaki şartları kabul etmiş sayılırsınız:',
        'privacy-section8-li1': '18 yaşından büyük olduğunuzu ve hukuki ehliyete sahip olduğunuzu,',
        'privacy-section8-li2': 'Sağladığınız bilgilerin doğru ve güncel olduğunu,',
        'privacy-section8-li3': 'Diğer kullanıcılara saygılı davranacağınızı ve yasalara uyacağınızı,',
        'privacy-section8-li4': 'Platform üzerinden gerçekleştirilen tüm işlemlerin sorumluluğunun size ait olduğunu,',
        'privacy-section8-li5': 'Platformun herhangi bir garanti vermediğini ve "olduğu gibi" sunulduğunu kabul edersiniz.',

        // Privacy Page - Section 9
        'privacy-section9-title': '9. Değişiklikler',
        'privacy-section9-text': 'Bu gizlilik politikası ve sorumluluk reddi beyanı, önceden haber verilmeksizin güncellenebilir. Güncellemeler bu sayfada yayınlanacaktır. Kullanıcıların düzenli olarak kontrol etmesi önerilir.',

        // Privacy Page - Section 10
        'privacy-section10-title': '10. İletişim',
        'privacy-section10-intro': 'Sorularınız, şikayetleriniz veya veri talepleriniz için:',
        'privacy-section10-email': '<strong>E-posta:</strong> <a href="mailto:info@paylasalim.com.tr">info@paylasalim.com.tr</a>',
        'privacy-section10-web': '<strong>Web:</strong> <a href="https://paylasalim.com.tr">paylasalim.com.tr</a>',

        // Privacy Page - Footer
        'privacy-footer-updated': '<strong>Son Güncelleme:</strong> 6 Aralık 2025',
        'privacy-footer-disclaimer': '<em>Bu belge, Paylaşalım platformunun kullanım koşullarını ve sorumluluk sınırlarını belirtir. Uygulamayı kullanmaya devam ederek bu şartları kabul etmiş sayılırsınız.</em>',

        // FAQ Page
        'faq-title': '❓ Sık Sorulan Sorular',
        'faq-subtitle': 'Paylaşalım hakkında merak ettikleriniz',
        'faq-q1': 'Paylaşalım nedir ve nasıl çalışır?',
        'faq-a1': 'Paylaşalım, Kuzey Kıbrıs\'ta sürücüler ve yolcuları bir araya getiren modern bir paylaşımlı yolculuk platformudur. Sürücüler boş koltuklarını paylaşarak yakıt masraflarını azaltır, yolcular ise uygun fiyata güvenli ulaşım sağlar. Firebase ve Google Maps teknolojileriyle geliştirilmiş, güvenli ve kullanıcı dostu bir mobil uygulamadır.',
        'faq-q2': 'Güvenlik önlemleri nelerdir?',
        'faq-a2': 'Güvenliğiniz bizim önceliğimiz! Firebase Authentication ile kimlik doğrulama, kullanıcı değerlendirme ve puanlama sistemi, doğrulanmış telefon numaraları, gerçek zamanlı konum paylaşımı, güvenli mesajlaşma sistemi ve destek ekibi (Pazartesi-Cuma 09:00-17:00 Türkiye Saati) ile güvenli yolculuklar sağlıyoruz. Her kullanıcı profili onaylanır ve kullanıcılar birbirlerini değerlendirebilir.',
        'faq-q3': 'Kayıt olmak için ne gereklidir?',
        'faq-a3': 'Kayıt olmak için geçerli bir e-posta adresi, telefon numarası ve profil fotoğrafı yeterlidir. Sürücü olarak kayıt olacaksanız ek olarak araç bilgilerinizi (marka, model, plaka ve renk) eklemeniz gerekmektedir. Kimlik doğrulama işlemi 24 saat içinde tamamlanır.',
        'faq-q4': 'Ücretlendirme nasıl işler?',
        'faq-a4': 'Sürücüler yolculuk oluştururken koltuk başına fiyat belirler. Bu fiyat yakıt, yol ve araç yıpranma masraflarını karşılayacak şekilde olmalıdır. Uygulama kullanımı ücretsizdir, sadece paylaşılan masraflar için ödeme yapılır. Ödemeler nakit veya uygulama içi dijital cüzdan ile güvenli şekilde gerçekleştirilir.',
        'faq-q5': 'Yolculuk iptal edilirse ne olur?',
        'faq-a5': 'Yolculuklar, sefer saatinden 24 saat öncesine kadar ücretsiz iptal edilebilir. 24 saatten daha kısa sürede iptal edilmesi durumunda iptal politikası devreye girer. Sürücünün yolculuğu iptal etmesi durumunda, rezervasyon yapmış tüm yolcular anında bilgilendirilir ve ödeme yapılmışsa iade edilir.',
        'faq-q6': 'Değerlendirme sistemi nasıl çalışır?',
        'faq-a6': 'Her yolculuk sonrasında sürücüler ve yolcular birbirlerini 1-5 yıldız arası puanlayabilir. Değerlendirmeler profilinizde görüntülenir ve güvenilir bir topluluk oluşturmamıza yardımcı olur. Olumsuz değerlendirme alan kullanıcılar incelenir ve gerekirse hesapları askıya alınır. Olumlu puanlar toplulukta güven oluşturur.',
        'faq-q7': 'Ödeme nasıl yapılır?',
        'faq-a7': 'Ödemeler nakit olarak yolculuk sırasında veya uygulama içi dijital cüzdan ile yapılabilir. Dijital cüzdan kullanıcıları kredi kartı, banka kartı ile önceden bakiye yükleyebilir ve güvenli ödemeler yapabilir. Tüm online ödemeler SSL sertifikası ve PCI DSS standartlarıyla korunmaktadır.',
        'faq-q8': 'Uygulama hangi bölgelerde kullanılabilir?',
        'faq-a8': 'Paylaşalım şu an için Kuzey Kıbrıs Türk Cumhuriyeti (KKTC) genelinde hizmet vermektedir. Lefkoşa, Gazimağusa, Girne, Güzelyurt, İskele ve tüm bölgeler arası yolculuklar için kullanılabilir. Yakın zamanda güney bölgelerine ve diğer Akdeniz adalarına da genişleme planlamaktayız.',
        'faq-q9': 'Bagaj limiti var mı?',
        'faq-a9': 'Bagaj politikası sürücü tarafından belirlenir. Yolculuk oluştururken sürücüler bagaj kabul edip etmediklerini ve boyut limitlerini belirtirler. Genellikle küçük bir sırt çantası veya el bagajı kabul edilir. Büyük bavul veya hacimli eşyalarınız varsa rezervasyon öncesi mutlaka sürücü ile iletişime geçin ve onay alın.',

        // Home Waitlist Section
        'home-wl-heading': 'Kulüp Ortaklık Programı<br>Topluluğunuzu Bir Araya Getirin',
        'home-wl-desc': 'Herkes normal etkinlik oluşturabilir, ancak kulüp yöneticisi olarak doğrulanmış bir profil edinebilir, sadece üyelerinize özel kapalı/açık etkinlikler düzenleyebilir ve onlara doğrudan duyurular gönderebilirsiniz.',
        'home-wl-notify': 'İlk 3 Ay Ücretsiz',
        'home-wl-btn': 'Kulüp Programına Katıl',
        'home-wl-privacy': '🔒 Bilgileriniz güvende. Yalnızca sizinle iletişim kurmak için kullanılır.',

        // Waitlist Page / Club Program
        'wl-page-title': 'Kulüp Programı | Paylaşalım',
        'wl-badge': 'Özel Ortaklık Programı',
        'wl-title': 'Kulübünüzü<br><span class="wl-accent">Güçlendirin</span>',
        'wl-subtitle-text': 'Paylaşalım\'da herkes bireysel etkinlik oluşturabilir, ancak kulüp yöneticileri ve dernekler için özel araçlar sunuyoruz. Doğrulanmış kurumsal profilinizle üyelerinize özel gizli veya açık etkinlikler düzenleyin, katılımı ve üyeleriniz arasındaki iletişimi güçlendirin.',
        'wl-chip1': 'Özel Etkinlik Sayfası',
        'wl-chip2': 'Üye Yönetimi',
        'wl-chip3': 'Anlık Bildirimler',
        'wl-chip4': 'Grup Mesajlaşma',
        'wl-chip5': 'İlk 3 Ay Ücretsiz',
        'wl-chip6': 'Hızlı Kurulum',
        'wl-stat1-num': '5+',
        'wl-stat1-label': 'Ortaklık Görüşmesi',
        'wl-stat2-num': '3 Ay',
        'wl-stat2-label': 'Ücretsiz Deneme',
        'wl-stat3-num': '%100',
        'wl-stat3-label': 'Özelleştirilebilir',
        'wl-feat1-title': 'Doğrulanmış Kulüp Etkinlikleri',
        'wl-feat1-desc': 'Standart kullanıcı ilanlarından farklı olarak, kulübünüzün logosu ve doğrulanmış rozetiyle resmi etkinlikler oluşturun. Üyelerinize güven verin.',
        'wl-feat2-title': 'Üyelere Özel / Kapalı Etkinlikler',
        'wl-feat2-desc': 'Etkinliklerinizi dışarıya kapatarak sadece onaylı kulüp üyelerinizin katılımına ve eşleşmesine açık hale getirebilirsiniz.',
        'wl-feat3-title': 'Doğrudan Duyuru & Push Bildirimler',
        'wl-feat3-desc': 'Etkinlik güncellemelerini ve duyurularınızı doğrudan üyelerinizin telefonuna push bildirimi olarak gönderin, WhatsApp karmaşasını bitirin.',
        'wl-feat4-title': 'Yolculuk Entegrasyonu & Yönetim',
        'wl-feat4-desc': 'Üyelerinizin etkinliğe giderken kendi aralarında carpool/yolculuk paylaşımı planlamasını sağlayın. Katılımı ve yol arkadaşlarını panelden izleyin.',
        'wl-quote-text': '"Paylaşalım sayesinde etkinliklerimizi çok daha kolay duyuruyoruz. Üye katılımı ikiye katlandı ve koordinasyon çok kolaylaştı."',
        'wl-quote-author': 'Berkay T.',
        'wl-quote-role': 'Yazılım Kulübü Başkanı',
        'wl-form-tag': 'Ücretsiz Başla',
        'wl-form-title': 'Kulüp Programı',
        'wl-form-desc': 'Bilgilerinizi bırakın, sizi arayalım ve birlikte en iyi çözümü planlayalım.',
        'wl-div1': 'Kulüp / Dernek Bilgileri',
        'wl-lbl-club': 'Kulüp / Dernek Adı',
        'wl-ph-club': 'ör. DAÜ Yazılım Kulübü',
        'wl-lbl-type': 'Tür',
        'wl-opt-select': 'Seçin...',
        'wl-opt-university': 'Üniversite Kulübü',
        'wl-opt-sports': 'Spor Kulübü',
        'wl-opt-ngo': 'Dernek / STK',
        'wl-opt-school': 'Okul Kulübü',
        'wl-opt-professional': 'Meslek Birliği',
        'wl-opt-other': 'Diğer',
        'wl-lbl-members': 'Üye Sayısı',
        'wl-opt-m1': '1 – 25',
        'wl-opt-m2': '26 – 100',
        'wl-opt-m3': '101 – 300',
        'wl-opt-m4': '300+',
        'wl-lbl-city': 'Şehir / Kampüs',
        'wl-opt-c1': 'Girne',
        'wl-opt-c2': 'Lefkoşa',
        'wl-opt-c3': 'Gazimağusa',
        'wl-opt-c4': 'Güzelyurt',
        'wl-opt-c5': 'İskele',
        'wl-div2': 'İletişim Bilgileri',
        'wl-lbl-name': 'Adınız Soyadınız',
        'wl-lbl-phone': 'Telefon Numarası',
        'wl-lbl-role': 'Unvanınız',
        'wl-ph-role': 'Başkan, Koordinatör...',
        'wl-lbl-email': 'E-posta',
        'wl-lbl-msg': 'Bize Kısaca Anlatın',
        'wl-ph-msg': 'Kulübünüz hakkında kısaca bilgi verin veya sormak istediklerinizi yazın...',
        'wl-btn-submit': 'Hemen İletişime Geç',
        'wl-privacy-text': 'Bilgileriniz güvende. Yalnızca sizinle iletişim kurmak için kullanılır, asla paylaşılmaz.',
        'wl-success-header': 'Mesajınız Alındı',
        'wl-success-body': 'En kısa sürede sizinle iletişime geçeceğiz.<br>Genellikle <strong>24 saat</strong> içinde dönüş yapıyoruz.',
        'wl-success-fallback': 'Sizi en kısa sürede arayacağız',
        'wl-lbl-optional': '(isteğe bağlı)',
        'wl-ph-name': 'Ahmet Yılmaz',
        'wl-ph-phone': '+90 548 000 00 00',
        'wl-ph-email': 'ahmet@ornek.com',
        'wl-btn-sending': 'Gönderiliyor...'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-tech': 'Features & How It Works',
        'nav-download': 'Download',
        'nav-blog': 'Blog',
        'nav-faq': 'FAQ',
        'nav-about': 'About Us',
        'nav-contact': 'Contact',
        'nav-waitlist': 'Club Program',

        // Hero Section
        'hero-title': 'Social Discovery &<br>Ride Sharing',
        'hero-subtitle': 'Discover events, match with people to attend together, and share the costs!',
        'hero-download': 'Download App',
        'hero-explore': 'Explore Features',
        'stat-secure': 'Secure',
        'stat-savings': 'Savings',

        // Page Titles
        'page-title': 'Paylaşalım - Social Discovery and Ride Sharing Platform',
        'about-page-title': 'About Us | Paylaşalım - Social Discovery and Ride Sharing',
        'tech-page-title': 'Features & How It Works | Paylaşalım - Social Discovery and Ride Sharing',
        'download-page-title': 'Download | Paylaşalım - Social Discovery and Ride Sharing',
        'faq-page-title': 'FAQ | Paylaşalım - Social Discovery and Ride Sharing',
        'delete-page-title': 'Delete Account | Paylaşalım - Social Discovery and Ride Sharing',
        'privacy-page-title': 'Privacy Policy and Disclaimer | Paylaşalım - Social Discovery and Ride Sharing',
        'blog-page-title': 'Blog | Paylaşalım - Social Discovery and Ride Sharing',
        'waitlist-page-title': 'Club Program | Paylaşalım - Social Discovery and Ride Sharing',

        // Features Section
        'features-title': 'Why Paylaşalım?',
        'features-subtitle': 'Social discovery and safe ride sharing experience',

        // New Features
        'feature-event-match-title': 'Event Matching',
        'feature-event-match-desc': 'Choose a concert, theater, or party you want to go to, and match with other users who want to attend! Meet through the app, plan the trip together, and never go to an event alone.',
        'feature-event-discovery-title': 'Event & Activity Discovery',
        'feature-event-discovery-desc': 'Join sports matches, coffee meetups, or nature walks created by users around you. Or create your own activity and invite people who share your interests.',
        'feature-ai-discovery-title': 'AI-Powered "What\'s Nearby?"',
        'feature-ai-discovery-desc': 'Paste the link of an event you saw on Instagram or a ticket site, and let AI create the event instantly! See all the city\'s events on a single screen.',
        'feature-ride-sharing-title': 'Ride Sharing',
        'feature-ride-sharing-desc': 'Easily match with users heading in the same direction. Lower your fuel costs as a driver, or travel affordably and comfortably as a passenger.',
        'feature-messaging-security-title': 'Messaging & Security',
        'feature-messaging-security-desc': 'Know who you\'re matching with thanks to user reviews and profiles. Make meeting plans securely with the in-app encrypted messaging feature.',

        // Old Features (maintained for compatibility)
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
        'feature7-title': 'Meet New People',
        'feature7-desc': 'Connect with people who share your interests, build friendships and socialize.',

        // Community & Socialization Section
        'community-badge': 'Social Features',
        'community-title': 'More Than Just a Ride,<br>Make New Friends',
        'community-desc': 'On Paylaşalım, every trip is an opportunity. Meet people using similar routes, at the same times, and make lasting friendships.',
        'community-feature1': 'Find Similar People',
        'community-feature1-desc': 'Discover compatible people based on profile preferences and travel routines.',
        'community-feature2': 'Easy Communication',
        'community-feature2-desc': 'Chat before trips, get to know each other and build connections.',
        'community-feature3': 'Safe & Verified',
        'community-feature3-desc': 'Every user is verified and rated, connect with confidence.',
        'community-feature4': 'North Cyprus Community',
        'community-feature4-desc': 'Active community across Kyrenia, Nicosia, Famagusta and surrounding areas.',
        'community-feature5': 'Shared Interests',
        'community-feature5-desc': 'Filter by interests and find people with common ground.',
        'community-feature6': 'Long-Term Friendships',
        'community-feature6-desc': 'Build regular friendships with people you travel with frequently.',

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

        'footer-about': 'Paylaşalım',
        'footer-description': 'Social discovery, event matching, and ride sharing platform.',
        'footer-links-title': 'Quick Links',
        'footer-social-title': 'Social Media',
        'footer-privacy': 'Privacy & Disclaimer',
        'footer-kvkk': 'GDPR',
        'footer-delete-account': 'Delete Account',
        'footer-copyright': '© 2025 Paylaşalım — North Cyprus. All rights reserved.',

        // Delete Account Page
        'delete-title': 'Delete Account',
        'delete-subtitle': 'Please fill out the form below to request account deletion. Your request will be reviewed and processed.',
        'delete-warning-title': '⚠️ Warning',
        'delete-warning-text': 'Once your account is deleted, all your data will be permanently deleted and this action cannot be undone. Please make sure.',
        'delete-email-label': 'Email Address',
        'delete-phone-label': 'Phone Number',
        'delete-name-label': 'Full Name',
        'delete-reason-label': 'Reason for Deletion (Optional)',
        'delete-cancel': 'Cancel',
        'delete-submit': 'Delete Account',
        'delete-success': '✓ Your request has been submitted successfully. Your account will be deleted shortly.',

        // Tech Page - How It Works
        'tech-how-title': 'How It Works?',
        'tech-how-subtitle': 'Start socializing and sharing costs in 4 simple steps',
        'tech-step1-title': 'Browse the Tabs',
        'tech-step1-desc': 'Browse through the Search Trips, Find Events, or What\'s Nearby tabs depending on your needs.',
        'tech-step2-title': 'Send Request & Match',
        'tech-step2-desc': 'Send a request to join an event you\'re interested in and start matching with other users.',
        'tech-step3-title': 'Create Listing',
        'tech-step3-desc': 'Create your own event or trip listing in seconds.',
        'tech-step4-title': 'Share & Socialize',
        'tech-step4-desc': 'Match with people who suit you, share the costs, attend events together, and socialize!',

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

        // Events Feature Section
        'events-badge': 'NEW FEATURE!',
        'events-title': 'Now You Can Create Events',
        'events-subtitle': 'Paylaşalım is no longer just ridesharing; it also offers event creation and event participation experience.',
        'events-how-title': 'HOW TO USE?',
        'event-step1': '1. Enter event information',
        'event-step1-desc': 'Specify the title, category and description',
        'event-step2': '2. Choose date, time and location',
        'event-step2-desc': 'Determine when and where the event will take place',
        'event-step3': '3. Create and wait for participants',
        'event-step3-desc': 'Publish your event and find suitable participants',
        'events-highlight': 'Discover events, participate and socialize!',
        'events-cta': 'Try Now',

        // Trip Feature Section
        'trip-badge': 'RIDE SHARING',
        'trip-title': 'Quickly Create a Ride Listing',
        'trip-subtitle': 'Share your empty seats while traveling in your own vehicle, split expenses, and meet new people.',
        'trip-how-title': 'HOW TO USE?',
        'trip-step1': '1. Enter departure and arrival points',
        'trip-step1-desc': 'Choose where you are going and your route',
        'trip-step2': '2. Set date, time and available seats',
        'trip-step2-desc': 'Select travel time and how many passengers you can take',
        'trip-step3': '3. Review requests and set off',
        'trip-step3-desc': 'Review and approve profiles of passengers sending requests',
        'trip-highlight': 'Share rides, split costs, and reduce your carbon footprint!',
        'trip-cta': 'Share a Ride Now',
        'trip-badge-float': 'Share your ride now!',

        // Download Page
        'download-title': 'Download App',
        'download-subtitle': 'Available on the App Store and Play Store for iOS and Android!',
        'download-appstore': 'Download from App Store',
        'download-playstore': 'Download from Google Play',
        'download-requirements': 'Minimum requirements: Android 5.0+ • iOS 12.0+',

        // About Page
        'about-title': 'About Us',
        'about-subtitle': 'North Cyprus\'s first social discovery and ride sharing platform',
        'about-intro': '<strong>Paylaşalım</strong> is a next-generation platform where you can discover events around you, match with new people to attend them together, and socialize by sharing your rides.',
        'about-description': 'Paylaşalım is not just a transportation app; it is a social discovery and ride-sharing community that allows you to discover activities around you—from concerts to sports matches, nature walks to coffee meetups—and match with like-minded people to attend them together.',
        'about-feature1-title': 'Secure Matching',
        'about-feature1-desc': 'Socialize with confidence thanks to verified profiles and transparent ratings.',
        'about-feature2-title': 'Social Discovery',
        'about-feature2-desc': 'Discover sports, concerts, and social activities around you and meet new people.',
        'about-feature3-title': 'Ride Sharing',
        'about-feature3-desc': 'Reduce your carbon footprint and travel expenses by sharing costs with people heading in the same direction.',

        // Contact Page

        // Privacy Page
        'privacy-title': 'Privacy Policy and Disclaimer',
        'privacy-subtitle': 'Personal Data Protection and Terms of Use',
        'privacy-page-title': 'Privacy & Disclaimer | Paylaşalım',

        // Privacy Page - Section 1
        'privacy-section1-title': '1. General Information',
        'privacy-section1-text': 'Paylaşalım application is a platform developed to facilitate shared ride organization between users. This application is not operated by any commercial entity, company or official institution.',

        // Privacy Page - Section 2
        'privacy-section2-title': '2. Disclaimer',
        'privacy-section2-intro': '<strong>The Paylaşalım platform and developers accept no responsibility for the following:</strong>',
        'privacy-section2-li1': 'Accidents, injuries, deaths or material/moral damages that may occur during trips between users,',
        'privacy-section2-li2': 'Disagreements, disputes or legal conflicts between users,',
        'privacy-section2-li3': 'Drivers\' non-compliance with traffic rules, inadequate vehicle maintenance or unsafe driving behavior,',
        'privacy-section2-li4': 'Fraud, theft or criminal acts committed by users against each other,',
        'privacy-section2-li5': 'Payment disputes, money transfer problems or financial losses,',
        'privacy-section2-li6': 'Misuse of personal information shared through the app,',
        'privacy-section2-li7': 'Damages that may occur due to technical malfunctions, service interruptions or data loss,',
        'privacy-section2-li8': 'Problems arising from the failure of third-party services (Google Maps, Firebase, etc.).',
        'privacy-section2-conclusion': '<strong>Users are deemed to have accepted these risks by using the platform and declare that all responsibility belongs to them.</strong>',

        // Privacy Page - Section 3
        'privacy-section3-title': '3. 🍪 Cookie Disclosure',
        'privacy-section3-intro': 'This website uses cookies to improve user experience, analyze site performance and enhance service quality.',
        'privacy-section3-types-title': '<strong>Types of cookies used:</strong>',
        'privacy-section3-type1': '<strong>✅ Essential Cookies:</strong> Required for the site to function properly.',
        'privacy-section3-type2': '<strong>✅ Analytics Cookies:</strong> Used to anonymously analyze visitor behavior (Google Analytics 4, Microsoft Clarity).',
        'privacy-section3-type3': '<strong>✅ Performance Cookies:</strong> Measures page loading speed and usage performance.',
        'privacy-section3-data-title': '<strong>Data collected:</strong>',
        'privacy-section3-data1': 'Anonymized IP address',
        'privacy-section3-data2': 'Pages visited',
        'privacy-section3-data3': 'Clicks, scrolling, session duration',
        'privacy-section3-data4': 'Device, browser and screen information',
        'privacy-section3-note1': 'This data is not associated with identity information and is processed solely for statistical analysis purposes.',
        'privacy-section3-note2': 'You can delete or block cookies from your browser settings at any time. However, disabling some cookies may cause some site functions to not work properly.',
        'privacy-section3-accept': '<strong>By continuing to use the site, you accept the use of cookies.</strong>',

        // Privacy Page - Section 4
        'privacy-section4-title': '4. 🔐 GDPR Disclosure (Personal Data Protection)',
        'privacy-section4-intro': 'Under Law No. 6698 on the Protection of Personal Data (KVKK), your personal data obtained through this website is processed for the purposes specified below.',
        'privacy-section4-web-title': '<strong>✅ Data Processed (Website):</strong>',
        'privacy-section4-web1': 'IP address (anonymized)',
        'privacy-section4-web2': 'Navigation and usage activities on the site',
        'privacy-section4-web3': 'Device and browser information',
        'privacy-section4-web4': 'Cookie data',
        'privacy-section4-app-title': '<strong>✅ Data Processed (Application):</strong>',
        'privacy-section4-app1': '<strong>Identity Information:</strong> Name, surname, profile photo',
        'privacy-section4-app2': '<strong>Contact Information:</strong> Email address, phone number',
        'privacy-section4-app3': '<strong>Location Information:</strong> GPS coordinates, trip routes',
        'privacy-section4-app4': '<strong>Transaction Information:</strong> Trip history, reviews, messaging records',
        'privacy-section4-purposes-title': '<strong>✅ Data Processing Purposes:</strong>',
        'privacy-section4-purpose1': 'Improving service quality',
        'privacy-section4-purpose2': 'Analyzing site performance',
        'privacy-section4-purpose3': 'Improving user experience',
        'privacy-section4-purpose4': 'Detecting security and technical issues',
        'privacy-section4-purpose5': 'Creating user profiles and identity verification',
        'privacy-section4-purpose6': 'Trip matching and location-based services',
        'privacy-section4-purpose7': 'Communication between users (messaging)',
        'privacy-section4-sharing-title': '<strong>✅ Data Sharing:</strong>',
        'privacy-section4-sharing-text': 'Your data is shared only with analytics service providers <strong>Google Analytics 4</strong> and <strong>Microsoft Clarity</strong>, in compliance with KVKK and GDPR. It is not shared with third parties for commercial purposes.',
        'privacy-section4-security-title': '<strong>✅ Data Security:</strong>',
        'privacy-section4-security-text': 'Your personal data is protected against unauthorized access and stored on secure servers. Encrypted data storage is provided on the Firebase platform.',
        'privacy-section4-rights-title': '<strong>✅ Your Rights (KVKK Article 11):</strong>',
        'privacy-section4-rights-intro': 'Regarding your personal data:',
        'privacy-section4-right1': 'Learning whether your personal data is processed',
        'privacy-section4-right2': 'Learning the purpose of processing and whether it is used appropriately',
        'privacy-section4-right3': 'Knowing the third parties to whom it is transferred domestically or abroad',
        'privacy-section4-right4': 'Requesting correction if processed incompletely or incorrectly',
        'privacy-section4-right5': 'Requesting deletion or destruction of data',
        'privacy-section4-right6': 'Requesting notification of correction and deletion to third parties with whom it is shared',
        'privacy-section4-right7': 'Objecting if an adverse result occurs due to exclusive analysis by automated systems',
        'privacy-section4-right8': 'Requesting compensation for damages if you suffer harm due to unlawful processing',
        'privacy-section4-contact': 'You can apply to <a href="mailto:info@paylasalim.com.tr">info@paylasalim.com.tr</a> to exercise these rights.',

        // Privacy Page - Section 5
        'privacy-section5-title': '5. Data Security',
        'privacy-section5-text': '<strong>However, 100% security cannot be guaranteed on digital platforms. Users should use the platform by accepting this risk.</strong>',

        // Privacy Page - Section 6
        'privacy-section6-title': '6. Data Sharing (Application)',
        'privacy-section6-intro': 'Your personal data is <strong>never shared for commercial purposes</strong> with third parties. However, limited data sharing may occur for the following situations:',
        'privacy-section6-li1': 'Sharing name, profile photo and location information with other users for trip matching',
        'privacy-section6-li2': 'Due to legal requirements (court order, security request, etc.)',
        'privacy-section6-li3': 'Location services with Google Maps API',

        // Privacy Page - Section 7
        'privacy-section7-title': '7. User Rights',
        'privacy-section7-text1': 'You have the right to close your account and request deletion of all your data.',
        'privacy-section7-text2': 'For these requests, you can apply to <a href="mailto:info@paylasalim.com.tr">info@paylasalim.com.tr</a>.',

        // Privacy Page - Section 8
        'privacy-section8-title': '8. Terms of Use',
        'privacy-section8-intro': 'By using the application, you are deemed to have accepted the following terms:',
        'privacy-section8-li1': 'That you are over 18 years old and have legal capacity,',
        'privacy-section8-li2': 'That the information you provide is accurate and up to date,',
        'privacy-section8-li3': 'That you will be respectful to other users and comply with the laws,',
        'privacy-section8-li4': 'That you are responsible for all transactions carried out through the platform,',
        'privacy-section8-li5': 'You accept that the platform does not provide any warranty and is provided "as is".',

        // Privacy Page - Section 9
        'privacy-section9-title': '9. Changes',
        'privacy-section9-text': 'This privacy policy and disclaimer may be updated without prior notice. Updates will be published on this page. Users are advised to check regularly.',

        // Privacy Page - Section 10
        'privacy-section10-title': '10. Contact',
        'privacy-section10-intro': 'For your questions, complaints or data requests:',
        'privacy-section10-email': '<strong>Email:</strong> <a href="mailto:info@paylasalim.com.tr">info@paylasalim.com.tr</a>',
        'privacy-section10-web': '<strong>Website:</strong> <a href="https://paylasalim.com.tr">paylasalim.com.tr</a>',

        // Privacy Page - Footer
        'privacy-footer-updated': '<strong>Last Updated:</strong> December 6, 2025',
        'privacy-footer-disclaimer': '<em>This document specifies the terms of use and limitations of liability of the Paylaşalım platform. By continuing to use the application, you are deemed to have accepted these terms.</em>',

        // FAQ Page
        'faq-title': '❓ Frequently Asked Questions',
        'faq-subtitle': 'Everything you need to know about Paylaşalım',
        'faq-q1': 'What is Paylaşalım and how does it work?',
        'faq-a1': 'Paylaşalım is a modern ridesharing platform that brings drivers and passengers together in North Cyprus. Drivers share their empty seats to reduce fuel costs, while passengers get safe transportation at affordable prices. It is a secure and user-friendly mobile app developed with Firebase and Google Maps technologies.',
        'faq-q2': 'What are the security measures?',
        'faq-a2': 'Your safety is our priority! We provide secure trips with Firebase Authentication identity verification, user rating and review system, verified phone numbers, real-time location sharing and secure messaging system. Every user profile is verified and users can rate each other.',
        'faq-q3': 'What is required to register?',
        'faq-a3': 'To register, you need a valid email address, phone number, and profile picture. If you are registering as a driver, you also need to add your vehicle information (make, model, license plate, and color). Identity verification is completed within 24 hours.',
        'faq-q4': 'How does pricing work?',
        'faq-a4': 'Drivers set the price per seat when creating a trip. This price should cover fuel, road, and vehicle wear costs. The app is free to use, you only pay for the shared costs. Payments are made securely in cash or via the in-app digital wallet.',
        'faq-q5': 'What happens if a trip is cancelled?',
        'faq-a5': 'Trips can be cancelled free of charge up to 24 hours before departure. If cancelled less than 24 hours before, the cancellation policy applies. If the driver cancels the trip, all passengers with reservations are notified immediately and any payments are refunded.',
        'faq-q6': 'How does the rating system work?',
        'faq-a6': 'After each trip, drivers and passengers can rate each other on a scale of 1-5 stars. Ratings are displayed on your profile and help us build a trusted community. Users with negative ratings are reviewed and their accounts may be suspended if necessary. Positive ratings build trust in the community.',
        'faq-q7': 'How do payments work?',
        'faq-a7': 'Payments can be made in cash during the trip or via the in-app digital wallet. Digital wallet users can preload balance with credit or debit cards and make secure payments. All online payments are protected with SSL certificate and PCI DSS standards.',
        'faq-q8': 'In which regions is the app available?',
        'faq-a8': 'Paylaşalım currently serves throughout the Turkish Republic of Northern Cyprus (TRNC). It is available for trips between Nicosia, Famagusta, Kyrenia, Morphou, Iskele, and all regions. We plan to expand to southern regions and other Mediterranean islands soon.',
        'faq-q9': 'Is there a luggage limit?',
        'faq-a9': 'Luggage policy is determined by the driver. When creating a trip, drivers specify whether they accept luggage and size limits. Generally, a small backpack or hand luggage is accepted. If you have large suitcases or bulky items, be sure to contact the driver and get approval before booking.',

        // Home Waitlist Section
        'home-wl-heading': 'Club Partnership Program<br>Bring Your Community Together',
        'home-wl-desc': 'Anyone can create standard events, but as a club manager, you get a verified organization profile, can host member-exclusive public/private events, and send direct announcements.',
        'home-wl-notify': 'First 3 Months Free',
        'home-wl-btn': 'Join Club Program',
        'home-wl-privacy': '🔒 Your information is safe. Used only to contact you.',

        // Waitlist Page / Club Program
        'wl-page-title': 'Club Program | Paylaşalım',
        'wl-badge': 'Special Partnership Program',
        'wl-title': 'Empower Your<br><span class="wl-accent">Club</span>',
        'wl-subtitle-text': 'While anyone can create individual events on Paylaşalım, we offer special tools for club managers and associations. Set up public or member-exclusive events with your verified organization profile, and boost participation and member engagement.',
        'wl-chip1': 'Custom Event Page',
        'wl-chip2': 'Member Management',
        'wl-chip3': 'Instant Notifications',
        'wl-chip4': 'Group Messaging',
        'wl-chip5': 'First 3 Months Free',
        'wl-chip6': 'Fast Setup',
        'wl-stat1-num': '5+',
        'wl-stat1-label': 'Partnership Meetings',
        'wl-stat2-num': '3 Months',
        'wl-stat2-label': 'Free Trial',
        'wl-stat3-num': '100%',
        'wl-stat3-label': 'Customizable',
        'wl-feat1-title': 'Verified Club Events',
        'wl-feat1-desc': 'Unlike standard user listings, create official events featuring your club logo and a verified badge. Build trust among your members.',
        'wl-feat2-title': 'Member-Only / Private Events',
        'wl-feat2-desc': 'Restrict your events so only approved club members can view, join, and match for rides.',
        'wl-feat3-title': 'Direct Announcements & Push Notifications',
        'wl-feat3-desc': 'Send event updates and announcements directly to your members\' phones via push notifications, avoiding WhatsApp chaos.',
        'wl-feat4-title': 'Ride Integration & Management',
        'wl-feat4-desc': 'Enable members to arrange carpooling among themselves for your events. Track attendance and travel arrangements from a unified dashboard.',
        'wl-quote-text': '"Thanks to Paylaşalım, we announce our events much more easily. Member participation has doubled, and coordination has become very easy."',
        'wl-quote-author': 'Berkay T.',
        'wl-quote-role': 'Software Club President',
        'wl-form-tag': 'Start Free',
        'wl-form-title': 'Club Program',
        'wl-form-desc': 'Leave your information, we will call you and plan the best solution together.',
        'wl-div1': 'Club / Association Information',
        'wl-lbl-club': 'Club / Association Name',
        'wl-ph-club': 'e.g. EMU Software Club',
        'wl-lbl-type': 'Type',
        'wl-opt-select': 'Select...',
        'wl-opt-university': 'University Club',
        'wl-opt-sports': 'Sports Club',
        'wl-opt-ngo': 'Association / NGO',
        'wl-opt-school': 'School Club',
        'wl-opt-professional': 'Professional Association',
        'wl-opt-other': 'Other',
        'wl-lbl-members': 'Member Count',
        'wl-opt-m1': '1 – 25',
        'wl-opt-m2': '26 – 100',
        'wl-opt-m3': '101 – 300',
        'wl-opt-m4': '300+',
        'wl-lbl-city': 'City / Campus',
        'wl-opt-c1': 'Kyrenia',
        'wl-opt-c2': 'Nicosia',
        'wl-opt-c3': 'Famagusta',
        'wl-opt-c4': 'Morphou',
        'wl-opt-c5': 'Trikomo',
        'wl-div2': 'Contact Information',
        'wl-lbl-name': 'Your Name Surname',
        'wl-lbl-phone': 'Phone Number',
        'wl-lbl-role': 'Your Title',
        'wl-ph-role': 'President, Coordinator...',
        'wl-lbl-email': 'Email',
        'wl-lbl-msg': 'Tell Us Briefly',
        'wl-ph-msg': 'Briefly describe your club or write what you would like to ask...',
        'wl-btn-submit': 'Get in Touch Now',
        'wl-privacy-text': 'Your information is safe. Used only to contact you, never shared.',
        'wl-success-header': 'Message Received',
        'wl-success-body': 'We will contact you as soon as possible.<br>Usually we get back to you within <strong>24 hours</strong>.',
        'wl-success-fallback': 'We will call you as soon as possible',
        'wl-lbl-optional': '(optional)',
        'wl-ph-name': 'John Doe',
        'wl-ph-phone': '+90 548 000 00 00',
        'wl-ph-email': 'john@example.com',
        'wl-btn-sending': 'Sending...'
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
                if (element.hasAttribute('placeholder')) {
                    // Do not overwrite typed values
                } else {
                    element.value = content;
                }
            } else if (content.includes('<') && content.includes('>')) {
                element.innerHTML = content;
            } else {
                element.textContent = content;
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update page document title if meta exists
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
        const key = titleEl.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            document.title = translations[lang][key].replace(/<[^>]*>/g, '');
        }
    }

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
            flag.innerHTML = '<svg height="24px" width="36px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><path d="M0 0h900v600H0z" fill="#e30a17"/><path d="m417.504 300 135.68-44.078-83.86 115.41V228.668l83.86 115.41Zm9.25 80.21c-35.7 56.415-104.387 82.446-168.508 63.86C194.125 425.488 150 366.762 150 300s44.125-125.488 108.246-144.07c64.121-18.586 132.809 7.445 168.508 63.86-33.223-36.97-85.797-49.63-132.203-31.84C248.14 205.737 217.5 250.296 217.5 300s30.64 94.262 77.05 112.05c46.407 17.79 98.981 5.13 132.204-31.84" fill="#fff"/></svg>';
            text.textContent = 'TR';
        }
    }

}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    // Language toggle button with event delegation (robust to dynamic component load)
    document.addEventListener('click', (e) => {
        const langToggle = e.target.closest('#lang-toggle');
        if (langToggle) {
            const newLang = currentLang === 'tr' ? 'en' : 'tr';
            setLanguage(newLang);
        }
    });
});
