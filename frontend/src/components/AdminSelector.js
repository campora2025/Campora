import { useState } from 'react';
import { GREEN_THEME } from '../utils/theme';

const AdminSelector = ({ onAdminSelected, productInfo, pickupInfo, referralInfo }) => {
    const [selectedAdmin, setSelectedAdmin] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const admins = [
        {
            id: 'admin1',
            name: 'Admin Campora 1',
            phone: '6281234567890',
            whatsapp: 'https://wa.me/6281234567890',
            specialty: 'ID Card, Banner, Plakat',
            avatar: '👨‍💼'
        },
        {
            id: 'admin2', 
            name: 'Admin Campora 2',
            phone: '6281234567891',
            whatsapp: 'https://wa.me/6281234567891',
            specialty: 'Vest, Baju, Bundle KKN',
            avatar: '👩‍💼'
        }
    ];

    const handleAdminSelect = (admin) => {
        setSelectedAdmin(admin.id);
    };

    const handleCheckout = () => {
        if (!selectedAdmin) {
            alert('Silakan pilih admin terlebih dahulu');
            return;
        }

        setIsProcessing(true);
        
        const admin = admins.find(a => a.id === selectedAdmin);
        
        // Generate WhatsApp message
        let message = '';
        
        // Check if this is a product checkout or just a general inquiry
        if (productInfo && productInfo.price > 0) {
            message = `🛒 *CHECKOUT CAMPORA*\n\n`;
            message += `📋 *Detail Pesanan:*\n`;
            message += `• Produk: ${productInfo.name}\n`;
            message += `• Harga: Rp ${productInfo.price.toLocaleString('id-ID')}\n`;
            message += `• Kategori: ${productInfo.category}\n\n`;
        } else {
            message = `👋 *KONSULTASI CAMPORA*\n\n`;
            message += `📋 *Keperluan:*\n`;
            message += `• Konsultasi kebutuhan KKN\n`;
            message += `• Info produk dan layanan\n\n`;
        }

        if (productInfo.includes && productInfo.includes.length > 0) {
            message += `📦 *Isi Paket:*\n`;
            productInfo.includes.forEach(item => {
                message += `• ${item}\n`;
            });
            message += `\n`;
        }

        if (pickupInfo && pickupInfo.distance) {
            message += `🚚 *Info Pickup:*\n`;
            message += `• Jarak: ${pickupInfo.distance} km\n`;
            message += `• Biaya: ${pickupInfo.isFree ? 'GRATIS' : `Rp ${pickupInfo.finalPrice.toLocaleString('id-ID')}`}\n`;
            message += `• Estimasi waktu: ${pickupInfo.estimatedTime || 'Akan dikonfirmasi'}\n\n`;
        }

        if (referralInfo && referralInfo.isValid) {
            message += `🎫 *Kode Referral:*\n`;
            message += `• Kode: ${referralInfo.affiliate.code}\n`;
            message += `• Affiliate: ${referralInfo.affiliate.name}\n`;
            message += `• Kontak: ${referralInfo.affiliate.phone}\n\n`;
        }

        // Only show total price if this is a product purchase
        if (productInfo && productInfo.price > 0) {
            const totalPrice = productInfo.price + (pickupInfo?.finalPrice || 0);
            message += `💰 *Total: Rp ${totalPrice.toLocaleString('id-ID')}*\n\n`;
        }
        message += `👤 *Melayani: ${admin.name}*\n`;
        message += `📱 *Admin Contact: ${admin.phone}*\n\n`;
        message += `Mohon konfirmasi pesanan dan info lebih lanjut. Terima kasih! 🙏`;

        // Open WhatsApp
        const whatsappUrl = `${admin.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        // Callback
        if (onAdminSelected) {
            onAdminSelected(admin, message);
        }

        setIsProcessing(false);
    };

    return (
        <div style={{
            background: GREEN_THEME.surface,
            border: `2px solid ${GREEN_THEME.border}`,
            borderRadius: '12px',
            padding: '20px',
            marginTop: '20px'
        }}>
            <h4 style={{
                color: GREEN_THEME.text,
                marginBottom: '15px',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                👥 Pilih Admin untuk Checkout
            </h4>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '15px',
                marginBottom: '20px'
            }}>
                {admins.map(admin => (
                    <div
                        key={admin.id}
                        onClick={() => handleAdminSelect(admin)}
                        style={{
                            background: selectedAdmin === admin.id ? GREEN_THEME.hover : GREEN_THEME.bg,
                            border: `2px solid ${selectedAdmin === admin.id ? GREEN_THEME.neon : GREEN_THEME.border}`,
                            borderRadius: '10px',
                            padding: '15px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            textAlign: 'center'
                        }}
                        onMouseOver={(e) => {
                            if (selectedAdmin !== admin.id) {
                                e.target.style.background = GREEN_THEME.hover;
                                e.target.style.borderColor = GREEN_THEME.accent;
                            }
                        }}
                        onMouseOut={(e) => {
                            if (selectedAdmin !== admin.id) {
                                e.target.style.background = GREEN_THEME.bg;
                                e.target.style.borderColor = GREEN_THEME.border;
                            }
                        }}
                    >
                        <div style={{
                            fontSize: '40px',
                            marginBottom: '10px'
                        }}>
                            {admin.avatar}
                        </div>
                        
                        <div style={{
                            color: GREEN_THEME.text,
                            fontWeight: 'bold',
                            fontSize: '16px',
                            marginBottom: '5px'
                        }}>
                            {admin.name}
                        </div>
                        
                        <div style={{
                            color: GREEN_THEME.textDim,
                            fontSize: '14px',
                            marginBottom: '8px'
                        }}>
                            📱 {admin.phone}
                        </div>
                        
                        <div style={{
                            color: GREEN_THEME.accent,
                            fontSize: '12px',
                            fontStyle: 'italic'
                        }}>
                            🏷️ {admin.specialty}
                        </div>

                        {selectedAdmin === admin.id && (
                            <div style={{
                                marginTop: '8px',
                                color: GREEN_THEME.neon,
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }}>
                                ✅ Dipilih
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button
                onClick={handleCheckout}
                disabled={!selectedAdmin || isProcessing}
                style={{
                    width: '100%',
                    background: selectedAdmin ? GREEN_THEME.accent : GREEN_THEME.textDim,
                    color: 'white',
                    border: 'none',
                    padding: '15px 20px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: selectedAdmin && !isProcessing ? 'pointer' : 'not-allowed',
                    transition: 'all 0.3s ease',
                    opacity: selectedAdmin && !isProcessing ? 1 : 0.6
                }}
                onMouseOver={(e) => {
                    if (selectedAdmin && !isProcessing) {
                        e.target.style.background = GREEN_THEME.accent2;
                    }
                }}
                onMouseOut={(e) => {
                    if (selectedAdmin && !isProcessing) {
                        e.target.style.background = GREEN_THEME.accent;
                    }
                }}
            >
                {isProcessing ? '🔄 Memproses...' : selectedAdmin ? '🛒 Checkout via WhatsApp' : '⚠️ Pilih Admin Dulu'}
            </button>

            <div style={{
                marginTop: '15px',
                padding: '12px',
                background: GREEN_THEME.bg,
                borderRadius: '8px',
                fontSize: '12px',
                color: GREEN_THEME.textDim,
                textAlign: 'center'
            }}>
                💡 Setelah klik checkout, Anda akan diarahkan ke WhatsApp admin yang dipilih dengan detail pesanan lengkap
            </div>
        </div>
    );
};

export default AdminSelector;
