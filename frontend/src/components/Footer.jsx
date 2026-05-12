import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: '#071010',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 32px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Name */}
        <div style={{
          fontFamily: 'Sora, sans-serif',
          fontWeight: 800,
          fontSize: '20px',
          color: '#00dddd',
          letterSpacing: '0.1em',
          marginBottom: '20px',
          textShadow: '0 0 20px rgba(0,221,221,0.3)',
        }}>SUBHANKAR SAHOO</div>

        {/* Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {[
            ['LinkedIn', 'https://www.linkedin.com/in/subhankar-sahoo1810', '_blank'],
            ['GitHub', 'https://github.com/subhankarsahoo18', '_blank'],
            ['Email', 'mailto:subhankarsahoo615@gmail.com', '_self'],
            ['Resume', 'https://portfolio-rtpl.onrender.com/resume.pdf', '_blank'],
          ].map(([label, href, target]) => (
            <a key={label} href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              color: label === 'Resume' ? '#00dddd' : '#839493',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'color 0.3s',
            }}
              onMouseEnter={e => e.target.style.color = '#00dddd'}
              onMouseLeave={e => e.target.style.color = label === 'Resume' ? '#00dddd' : '#839493'}
            >{label}</a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(131, 148, 147, 0.4)',
        }}>
          © {new Date().getFullYear()} Subhankar Sahoo • Engineered for the Web
        </div>
      </div>
    </footer>
  );
}
