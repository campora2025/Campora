import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

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
    <Form onSubmit={handleSubmit} style={{ background: "#23242a", padding: 24, borderRadius: 14, boxShadow: "0 2px 12px #FFC10722" }}>
      <h4 style={{ color: "#FFC107", marginBottom: 18, fontWeight: 700 }}>Formulir Kontak</h4>
      {sent && <Alert variant="success">Pesan berhasil dikirim! Kami akan segera menghubungi Anda.</Alert>}
      <Form.Group className="mb-3">
        <Form.Label style={{ color: "#E0E0E0" }}>Nama</Form.Label>
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
        <Form.Label style={{ color: "#E0E0E0" }}>Email</Form.Label>
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
        <Form.Label style={{ color: "#E0E0E0" }}>Pesan</Form.Label>
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
      <Button type="submit" style={{ background: "#00bfae", border: "none", fontWeight: 700 }}>
        Kirim Pesan
      </Button>
    </Form>
  );
}