import { useEffect, useState } from 'react';
import { calculatePickupPrice, calculatePickupTime, formatPrice } from '../utils/pickup';
import { GREEN_THEME } from '../utils/theme';

const PickupCalculator = ({ onPriceCalculated, productType = 'pickup' }) => {
    const [distance, setDistance] = useState('');
    const [calculation, setCalculation] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        if (distance && !isNaN(distance) && parseFloat(distance) > 0) {
            const result = calculatePickupPrice(parseFloat(distance));
            setCalculation(result);
            if (onPriceCalculated) {
                onPriceCalculated(result);
            }
        } else {
            setCalculation(null);
            if (onPriceCalculated) {
                onPriceCalculated(null);
            }
        }
    }, [distance, onPriceCalculated]);

    const handleDistanceChange = (e) => {
        const value = e.target.value;
        // Hanya izinkan angka dan titik desimal
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            setDistance(value);
        }
    };

    return (
        <div style={{
            background: GREEN_THEME.surface,
            border: `2px solid ${GREEN_THEME.border}`,
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px'
        }}>
            <h4 style={{
                color: GREEN_THEME.text,
                marginBottom: '15px',
                fontSize: '18px',
                fontWeight: 'bold'
            }}>
                🚚 Kalkulator Biaya Pickup
                {productType === 'bundle' && (
                    <span style={{ fontSize: '14px', color: GREEN_THEME.textDim, display: 'block' }}>
                        (Sudah termasuk dalam paket bundle)
                    </span>
                )}
            </h4>

            <div style={{ marginBottom: '15px' }}>
                <label style={{
                    display: 'block',
                    color: GREEN_THEME.textDim,
                    marginBottom: '8px',
                    fontSize: '14px'
                }}>
                    Jarak dari lokasi pickup (km):
                </label>
                <input
                    type="text"
                    value={distance}
                    onChange={handleDistanceChange}
                    placeholder="Masukkan jarak dalam km"
                    style={{
                        width: '100%',
                        padding: '12px',
                        border: `2px solid ${GREEN_THEME.border}`,
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                        ':focus': {
                            borderColor: GREEN_THEME.accent
                        }
                    }}
                    onFocus={(e) => e.target.style.borderColor = GREEN_THEME.accent}
                    onBlur={(e) => e.target.style.borderColor = GREEN_THEME.border}
                />
            </div>

            {calculation && (
                <div style={{
                    background: calculation.isFree ? GREEN_THEME.hover : GREEN_THEME.bg,
                    padding: '15px',
                    borderRadius: '8px',
                    border: `1px solid ${GREEN_THEME.border}`
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '10px'
                    }}>
                        <span style={{
                            color: GREEN_THEME.text,
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}>
                            {calculation.isFree ? '🎉 GRATIS!' : 'Biaya Pickup:'}
                        </span>
                        <span style={{
                            color: calculation.isFree ? GREEN_THEME.neon : GREEN_THEME.accent,
                            fontSize: '18px',
                            fontWeight: 'bold'
                        }}>
                            {calculation.isFree ? 'Rp 0' : formatPrice(calculation.finalPrice)}
                        </span>
                    </div>

                    <div style={{
                        color: GREEN_THEME.textDim,
                        fontSize: '14px',
                        marginBottom: '10px'
                    }}>
                        📍 Jarak: {calculation.distance} km
                        <br />
                        ⏱️ Estimasi waktu: {calculatePickupTime(calculation.distance)}
                        <br />
                        💬 {calculation.details}
                    </div>

                    {!calculation.isFree && (
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            style={{
                                background: 'transparent',
                                border: `1px solid ${GREEN_THEME.accent}`,
                                color: GREEN_THEME.accent,
                                padding: '8px 12px',
                                borderRadius: '6px',
                                fontSize: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.background = GREEN_THEME.accent;
                                e.target.style.color = 'white';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = GREEN_THEME.accent;
                            }}
                        >
                            {showDetails ? 'Sembunyikan Detail' : 'Lihat Detail'}
                        </button>
                    )}

                    {showDetails && !calculation.isFree && (
                        <div style={{
                            marginTop: '15px',
                            padding: '12px',
                            background: GREEN_THEME.surface,
                            borderRadius: '6px',
                            fontSize: '13px',
                            color: GREEN_THEME.textDim
                        }}>
                            <div style={{ marginBottom: '5px' }}>
                                💰 Harga dasar: {formatPrice(calculation.basePrice)}
                            </div>
                            {calculation.discount > 0 && (
                                <div style={{ marginBottom: '5px', color: GREEN_THEME.neon }}>
                                    🎁 Diskon ({(calculation.discount * 100)}%): -{formatPrice(calculation.discountAmount)}
                                </div>
                            )}
                            <hr style={{ margin: '8px 0', borderColor: GREEN_THEME.border }} />
                            <div style={{ fontWeight: 'bold', color: GREEN_THEME.accent }}>
                                💳 Total: {formatPrice(calculation.finalPrice)}
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div style={{
                marginTop: '15px',
                padding: '12px',
                background: GREEN_THEME.hover,
                borderRadius: '8px',
                fontSize: '12px',
                color: GREEN_THEME.textDim
            }}>
                <strong>ℹ️ Informasi Tarif:</strong>
                <br />
                • Gratis untuk radius 5 km
                <br />
                • Rp 30.000/km untuk jarak lebih dari 5 km
                <br />
                • Diskon 10% untuk jarak ≥ 20 km
                <br />
                • Diskon 15% untuk jarak ≥ 50 km
                <br />
                • Diskon 20% untuk jarak ≥ 100 km
                {productType === 'bundle' && (
                    <>
                        <br />
                        <br />
                        <strong>📦 Khusus Bundle:</strong>
                        <br />
                        • Pickup sudah include dalam harga bundle
                        <br />
                        • Kalkulator ini untuk estimasi tambahan jika diperlukan
                    </>
                )}
            </div>
        </div>
    );
};

export default PickupCalculator;
