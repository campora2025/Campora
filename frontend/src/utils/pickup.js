// src/utils/pickup.js

// Konstanta pricing untuk pickup
export const PICKUP_PRICING = {
    basePrice: 30000, // Harga dasar per km
    minimumDistance: 1, // Jarak minimum 1 km
    freeRadius: 5, // Radius gratis 5 km
    discountTiers: [
        { minKm: 20, discount: 0.1 }, // 10% discount untuk >= 20km
        { minKm: 50, discount: 0.15 }, // 15% discount untuk >= 50km
        { minKm: 100, discount: 0.2 }, // 20% discount untuk >= 100km
    ]
};

// Fungsi untuk menghitung harga pickup berdasarkan jarak
export const calculatePickupPrice = (distance) => {
    // Validasi input
    if (!distance || distance <= 0) {
        return {
            distance: 0,
            basePrice: 0,
            discount: 0,
            finalPrice: 0,
            isFree: false,
            details: 'Jarak tidak valid'
        };
    }

    // Jika dalam radius gratis
    if (distance <= PICKUP_PRICING.freeRadius) {
        return {
            distance,
            basePrice: 0,
            discount: 0,
            finalPrice: 0,
            isFree: true,
            details: `Gratis untuk radius ${PICKUP_PRICING.freeRadius} km`
        };
    }

    // Hitung harga dasar
    const effectiveDistance = Math.max(distance, PICKUP_PRICING.minimumDistance);
    const basePrice = effectiveDistance * PICKUP_PRICING.basePrice;

    // Cari discount tier yang sesuai
    const applicableDiscount = PICKUP_PRICING.discountTiers
        .filter(tier => distance >= tier.minKm)
        .reduce((max, tier) => tier.discount > max ? tier.discount : max, 0);

    // Hitung harga final
    const discountAmount = basePrice * applicableDiscount;
    const finalPrice = basePrice - discountAmount;

    return {
        distance: effectiveDistance,
        basePrice,
        discount: applicableDiscount,
        discountAmount,
        finalPrice,
        isFree: false,
        details: applicableDiscount > 0 ? 
            `Diskon ${(applicableDiscount * 100)}% untuk jarak ${distance} km` :
            `Tarif normal untuk jarak ${distance} km`
    };
};

// Fungsi untuk format harga ke rupiah
export const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
};

// Fungsi untuk menghitung estimasi waktu pickup
export const calculatePickupTime = (distance) => {
    const avgSpeed = 40; // km/jam rata-rata
    const prepTime = 30; // 30 menit persiapan
    const travelTime = (distance / avgSpeed) * 60; // dalam menit
    const totalTime = prepTime + (travelTime * 2); // pulang pergi + persiapan
    
    if (totalTime < 60) {
        return `${Math.round(totalTime)} menit`;
    } else {
        const hours = Math.floor(totalTime / 60);
        const minutes = Math.round(totalTime % 60);
        return minutes > 0 ? `${hours} jam ${minutes} menit` : `${hours} jam`;
    }
};
