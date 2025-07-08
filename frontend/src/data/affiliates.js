// src/data/affiliates.js
export const affiliates = [
    {
        id: 'AF001',
        code: 'AHMAD2024',
        name: 'Ahmad Rizki',
        email: 'ahmad.rizki@email.com',
        phone: '08123456789',
        commission: 30, // 30%
        status: 'active',
        joinDate: '2024-01-15',
        totalSales: 15000000,
        totalCommission: 4500000
    },
    {
        id: 'AF002',
        code: 'SARI2024',
        name: 'Sari Dewi',
        email: 'sari.dewi@email.com',
        phone: '08234567890',
        commission: 30, // 30%
        status: 'active',
        joinDate: '2024-02-10',
        totalSales: 8500000,
        totalCommission: 2550000
    },
    {
        id: 'AF003',
        code: 'BUDI2024',
        name: 'Budi Santoso',
        email: 'budi.santoso@email.com',
        phone: '08345678901',
        commission: 30, // 30%
        status: 'active',
        joinDate: '2024-03-05',
        totalSales: 12000000,
        totalCommission: 3600000
    },
    {
        id: 'AF004',
        code: 'MAYA2024',
        name: 'Maya Putri',
        email: 'maya.putri@email.com',
        phone: '08456789012',
        commission: 30, // 30%
        status: 'active',
        joinDate: '2024-04-20',
        totalSales: 6000000,
        totalCommission: 1800000
    },
    {
        id: 'AF005',
        code: 'ANDI2024',
        name: 'Andi Wijaya',
        email: 'andi.wijaya@email.com',
        phone: '08567890123',
        commission: 30, // 30%
        status: 'active',
        joinDate: '2024-05-12',
        totalSales: 9500000,
        totalCommission: 2850000
    }
];

// Fungsi untuk mendapatkan affiliate berdasarkan kode referral
export const getAffiliateByCode = (code) => {
    return affiliates.find(affiliate => 
        affiliate.code.toLowerCase() === code.toLowerCase() && 
        affiliate.status === 'active'
    );
};

// Fungsi untuk validasi kode referral
export const validateReferralCode = (code) => {
    const affiliate = getAffiliateByCode(code);
    return {
        isValid: !!affiliate,
        affiliate: affiliate || null,
        message: affiliate ? 
            `Kode referral valid! Anda akan mendapat layanan dari ${affiliate.name}` :
            'Kode referral tidak valid atau tidak aktif'
    };
};
