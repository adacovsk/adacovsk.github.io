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
        <h1>Adam Acovski</h1>
        <p className="tagline">Hydrogeological Engineer | Software Developer</p>
        <p className="intro">
          Hydrogeological engineer specializing in groundwater modeling, contaminant transport analysis,
          and automation-driven workflows. Combining technical expertise in numerical modeling with modern
          software engineering practices to deliver scalable, reproducible analyses.
        </p>
        <div className="links">
          <a href="https://github.com/adacovsk" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/adam-acovski-3625521a6" target="_blank" rel="noopener noreferrer">
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
        <h2>Summary</h2>
        <p>
          Hydrogeological engineer specializing in groundwater modeling, contaminant transport analysis,
          and automation-driven workflows. Combines technical expertise in numerical modeling with modern
          software engineering practices to deliver scalable, reproducible analyses. Experience spans
          mining consulting with focus on dewatering assessments, uncertainty quantification, and model calibration.
        </p>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>

        <div className="experience-item">
          <h3>Project Hydrogeologist</h3>
          <p className="company">ITASCA Consulting</p>
          <p className="date">July 2024 - Present</p>
          <p className="location">Lakewood, Colorado, United States</p>
          <ul>
            <li>Automated groundwater modeling pre-processing and post-processing workflows, reducing manual effort and improving project reproducibility</li>
            <li>Built scalable data processing pipelines for spatial-temporal monitoring datasets</li>
            <li>Developed Python-based interactive dashboards for decision support and investigations</li>
            <li>Containerized environments with Docker for deployment to VPN-accessible servers</li>
            <li>Established CI/CD pipelines with unit testing to prevent regressions during script refactoring</li>
            <li>Automated technical documentation deployment to AWS S3 for version-controlled distribution</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Groundwater Modeller</h3>
          <p className="company">SNC-Lavalin</p>
          <p className="date">November 2012 - April 2020</p>
          <p className="location">Saskatoon, Saskatchewan, Canada</p>
          <ul>
            <li>Optimized well field configurations for brine disposal into the Winnipeg-Deadwood formation using analytical and numerical simulations with fracture gradient modeling</li>
            <li>Calibrated complex hydrogeological models using PEST for parameter estimation for predictive simulation</li>
            <li>Developed custom FEFLOW plug-ins in C++ for geological modeling and mesh generation, including shapefile import with Delaunay triangulation constraint handling</li>
            <li>Performed particle-tracking simulations for uranium mine decommissioning to assess contaminant migration and inform remediation strategies</li>
            <li>Authored technical reports translating complex modeling results for Environmental Impact Assessments (EIAs)</li>
            <li>Designed, built, and maintained custom HPC workstations optimized for simulation applications</li>
            <li>Managed procurement of hardware, software, and networking equipment for cost-effective technology solutions</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Applied Science (BASc)</h3>
          <p className="school">University of Waterloo</p>
          <p className="major">Environmental/Environmental Health Engineering</p>
          <p className="date">2007 - 2012</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <div className="skills-category">
          <h4>Modeling & Simulation</h4>
          <div className="skills-grid">
            <span className="skill-tag">MODFLOW</span>
            <span className="skill-tag">flopy</span>
            <span className="skill-tag">FEFLOW</span>
            <span className="skill-tag">MINEDW</span>
            <span className="skill-tag">SEEP/W</span>
            <span className="skill-tag">ModelMuse</span>
            <span className="skill-tag">Groundwater Vistas</span>
            <span className="skill-tag">PEST</span>
          </div>
        </div>
        <div className="skills-category">
          <h4>Programming & Data Analysis</h4>
          <div className="skills-grid">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Pandas</span>
            <span className="skill-tag">NumPy</span>
            <span className="skill-tag">SciPy</span>
            <span className="skill-tag">C++</span>
            <span className="skill-tag">Rust</span>
            <span className="skill-tag">SQL</span>
          </div>
        </div>
        <div className="skills-category">
          <h4>Visualization</h4>
          <div className="skills-grid">
            <span className="skill-tag">Matplotlib</span>
            <span className="skill-tag">Seaborn</span>
            <span className="skill-tag">PyVista</span>
            <span className="skill-tag">Plotly/Dash</span>
          </div>
        </div>
        <div className="skills-category">
          <h4>DevOps & Infrastructure</h4>
          <div className="skills-grid">
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">CI/CD</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">AWS S3</span>
          </div>
        </div>
        <div className="skills-category">
          <h4>Other</h4>
          <div className="skills-grid">
            <span className="skill-tag">QGIS</span>
            <span className="skill-tag">PostgreSQL</span>
            <span className="skill-tag">Scikit-learn</span>
            <span className="skill-tag">PyTorch</span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <p>MSHA (Mine Safety and Health Administration) Training</p>
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

        <div className="experience-item">
          <h3>Groundwater Modeling Automation Framework</h3>
          <p className="date">2024 - Present</p>
          <ul>
            <li>Built end-to-end automation pipelines for MODFLOW pre-processing and post-processing using Python and flopy</li>
            <li>Reduced manual modeling workflow time by automating data preparation, mesh generation, and results extraction</li>
            <li>Implemented version control and unit testing for modeling scripts to ensure reproducibility across projects</li>
            <li>Technologies: Python, flopy, MODFLOW, Git, pytest</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Interactive Monitoring Dashboards</h3>
          <p className="date">2024 - Present</p>
          <ul>
            <li>Developed web-based dashboards for real-time groundwater monitoring data visualization and analysis</li>
            <li>Built interactive tools for decision support during hydrogeological investigations</li>
            <li>Deployed containerized applications to VPN-accessible servers for client access</li>
            <li>Technologies: Python, Plotly, Dash, Docker, PostgreSQL</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Spatial-Temporal Data Processing Pipeline</h3>
          <p className="date">2024 - Present</p>
          <ul>
            <li>Created scalable ETL pipelines for processing large monitoring datasets with spatial and temporal components</li>
            <li>Integrated GIS data processing with time-series analysis for hydrogeological applications</li>
            <li>Automated quality control checks and data validation workflows</li>
            <li>Technologies: Python, Pandas, QGIS, GeoPandas</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>FEFLOW Custom Plugins</h3>
          <p className="date">2012 - 2020</p>
          <ul>
            <li>Developed C++ plugins for FEFLOW to extend geological modeling and mesh generation capabilities</li>
            <li>Implemented shapefile import functionality with Delaunay triangulation constraint handling</li>
            <li>Enabled complex geological structure modeling for mining dewatering assessments</li>
            <li>Technologies: C++, FEFLOW API, computational geometry algorithms</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Personal Projects</h2>

        <div className="experience-item">
          <h3>Pathfinder 2e RPG Game</h3>
          <p className="date">November 2021 - Present</p>
          <ul>
            <li>Designed and implemented complex game systems using Entity-Component-System (ECS) architecture in Rust/Bevy</li>
            <li>Built procedural generation pipelines using Voronoi diagrams and Perlin noise for terrain, with AI pathfinding for NPCs</li>
            <li>Optimized system performance and scalability for large, dynamic game worlds</li>
            <li>Technologies: Rust, Bevy game engine, procedural generation algorithms</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Freelance Game Development</h3>
          <p className="date">2020 - Present</p>
          <ul>
            <li>Developed custom gameplay systems and features for multiplayer game projects</li>
            <li>Implemented server-side logic, game mechanics, and player interactions</li>
            <li>Collaborated with communities to design and iterate on game features based on user feedback</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default App