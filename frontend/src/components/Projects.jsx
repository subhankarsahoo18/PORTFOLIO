import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Smart Local Service Finder',
    year: '2026',
    description: 'A full-stack local service marketplace built with React 19, Node.js, Express 5, and MongoDB with Vite and Tailwind CSS 4. Features real-time Socket.io communication, Twilio OTP verification, and immersive 3D UI with React Three Fiber.',
    bullets: [
      'Engineered a high-performance local service marketplace with React 19, Node.js, Express 5, and MongoDB',
      'Built real-time bidirectional communication using Socket.io for live booking updates and status sync',
      'Integrated Twilio OTP API for secure service-completion verification and fraud prevention',
      'Crafted immersive 3D UI with React Three Fiber and Three.js animations',
    ],
    tags: ['MERN Stack', 'Socket.io', 'Twilio', 'React Three Fiber', 'Tailwind CSS 4'],
    image: '/smart-local.png',
    link: 'https://smart-local-service-finder-liart.vercel.app/',
    featured: true,
  },
  {
    title: 'Real-Time Chat Application',
    year: '2026',
    description: 'A full-stack real-time chat application using MongoDB, Express.js, React.js, Node.js, and Socket.io with JWT authentication, image sharing via Cloudinary, and Zustand state management.',
    bullets: [
      'Implemented instant messaging with WebSockets for real-time updates without page refresh',
      'Built online/offline user presence tracking and dynamic message rendering',
      'Integrated JWT-based authentication and secure REST APIs for protected communication',
      'Enabled image sharing via Cloudinary and optimized state with Zustand',
    ],
    tags: ['Socket.io', 'React', 'Node.js', 'MongoDB', 'Cloudinary', 'Zustand', 'JWT'],
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
    link: 'https://chat-app-mern-flax.vercel.app/',
    featured: false,
  },
  {
    title: 'E-Commerce Full Stack Application',
    year: '2025',
    description: 'A full-stack e-commerce platform using React.js, Node.js, Express.js, and MongoDB with RESTful APIs for authentication, product management, and order processing with Stripe payment gateway.',
    bullets: [
      'Built a full-stack e-commerce platform with complete product management and order processing',
      'Integrated Stripe payment gateway for secure online transactions',
      'Implemented RESTful APIs for authentication, product management, and order workflows',
      'Optimized database queries and API responses, improving performance and reducing load time',
    ],
    tags: ['MERN Stack', 'Stripe', 'REST API', 'JWT', 'Express.js'],
    image: '/shopnex.png',
    link: 'https://shopnex-6q28.vercel.app/',
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.proj-card',
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" style={{
      padding: '120px 32px',
      background: 'rgba(7, 16, 16, 0.5)',
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
          }}>02 — Projects</span>
          <h2 className="section-heading">Featured <span>Work</span></h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: '#839493',
            marginTop: '12px',
          }}>Building digital solutions with purpose and precision.</p>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {projects.map((project, idx) => (
            <div key={project.title} className="glass-card project-card proj-card" style={{
              display: 'grid',
              gridTemplateColumns: idx % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '340px',
            }}>
              {/* Image side */}
              <div style={{
                order: idx % 2 === 0 ? 0 : 1,
                overflow: 'hidden',
                position: 'relative',
              }} className="proj-img-wrap">
                {project.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    background: 'rgba(0,221,221,0.15)',
                    border: '1px solid rgba(0,221,221,0.5)',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#00dddd',
                    zIndex: 2,
                  }}>⭐ Featured</div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease',
                    display: 'block',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: idx % 2 === 0
                    ? 'linear-gradient(to right, transparent 60%, rgba(13,21,21,0.7))'
                    : 'linear-gradient(to left, transparent 60%, rgba(13,21,21,0.7))',
                }} />
              </div>

              {/* Content side */}
              <div style={{
                order: idx % 2 === 0 ? 1 : 0,
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '16px',
              }}>
                {/* Year */}
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: '#839493',
                  letterSpacing: '0.15em',
                }}>{project.year}</span>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.3,
                }}>{project.title}</h3>

                {/* Description */}
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  lineHeight: 1.75,
                  color: '#b9cac9',
                }}>{project.description}</p>

                {/* Key bullets */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}>
                  {project.bullets.slice(0, 2).map(b => (
                    <li key={b} style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      color: '#839493',
                      paddingLeft: '16px',
                      position: 'relative',
                      lineHeight: 1.6,
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#00dddd',
                        fontWeight: 700,
                      }}>›</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="skill-badge">{tag}</span>
                  ))}
                </div>

                {/* CTA */}
                <a href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '13px',
                  color: '#00dddd',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  marginTop: '4px',
                  width: 'fit-content',
                  transition: 'gap 0.3s',
                }}
                  onMouseEnter={e => e.currentTarget.style.gap = '14px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '8px'}
                >
                  View Project <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .project-card { grid-template-columns: 1fr !important; }
          .proj-img-wrap { order: 0 !important; height: 200px; }
          .project-card > div:last-child { order: 1 !important; padding: 24px !important; }
        }
      `}</style>
    </section>
  );
}
