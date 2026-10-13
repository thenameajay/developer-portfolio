import { createFileRoute } from '@tanstack/react-router';
import { ArrowDown, ArrowUpRight, ArrowUp, MapPin, Github, Linkedin, Mail, Phone, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import thriveImage from '@/assets/thrive-car.jpg';
import mortgageImage from '@/assets/mortgage-house.jpg';
import tohaaImage from '@/assets/tohaa-design.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Ajay Sharma — Full Stack Web Developer' },
    { name: 'description', content: 'Ajay Sharma is a full stack web developer building web applications, REST APIs and thoughtful digital experiences. Explore his professional work and experience.' },
    { property: 'og:title', content: 'Ajay Sharma — Full Stack Web Developer' },
    { property: 'og:description', content: 'Professional work in React, Node.js, WordPress and PrestaShop. Based in Jaipur, working on international projects.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
});

const projects = [
  { name: 'Thrive Black Car', category: 'CRM & TRANSPORTATION', location: 'Atlanta, USA', image: thriveImage, alt: 'Illustrative cover of a luxury black sedan in Atlanta', description: 'A React-based CRM for ride management, driver allocation, and trip tracking. Built booking and authentication APIs, with Twilio, Stripe, and Zapier integrations to automate operations.', tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PHP', 'CodeIgniter'] },
  { name: 'Mortgage House', category: 'FINANCE & REAL ESTATE', location: 'Sydney, Australia', image: mortgageImage, alt: 'Illustrative cover of a contemporary Australian home', description: 'Mortgage platform pages and appointment workflows, with secure broker authentication for an internal portal. Improved performance, responsiveness, and SEO across devices.', tags: ['WordPress', 'Elementor Pro', 'JavaScript', 'PHP', 'Jet Form Builder'] },
  { name: 'Tohaa Design', category: 'DESIGN & E-COMMERCE', location: 'Paris, France', image: tohaaImage, alt: 'Illustrative cover of designer furniture in a Paris apartment', description: 'A customized e-commerce experience with bespoke PrestaShop modules and related-product recommendations. Focused on debugging, testing, performance, and a seamless shopping experience.', tags: ['PrestaShop', 'PHP', 'JavaScript'] },
];
const skills = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'HTML5', 'CSS3'] },
  { label: 'Frameworks & CMS', items: ['React.js', 'Node.js', 'Express.js', 'WordPress', 'Elementor Pro', 'PrestaShop'] },
  { label: 'Databases', items: ['MongoDB', 'MySQL'] },
  { label: 'Tools & workflows', items: ['Git', 'GitHub', 'Postman', 'Jira', 'FileZilla', 'Puppeteer', 'Cheerio', 'Google Search Console', 'CrUX', 'PageSpeed Insights'] },
];

function Portfolio() {
  return (
    <div id="top">
      <header className="site-header">
        <div className="portfolio-container header-inner">
          <a href="#top" className="wordmark" aria-label="Ajay Sharma home"><span className="brand-mark">as.</span> Ajay Sharma</a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#work">Work</a><a href="#experience" className="desktop-link">Experience</a><a href="#skills" className="desktop-link">Skills</a><a href="#contact" className="nav-contact">Let’s talk <ArrowUpRight size={14} /></a>
          </nav>
        </div>
      </header>
      <main>
        <section className="portfolio-container hero" aria-labelledby="hero-title">
          <div className="eyebrow"><span className="status-dot" /> FULL STACK WEB DEVELOPER <span className="text-muted-foreground">/ JAIPUR, INDIA</span></div>
          <div className="hero-layout">
            <h1 id="hero-title">Hi, I’m <span className="hero-name text-foreground">Ajay Sharma.</span><span>I build for<br />the web.</span></h1>
            <div className="hero-intro">
              <p>I turn ideas into reliable digital experiences. From <strong>intuitive frontends to robust APIs</strong>, I build web applications that work beautifully—inside and out.</p>
              <div className="hero-actions"><Button asChild size="lg"><a href="#work">Explore my work <ArrowDown size={16} /></a></Button><Button asChild variant="ghost"><a href="mailto:thenameajay@gmail.com">Get in touch <ArrowUpRight size={16} /></a></Button></div>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="stack-inline"><span className="stack-label">MY EVERYDAY STACK</span><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>JavaScript</span></div>
            <div className="eyebrow text-muted-foreground">1+ YEARS OF EXPERIENCE <ArrowDown size={14} /></div>
          </div>
        </section>
        <section id="work" className="portfolio-container section" aria-labelledby="work-title">
          <div className="section-heading"><div><div className="eyebrow"><span className="section-index">01 /</span> SELECTED WORK</div><h2 id="work-title">Real projects. Real impact.</h2></div><p>Professional client projects I contributed to at HawksCode Technologies.<br />Project images are illustrative covers.</p></div>
          <div className="project-grid">{projects.map(project => <article key={project.name} className="project-card">
            <div className="project-cover"><img src={project.image} alt={project.alt} width={1200} height={800} loading="lazy" /><span className="project-category">{project.category}</span></div>
            <h3>{project.name}</h3><div className="project-location"><MapPin size={11} />{project.location}</div><p className="project-description">{project.description}</p><div className="tech-tags">{project.tags.map(tag => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
          </article>)}</div>
        </section>
        <section id="experience" className="experience-band section" aria-labelledby="experience-title">
          <div className="portfolio-container experience-layout">
            <div><div className="eyebrow"><span className="section-index">02 /</span> EXPERIENCE</div><h2 id="experience-title">Built in the<br />real world.</h2><p>Hands-on experience turning business requirements into production-ready solutions for international teams.</p></div>
            <div><div className="job-heading"><div><h3>Full Stack Web Developer</h3><p>HawksCode Technologies · Jaipur, Rajasthan</p></div><span className="job-date">JAN 2025 — PRESENT</span></div><ul className="job-points">
              <li><Plus size={14} /><span>Build and maintain web applications, REST APIs, and responsive websites across the React, Node.js, PHP, and CMS ecosystem.</span></li>
              <li><Plus size={14} /><span>Develop APIs for authentication, bookings, data management, and third-party integrations.</span></li>
              <li><Plus size={14} /><span>Built Puppeteer and Cheerio workflows to extract, process, and structure <strong className="text-accent">100K+ school records.</strong></span></li>
              <li><Plus size={14} /><span>Optimize performance, SEO, and Core Web Vitals while collaborating with international project teams.</span></li>
            </ul></div>
          </div>
        </section>
        <section id="skills" className="portfolio-container section" aria-labelledby="skills-title">
          <div className="skills-layout"><div className="skills-title"><div className="eyebrow"><span className="section-index">03 /</span> THE TOOLKIT</div><h2 id="skills-title">The right tools.<br />Thoughtful solutions.</h2></div><div>{skills.map(group => <div className="skill-row" key={group.label}><h3>{group.label}</h3><div className="skill-values">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div>
          <div className="education"><div className="eyebrow text-muted-foreground">EDUCATION</div><div><h3>B.Tech in Computer Science</h3><p>Rajasthan Technical University · Kota, Rajasthan</p></div><p className="font-mono">JUN 2021 — MAY 2025</p></div>
        </section>
        <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="portfolio-container contact-layout"><div><div className="eyebrow"><span className="section-index">04 /</span> GET IN TOUCH</div><h2 id="contact-title">Let’s build something<br />worth putting online.</h2><a className="email-link" href="mailto:thenameajay@gmail.com">thenameajay@gmail.com <ArrowUpRight size={22} /></a></div><div className="contact-socials"><a href="https://github.com/thenameajay" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={12} /></a><a href="https://linkedin.com/in/thenameajay" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} /></a><a href="tel:+919024370008" aria-label="Call Ajay at +91 902 437 0008"><Phone size={15} /> Call me <ArrowUpRight size={12} /></a></div></div></section>
      </main>
      <footer className="footer"><div className="portfolio-container footer-inner"><span>© 2026 AJAY SHARMA</span><span>CRAFTED WITH REACT & TAILWIND</span><a href="#top" className="inline-flex items-center gap-2">BACK TO TOP <ArrowUp size={12} /></a></div></footer>
    </div>
  );
}
