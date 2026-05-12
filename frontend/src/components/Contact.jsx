import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-card',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://portfolio-rtpl.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '8px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#dbe4e3',
    fontFamily: 'Inter, sans-serif',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  };

  return (
    <section ref={sectionRef} id="contact" style={{ padding: '120px 32px 180px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section label */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00dddd',
            display: 'block',
            marginBottom: '12px',
          }}>04 — Contact</span>
          <h2 className="section-heading">Let's Build Something <span>Legendary</span></h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#839493', marginTop: '12px' }}>
            I'm open to opportunities, collaborations, and great conversations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }} className="contact-grid">
          {/* Left: CTA info */}
          <div className="contact-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              ['✉️', 'Email', 'subhankarsahoo615@gmail.com', 'mailto:subhankarsahoo615@gmail.com'],
              ['💼', 'LinkedIn', 'Connect on LinkedIn', 'https://www.linkedin.com/in/subhankar-sahoo1810'],
              ['🐙', 'GitHub', 'View GitHub Profile', 'https://github.com/subhankarsahoo18'],
            ].map(([icon, label, val, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="glass-card" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px 24px',
                  borderRadius: '12px',
                  transition: 'transform 0.3s, border-color 0.3s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.borderColor = 'rgba(0,221,221,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <span style={{ fontSize: '24px' }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00dddd', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#839493', marginTop: '2px' }}>{val}</div>
                  </div>
                </div>
              </a>
            ))}

            <div style={{
              padding: '24px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(0,221,221,0.08), rgba(0,221,221,0.03))',
              border: '1px solid rgba(0,221,221,0.2)',
              marginTop: '8px',
            }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#b9cac9', lineHeight: 1.7, margin: 0 }}>
                ⚡ Currently available for <span style={{ color: '#00dddd', fontWeight: 600 }}>full-time roles</span> and
                <span style={{ color: '#00dddd', fontWeight: 600 }}> freelance projects</span> in MERN development and AI-powered applications.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <form className="contact-card glass-card" onSubmit={handleSubmit} style={{
            padding: '32px',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
            <div>
              <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#839493', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Name</label>
              <input
                style={inputStyle}
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
                onFocus={e => e.target.style.borderColor = 'rgba(0,221,221,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <div>
              <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#839493', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Email</label>
              <input
                style={inputStyle}
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
                onFocus={e => e.target.style.borderColor = 'rgba(0,221,221,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <div>
              <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#839493', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Message</label>
              <textarea
                style={{ ...inputStyle, height: '140px', resize: 'vertical' }}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
                onFocus={e => e.target.style.borderColor = 'rgba(0,221,221,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%' }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Sent!' : 'Send Message →'}
            </button>
            {status === 'error' && (
              <p style={{ color: '#ffb4ab', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', textAlign: 'center' }}>
                Could not send. Please email me directly.
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
