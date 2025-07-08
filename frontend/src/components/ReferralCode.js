import { useState } from 'react';
import { validateReferralCode } from '../data/affiliates';
import { GREEN_THEME } from '../utils/theme';

const ReferralCode = ({ onReferralValidated }) => {
    const [code, setCode] = useState('');
    const [validation, setValidation] = useState(null);
    const [isChecking, setIsChecking] = useState(false);

    const handleCodeChange = (e) => {
        const value = e.target.value.toUpperCase();
        setCode(value);
        
        // Reset validation saat user mengetik
        if (validation) {
            setValidation(null);
            if (onReferralValidated) {
                onReferralValidated(null);
            }
        }
    };

    const checkReferralCode = () => {
        if (!code.trim()) {
            setValidation({
                isValid: false,
                message: 'Masukkan kode referral terlebih dahulu'
            });
            return;
        }

        setIsChecking(true);
        
        // Simulasi delay untuk checking (bisa dihubungkan ke API)
        setTimeout(() => {
            const result = validateReferralCode(code.trim());
            setValidation(result);
            setIsChecking(false);
            
            if (onReferralValidated) {
                onReferralValidated(result);
            }
        }, 1000);
    };

    const clearCode = () => {
        setCode('');
        setValidation(null);
        if (onReferralValidated) {
            onReferralValidated(null);
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
                🎫 Kode Referral (Opsional)
            </h4>

            <div style={{ marginBottom: '15px' }}>
                <label style={{
                    display: 'block',
                    color: GREEN_THEME.textDim,
                    marginBottom: '8px',
                    fontSize: '14px'
                }}>
                    Masukkan kode referral untuk mendapat layanan dari affiliate:
                </label>
                
                <div style={{ 
                    display: 'flex', 
                    gap: '10px',
                    flexWrap: 'wrap'
                }}>
                    <input
                        type="text"
                        value={code}
                        onChange={handleCodeChange}
                        placeholder="Contoh: AHMAD2024"
                        disabled={validation?.isValid}
                        style={{
                            flex: '1',
                            minWidth: '200px',
                            padding: '12px',
                            border: `2px solid ${validation?.isValid ? GREEN_THEME.neon : 
                                validation?.isValid === false ? '#e74c3c' : GREEN_THEME.border}`,
                            borderRadius: '8px',
                            fontSize: '16px',
                            outline: 'none',
                            transition: 'border-color 0.3s ease',
                            opacity: validation?.isValid ? 0.7 : 1
                        }}
                        onFocus={(e) => {
                            if (!validation?.isValid) {
                                e.target.style.borderColor = GREEN_THEME.accent;
                            }
                        }}
                        onBlur={(e) => {
                            if (!validation?.isValid) {
                                e.target.style.borderColor = GREEN_THEME.border;
                            }
                        }}
                    />
                    
                    {!validation?.isValid && (
                        <button
                            onClick={checkReferralCode}
                            disabled={isChecking || !code.trim()}
                            style={{
                                background: isChecking ? GREEN_THEME.textDim : GREEN_THEME.accent,
                                color: 'white',
                                border: 'none',
                                padding: '12px 20px',
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                cursor: isChecking || !code.trim() ? 'not-allowed' : 'pointer',
                                transition: 'background 0.3s ease',
                                opacity: isChecking || !code.trim() ? 0.6 : 1,
                                whiteSpace: 'nowrap'
                            }}
                            onMouseOver={(e) => {
                                if (!isChecking && code.trim()) {
                                    e.target.style.background = GREEN_THEME.accent2;
                                }
                            }}
                            onMouseOut={(e) => {
                                if (!isChecking && code.trim()) {
                                    e.target.style.background = GREEN_THEME.accent;
                                }
                            }}
                        >
                            {isChecking ? '🔄 Checking...' : '✓ Cek Kode'}
                        </button>
                    )}

                    {validation?.isValid && (
                        <button
                            onClick={clearCode}
                            style={{
                                background: '#e74c3c',
                                color: 'white',
                                border: 'none',
                                padding: '12px 20px',
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease',
                                whiteSpace: 'nowrap'
                            }}
                            onMouseOver={(e) => e.target.style.background = '#c0392b'}
                            onMouseOut={(e) => e.target.style.background = '#e74c3c'}
                        >
                            ✕ Hapus
                        </button>
                    )}
                </div>
            </div>

            {validation && (
                <div style={{
                    background: validation.isValid ? GREEN_THEME.hover : '#fdf2f2',
                    border: `1px solid ${validation.isValid ? GREEN_THEME.neon : '#e74c3c'}`,
                    padding: '15px',
                    borderRadius: '8px',
                    marginBottom: '15px'
                }}>
                    <div style={{
                        color: validation.isValid ? GREEN_THEME.text : '#e74c3c',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        marginBottom: validation.isValid && validation.affiliate ? '10px' : '0'
                    }}>
                        {validation.isValid ? '✅' : '❌'} {validation.message}
                    </div>

                    {validation.isValid && validation.affiliate && (
                        <div style={{
                            background: GREEN_THEME.surface,
                            padding: '12px',
                            borderRadius: '6px',
                            fontSize: '13px',
                            color: GREEN_THEME.textDim
                        }}>
                            <div style={{ marginBottom: '5px' }}>
                                <strong>👤 Affiliate:</strong> {validation.affiliate.name}
                            </div>
                            <div style={{ marginBottom: '5px' }}>
                                <strong>📱 Kontak:</strong> {validation.affiliate.phone}
                            </div>
                            <div style={{ marginBottom: '5px' }}>
                                <strong>💰 Komisi:</strong> {validation.affiliate.commission}%
                            </div>
                            <div style={{ color: GREEN_THEME.neon, fontSize: '12px', marginTop: '8px' }}>
                                💡 Anda akan mendapat pelayanan langsung dari affiliate ini
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div style={{
                padding: '12px',
                background: GREEN_THEME.bg,
                borderRadius: '8px',
                fontSize: '12px',
                color: GREEN_THEME.textDim
            }}>
                <strong>ℹ️ Tentang Kode Referral:</strong>
                <br />
                • Gunakan kode referral untuk mendapat layanan dari affiliate terpilih
                <br />
                • Affiliate akan mendapat komisi 30% dari keuntungan
                <br />
                • Anda tetap mendapat harga dan kualitas yang sama
                <br />
                • Kode referral bersifat opsional
            </div>
        </div>
    );
};

export default ReferralCode;
