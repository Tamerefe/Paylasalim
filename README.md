# 🚗 Paylaşalım - Tanıtım Web Sitesi

[![Flutter](https://img.shields.io/badge/Flutter-3.7.0-blue.svg)](https://flutter.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-10.0+-orange.svg)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Paylaşalım**, Kıbrıs'ta yaşayan insanlar için geliştirilmiş, güvenli ve kullanıcı dostu bir paylaşımlı yolculuk uygulamasının tanıtım web sitesidir.

## 📁 Proje Yapısı

```
Paylasalim/
├── index.html          # Ana sayfa
├── styles.css          # Yeşil/beyaz tema stilleri
├── script.js           # Mobil menü JavaScript
└── README.md           # Bu dosya
```

## 🌟 Web Sitesi Özellikleri

- **Modern ve Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu
- **Yeşil/Beyaz Tema**: Marka kimliğine uygun renk paleti
- **Bölümler**:
  - Hero (Ana başlık ve CTA)
  - Özellikler (6 detaylı kart)
  - Teknoloji Stack (Flutter, Firebase, Google Maps)
  - Nasıl Çalışır (5 adımlı süreç)
  - İndir (App Store & Play Store butonları)
  - Hakkımızda (İstatistikler)
  - İletişim ve Katkıda Bulunma

## 🚀 Hızlı Başlatma

### PowerShell ile Local Server

```powershell
# Klasöre gidin
cd c:\Users\polis\Desktop\Paylasalim

# Python HTTP server başlatın
python -m http.server 8000

# Tarayıcıda açın
Start-Process "http://localhost:8000"
```

### Alternatif: Doğrudan Açma

`index.html` dosyasını çift tıklayarak doğrudan tarayıcınızda açabilirsiniz.

## 🛠️ Mobil Uygulama Hakkında

Paylaşalım mobil uygulaması Flutter ile geliştirilmiştir ve şu teknolojileri kullanır:

- **Frontend**: Flutter 3.7.0 & Dart 3.0+
- **Backend**: Firebase (Firestore, Authentication, Cloud Messaging)
- **Harita**: Google Maps API
- **State Management**: Provider
- **Konum**: Geolocator

### Ana Özellikler

✅ Güvenli Firebase Authentication  
✅ Yolculuk oluşturma ve arama  
✅ Gerçek zamanlı GPS takibi  
✅ Anlık mesajlaşma  
✅ Kullanıcı değerlendirme sistemi  
✅ Push notifications  

## 📱 Platform Desteği

- **Android**: 5.0+ (API Level 21)
- **iOS**: 12.0+

## 📝 Sonraki Adımlar

### Tasarım İyileştirmeleri
- [ ] Logo ve marka görselleri ekle
- [ ] Uygulama ekran görüntüleri (screenshots) ekle
- [ ] Animasyonlar ve hover efektleri iyileştir
- [ ] SEO meta tagları ekle

### İçerik Eklemeleri
- [ ] Sıkça Sorulan Sorular (FAQ) sayfası
- [ ] Gizlilik Politikası ve Kullanım Şartları
- [ ] Blog veya Haberler bölümü
- [ ] Başarı hikayeleri / Testimonials

### Teknik İyileştirmeler
- [ ] Google Analytics entegrasyonu
- [ ] Contact form backend entegrasyonu
- [ ] Newsletter/email subscription formu
- [ ] Çoklu dil desteği (TR/EN)

### Deployment
- [ ] GitHub Pages / Netlify / Vercel'e deploy
- [ ] Custom domain bağlantısı
- [ ] SSL sertifikası
- [ ] CDN entegrasyonu

## 🤝 Katkıda Bulunma

Web sitesine katkıda bulunmak isterseniz:

1. Projeyi fork edin
2. Yeni bir branch oluşturun (`feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin
4. Branch'inizi push edin
5. Pull Request açın

## 📞 İletişim

- **Email**: info@paylasalim.com
- **Website**: https://paylasalim.com
- **GitHub**: https://github.com/paylasalim

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

⭐ **Not**: Bu web sitesi, Paylaşalım mobil uygulamasının tanıtımı için hazırlanmış statik bir web sitesidir. Mobil uygulama Flutter ile geliştirilmektedir.