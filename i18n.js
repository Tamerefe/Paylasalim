// Multi-language support
const translations = {
    tr: {
        // Navigation
        'nav-home': 'Ana Sayfa',
        'nav-tech': 'Teknoloji & Nasıl Çalışır',
        'nav-search': 'Yolculuk Ara',
        'nav-download': 'İndir',
        'nav-blog': 'Blog',
        'nav-faq': 'SSS',
        'nav-about': 'Hakkımızda',
        'nav-contact': 'İletişim',

        // Hero Section
        'hero-badge': 'Flutter ile Geliştirildi',
        'hero-title': 'Güvenli ve Uygun<br>Yolculuk Paylaşımı',
        'hero-subtitle': 'Sürücüler ve yolcuları akıllı şekilde eşleştiren modern ulaşım çözümü. Kıbrıs\'ta ekonomik ve çevre dostu seyahat.',
        'hero-download': 'Uygulamayı İndir',
        'hero-explore': 'Özellikleri Keşfet',
        'stat-secure': 'Güvenli',
        'stat-savings': 'Tasarruf',

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


        // Search Page
        'search-badge': 'Gerçek Zamanlı Arama',
        'search-title': 'Yolculuk Ara',
        'search-subtitle': 'Rotana uygun yolculukları bul ve sürücülerle iletişime geç',
        'search-from': 'Nereden',
        'search-to': 'Nereye',
        'search-date': 'Tarih',
        'search-seats': 'Koltuk',
        'search-button': 'Ara',
        'search-loading': 'Yolculuklar yükleniyor...',
        'search-empty-title': 'Yolculuk Bulunamadı',
        'search-empty-desc': 'Filtreleri değiştirerek tekrar deneyin veya uygulamadan yeni yolculuk oluşturun.',
        'search-download-app': 'Uygulamayı İndir',
        'search-seats-all': 'Tümü',

        // Privacy Page
        'privacy-title': 'Gizlilik Politikası ve Sorumluluk Reddi',
        'privacy-subtitle': 'Kişisel Verilerin Korunması ve Kullanım Şartları',
        'privacy-page-title': 'Gizlilik ve Sorumluluk Reddi | Paylaşalım',
        'search-page-title': 'Yolculuk Ara | Paylaşalım',

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
        'home-wl-heading': 'Yayına Girdiğimizde<br>İlk Sen Haberdar Ol',
        'home-wl-desc': 'Erken erişim listesine katıl, uygulama çıktığında sana hemen bildiririz.',
        'home-wl-notify': '⚡ Anında bildirim',
        'home-wl-btn': 'Erken Erişim Listesine Katıl',
        'home-wl-privacy': '🔒 E-posta adresin güvende. Spam göndermiyoruz.',

        // Waitlist Page
        'wl-badge': 'Yakında Yayında',
        'wl-heading-main': 'Kıbrıs\'ın Carpool Uygulaması',
        'wl-heading-highlight': 'Yolda Geliyor',
        'wl-subtitle': 'Paylaşalım\'ı erken keşfeden kullanıcılardan biri ol. Yayına girdiğimizde sana hemen haber veririz ve özel avantajlardan yararlanırsın.',
        'wl-social-text': '<strong>50+</strong> kişi bekleme listesinde',
        'wl-counter-cities': '3 şehir',
        'wl-counter-uni': '5 üniversite',
        'wl-counter-savings': '%40 tasarruf',
        'wl-form-title': 'Erken Erişim Listesine Katıl',
        'wl-form-desc': 'Bildirim al, sürpriz ayrıcalıkları yakala.',
        'wl-label-fname': 'Adın Soyadın',
        'wl-label-os': 'Telefon İşletim Sistemi',
        'wl-os-placeholder': 'Seçin...',
        'wl-os-android': 'Android',
        'wl-os-apple': 'Apple (iOS)',
        'wl-label-email': 'E-posta adresin *',

        'wl-check-label': 'Test kullanıcısı olmak ister misin?',
        'wl-tester-placeholder': 'Seçin...',
        'wl-tester-yes': 'Evet',
        'wl-tester-no': 'Hayır',
        'wl-submit': 'Listeye Katıl (Ücretsiz)',
        'wl-privacy': '🔒 E-posta adresin güvende. Sadece uygulama haberleri için kullanılır, asla satılmaz.',
        'wl-perk1': 'Yayında ilk sana haber veririz',
        'wl-perk2': 'İlk kullanıcılara özel avantajlar',
        'wl-success-title': 'Harika, listedesin!',
        'wl-success-pre': 'Uygulama yayına girdiğinde ',
        'wl-success-post': ' adresine haber vereceğiz. Bizi arkadaşlarınla paylaş!',
        'wl-share-desc': 'Arkadaşlarını da davet et:',
        'wl-copy-label': 'Kopyala'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-tech': 'Technology & How It Works',
        'nav-search': 'Search Trips',
        'nav-download': 'Download',
        'nav-blog': 'Blog',
        'nav-faq': 'FAQ',
        'nav-about': 'About Us',
        'nav-contact': 'Contact',

        // Hero Section
        'hero-badge': 'Built with Flutter',
        'hero-title': 'Safe and Affordable<br>Ridesharing',
        'hero-subtitle': 'Modern transportation solution that smartly matches drivers and passengers. Economical and eco-friendly travel in Cyprus.',
        'hero-download': 'Download App',
        'hero-explore': 'Explore Features',
        'stat-secure': 'Secure',
        'stat-savings': 'Savings',

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

        // Search Page
        'search-badge': 'Real-Time Search',
        'search-title': 'Search Trips',
        'search-subtitle': 'Find trips that match your route and connect with drivers',
        'search-from': 'From',
        'search-to': 'To',
        'search-date': 'Date',
        'search-seats': 'Seats',
        'search-button': 'Search',
        'search-loading': 'Loading trips...',
        'search-empty-title': 'No Trips Found',
        'search-empty-desc': 'Try changing filters or create a new trip from the app.',
        'search-download-app': 'Download App',
        'search-seats-all': 'All',

        // Privacy Page
        'privacy-title': 'Privacy Policy and Disclaimer',
        'privacy-subtitle': 'Personal Data Protection and Terms of Use',
        'privacy-page-title': 'Privacy & Disclaimer | Paylaşalım',
        'search-page-title': 'Search Trips | Paylaşalım',

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
        'home-wl-heading': 'Be First to Know<br>When We Launch',
        'home-wl-desc': 'Join the early access list, we\'ll notify you when the app launches.',
        'home-wl-notify': '⚡ Instant notification',
        'home-wl-btn': 'Join the Early Access List',
        'home-wl-privacy': '🔒 Your email is safe. We don\'t send spam.',

        // Waitlist Page
        'wl-badge': 'Coming Soon',
        'wl-heading-main': 'Cyprus\'s Carpool App',
        'wl-heading-highlight': 'On the Way',
        'wl-subtitle': 'Be one of the first to discover Paylaşalım. When we launch, we\'ll notify you immediately and you\'ll enjoy exclusive benefits.',
        'wl-social-text': '<strong>50+</strong> people on the waitlist',
        'wl-counter-cities': '3 cities',
        'wl-counter-uni': '5 universities',
        'wl-counter-savings': '40% savings',
        'wl-form-title': 'Join the Early Access List',
        'wl-form-desc': 'Get notified, grab surprise perks.',
        'wl-label-fname': 'Full Name',
        'wl-label-os': 'Phone Operating System',
        'wl-os-placeholder': 'Select...',
        'wl-os-android': 'Android',
        'wl-os-apple': 'Apple (iOS)',
        'wl-label-email': 'Your Email *',

        'wl-check-label': 'Would you like to be a test user?',
        'wl-tester-placeholder': 'Select...',
        'wl-tester-yes': 'Yes',
        'wl-tester-no': 'No',
        'wl-submit': 'Join the List (Free)',
        'wl-privacy': '🔒 Your email is safe. Used only for app updates, never sold.',
        'wl-perk1': 'You\'ll be first to know when we launch',
        'wl-perk2': 'Exclusive perks for early users',
        'wl-success-title': 'You\'re on the list!',
        'wl-success-pre': 'We\'ll notify ',
        'wl-success-post': ' when the app launches. Share us with your friends!',
        'wl-share-desc': 'Invite your friends too:',
        'wl-copy-label': 'Copy'
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
            } else if (content.includes('<') && content.includes('>')) {
                // HTML içeriği varsa innerHTML kullan
                // Çeviriler kontrollü olduğu için güvenle kullanabiliriz
                // İzin verilen tagler: <br>, <strong>, <a>, <em>, <ul>, <li>, <p>
                element.innerHTML = content;
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
            flag.innerHTML = '<svg height="24px" width="36px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><path d="M0 0h900v600H0z" fill="#e30a17"/><path d="m417.504 300 135.68-44.078-83.86 115.41V228.668l83.86 115.41Zm9.25 80.21c-35.7 56.415-104.387 82.446-168.508 63.86C194.125 425.488 150 366.762 150 300s44.125-125.488 108.246-144.07c64.121-18.586 132.809 7.445 168.508 63.86-33.223-36.97-85.797-49.63-132.203-31.84C248.14 205.737 217.5 250.296 217.5 300s30.64 94.262 77.05 112.05c46.407 17.79 98.981 5.13 132.204-31.84" fill="#fff"/></svg>';
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
