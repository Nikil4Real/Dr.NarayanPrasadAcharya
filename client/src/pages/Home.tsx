import { useEffect, useState, type MouseEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronUp,
  Facebook,
  Linkedin,
  Menu,
  MoveUpRight,
  Play,
  Quote,
  Sparkles,
  X,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Keynote energy",
    copy: "High-voltage talks that turn a room from passive to participating — in minutes, not months.",
    tag: "SEMINARS",
  },
  {
    number: "02",
    title: "Teams that move",
    copy: "Hands-on retreats and leadership experiences designed to make better collaboration feel inevitable.",
    tag: "RETREATS",
  },
  {
    number: "03",
    title: "Performance, humanized",
    copy: "Practical training for communication, mindset and high performance that survives beyond the workshop.",
    tag: "TRAINING",
  },
];

const capabilities = [
  "Leadership development",
  "Communication skills",
  "Mindset & motivation",
  "Emotional intelligence",
  "Goal setting",
  "Sales excellence",
];

const faqs = [
  ["Who is Dr. Narayan?", " A medical council registered doctor and world record holder in different twelve titles based in Chitwan, Nepal."],
  ["Can programs be customized?", "Yes. Every experience is designed around your people, goals, context and timeline."],
  ["Where does he speak?", "All Across Nepal and internationally, including the India. You can also book him for virtual one-to-one sessions."],
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function Home({ path = "/" }: { path?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, [path]);

  const closeMenu = () => setMenuOpen(false);
  const navigateTo = (path: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeMenu();
    window.history.pushState({}, "", path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <main className={`site-shell page-${path.slice(1) || "home"}`}>
      <div className="grain" aria-hidden="true" />
      <header className={`nav-wrap ${scrolled ? "nav-scrolled" : ""}`}>
        <a href="/" className="brand" onClick={navigateTo("/")}>DR.NARAYAN<span>.</span></a>
        <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}>
          <a href="/work" onClick={navigateTo("/work")}>What I do</a>
          <a href="/about" onClick={navigateTo("/about")}>About</a>
          <a href="/proof" onClick={navigateTo("/proof")}>Proof</a>
          <a href="/contact" className="nav-cta" onClick={navigateTo("/contact")}>Bring the energy <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-btn" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-orb orb-a" />
        <div className="hero-orb orb-b" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <Reveal><p className="eyebrow"><span className="eyebrow-dot" /> SPEAKER / TRAINER / DOCTOR</p></Reveal>
            <Reveal delay={90}><h1>Make the room<br /><em>move.</em></h1></Reveal>
            <Reveal delay={160}><p className="hero-lede">I help ambitious people and teams turn potential into momentum — with perspective, play and a little more pulse.</p></Reveal>
            <Reveal delay={220}><div className="hero-actions"><a href="https://wa.me/9779845050241" className="button button-primary">Contact Us <ArrowRight size={17} /></a><a href="/proof" onClick={navigateTo("/proof")} className="text-link">See the proof <ArrowDownRight size={16} /></a></div></Reveal>
          </div>
          <Reveal className="hero-visual" delay={180}>
            <div className="hero-photo-wrap">
              <div className="photo-accent" />
              <img src="/assets/hero.jpg" alt="Dr. Narayan speaking at a podium" className="hero-photo" />
              <div className="photo-caption"><span>DR. NARAYAN PRASAD ACHARYA</span></div>
            </div>
         </Reveal>
        </div>
        <div className="hero-footer container"><span>Based in Chitwan · Speaking everywhere</span><span className="scroll-cue"><span /> Scroll to explore</span></div>
      </section>

      <section className="marquee-band" aria-label="Credentials">
        <div className="marquee-track"><span>9 YEARS OF EXPERIENCE</span><i>✳</i><span>10,000+ LIVES TRAINED</span><i>✳</i><span>2+ COUNTRIES</span><i>✳</i><span>ONE BIGGER QUESTION</span><i>✳</i><span>9 YEARS OF EXPERIENCE</span><i>✳</i><span>10,000+ LIVES TRAINED</span></div>
      </section>

      <section id="work" className="work-section section-padding">
        <div className="container">
          <div className="section-intro work-intro">
            <Reveal className="work-intro-label"><p className="eyebrow">01 / WORK</p></Reveal>
            <Reveal className="work-photo" delay={70}><div className="work-photo-frame"><img src="/assets/narayan.jpg" alt="Dr. Narayan speaking to an audience" /></div></Reveal>
            <div className="work-intro-copy"><Reveal delay={120}><h2>Less <span>“sit back.”</span><br />More <em>“let's go.”</em></h2></Reveal><Reveal delay={190}><p className="intro-copy">The best learning doesn't feel like learning. It feels like a new idea landing, a team clicking, a room finding its rhythm.</p></Reveal></div>
          </div>
          <div className="service-list">
            {services.map((service, index) => <Reveal key={service.number} delay={index * 90}><article className="service-row"><span className="service-number">{service.number}</span><div className="service-main"><p className="service-tag">{service.tag}</p><h3>{service.title}</h3></div><p className="service-copy">{service.copy}</p><ArrowUpRight className="service-arrow" size={24} /></article></Reveal>)}
          </div>
        </div>
      </section>

      <section id="about" className="about-section section-padding">
        <div className="container about-grid">
          <Reveal className="about-section-label"><p className="eyebrow lavender">02 / THE HUMAN</p></Reveal>
          <Reveal className="about-image-wrap"><div className="about-image-frame"><img src="/assets/record.jpg" alt="Dr. Narayan on stage" /><div className="image-stamp">NPA<br /><span>SINCE 2017</span></div></div></Reveal>
          <div className="about-copy"><Reveal delay={70}><h2>Warm heart.<br /><span>Sharp point.</span></h2></Reveal><Reveal delay={140}><p>I'm Dr. Narayan Prasad Acharya — a curious human, obsessive observer and believer in the untapped magic of a room full of people. For 09 years, I've been translating psychology, leadership and lived experience into moments people actually remember.</p></Reveal><Reveal delay={190}><p>My work sits somewhere between a keynote, a conversation and a dare. It is high-energy, grounded in research and always built for the humans in front of me.</p></Reveal><Reveal delay={240}><a href="/contact" onClick={navigateTo("/contact")} className="text-link light-link">More about my story <ArrowRight size={16} /></a></Reveal></div>
        </div>
      </section>

      <section id="proof" className="proof-section section-padding">
        <div className="container">
          <Reveal><div className="quote-mark"><Quote size={28} /></div></Reveal>
          <Reveal delay={80}><blockquote>“Dr. Narayan doesn't just speak to a room.<br /><span>He wakes it up.</span>”</blockquote></Reveal>
          <Reveal delay={150}><p className="quote-byline">— A room full of very awake people</p></Reveal>
          <div className="stats-grid">
            {[['9+', 'Years on stage'], ['10K+', 'People trained'], ['2+', 'Countries reached'], ['10K+', 'Digital likes']].map(([number, label], i) => <Reveal key={label} delay={i * 70}><div className="stat-card"><strong>{number}</strong><span>{label}</span></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="capabilities-section section-padding">
        <div className="container capability-grid"><Reveal><div><p className="eyebrow">03 / THE TOOLKIT</p><h2>What changes<br /><em>in the room</em></h2></div></Reveal><Reveal delay={100}><div className="capability-list">{capabilities.map((capability) => <div key={capability} className="capability-item"><Check size={17} /><span>{capability}</span></div>)}<p className="capability-note">Every program is custom-built for your people, your context and the change you want to see.</p></div></Reveal></div>
      </section>

      <section className="faq-section section-padding"><div className="container faq-grid"><Reveal><div><p className="eyebrow lavender">04 / GOOD TO KNOW</p><h2>Curious?<br /><span>Good.</span></h2><p className="faq-lede">The short answers, before the long conversation.</p></div></Reveal><Reveal delay={100}><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={question}><button onClick={() => setActiveFaq(activeFaq === index ? null : index)}><span>{question}</span>{activeFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</button><div className="faq-answer">{answer}</div></div>)}</div></Reveal></div></section>

      <section id="contact" className="contact-section"><div className="contact-glow" /><div className="container contact-inner"><Reveal><p className="eyebrow">05 / YOUR MOVE</p></Reveal><Reveal delay={80}><h2>Got a room<br /><em>to wake up?</em></h2></Reveal><Reveal delay={150}><p>Tell me what you're building, where your people are stuck and what a little momentum could unlock.</p></Reveal><Reveal delay={210}><a href="https://wa.me/9779845050241" className="contact-button">Let's make it happen <MoveUpRight size={20} /></a></Reveal><Reveal delay={260}><div className="contact-meta"><a href="mailto:drnarayanacharya3@gmail.com">drnarayanacharya3@gmail.com</a><a href="tel:+9779845050241">+977 9845050241</a><a href="https://www.facebook.com/drnarayanprasadacharya" target="_blank" rel="noreferrer" className="socials"><Facebook size={16} />Dr. Narayan Prasad Acharya</a></div></Reveal></div></section>

      <footer className="footer"><div className="container footer-inner"><a href="/" className="brand" onClick={navigateTo("/")}>DR.NARAYAN<span>.</span></a><span>© 2026 DR. NARAYAN PRASAD ACHARYA</span><a href="/" className="back-top" onClick={navigateTo("/")}>BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
