import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Exact skills from resume — grouped by category
const skillGroups = [
  {
    label: 'Languages',
    skills: [
      { icon: '🟨', name: 'JavaScript' },
      { icon: '🧱', name: 'HTML5' },
      { icon: '🎨', name: 'CSS3' },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { icon: '⚛️', name: 'React.js' },
      { icon: '💨', name: 'Tailwind CSS' },
      { icon: '📱', name: 'Responsive Design' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { icon: '🟢', name: 'Node.js' },
      { icon: '🚂', name: 'Express.js' },
      { icon: '🔗', name: 'REST APIs' },
      { icon: '🔐', name: 'JWT Auth' },
      { icon: '🔌', name: 'Socket.io' },
    ],
  },
  {
    label: 'Database',
    skills: [
      { icon: '🍃', name: 'MongoDB' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { icon: '💻', name: 'VS Code' },
      { icon: '📬', name: 'Postman' },
      { icon: '📦', name: 'npm' },
      { icon: '⚡', name: 'Vite' },
    ],
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-text',
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
      gsap.fromTo('.skill-group',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' }
        }
      );
      gsap.fromTo('.skill-chip',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.4, stagger: 0.04, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" style={{
      padding: '120px 32px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section label */}
        <div style={{ marginBottom: '56px' }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00dddd',
            display: 'block',
            marginBottom: '12px',
          }}>01 — About</span>
          <h2 className="section-heading">Who I <span>Am</span></h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '72px',
          alignItems: 'start',
        }} className="about-grid">

          {/* ── LEFT: Bio text ── */}
          <div className="about-text">
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '17px',
              lineHeight: 1.85,
              color: '#b9cac9',
              marginBottom: '20px',
            }}>
              I'm a <span style={{ color: '#00dddd', fontWeight: 600 }}>MERN Stack Developer</span> currently
              pursuing my BCA at{' '}
              <span style={{ color: '#ffffff', fontWeight: 500 }}>
                Trident Academy of Creative Technology
              </span>
              , Bhubaneswar.
            </p>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '17px',
              lineHeight: 1.85,
              color: '#b9cac9',
              marginBottom: '28px',
            }}>
              I build production-grade web applications using{' '}
              <span style={{ color: '#00dddd', fontWeight: 600 }}>JavaScript, React.js, Node.js, Express.js</span>, and{' '}
              <span style={{ color: '#00dddd', fontWeight: 600 }}>MongoDB</span> — crafting fast, scalable,
              and responsive full-stack solutions with clean RESTful APIs and real-time capabilities via{' '}
              <span style={{ color: '#ffffff' }}>Socket.io</span> and{' '}
              <span style={{ color: '#ffffff' }}>JWT Authentication</span>.
            </p>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '17px',
              lineHeight: 1.85,
              color: '#b9cac9',
              marginBottom: '36px',
            }}>
              I'm deeply passionate about building intelligent, user-centered experiences and am always levelling
              up my craft — currently exploring agentic AI workflows and modern frontend tooling with{' '}
              <span style={{ color: '#ffffff' }}>Vite</span> and{' '}
              <span style={{ color: '#ffffff' }}>Tailwind CSS</span>.
            </p>

            {/* Info rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['🎓', 'Education', 'BCA — Trident Academy of Creative Technology'],
                ['📍', 'Location', 'Bhubaneswar, Odisha, India'],
                ['✉️', 'Email', 'subhankarsahoo615@gmail.com'],
              ].map(([icon, label, value]) => (
                <div key={label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(25, 33, 33, 0.5)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <span style={{ fontSize: '17px', flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '10px',
                      color: '#00dddd',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                    }}>{label}</div>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      color: '#dbe4e3',
                      marginTop: '2px',
                    }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Skills grouped ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#839493',
              marginBottom: '0px',
            }}>Technical Skills</p>

            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                {/* Category label */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                }}>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#00dddd',
                  }}>{group.label}</span>
                  <div style={{
                    flex: 1,
                    height: '1px',
                    background: 'linear-gradient(to right, rgba(0,221,221,0.2), transparent)',
                  }} />
                </div>

                {/* Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-chip glass-card" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      cursor: 'default',
                      transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.borderColor = 'rgba(0,221,221,0.35)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,221,221,0.1)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
                      }}
                    >
                      <span style={{ fontSize: '16px', lineHeight: 1 }}>{skill.icon}</span>
                      <span style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '12px',
                        color: '#dbe4e3',
                        letterSpacing: '0.04em',
                        whiteSpace: 'nowrap',
                      }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
