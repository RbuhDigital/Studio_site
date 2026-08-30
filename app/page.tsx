import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ServiceIcon } from "@/components/service-icon";
import { brand, contactIsConfigured } from "@/config/brand";
import { audienceTags, conceptProjects, faqs, packages, processSteps, reasons, services } from "@/data/home";

export const metadata: Metadata = {
  title: `${brand.name} | Websites, Design, Content & Digital Marketing`,
  description: "Friendly web design, content, branding and digital marketing for small and growing businesses. Start with what you need and grow from there.",
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Digital help, made human</p>
              <h1>Big digital help for <em>small businesses.</em></h1>
              <p className="hero-lede">Websites, content, design and digital marketing made simple for businesses that want to grow.</p>
              <div className="button-row">
                <a className="button button--coral" href="#contact">Tell us what you need <Arrow /></a>
                <a className="text-link" href="#services">Explore our services <span aria-hidden="true">↓</span></a>
              </div>
              <p className="reassurance"><span aria-hidden="true">✓</span> No technical knowledge needed. Just tell us about your business.</p>
            </div>
            <div className="hero-art" aria-label="Four connected services: website, content, design and growth" role="img">
              <div className="orbit orbit--one" />
              <div className="orbit orbit--two" />
              <div className="hero-card hero-card--web"><span className="mini-browser"><i /><i /><i /></span><strong>Website</strong><small>Get online</small></div>
              <div className="hero-card hero-card--content"><span className="mini-lines"><i /><i /><i /></span><strong>Content</strong><small>Say it clearly</small></div>
              <div className="hero-card hero-card--design"><span className="mini-shapes"><i /><i /><i /></span><strong>Design</strong><small>Look the part</small></div>
              <div className="hero-card hero-card--growth"><span className="mini-chart"><i /><i /><i /></span><strong>Growth</strong><small>Reach people</small></div>
              <div className="hero-center">Your<br /><strong>business</strong></div>
              <span className="spark spark--one">✦</span><span className="spark spark--two">✦</span>
            </div>
          </div>
        </section>

        <section className="audience section--compact" aria-labelledby="audience-title">
          <div className="container audience-grid">
            <div><p className="section-kicker">You&apos;re welcome here</p><h2 id="audience-title">Starting small?<br />That&apos;s completely fine.</h2></div>
            <div><p>Whether you&apos;re opening your first shop, improving an existing business, or simply want customers to find you online, we can start with what you actually need today.</p><div className="tag-list">{audienceTags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          </div>
        </section>

        <section className="section" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-heading"><div><p className="section-kicker">What we can do</p><h2 id="services-title">Four skills. One clearer<br />way to grow.</h2></div><p>Pick one place to begin or bring the pieces together. We&apos;ll keep it practical either way.</p></div>
            <div className="service-grid">{services.map((service) => <article className={`service-card service-card--${service.tone}`} key={service.title}><div className="service-card-top"><span>{service.number}</span><ServiceIcon kind={service.kind} /></div><h3>{service.title}</h3><p className="service-summary">{service.summary}</p><dl><div><dt>Good for</dt><dd>{service.forWhom}</dd></div><div><dt>What we can make</dt><dd>{service.deliverables}</dd></div></dl></article>)}</div>
          </div>
        </section>

        <section className="section guidance" aria-labelledby="guidance-title">
          <div className="container guidance-card"><div className="guidance-doodle" aria-hidden="true"><span>?</span><i /><i /><i /></div><div><p className="section-kicker">Not sure what you need?</p><h2 id="guidance-title">You don&apos;t need to know<br />the technical words.</h2></div><div><p>Tell us about your business and what you&apos;re trying to achieve. We&apos;ll help you figure out the simplest place to start.</p><a className="button button--dark" href="#contact">Tell us about your business <Arrow /></a></div></div>
        </section>

        <section className="section work" id="work" aria-labelledby="work-title">
          <div className="container"><div className="section-heading"><div><p className="section-kicker">Ideas made visible</p><h2 id="work-title">Concept projects</h2></div><p>Early explorations showing how our services can work together. These are concepts—not client work.</p></div><div className="project-grid">{conceptProjects.map((project, index) => <article className="project-card" key={project.title}><div className={`project-visual project-visual--${project.tone}`}><span className="concept-label">Concept 0{index + 1}</span><div className="project-scene"><span /><span /><span /></div></div><div className="project-body"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><ul>{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div></article>)}</div></div>
        </section>

        <section className="section process" id="process" aria-labelledby="process-title">
          <div className="container"><div className="section-heading"><div><p className="section-kicker">How it works</p><h2 id="process-title">Working together<br />should be simple.</h2></div><p>Four clear steps from first conversation to something useful in the real world.</p></div><ol className="process-list">{processSteps.map((step, index) => <li key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div>
        </section>

        <section className="section packages" aria-labelledby="packages-title"><div className="container"><div className="packages-intro"><p className="section-kicker">A comfortable place to begin</p><h2 id="packages-title">Start with what you need.<br /><em>Add more when you&apos;re ready.</em></h2><p>These are starting directions, not fixed packages. We&apos;ll shape the right scope around your business.</p></div><div className="package-grid">{packages.map((item, index) => <article className={`package-card package-card--${item.accent}`} key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><a href="#contact" aria-label={`Ask about ${item.title}`}>Ask what fits <Arrow /></a></article>)}</div></div></section>

        <section className="section why" id="about" aria-labelledby="why-title"><div className="container why-grid"><div className="why-copy"><p className="section-kicker">Why RBH</p><h2 id="why-title">Good digital work should make business feel <em>less complicated.</em></h2><p>We bring the important pieces together and explain them clearly, so you can make confident decisions without becoming a digital expert.</p></div><ul>{reasons.map((reason, index) => <li key={reason}><span>{String(index + 1).padStart(2, "0")}</span>{reason}</li>)}</ul></div></section>

        <section className="section faq" aria-labelledby="faq-title"><div className="container faq-grid"><div><p className="section-kicker">Questions are a good start</p><h2 id="faq-title">A few things you might be wondering.</h2><p>Don&apos;t see your question? You can simply tell us what&apos;s on your mind.</p><a className="text-link" href="#contact">Ask us anything <Arrow /></a></div><div className="faq-list">{faqs.map((faq, index) => <details key={faq.question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<i aria-hidden="true">+</i></summary><p>{faq.answer}</p></details>)}</div></div></section>

        <section className="section final-cta" id="contact" aria-labelledby="contact-title"><div className="container final-card"><div><p className="section-kicker">Your next step can be small</p><h2 id="contact-title">Have a business in mind?<br />Let&apos;s make the next step simple.</h2></div><div><p>Tell us where you are, what you&apos;re trying to do, or even just what feels confusing. That&apos;s enough to begin.</p><div className="button-row"><a className="button button--cream" href={brand.email ? `mailto:${brand.email}` : "#contact-note"}>Tell us what you need <Arrow /></a><a className="button button--outline-light" href={brand.whatsapp || "#contact-note"}>Chat on WhatsApp</a></div>{!contactIsConfigured && <p className="contact-note" id="contact-note">Contact details are being finalised. This button will be activated before launch.</p>}</div></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-grid"><div><a className="wordmark wordmark--footer" href="#top"><span className="wordmark-mark">{brand.shortName}</span><span>{brand.name.replace(`${brand.shortName} `, "")}</span></a><p>Digital help for small businesses—made simple.</p></div><div><h2>Explore</h2><a href="#services">Services</a><a href="#work">Concept work</a><a href="#process">How it works</a></div><div><h2>Studio</h2><a href="#about">About</a><a href="#contact">Contact</a><span>Privacy — coming soon</span></div><div><h2>Contact</h2><span>{brand.email || "Email — coming soon"}</span><span>{brand.phone || "Phone — coming soon"}</span><span>{brand.whatsapp || "WhatsApp — coming soon"}</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {brand.name}</span><span>Project Zero · Iteration 0</span></div></footer>
    </>
  );
}
