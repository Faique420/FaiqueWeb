const skills = [
  "Test scenarios",
  "Test case design",
  "Requirements analysis",
  "UML diagrams",
  "SQL Server",
  "SQLite",
  "HTML / CSS / JavaScript",
  "Python",
];

const projects = [
  {
    name: "Global Clothing Product Services",
    type: "Business website",
    description:
      "A static business website for Global Clothing Product Services, built with HTML, CSS, and JavaScript.",
    href: "https://github.com/Faique420/GCPSWebsite",
  },
  {
    name: "CodSoft Data Science Tasks",
    type: "Machine learning notebooks",
    description:
      "Five applied notebooks covering sales prediction, classification, fraud detection, and movie ratings.",
    href: "https://github.com/Faique420/CodSoft-Tasks",
  },
  {
    name: "Pakistan Temperature Predictor",
    type: "Data science project",
    description:
      "A Python and Jupyter Notebook project for modelling historical temperature data from Pakistan.",
    href:
      "https://github.com/Faique420/DataScience-Project-Faique-F2019065048-W1",
  },
];

const experience = [
  {
    period: "2024 — Present",
    role: "User Management IT Support Officer",
    organisation: "Finca Microfinance Bank",
    description:
      "Support user management, work with database queries, coordinate requests, and help users under day-to-day operational pressure.",
  },
  {
    period: "Nov 2022 — Feb 2023",
    role: "Database Teaching Assistant",
    organisation: "University of Management & Technology",
    description:
      "Supported database theory and lab assessments and assisted during midterm and final examinations.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="monogram" href="#home" aria-label="Muhammad Faique, home">
            <span>MF</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#about">About me</a>
            <a href="#skills">Skills</a>
            <a href="#work">Portfolio</a>
            <a className="contact-pill" href="mailto:ff.faique.ff@gmail.com">
              Contact me
            </a>
          </nav>
        </header>

        <div className="hero-copy">
          <p className="eyebrow">Hi, I am</p>
          <h1 id="hero-title">Muhammad Faique</h1>
          <p className="role">Software Engineer · SQA / QA Focus</p>
          <p className="hero-summary">
            I turn requirements into clear test scenarios and reliable software
            experiences—supported by hands-on IT support, database, and
            development knowledge.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              View portfolio
            </a>
            <a
              className="button button-light"
              href="/Muhammad-Faique-Resume.pdf"
              download
            >
              Download résumé
            </a>
          </div>
          <div className="social-links" aria-label="Professional links">
            <a href="mailto:ff.faique.ff@gmail.com" aria-label="Email Muhammad Faique">
              @
            </a>
            <a
              href="https://github.com/Faique420"
              target="_blank"
              rel="noreferrer"
              aria-label="Muhammad Faique on GitHub"
            >
              GH
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-faique-b21775226"
              target="_blank"
              rel="noreferrer"
              aria-label="Muhammad Faique on LinkedIn"
            >
              in
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <img
            src="/muhammad-faique-hero.png"
            alt=""
            width="1086"
            height="1448"
          />
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-number" aria-hidden="true">01</div>
        <div className="section-heading">
          <p className="kicker">About me</p>
          <h2>Quality-minded by training. Practical by experience.</h2>
        </div>
        <div className="about-copy">
          <p>
            I hold a BS in Software Engineering from the University of
            Management &amp; Technology, Lahore. My background connects software
            testing, requirements, databases, and user support—giving me a
            practical view of how software should work for both teams and users.
          </p>
          <div className="profile-facts" aria-label="Education and credentials">
            <div>
              <span>Education</span>
              <strong>BS Software Engineering</strong>
              <small>UMT Lahore · 2019–2023</small>
            </div>
            <div>
              <span>Certificates</span>
              <strong>SEO &amp; Digital Marketing</strong>
              <small>DigiSkills · 2021–2022</small>
            </div>
          </div>
          <a className="text-link" href="#experience">View experience <span>↓</span></a>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-number light" aria-hidden="true">02</div>
        <div className="section-heading light">
          <p className="kicker">Skills</p>
          <h2>A balanced testing and technical foundation.</h2>
        </div>
        <div className="skill-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-number" aria-hidden="true">03</div>
        <div className="section-heading">
          <p className="kicker">Experience</p>
          <h2>Work grounded in users, data, and dependable support.</h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.role}>
              <p className="experience-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="experience-org">{item.organisation}</p>
              <p className="experience-description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-number" aria-hidden="true">04</div>
        <div className="section-heading">
          <p className="kicker">Selected portfolio</p>
          <h2>Projects from GitHub.</h2>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <a
              className="project-row"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.name}
            >
              <span className="project-index">0{index + 1}</span>
              <span className="project-main">
                <strong>{project.name}</strong>
                <small>{project.description}</small>
              </span>
              <span className="project-type">{project.type}</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <a
          className="github-link"
          href="https://github.com/Faique420"
          target="_blank"
          rel="noreferrer"
        >
          View all repositories on GitHub <span>↗</span>
        </a>
      </section>

      <section className="contact-section" id="contact">
        <p className="kicker">Available for SQA opportunities</p>
        <h2>Let&apos;s build software people can trust.</h2>
        <a className="contact-email" href="mailto:ff.faique.ff@gmail.com">
          ff.faique.ff@gmail.com <span>↗</span>
        </a>
        <footer>
          <span>© {new Date().getFullYear()} Muhammad Faique</span>
          <span>Lahore, Pakistan</span>
        </footer>
      </section>
    </main>
  );
}
