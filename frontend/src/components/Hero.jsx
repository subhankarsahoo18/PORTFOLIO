import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo('.hero-tag',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
      )
      .fromTo('.hero-title',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.3'
      )
      .fromTo('.hero-sub',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5'
      )
      .fromTo('.hero-btns',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4'
      )
      .fromTo('.hero-photo-wrap',
        { scale: 0.7, opacity: 0, rotationY: 30 },
        { scale: 1, opacity: 1, rotationY: 0, duration: 1.4, ease: 'elastic.out(1, 0.5)' }, '-=1.2'
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '96px 32px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial glow */}
      <div className="hero-mesh" style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '48px',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }} className="hero-grid">

        {/* Text content */}
        <div style={{ maxWidth: '640px' }}>
          {/* Availability badge */}
          <div className="hero-tag" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            border: '1px solid rgba(0,221,221,0.3)',
            background: 'rgba(0,221,221,0.06)',
            marginBottom: '24px',
          }}>
            <span className="pulse-dot" />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#00dddd',
            }}>Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="hero-title" style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(40px, 8vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '16px',
          }}>
            Subhankar<br />
            <span style={{ color: '#00dddd', textShadow: '0 0 30px rgba(0,221,221,0.4)' }}>Sahoo</span>
          </h1>

          {/* Role */}
          <p className="hero-sub" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            lineHeight: 1.7,
            color: '#b9cac9',
            maxWidth: '520px',
            marginBottom: '36px',
          }}>
            MERN Stack Developer specializing in React.js, Node.js, Express.js & MongoDB. Building fast, scalable full-stack applications with real-time capabilities.
          </p>

          {/* CTAs */}
          <div className="hero-btns" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">Contact Me</a>
            <a href="#projects" className="btn-outline">View Work</a>
          </div>

          {/* Stats row */}
          <div className="hero-btns" style={{
            display: 'flex',
            gap: '40px',
            marginTop: '48px',
            flexWrap: 'wrap',
          }}>
            {[['3+', 'Projects Built'], ['MERN', 'Core Stack']].map(([val, label]) => (
              <div key={label}>
                <div style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#00dddd',
                  textShadow: '0 0 15px rgba(0,221,221,0.4)',
                }}>{val}</div>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#839493',
                  marginTop: '2px',
                }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile photo */}
        <div className="hero-photo-wrap" style={{
          position: 'relative',
          width: '320px',
          height: '320px',
          flexShrink: 0,
        }}>
          {/* Outer spinning ring */}
          <div className="spin-slow" style={{
            position: 'absolute',
            inset: '-20px',
            borderRadius: '50%',
            border: '1px solid rgba(0,221,221,0.2)',
            borderTopColor: 'rgba(0,221,221,0.7)',
          }} />
          {/* Inner spinning ring */}
          <div className="spin-reverse" style={{
            position: 'absolute',
            inset: '-8px',
            borderRadius: '50%',
            border: '1px dashed rgba(0,221,221,0.15)',
            borderBottomColor: 'rgba(0,221,221,0.5)',
          }} />
          {/* Glow backdrop */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,221,221,0.08) 0%, transparent 70%)',
          }} />
          {/* Photo */}
          <img
            src="/profile.jpg"
            alt="Subhankar Sahoo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '3px solid rgba(0,221,221,0.4)',
              boxShadow: '0 0 40px rgba(0,0,0,0.6), 0 0 20px rgba(0,221,221,0.15)',
              position: 'relative',
              zIndex: 2,
              display: 'block',
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            justify-items: center;
            text-align: center;
          }
          .hero-photo-wrap {
            width: 220px !important;
            height: 220px !important;
            order: -1;
          }
          .hero-btns { justify-content: center; }
        }
      `}</style>
    </section>
  );
}
