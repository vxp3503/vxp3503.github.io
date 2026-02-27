"use client";

import { useMemo, useState } from "react";

type Theme = "ocean" | "sunset";
type SkillFilter = "all" | "frontend" | "backend" | "devops" | "ai";

const profile = {
  name: "Vikrant Verma",
  role: "Software Engineer | SDE II",
  location: "India",
  email: "vikrantverma725@gmail.com",
  phone: "+91 8544738214",
  summary:
    "I build production-grade products across frontend, Python backend systems, and agentic AI workflows with strong focus on UX, performance, and reliability.",
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/vxp3503/" },
    { label: "GitHub", url: "https://github.com/vxp3503" },
    { label: "LeetCode", url: "https://leetcode.com/u/vikrantverma725/" },
  ],
};

const experience = [
  {
    company: "Hashedin by Deloitte",
    role: "SDE II",
    duration: "May 2024 - Present",
    location: "Gurugram",
    highlights: [
      "Develop and maintain Angular and React.js applications with responsive, user-focused UI/UX.",
      "Build reusable components and integrate interactive charts with Chart.js and Recharts.",
      "Collaborate with backend teams to integrate microservices and improve frontend performance.",
      "Build and consume Python-based backend APIs for high-volume, data-heavy modules.",
      "Design AI-ready service contracts to support LLM-powered and agent-driven product features.",
    ],
  },
  {
    company: "Valiance Solutions",
    role: "Software Engineer",
    duration: "February 2023 - May 2024",
    location: "Noida",
    highlights: [
      "Contributed to modern UI ideation and implementation.",
      "Built wildlife tracking workflows with AI-assisted insights and map-based visualization.",
      "Implemented Python service integrations for processing and exposing map and species intelligence data.",
      "Worked on decision-assist flows that resemble agentic pipelines for actionable field recommendations.",
    ],
  },
  {
    company: "Innovaccer",
    role: "Associate Software Engineer",
    duration: "July 2022 - February 2023",
    location: "Noida",
    highlights: [
      "Built API Accelerator frontend features using React.",
      "Integrated services into CI/CD pipelines and resolved high-priority bugs.",
      "Built JSON-rule validation tooling to improve UI automation test design.",
      "Worked closely with backend APIs and test automation systems for reliable release quality.",
    ],
  },
  {
    company: "Innovaccer",
    role: "Intern",
    duration: "January 2022 - July 2022",
    location: "Noida",
    highlights: [
      "Developed responsive React.js apps with ES6+ JavaScript.",
      "Integrated REST APIs with Python services (Flask/Django).",
      "Used Docker and AWS (EC2, S3, Lambda) for deployment workflows.",
      "Built backend utilities in Python for data transformation and API orchestration.",
    ],
  },
];

const projects = [
  {
    name: "Wildlife Tracking Platform",
    description:
      "AI-assisted map platform to track species movement, habitat context, and status for forest operations.",
    tags: ["React", "Maps", "Analytics", "Monitoring"],
  },
  {
    name: "API Accelerator",
    description:
      "Frontend tooling to validate JSON path rules and accelerate API test case design.",
    tags: ["React", "Automation", "CI/CD", "Testing"],
  },
  {
    name: "Python Backend Services",
    description:
      "RESTful backend modules in Python (Django/Flask style architecture) for business workflows, service orchestration, and data pipelines.",
    tags: ["Python", "Django", "Flask", "REST APIs"],
  },
  {
    name: "Agentic AI Workflows",
    description:
      "Task-oriented AI workflow design with tool-calling style orchestration, prompt pipelines, and validation loops for reliable automation.",
    tags: ["LLM", "Agentic AI", "Orchestration", "Evaluation"],
  },
];

const backendAiFocus = [
  {
    title: "Python Backend Engineering",
    points: [
      "Build APIs and backend flows with Python, Django, and Flask patterns.",
      "Implement data processing services and integration layers for frontend products.",
      "Design modular service boundaries, reusable business logic, and robust validation.",
    ],
    tags: ["Python", "Django", "Flask", "API Design"],
  },
  {
    title: "Agentic AI Systems",
    points: [
      "Develop agent-style workflows using planning, tool use, and multi-step execution logic.",
      "Add guardrails, retries, and output validation for safer AI-driven automation.",
      "Integrate AI workflows with product features, APIs, and operational dashboards.",
    ],
    tags: ["Agentic AI", "Prompt Engineering", "Tool Calling", "RAG/Context"],
  },
];

const skills = [
  {
    group: "frontend",
    area: "Frontend",
    items: ["React.js", "Angular", "JavaScript ES6", "HTML", "CSS", "SCSS"],
  },
  {
    group: "backend",
    area: "Backend",
    items: ["Python", "Django", "Flask", "Node.js", "NestJS", "REST APIs"],
  },
  { group: "devops", area: "DevOps", items: ["Docker", "AWS", "CI/CD"] },
  {
    group: "ai",
    area: "Agentic AI",
    items: ["LLM Workflows", "Tool Calling", "Prompt Engineering", "Evaluation"],
  },
] as const;

export default function Home() {
  const [theme, setTheme] = useState<Theme>("ocean");
  const [skillFilter, setSkillFilter] = useState<SkillFilter>("all");

  const filteredSkills = useMemo(() => {
    if (skillFilter === "all") return skills;
    return skills.filter((skill) => skill.group === skillFilter);
  }, [skillFilter]);

  const handleProjectHover = (event: React.MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  return (
    <main className={`portfolio-shell theme-${theme}`}>
      <div className="decor decor-a" />
      <div className="decor decor-b" />

      <header className="hero card">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="summary">{profile.summary}</p>

          <div className="social-row">
            {profile.social.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <aside className="hero-side">
          <p>{profile.location}</p>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>

          <div className="theme-switch">
            <button className={theme === "ocean" ? "active" : ""} onClick={() => setTheme("ocean")} type="button">
              Ocean
            </button>
            <button className={theme === "sunset" ? "active" : ""} onClick={() => setTheme("sunset")} type="button">
              Sunset
            </button>
          </div>
        </aside>
      </header>

      <section className="card section-block">
        <h2>Experience</h2>
        <div className="stack">
          {experience.map((job) => (
            <article className="exp-card" key={`${job.company}-${job.duration}`}>
              <div className="exp-head">
                <span>
                  <strong>{job.role}</strong>
                  <small>
                    {job.company} • {job.location}
                  </small>
                </span>
                <em>{job.duration}</em>
              </div>
              <div className="exp-body open">
                <ul>
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card section-block">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name} onMouseMove={handleProjectHover}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card section-block">
        <h2>Backend & Agentic AI</h2>
        <div className="grid">
          {backendAiFocus.map((item) => (
            <article className="skill-card" key={item.title}>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card section-block">
        <h2>Skills</h2>
        <div className="filters">
          {(["all", "frontend", "backend", "devops", "ai"] as const).map((filter) => (
            <button key={filter} className={skillFilter === filter ? "active" : ""} onClick={() => setSkillFilter(filter)} type="button">
              {filter}
            </button>
          ))}
        </div>

        <div className="grid">
          {filteredSkills.map((bucket) => (
            <article className="skill-card" key={bucket.area}>
              <h3>{bucket.area}</h3>
              <div className="tags">
                {bucket.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
