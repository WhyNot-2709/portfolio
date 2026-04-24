export default function Home() {
  const skills = {
    Languages: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'C / C++', icon: 'devicon-cplusplus-plain colored' },
    ],
    Frontend: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    ],
    'Backend & DB': [
      { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    ],
    'AI / ML': [
      { name: 'scikit-learn', icon: 'devicon-scikitlearn-plain colored' },
      { name: 'PyTorch', icon: 'devicon-pytorch-plain colored' },
      { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
    ],
  };

  return (
    <div className="page">
      {/* ── HERO ── */}
      <section className="hero">
        <p className="hero-greeting">Welcome to my portfolio</p>
        <h1 className="hero-name">
          Hi, I'm <span>Aakanksh Reddy</span>
        </h1>
        <p className="hero-tagline">AI &amp; Full Stack Developer</p>
        <p className="hero-desc">
          A 3rd-year B.Tech Artificial Intelligence student at Mahindra University, passionate about building intelligent systems and full-stack applications that solve real-world problems.
        </p>
        <div className="hero-btns">
          <a href="#about" className="btn-primary">About Me</a>
          <a href="#skills" className="btn-outline">My Skills</a>
        </div>
        <div className="hero-social">
          <a href="https://www.linkedin.com/in/himan-aakanksh-reddy-700a5b257" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/WhyNot-2709" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-sub">Who I am &amp; what drives me</p>
          <div className="about-grid">
            <div>
              <div className="about-photo">
                <img src={process.env.PUBLIC_URL + '/photo.jpg'} alt="Aakanksh" />
              </div>
            </div>
            <div className="about-text">
              <h3>Himan Aakanksh Reddy</h3>
              <p>
                I'm a 3rd-year B.Tech Artificial Intelligence student at Mahindra University, Hyderabad, driven by a genuine curiosity for how intelligent systems can improve the way people live and work. I enjoy building things — from predictive ML models to full-stack web applications — and I tend to think in systems rather than just features.
              </p>
              <p>
                Outside of code, I'm drawn to the intersection of technology and real-world impact, particularly in healthcare and automation. I believe in building software that is not only functional but also meaningful.
              </p>

              <div className="about-details">
                <div className="detail-item">
                  <div className="detail-label">Degree</div>
                  <div className="detail-value">B.Tech Artificial Intelligence</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">University</div>
                  <div className="detail-value">Mahindra University, Hyderabad</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Year</div>
                  <div className="detail-value">3rd Year (Graduating 2027)</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">CGPA</div>
                  <div className="detail-value">7.0 / 10</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Phone</div>
                  <div className="detail-value">+91 9908833311</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Personal Email</div>
                  <div className="detail-value">raakanksh@gmail.com</div>
                </div>
                <div className="detail-item" style={{gridColumn: '1 / -1'}}>
                  <div className="detail-label">College Email</div>
                  <div className="detail-value">se23uari048@mahindrauniversity.edu.in</div>
                </div>
              </div>

              <h4 style={{fontFamily:'var(--font-head)', fontSize:'0.85rem', color:'var(--purple)', textTransform:'uppercase', letterSpacing:'1.5px', marginBottom:'0.75rem'}}>Research Interests</h4>
              <div className="research-tags">
                <span className="tag">AI / Machine Learning</span>
                <span className="tag">Full Stack Development</span>
                <span className="tag">Healthcare AI</span>
                <span className="tag">Natural Language Processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <p className="section-sub">Technologies I work with</p>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-category" key={category}>
                <h4>{category}</h4>
                {items.map(s => (
                  <div className="skill-item" key={s.name}>
                    <i className={s.icon}></i>
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
