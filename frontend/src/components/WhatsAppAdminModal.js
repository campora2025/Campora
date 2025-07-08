import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GREEN_THEME } from '../utils/theme';
import AdminSelector from './AdminSelector';

const WhatsAppAdminModal = ({ show, handleClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  
  // Create a dummy product info for general WhatsApp inquiries
  const generalInquiryInfo = {
    name: "Konsultasi KKN",
    price: 0,
    category: "Konsultasi",
    includes: ["Konsultasi kebutuhan KKN", "Info produk dan layanan", "Custom order"]
  };
  
  const handleAdminSelected = (admin, message) => {
    // Close the modal when an admin is selected
    handleClose();
  };

  const handleModalClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      handleClose();
    }, 300);
  };

  return (
    <Modal 
      show={show} 
      onHide={handleModalClose}
      centered
      backdropClassName="whatsapp-modal-backdrop"
      className={`whatsapp-modal ${isClosing ? 'closing' : ''}`}
    >
      <Modal.Header 
        closeButton
        style={{
          background: GREEN_THEME.surface,
          borderBottom: `2px solid ${GREEN_THEME.border}`,
          padding: '15px 20px',
        }}
      >
        <Modal.Title 
          style={{
            color: GREEN_THEME.text,
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          💬 Hubungi Admin Campora
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body
        style={{
          background: GREEN_THEME.bg,
          padding: '20px',
        }}
      >
        <p style={{
          color: GREEN_THEME.textDim,
          marginBottom: '15px',
          textAlign: 'center',
          fontSize: '15px',
        }}>
          Silakan pilih admin yang ingin Anda hubungi untuk konsultasi kebutuhan KKN Anda
        </p>
        
        <AdminSelector 
          productInfo={generalInquiryInfo}
          onAdminSelected={handleAdminSelected}
        />
      </Modal.Body>
      
      <Modal.Footer
        style={{
          background: GREEN_THEME.surface,
          borderTop: `2px solid ${GREEN_THEME.border}`,
          padding: '15px 20px',
        }}
      >
        <Button 
          variant="light" 
          onClick={handleModalClose}
          style={{
            background: GREEN_THEME.surface,
            border: `1px solid ${GREEN_THEME.border}`,
            color: GREEN_THEME.text,
            fontWeight: 'bold',
          }}
        >
          Tutup
        </Button>
      </Modal.Footer>
      
      <style jsx global>{`
        .whatsapp-modal-backdrop {
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
        }
        
        .whatsapp-modal {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .whatsapp-modal.closing {
          opacity: 0;
          transform: scale(0.9);
        }
      `}</style>
    </Modal>
  );
};

export default WhatsAppAdminModal;
