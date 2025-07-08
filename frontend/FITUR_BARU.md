# 🚀 FITUR BARU CAMPORA - PICKUP & REFERRAL

## ✨ Fitur yang Ditambahkan

### 1. 🚚 Kalkulator Pickup Otomatis
- **Lokasi**: Komponen `PickupCalculator.js`
- **Fitur**:
  - Hitung biaya pickup berdasarkan jarak secara otomatis
  - Gratis untuk radius 5 km
  - Tarif Rp 30.000/km untuk jarak > 5 km
  - Sistem diskon otomatis:
    - 10% untuk jarak ≥ 20 km
    - 15% untuk jarak ≥ 50 km  
    - 20% untuk jarak ≥ 100 km
  - Estimasi waktu pickup
  - UI modern dengan tema hijau

### 2. 🎫 Sistem Kode Referral
- **Lokasi**: Komponen `ReferralCode.js`
- **Fitur**:
  - Input dan validasi kode referral
  - Database affiliate dalam `affiliates.js`
  - Komisi 30% untuk affiliate
  - Tampilan info affiliate (nama, kontak, dll)
  - Validasi real-time

### 3. 👥 Database Affiliate
- **Lokasi**: `src/data/affiliates.js`
- **Data Affiliate**:
  - AF001 - AHMAD2024 (Ahmad Rizki)
  - AF002 - SARI2024 (Sari Dewi)
  - AF003 - BUDI2024 (Budi Santoso)
  - AF004 - MAYA2024 (Maya Putri)  
  - AF005 - ANDI2024 (Andi Wijaya)

### 4. 💰 Update Harga Produk
- **ID Card**: Rp 20.000 (modal: 13.000)
- **Banner/m**: Rp 26.000 (modal: 16.000)
- **Plakat**: Rp 105.000 (modal: 90.000)
- **Vest**: Rp 120.000 (modal: 105.000)
- **Vest Opsi**: Rp 130.000 (modal: 105.000)
- **Baju**: Rp 65.000 (modal: 55.000)
- **Pickup/km**: Rp 30.000 (modal: 20.000)

### 5. 📦 Bundle KKN
- **Bundle 1**: Rp 175.000 (ID Card + Banner + Plakat + Pickup)
- **Bundle 2**: Rp 290.000 (ID Card + Banner + Plakat + Vest + Pickup)
- **Bundle 3**: Rp 240.000 (ID Card + Banner + Plakat + Baju + Pickup)

## 🎯 Tampil di Halaman

### Kalkulator Pickup & Referral muncul di:
- ✅ Halaman detail produk Pickup (`/produk/pickup`)
- ✅ Halaman detail Bundle KKN (`/produk/bundle-1`, `/produk/bundle-2`, `/produk/bundle-3`)

### Fitur Otomatis:
- 📊 Ringkasan pesanan otomatis
- 💳 Kalkulasi total biaya (produk + pickup)
- 📞 Info kontak affiliate jika ada kode referral

## 🎨 UI/UX
- ✅ Tema hijau light mode konsisten
- ✅ Responsive design
- ✅ Animasi hover dan transisi
- ✅ Real-time validation
- ✅ Toast notifications
- ✅ Loading states

## 🔧 Cara Penggunaan

### Untuk Customer:
1. Pilih produk pickup atau bundle
2. Masukkan jarak pickup di kalkulator
3. (Opsional) Masukkan kode referral
4. Lihat ringkasan total biaya
5. Klik WhatsApp untuk order

### Untuk Affiliate:
1. Berikan kode referral ke customer
2. Customer input kode saat order
3. Sistem akan tampilkan info affiliate
4. Affiliate mendapat komisi 30%

## 📁 Struktur File Baru

```
frontend/src/
├── components/
│   ├── PickupCalculator.js      # Kalkulator pickup
│   ├── ReferralCode.js          # Input kode referral
│   └── produk/
│       └── ProdDetail.js        # ✅ Updated dengan fitur baru
├── data/
│   ├── affiliates.js            # Database affiliate
│   ├── products.js              # ✅ Updated harga sesuai data
│   └── categories.js            # ✅ Updated kategori
└── utils/
    ├── pickup.js                # Logic kalkulator pickup
    └── theme.js                 # Tema hijau
```

## 🚀 Status: SIAP PRODUCTION!

- ✅ Semua komponen dibuat
- ✅ Data produk sesuai spesifikasi
- ✅ UI tema hijau konsisten
- ✅ No errors detected
- ✅ Ready untuk npm start
