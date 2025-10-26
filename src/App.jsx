import { useState } from 'react'
import './App.css'
import content from './content.json'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">adacovsk</h1>
        <div className="nav-links">
          <button
            className={activeTab === 'home' ? 'active' : ''}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button
            className={activeTab === 'resume' ? 'active' : ''}
            onClick={() => setActiveTab('resume')}
          >
            Resume
          </button>
          <button
            className={activeTab === 'projects' ? 'active' : ''}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'home' && <Home />}
        {activeTab === 'resume' && <Resume />}
        {activeTab === 'projects' && <Projects />}
      </main>
    </div>
  )
}

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>{content.home.name}</h1>
        <p className="tagline">{content.home.tagline}</p>
        <p className="intro">{content.home.intro}</p>
        <div className="links">
          {content.home.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>

      <section className="resume-section">
        <h2>Summary</h2>
        <p>{content.resume.summary}</p>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        {content.resume.experience.map((job, i) => (
          <div key={i} className="experience-item">
            <h3>{job.title}</h3>
            <p className="company">{job.company}</p>
            <p className="date">{job.date}</p>
            <p className="location">{job.location}</p>
            <ul>
              {job.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>{content.resume.education.degree}</h3>
          <p className="school">{content.resume.education.school}</p>
          <p className="major">{content.resume.education.major}</p>
          <p className="date">{content.resume.education.date}</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        {Object.entries(content.resume.skills).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <h4>{category}</h4>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        {content.resume.certifications.map((cert, i) => (
          <p key={i}>{cert}</p>
        ))}
      </section>
    </div>
  )
}

function Projects() {
  return (
    <div className="resume">
      <h1>Projects</h1>

      <section className="resume-section">
        <h2>Professional Engineering Tools</h2>
        {content.projects.professional.map((project, i) => (
          <div key={i} className="experience-item">
            <h3>{project.title}</h3>
            <p className="date">{project.date}</p>
            <ul>
              {project.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2>Personal Projects</h2>
        {content.projects.personal.map((project, i) => (
          <div key={i} className="experience-item">
            <h3>{project.title}</h3>
            <p className="date">{project.date}</p>
            <ul>
              {project.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App