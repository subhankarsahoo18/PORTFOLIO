import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.exp-item',
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );
      gsap.fromTo('.exp-dot',
        { scale: 0 },
        {
          scale: 1, duration: 0.5, stagger: 0.2, ease: 'back.out(2)',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" style={{ padding: '120px 32px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Section label */}
        <div style={{ marginBottom: '56px', textAlign: 'center' }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00dddd',
            display: 'block',
            marginBottom: '12px',
          }}>03 — Experience</span>
          <h2 className="section-heading">Work <span>History</span></h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          {/* Vertical line */}
          <div className="timeline-line" style={{
            position: 'absolute',
            left: 0,
            top: '24px',
            bottom: '24px',
            width: '2px',
          }} />

          {/* Experience item */}
          <div className="exp-item glass-card" style={{
            position: 'relative',
            padding: '32px',
            borderRadius: '16px',
            marginBottom: '32px',
          }}>
            {/* Dot */}
            <div className="exp-dot" style={{
              position: 'absolute',
              left: '-39px',
              top: '36px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: '#00dddd',
              border: '3px solid #0d1515',
              boxShadow: '0 0 15px rgba(0,221,221,0.5)',
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              <div>
                <h3 style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '4px',
                }}>MERN Stack Developer Intern</h3>
                <p style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '14px',
                  color: '#00dddd',
                  letterSpacing: '0.05em',
                }}>Sparkradix Technologies</p>
              </div>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '13px',
                color: '#839493',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '4px 14px',
                borderRadius: '9999px',
                alignSelf: 'start',
              }}>Sep 2025 – Jan 2026</span>
            </div>

            <ul style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.8,
              color: '#b9cac9',
              paddingLeft: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
              <li>Developed scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js.</li>
              <li>Implemented RESTful APIs with JWT-based authentication and role-based access control.</li>
              <li>Optimized frontend performance, reducing page load time by <span style={{ color: '#00dddd', fontWeight: 600 }}>50%</span> using code splitting and lazy loading.</li>
              <li>Collaborated with cross-functional teams to convert business requirements into technical solutions.</li>
              <li>Integrated Twilio SMS OTP and Nodemailer for production-grade user authentication workflows.</li>
            </ul>

            {/* Tech used */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
              {['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Twilio', 'REST API'].map(t => (
                <span key={t} className="skill-badge">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
