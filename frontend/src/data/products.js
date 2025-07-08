// src/data/products.js
export const products = [
    // === PRODUK SATUAN ===
    // ID CARD
    {
        id: 'id-card',
        name: 'ID Card KKN',
        category: 'satuan',
        price: 20000,
        modal: 13000,
        keuntungan: 7000,
        image: '/images/id-card.png',
        description: 'ID Card khusus untuk peserta KKN dengan design custom universitas/kelompok. Material PVC berkualitas tinggi, tahan lama dan waterproof. Include tali lanyard premium.',
        whatsappMessage: 'Saya ingin pesan ID Card KKN dari Campora. Mohon info detail dan ketersediaan.'
    },

    // BANNER
    {
        id: 'banner',
        name: 'Banner KKN (per meter)',
        category: 'satuan',
        price: 26000,
        modal: 16000,
        keuntungan: 10000,
        image: '/images/banner.png',
        description: 'Banner promosi kegiatan KKN dengan material flexi korea premium. Tahan cuaca outdoor, warna tidak mudah pudar. Design sesuai tema dan lokasi KKN Anda.',
        whatsappMessage: 'Saya ingin pesan Banner KKN dari Campora. Mohon info detail dan ketersediaan.'
    },

    // PLAKAT
    {
        id: 'plakat',
        name: 'Plakat KKN',
        category: 'satuan',
        price: 105000,
        modal: 90000,
        keuntungan: 15000,
        image: '/images/plakat.png',
        description: 'Plakat kenang-kenangan untuk penutupan program KKN. Material akrilik premium dengan ukuran standar 20x15cm. Cocok untuk diberikan kepada desa/instansi terkait.',
        whatsappMessage: 'Saya ingin pesan Plakat KKN dari Campora. Mohon info detail dan ketersediaan.'
    },

    // VEST
    {
        id: 'vest',
        name: 'Vest KKN',
        category: 'satuan',
        price: 120000,
        modal: 105000,
        keuntungan: 15000,
        image: '/images/vest.png',
        description: 'Vest seragam untuk kegiatan KKN lapangan. Material polyester berkualitas, sablon DTF awet dan tidak mudah luntur. Tersedia ukuran S, M, L, XL.',
        whatsappMessage: 'Saya ingin pesan Vest KKN dari Campora. Mohon info detail dan ketersediaan.'
    },

    // VEST OPSI
    {
        id: 'vest-opsi',
        name: 'Vest KKN (Opsi Premium)',
        category: 'satuan',
        price: 130000,
        modal: 105000,
        keuntungan: 25000,
        image: '/images/vest-opsi.png',
        description: 'Vest KKN premium dengan material dry-fit yang nyaman dan breathable. Dilengkapi banyak kantong untuk keperluan lapangan. Design eksklusif dan profesional.',
        whatsappMessage: 'Saya ingin pesan Vest KKN Opsi Premium dari Campora. Mohon info detail dan ketersediaan.'
    },

    // BAJU
    {
        id: 'baju',
        name: 'Baju KKN',
        category: 'satuan',
        price: 65000,
        modal: 55000,
        keuntungan: 10000,
        image: '/images/baju.png',
        description: 'T-shirt seragam KKN dengan bahan cotton combed 30s yang nyaman dan menyerap keringat. Sablon plastisol berkualitas tinggi. Cocok untuk kegiatan harian.',
        whatsappMessage: 'Saya ingin pesan Baju KKN dari Campora. Mohon info detail dan ketersediaan.'
    },

    // PICKUP
    {
        id: 'pickup',
        name: 'Layanan Pickup (per km)',
        category: 'satuan',
        price: 30000,
        modal: 20000,
        keuntungan: 10000,
        image: '/images/pickup.png',
        description: 'Layanan transportasi pickup untuk mobilisasi barang-barang KKN ke lokasi. Termasuk driver berpengalaman, BBM, dan asuransi. Kapasitas muatan hingga 1 ton.',
        whatsappMessage: 'Saya ingin pesan Layanan Pickup dari Campora. Mohon info detail dan ketersediaan.'
    },

    // === BUNDLE KKN ===
    // BUNDLE 1
    {
        id: 'bundle-1',
        name: 'Bundle KKN 1',
        category: 'bundle',
        price: 175000,
        modal: 139000,
        keuntungan: 36000,
        image: '/images/bundle-1.png',
        description: 'Paket basic untuk program KKN yang efektif dan berkesan. Termasuk ID Card untuk identitas, Banner untuk promosi kegiatan, Plakat kenang-kenangan, dan layanan Pickup untuk mobilisasi.',
        includes: ['ID Card', 'Banner', 'Plakat', 'Pickup'],
        whatsappMessage: 'Saya ingin pesan Bundle KKN 1 dari Campora. Mohon info detail dan ketersediaan.'
    },

    // BUNDLE 2
    {
        id: 'bundle-2',
        name: 'Bundle KKN 2',
        category: 'bundle',
        price: 290000,
        modal: 244000,
        keuntungan: 46000,
        image: '/images/bundle-2.png',
        description: 'Paket lengkap KKN dengan seragam profesional. Dilengkapi ID Card, Banner promosi, Plakat kenang-kenangan, Vest untuk kegiatan lapangan, dan layanan Pickup.',
        includes: ['ID Card', 'Banner', 'Plakat', 'Vest', 'Pickup'],
        whatsappMessage: 'Saya ingin pesan Bundle KKN 2 dari Campora. Mohon info detail dan ketersediaan.'
    },

    // BUNDLE 3
    {
        id: 'bundle-3',
        name: 'Bundle KKN 3',
        category: 'bundle',
        price: 240000,
        modal: 194000,
        keuntungan: 46000,
        image: '/images/bundle-3.png',
        description: 'Paket KKN dengan fokus kenyamanan sehari-hari. Termasuk ID Card, Banner, Plakat, Baju KKN yang nyaman untuk aktivitas harian, dan layanan Pickup.',
        includes: ['ID Card', 'Banner', 'Plakat', 'Baju', 'Pickup'],
        whatsappMessage: 'Saya ingin pesan Bundle KKN 3 dari Campora. Mohon info detail dan ketersediaan.'
    }
];