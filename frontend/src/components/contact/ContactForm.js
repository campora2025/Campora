import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { FONT, GREEN_THEME } from "../../utils/theme";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Simulasi kirim pesan (bisa diganti dengan API/emailjs)
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <Form onSubmit={handleSubmit} style={{ 
      background: GREEN_THEME.surface, 
      padding: 24, 
      borderRadius: 14, 
      boxShadow: `0 2px 12px ${GREEN_THEME.shadow}`,
      border: `1px solid ${GREEN_THEME.border}`
    }}>
      <h4 style={{ 
        color: GREEN_THEME.accent, 
        marginBottom: 18, 
        fontWeight: FONT.headerWeight 
      }}>Formulir Kontak</h4>
      {sent && <Alert variant="success">Pesan berhasil dikirim! Kami akan segera menghubungi Anda.</Alert>}
      <Form.Group className="mb-3">
        <Form.Label style={{ color: GREEN_THEME.text }}>Nama</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Nama Anda"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={{ color: GREEN_THEME.text }}>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Alamat Email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={{ color: GREEN_THEME.text }}>Pesan</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          required
          placeholder="Tulis pesan Anda di sini..."
        />
      </Form.Group>
      <Button type="submit" style={{ 
        background: GREEN_THEME.accent, 
        border: "none", 
        fontWeight: FONT.headerWeight,
        color: "white"
      }}>
        Kirim Pesan
      </Button>
    </Form>
  );
}