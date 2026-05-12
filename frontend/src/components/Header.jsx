import React, { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 100,
          background: scrolled ? 'rgba(7, 16, 16, 0.85)' : 'rgba(7, 16, 16, 0.5)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 32px',
          height: '64px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00dddd" strokeWidth="2">
              <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
            </svg>
            <span style={{
              fontFamily: 'Sora, sans-serif',
              fontWeight: 800,
              fontSize: '18px',
              color: '#00dddd',
              letterSpacing: '0.05em',
              textShadow: '0 0 10px rgba(0,221,221,0.4)',
            }}>SUBHANKAR</span>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="desktop-nav">
            {['about', 'projects', 'experience', 'contact'].map(item => (
              <a key={item} href={`#${item}`} className="nav-link" style={{ textTransform: 'capitalize' }}>
                {item}
              </a>
            ))}
            <a
              href="https://portfolio-rtpl.onrender.com/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 18px',
                borderRadius: '6px',
                border: '1px solid rgba(0,221,221,0.5)',
                color: '#00dddd',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                background: 'rgba(0,221,221,0.06)',
                transition: 'background 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,221,221,0.14)'; e.currentTarget.style.boxShadow = '0 0 14px rgba(0,221,221,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,221,221,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00dddd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '12px 0',
        background: 'rgba(7, 16, 16, 0.9)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        zIndex: 100,
      }} className="mobile-nav">
        {[
          { label: 'About', icon: '👤', href: '#about' },
          { label: 'Work', icon: '💻', href: '#projects' },
          { label: 'History', icon: '📋', href: '#experience' },
          { label: 'Contact', icon: '✉️', href: '#contact' },
          { label: 'Resume', icon: '📄', href: 'https://portfolio-rtpl.onrender.com/resume.pdf', target: '_blank' },
        ].map(item => (
          <a key={item.label} href={item.href} target={item.target || '_self'} rel={item.target ? 'noopener noreferrer' : undefined} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: item.label === 'Resume' ? '#00dddd' : '#b9cac9',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}>
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            <span className="mobile-nav-label">{item.label}</span>
          </a>
        ))}
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .mobile-nav { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
