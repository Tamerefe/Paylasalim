# 🚗 Paylaşalım — Kuzey Kıbrıs Yolculuk Paylaşımı

[![Website](https://img.shields.io/badge/Website-paylasalim.com.tr-green.svg)](https://paylasalim.com.tr)
[![Flutter](https://img.shields.io/badge/Flutter-3.7.0-blue.svg)](https://flutter.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-10.0+-orange.svg)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Paylaşalım**, Kuzey Kıbrıs'ta güvenli ve ekonomik yolculuk paylaşımı (carpool) platformudur. Bu repo, Flutter mobil uygulamasının tanıtım web sitesini içermektedir.

🌐 **Canlı Site:** [paylasalim.com.tr](https://paylasalim.com.tr)

---

## 📁 Proje Yapısı

```
Paylasalim/
├── index.html                     # Ana sayfa
├── about.html                     # Hakkımızda
├── tech.html                      # Teknoloji & Nasıl Çalışır
├── download.html                  # Uygulama İndirme
├── search.html                    # Yolculuk Arama
├── blog.html                      # Blog Listesi
├── contact.html                   # İletişim
├── faq.html                       # Sık Sorulan Sorular
├── privacy.html                   # Gizlilik Politikası
│
├── blog/                          # Blog Makaleleri
│   ├── guvenli-carpool-icin-10-altin-kural.html
│   ├── ogrenciler-icin-ulasim-rehberi.html
│   ├── kibrista-ulasim-maliyetlerini-dusurmenin-yollari.html
│   ├── paylasimli-yolculuk-cevre-etkileri.html
│   ├── kuzey-kibrista-ogrenciler-icin-ulasim-rehberi-2026.html
│   ├── girneden-lefkosaya-ucuz-yolculuk-paylasimi.html
│   ├── kibrista-carpool-tasarruf-hesaplama.html
│   └── universite-ogrencileri-icin-carpool-grubu.html
│
├── assets/                        # Logo, görseller, ekran görüntüleri
├── styles.css                     # Yeşil/beyaz tema
├── script.js                      # Navigasyon, slider
├── i18n.js                        # TR/EN çoklu dil desteği
├── analytics-config.js            # Google Analytics 4 + Microsoft Clarity
├── cookie-consent.js              # KVKK uyumlu çerez yönetimi
├── search.js                      # Firebase yolculuk arama
├── sitemap.xml                    # SEO sitemap (17 URL)
├── robots.txt                     # Arama motoru yönergeleri
└── CNAME                          # GitHub Pages domain: paylasalim.com.tr
```

---

## 📝 Blog Yazıları

Tüm yazılar 1000+ kelime, özgün SEO içeriği ve long-tail anahtar kelimelerle hazırlanmıştır.

### Aralık 2025

| Başlık | Kategori | URL |
|--------|----------|-----|
| [Kıbrıs'ta Ulaşım Maliyetlerini Düşürmenin 7 Yolu](https://paylasalim.com.tr/blog/kibrista-ulasim-maliyetlerini-dusurmenin-yollari.html) | 💰 Tasarruf | `/blog/kibrista-ulasim-maliyetlerini-dusurmenin-yollari.html` |
| [Paylaşımlı Yolculuk ile Çevreyi Nasıl Koruruz?](https://paylasalim.com.tr/blog/paylasimli-yolculuk-cevre-etkileri.html) | 🌱 Çevre | `/blog/paylasimli-yolculuk-cevre-etkileri.html` |
| [Güvenli Carpool için 10 Altın Kural](https://paylasalim.com.tr/blog/guvenli-carpool-icin-10-altin-kural.html) | 🚗 Güvenlik | `/blog/guvenli-carpool-icin-10-altin-kural.html` |
| [Öğrenciler için Kıbrıs Ulaşım Rehberi 2025](https://paylasalim.com.tr/blog/ogrenciler-icin-ulasim-rehberi.html) | 🎓 Öğrenci | `/blog/ogrenciler-icin-ulasim-rehberi.html` |

### Mart 2026

| Başlık | Kategori | URL |
|--------|----------|-----|
| [Kuzey Kıbrıs'ta Öğrenciler İçin Ulaşım Rehberi (2026)](https://paylasalim.com.tr/blog/kuzey-kibrista-ogrenciler-icin-ulasim-rehberi-2026.html) | 🎓 Öğrenci | `/blog/kuzey-kibrista-ogrenciler-icin-ulasim-rehberi-2026.html` |
| [Girne'den Lefkoşa'ya En Ucuz Yolculuk Paylaşımı Rehberi](https://paylasalim.com.tr/blog/girneden-lefkosaya-ucuz-yolculuk-paylasimi.html) | 💰 Tasarruf | `/blog/girneden-lefkosaya-ucuz-yolculuk-paylasimi.html` |
| [Kıbrıs'ta Carpool ile Aylık Ne Kadar Tasarruf Edersiniz?](https://paylasalim.com.tr/blog/kibrista-carpool-tasarruf-hesaplama.html) | 💰 Tasarruf | `/blog/kibrista-carpool-tasarruf-hesaplama.html` |
| [Üniversite Öğrencileri İçin Carpool Grubu Nasıl Kurulur?](https://paylasalim.com.tr/blog/universite-ogrencileri-icin-carpool-grubu.html) | 🎓 Öğrenci | `/blog/universite-ogrencileri-icin-carpool-grubu.html` |

---

## 🌟 Web Sitesi Özellikleri

- **Responsive Tasarım** — Mobil, tablet ve masaüstü uyumlu
- **TR / EN Çift Dil** — `i18n.js` ile tüm sayfalar Türkçe/İngilizce
- **SEO Optimizasyonu** — Meta description, canonical, Open Graph, Twitter Card, JSON-LD
- **KVKK Uyumu** — Çerez onay banner, gizlilik politikası
- **Google Analytics 4 + Microsoft Clarity** — Kullanıcı davranışı analizi
- **Firebase Arama** — Gerçek zamanlı yolculuk ilanı arama (Firestore)
- **Blog** — SEO odaklı long-tail içerik stratejisi

---

## 🛠️ Mobil Uygulama

Paylaşalım mobil uygulaması Flutter ile geliştirilmiştir.

| Teknoloji | Detay |
|-----------|-------|
| Frontend | Flutter 3.7.0 & Dart 3.0+ |
| Backend | Firebase (Firestore, Auth, FCM) |
| Harita | Google Maps API |
| State | Provider |
| Konum | Geolocator |

**Platform Desteği:**
- Android 5.0+ (API 21)
- iOS 12.0+

---

## 🚀 Local Geliştirme

```powershell
# Klasöre gidin
cd "C:\Users\polis\Desktop\Paylasalim"

# Python HTTP server başlatın
python -m http.server 8000

# Tarayıcıda açın
Start-Process "http://localhost:8000"
```

---

## ✅ Tamamlanan SEO Çalışmaları

- [x] `sitemap.xml` oluşturuldu (17 URL, gerçek `lastmod` tarihleri)
- [x] `robots.txt` oluşturuldu
- [x] Tüm sayfalara `meta description` eklendi
- [x] Tüm sayfalara `canonical` eklendi
- [x] Tüm sayfalara Open Graph ve Twitter Card eklendi
- [x] Tüm sayfalara JSON-LD (Schema.org) eklendi
- [x] Long-tail anahtar kelimeler her sayfaya atandı
- [x] `meta keywords` tüm sayfalarda güncellendi
- [x] Blog yazıları 1000+ kelime, SEO başlıklı

---

## 📅 Blog Takvimi

| Ay | Hedef Yazı Sayısı | Durum |
|----|-------------------|-------|
| Aralık 2025 | 4 | ✅ Yayında |
| Mart 2026 | 4 | ✅ Yayında |
| Nisan 2026 | 4 | 🔲 Planlandı |

**Nisan 2026 için planlanan başlıklar:**
- Gazimağusa'dan Lefkoşa'ya Carpool Rehberi
- Kıbrıs'ta Havalimanı Transferi En Ucuz Nasıl Yapılır?
- Carpool Sürücüsü Olarak Aylık Ekstra Gelir Rehberi
- Kıbrıs'ta Çevre Dostu Ulaşımın Geleceği

---

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Yeni bir branch oluşturun (`feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin
4. Branch'inizi push edin
5. Pull Request açın

---

## 📞 İletişim

- **Website:** [paylasalim.com.tr](https://paylasalim.com.tr)
- **Email:** info@paylasalim.com.tr

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
