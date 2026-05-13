export default function Projects() {
  const projects = [
    {
      emoji: '📉',
      title: 'Employee Attrition Predictor',
      desc: 'A dual-model ML system that predicts whether an employee is likely to leave and estimates the financial loss to the company if they do. Built using classification and regression pipelines on HR analytics data.',
      tags: ['Python', 'scikit-learn', 'Pandas', 'Machine Learning'],
      github: 'https://github.com/WhyNot-2709',
    },
    {
      emoji: '🅿️',
      title: 'Parking Lot Management System',
      desc: 'A desktop GUI application for managing parking lot operations including slot allocation, vehicle tracking, and billing. Built entirely in Java using the Swing UI library.',
      tags: ['Java', 'Swing', 'OOP', 'Desktop App'],
      github: 'https://github.com/WhyNot-2709',
    },
    {
      emoji: '🏥',
      title: 'Clinical SOAP Note Generator',
      desc: 'An LLM-powered system that automatically generates structured SOAP notes from doctor-patient conversation transcripts. Fine-tuned on clinical data with BERTScore evaluation for quality assurance.',
      tags: ['Python', 'NLP', 'LLM', 'Healthcare AI'],
      github: 'https://github.com/WhyNot-2709',
    },
    {
      emoji: '🎓',
      title: 'SERS — Student Elective Registration',
      desc: 'A full-stack web app for managing student elective course registrations. Features a React frontend, Spring Boot REST API backend, and a PostgreSQL database hosted on Supabase with deployment on Vercel and Railway.',
      tags: ['React', 'Spring Boot', 'PostgreSQL', 'Supabase', 'Full Stack'],
      github: 'https://github.com/WhyNot-2709',
    },
  ];

  return (
    <div className="page">
      <section>
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">Things I've built, from ML models to full-stack applications</p>

          <div className="projects-grid">
            {projects.map((p) => (
              <div className="project-card" key={p.title}>
                <div className="project-card-img">{p.emoji}</div>
                <div className="project-card-body">
                  <h3 className="project-card-title">{p.title}</h3>
                  <p className="project-card-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map(t => <span className="project-tag" key={t}>{t}</span>)}
                  </div>
                  <div className="project-card-footer">
                    <a href={p.github} target="_blank" rel="noreferrer" className="project-btn project-btn-github">
                      ⭐ GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming soon */}
            <div className="project-card project-card-coming">
              <div className="coming-icon">🔬</div>
              <p className="coming-title">ML × Healthcare Project</p>
              <p className="coming-w">An upcoming machine learning project at the intersection of AI and the healthcare domain.</p>
              <span className="coming-badge">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
