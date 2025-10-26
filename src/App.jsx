import { useState } from 'react'
import './App.css'

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
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'home' && <Home />}
        {activeTab === 'resume' && <Resume />}
      </main>
    </div>
  )
}

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome</h1>
        <p className="tagline">Software Developer | Tech Enthusiast</p>
        <p className="intro">
          Hi, I'm adacovsk. I build things and solve problems with code.
        </p>
        <div className="links">
          <a href="https://github.com/adacovsk" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/adacovsk" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
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
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Developer</h3>
          <p className="company">Company Name</p>
          <p className="date">2023 - Present</p>
          <ul>
            <li>Developed and maintained web applications</li>
            <li>Collaborated with cross-functional teams</li>
            <li>Implemented new features and improvements</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <p className="school">University Name</p>
          <p className="date">2019 - 2023</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <span className="skill-tag">Python</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">Rust</span>
          <span className="skill-tag">Git</span>
          <span className="skill-tag">Linux</span>
        </div>
      </section>
    </div>
  )
}

export default App