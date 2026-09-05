import { createFileRoute } from "@tanstack/react-router";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import amaanPhoto from "../assets/amaan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammad Amaan — AI Researcher & Engineer" },
      {
        name: "description",
        content:
          "B.Tech AI student at AMU building multimodal deep learning and agentic AI systems. Research in Alzheimer's detection, healthcare AI and procurement agents.",
      },
      { property: "og:title", content: "Mohammad Amaan — AI Researcher & Engineer" },
      {
        property: "og:description",
        content:
          "Multimodal deep learning, agentic AI and full-stack engineering. Projects, research and achievements.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ------------------------------------------------------------------ */
/*  Data — unchanged from the source of truth                          */
/* ------------------------------------------------------------------ */

const skills = [
  { label: "Languages", items: ["Python", "C/C++", "SQL", "HTML/CSS"] },
  {
    label: "AI & ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "CNN",
      "Agentic AI",
      "System Design",
    ],
  },
  { label: "Frameworks", items: ["TensorFlow", "Keras", "PyTorch", "Flask", "FastAPI"] },
  {
    label: "Tools",
    items: ["Git", "Docker", "Google Cloud", "VS Code", "Colab", "Jupyter", "MATLAB"],
  },
  { label: "Libraries", items: ["Pandas", "NumPy", "Matplotlib", "scikit-learn", "OpenCV"] },
];

const research = [
  {
    title: "Alzheimer's Disease Detection",
    period: "Aug 2025 — Dec 2025",
    stack: "Python · TensorFlow · CNN · Computer Vision",
    href: "https://docs.google.com/document/d/1GE-zZ_ah6CsiQEPrjHMR6grMg_kWkVdo/edit?usp=sharing&ouid=113589215772231292265&rtpof=true&sd=true",
    linkLabel: "Info",
    points: [
      "Tackled early Alzheimer's detection, where timely diagnosis is critical given the absence of a definitive cure.",
      "Built a multimodal multitask deep learning framework fusing 3D MRI neuroimaging with cognitive assessment scores.",
      "Reached 82% overall accuracy for joint disease classification and clinical prediction.",
    ],
  },
  {
    title: "Smart MedScribe",
    period: "Jan 2026 — May 2026",
    stack: "Whisper AI · LLaMA 3 · Mistral 7B · Tesseract OCR",
    href: "https://canva.link/rqua9bm0juk1kdn",
    linkLabel: "Demo",
    points: [
      "Addressed the challenge of processing healthcare information spread across audio, images and text.",
      "Integrated Whisper for speech transcription, Tesseract OCR for document extraction and LLaMA 3 / Mistral 7B for reasoning.",
      "Converts unstructured clinical inputs into structured records and actionable health insights.",
    ],
  },
];

const projects = [
  {
    title: "Hugo - Procurement AI Agent",
    category: "Agentic Systems",
    stack: "Agentic AI · LLM Reasoning · ERP Data",
    summary:
      "An agentic system that runs procurement and inventory operations for industrial companies, reasoning across ERP-style data and supplier emails.",
    points: [
      "Detects low inventory and stockout risks, and parses supplier emails for delays, price hikes and shortages.",
      "Calculates build capacity from BOM and stock levels to expose production bottlenecks.",
      "Recommends safety stock and reorder changes, flags aging inventory and unnecessary reorders.",
      "Generates daily operational summaries and proactively surfaces critical risks.",
    ],
    href: "https://drive.google.com/file/d/1FNxCoMHZHh2BxYqhHmast86b3_AfCkYo/view?usp=sharing",
    visual: "network" as const,
  },
  {
    title: "Restaurant Management & Ordering System",
    category: "Full-Stack Platform",
    stack: "Next.js · React · TypeScript · PostgreSQL · Node.js · Tailwind",
    summary:
      "A centralized platform streamlining restaurant operations across ordering, order management and delivery coordination.",
    points: [
      "Dedicated User, Admin and Rider panels with online / COD ordering.",
      "Menu and pricing management, live order tracking and delivery assignment.",
      "End-to-end digital workflow that cuts manual order handling and improves efficiency.",
    ],
    href: "https://albarkafood.vercel.app",
    visual: "system" as const,
  },
];

const achievements = [
  "Ranked 1st in the Artificial Intelligence branch among 36 students.",
  "First prize, AI-based Project Exhibition by ICAI and Dept. of Computer Engineering, AMU under pre-summit event of IndiaAI Impact Summit 2026.",
  "One of 20 Indian student delegates representing India and AMU at the Asian Undergraduate Symposium 2026, National University of Singapore.",
];

const publications = [
  {
    title: "Multimodal Multitask Framework for Early Prediction of Alzheimer's Disease",
    authors: ["Mohammad Amaan", "Syed Basil Rizvi", "Prof. Rashid Ali"],
    type: null as string | null,
    venue: "3rd International Seminar on Advances in Artificial Intelligence and Machine Learning",
    location: "Aligarh Muslim University, Aligarh, India",
    year: "2026",
    status: "Under Review",
    href: "/coming-soon",
  },
  {
    title: "Predicting Mental Health Outcomes Using Machine Learning and Social Media Data",
    authors: ["Mohammad Amaan"],
    type: "Review Article",
    venue: "2nd International Seminar on Advances in Artificial Intelligence and Machine Learning",
    location: "Aligarh Muslim University, Aligarh, India",
    year: "2025",
    status: "Under Review",
    href: "/coming-soon",
  },
];

const activities = [
  "President, Machine Learning Club (ZHCET, AMU).",
  "Served as Web Developer, Machine Learning Club (2024).",
  "Joint Organiser, Code Clash competition (Python edition), EDIC.",
  "Organised a three-day workshop - Transformers: A GenAI Workshop.",
  "Organised and coordinated the 5-week ICAI x MLC Deep Learning & ML Internship Program.",
];

const navItems = [
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "publications", label: "Publications" },
  { id: "beyond", label: "Beyond" },
];

/* ------------------------------------------------------------------ */
/*  Hooks                                                               */
/* ------------------------------------------------------------------ */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);
  return reduced;
}

function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFine(mq.matches);
    const listener = (e: MediaQueryListEvent) => setFine(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);
  return fine;
}

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ------------------------------------------------------------------ */
/*  Ambient particle field (canvas)                                    */
/* ------------------------------------------------------------------ */

function ParticleField({ density = 1 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const count = Math.round(
      (window.innerWidth < 768 ? 26 : 60) * density,
    );

    type P = { x: number; y: number; r: number; vx: number; vy: number; a: number };
    let particles: P[] = [];

    function resize() {
      if (!canvas) return;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.06,
        vy: (Math.random() - 0.5) * 0.06,
        a: Math.random() * 0.5 + 0.15,
      }));
    }

    resize();
    seed();

    function tick() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(0.82 0.14 158 / ${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    tick();
    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [density, reducedMotion]);

  if (reducedMotion) return null;
  return <canvas ref={canvasRef} className="ambient-canvas" aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/*  Intro — handwritten signature sequence                             */
/* ------------------------------------------------------------------ */

function SignatureIntro({ onDone }: { onDone: () => void }) {
  const reducedMotion = usePrefersReducedMotion();
  const [stage, setStage] = useState<"writing" | "glow" | "leaving">("writing");
  const letters = useMemo(() => "Amaan".split(""), []);

  useEffect(() => {
    if (reducedMotion) {
      const t1 = setTimeout(() => setStage("glow"), 250);
      const t2 = setTimeout(() => setStage("leaving"), 700);
      const t3 = setTimeout(onDone, 1100);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
    const writeDuration = letters.length * 260 + 350;
    const t1 = setTimeout(() => setStage("glow"), writeDuration);
    const t2 = setTimeout(() => setStage("leaving"), writeDuration + 900);
    const t3 = setTimeout(onDone, writeDuration + 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [letters.length, onDone, reducedMotion]);

  return (
    <div className={`intro-overlay ${stage === "leaving" ? "intro-leaving" : ""}`}>
      <ParticleField density={0.6} />
      <div className="intro-grid" aria-hidden="true" />
      <div className="intro-content">
        <div className="intro-signature-wrap">
          <span className="intro-pen-dot" style={{ animationDuration: `${letters.length * 0.26}s` }} />
          <h1 className="intro-signature" aria-label="Amaan">
            {letters.map((ch, i) => (
              <span
                key={i}
                className="intro-signature-letter"
                style={{ animationDelay: `${i * 0.26}s` }}
              >
                {ch}
              </span>
            ))}
          </h1>
          <span className={`intro-underline ${stage !== "writing" ? "intro-underline-visible" : ""}`} />
        </div>
      </div>
      <button
        type="button"
        className="intro-skip"
        onClick={() => {
          setStage("leaving");
          setTimeout(onDone, 400);
        }}
      >
        Skip
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Custom cursor                                                       */
/* ------------------------------------------------------------------ */

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let raf = 0;

    function onMove(e: MouseEvent) {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      const target = e.target as HTMLElement;
      const cursorAttr = target?.closest?.("[data-cursor]")?.getAttribute("data-cursor");
      setLabel(cursorAttr ?? null);
    }

    function loop() {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove);
    loop();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div
        ref={ringRef}
        className={`cursor-ring ${label ? "cursor-ring-active" : ""}`}
        aria-hidden="true"
      >
        {label && <span className="cursor-ring-label">{label}</span>}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Floating navigation                                                 */
/* ------------------------------------------------------------------ */

function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("education");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`nav-float ${scrolled ? "nav-float-pill" : ""}`}>
      <a href="#top" className="nav-mark" data-cursor="">
        M·A
      </a>
      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${active === item.id ? "nav-link-active" : ""}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal / word-split heading primitives                             */
/* ------------------------------------------------------------------ */

function SplitHeading({ text, inView }: { text: string; inView: boolean }) {
  const words = text.split(" ");
  return (
    <span className="split-heading">
      {words.map((word, i) => (
        <span className="split-heading-mask" key={`${word}-${i}`}>
          <span
            className={`split-heading-word ${inView ? "split-heading-word-visible" : ""}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}

function Section({
  id,
  index,
  title,
  theme = "dark",
  children,
}: {
  id: string;
  index: string;
  title: string;
  theme?: "dark" | "light";
  children: ReactNode;
}) {
  const { ref, inView } = useInView<HTMLElement>(0.12);
  return (
    <section
      id={id}
      ref={ref}
      className={`section-block ${theme === "light" ? "theme-light" : ""}`}
    >
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className={`section-heading ${inView ? "section-heading-visible" : ""}`}>
          <span className="section-number">{index}</span>
          <h2 className="section-title">
            <SplitHeading text={title} inView={inView} />
          </h2>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((p) => (
        <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function HeroVisual() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <div
      className="hero-visual"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: x * 14, y: y * -14 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <svg
        viewBox="0 0 320 320"
        className="hero-visual-svg"
        style={{ transform: `rotate3d(1,1,0, 0deg) translate(${tilt.x}px, ${tilt.y}px)` }}
        aria-hidden="true"
      >
        <g className="hero-visual-rotate">
          {[
            [160, 60], [240, 110], [250, 200], [180, 260],
            [90, 250], [50, 170], [80, 90], [160, 160],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i === 7 ? 5 : 3} className="hero-node" />
          ))}
          {[
            [160, 60, 160, 160], [240, 110, 160, 160], [250, 200, 160, 160],
            [180, 260, 160, 160], [90, 250, 160, 160], [50, 170, 160, 160],
            [80, 90, 160, 160], [160, 60, 240, 110], [240, 110, 250, 200],
            [250, 200, 180, 260], [180, 260, 90, 250], [90, 250, 50, 170],
            [50, 170, 80, 90], [80, 90, 160, 60],
          ].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="hero-edge" />
          ))}
        </g>
      </svg>
    </div>
  );
}

function Hero({ revealed }: { revealed: boolean }) {
  return (
    <div className="hero-surface">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-8 py-14 sm:py-28 sm:flex-row sm:items-start sm:justify-between">
          <div className="order-2 max-w-xl sm:order-1">
            <p className={`eyebrow hero-stagger hero-stagger-1 ${revealed ? "hero-stagger-visible" : ""}`}>
              AI Engineer · Aligarh, India
            </p>
            <h1 className={`mt-5 hero-heading hero-stagger hero-stagger-2 ${revealed ? "hero-stagger-visible" : ""}`}>
              Mohammad
              <br />
              Amaan
            </h1>
            <p className={`mt-6 text-lg leading-relaxed text-muted-foreground hero-stagger hero-stagger-3 ${revealed ? "hero-stagger-visible" : ""}`}>
              B.Tech Artificial Intelligence student at Aligarh Muslim University.
              <br />
              Exploring AI for healthcare, with a focus on multimodal deep learning,
              medical imaging, and intelligent systems that can support better
              clinical decision making.
            </p>
            <div className={`mt-8 flex flex-wrap gap-3 font-mono text-sm hero-stagger hero-stagger-4 ${revealed ? "hero-stagger-visible" : ""}`}>
              <a
                href="mailto:gp5176@myamu.ac.in"
                data-cursor="arrow"
                className="magnetic-btn rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground"
              >
                Get in touch
              </a>
              <a
                href="https://github.com/MAquantum"
                target="_blank"
                rel="noreferrer"
                data-cursor="open"
                className="magnetic-btn rounded-lg border border-border px-4 py-2.5 text-muted-foreground"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohdamaaan/"
                target="_blank"
                rel="noreferrer"
                data-cursor="open"
                className="magnetic-btn rounded-lg border border-border px-4 py-2.5 text-muted-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className={`order-1 shrink-0 sm:order-2 hero-stagger hero-stagger-5 ${revealed ? "hero-stagger-visible" : ""}`}>
            <div className="portrait-frame">
              <img
                src={amaanPhoto}
                alt="Mohammad Amaan"
                width={816}
                height={816}
                className="size-full object-cover"
              />
              <span className="portrait-corner portrait-corner-tl" />
              <span className="portrait-corner portrait-corner-br" />
            </div>
            <div className={`mt-8 hidden sm:block hero-stagger hero-stagger-6 ${revealed ? "hero-stagger-visible" : ""}`}>
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Projects — spotlight hover                                         */
/* ------------------------------------------------------------------ */

function ProjectRow({ project }: { project: (typeof projects)[number] }) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    cardRef.current?.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    cardRef.current?.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <article ref={cardRef} onMouseMove={handleMove} className="panel project-card p-6 sm:p-8">
      <div className="project-card-spotlight" aria-hidden="true" />
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <span className="font-mono text-xs uppercase tracking-widest text-primary">
          {project.category}
        </span>
      </div>
      <p className="mt-2 font-mono text-xs text-accent">{project.stack}</p>
      <p className="mt-4 text-sm leading-relaxed text-foreground/85">{project.summary}</p>
      <div className="mt-5">
        <Bullets items={project.points} />
      </div>
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        data-cursor="view"
        className="project-link mt-6"
      >
        View project
        <span className="project-link-arrow" aria-hidden="true">→</span>
      </a>
      <ProjectGlyph kind={project.visual} />
    </article>
  );
}

function ProjectGlyph({ kind }: { kind: "network" | "system" }) {
  const points =
    kind === "network"
      ? [[20, 20], [70, 10], [100, 50], [70, 90], [20, 80], [50, 50]]
      : [[15, 15], [55, 15], [95, 15], [15, 55], [55, 55], [95, 55], [15, 95], [55, 95], [95, 95]];
  return (
    <svg viewBox="0 0 110 110" className="project-glyph" aria-hidden="true">
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3} className="hero-node" />
      ))}
      {kind === "network" &&
        points.map(([x, y], i) => {
          const next = points[(i + 1) % points.length];
          if (!next) return null;
          const [nx, ny] = next;
          return <line key={i} x1={x} y1={y} x2={nx} y2={ny} className="hero-edge" />;
        })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Skills grid                                                         */
/* ------------------------------------------------------------------ */

function SkillsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {skills.map((group) => (
        <div key={group.label} className="panel p-6">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {group.label}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="skill-tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                           */
/* ------------------------------------------------------------------ */

function Index() {
  const [introDone, setIntroDone] = useState(false);
  const isFinePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = introDone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [introDone, reducedMotion]);

  return (
    <main id="top" className="min-h-screen">
      {!introDone && <SignatureIntro onDone={() => setIntroDone(true)} />}
      {isFinePointer && <CustomCursor />}
      <ParticleField />
      <div className="grain-overlay" aria-hidden="true" />

      <FloatingNav />
      <Hero revealed={introDone || reducedMotion} />

      <Section id="education" index="01" title="Education">
        <div className="panel flex flex-wrap items-baseline justify-between gap-3 p-6 sm:p-8">
          <div>
            <h3 className="text-xl font-semibold">
              Bachelor of Technology ( Artificial Intelligence )
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Aligarh Muslim University · CGPA 9.087 · Aligarh, India
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">Aug 2023 — May 2027</span>
        </div>
        <div className="panel mt-5 flex flex-wrap items-baseline justify-between gap-3 p-6 sm:p-8">
          <div>
            <h3 className="text-xl font-semibold">Intermediate</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Central Public School · First Division · Azamgarh, India
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">April 2021 — Mar 2022</span>
        </div>
      </Section>

      <Section id="research" index="02" title="Research Experience">
        <div className="grid gap-5">
          {research.map((r) => (
            <article key={r.title} className="panel p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-2xl font-semibold">{r.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">{r.period}</span>
              </div>
              <p className="mt-2 font-mono text-xs text-accent">{r.stack}</p>
              <div className="mt-5">
                <Bullets items={r.points} />
              </div>
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="open"
                className="project-link mt-6"
              >
                {r.linkLabel} link
                <span className="project-link-arrow" aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" index="03" title="Projects">
        <div className="grid gap-5">
          {projects.map((p) => (
            <ProjectRow key={p.title} project={p} />
          ))}
        </div>
      </Section>

      <Section id="skills" index="04" title="Technical Skills">
        <SkillsGrid />
      </Section>

      <Section id="publications" index="05" title="Publications">
        <div className="grid gap-5">
          {publications.map((p) => (
            <article key={p.title} className="pub-card panel p-6 sm:p-8">
              <div className="pub-meta">
                {p.type && <span className="pub-badge pub-badge-type">{p.type}</span>}
                <span className="pub-badge pub-badge-status">{p.status}</span>
                <span className="pub-year">{p.year}</span>
              </div>
              <h3 className="pub-title">{p.title}</h3>
              <p className="pub-byline">
                {p.authors.map((author, i) => (
                  <span key={author} className={i === 0 ? "pub-byline-primary" : undefined}>
                    {author}
                    {i < p.authors.length - 2 && ", "}
                    {i === p.authors.length - 2 && p.authors.length > 1 && " and "}
                  </span>
                ))}
              </p>
              <p className="pub-venue">
                {p.venue}
                <span className="pub-venue-dot">·</span>
                {p.location}
              </p>
              <a href={p.href} data-cursor="open" className="project-link mt-5">
                Publication link
                <span className="project-link-arrow" aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section id="beyond" index="06" title="Achievements & Co-Curricular">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="panel p-6">
            <h3 className="text-lg font-semibold">Academic Achievements</h3>
            <div className="mt-4">
              <Bullets items={achievements} />
            </div>
          </div>
          <div className="panel p-6">
            <h3 className="text-lg font-semibold">Co-Curricular Activities</h3>
            <div className="mt-4">
              <Bullets items={activities} />
            </div>
          </div>
        </div>
      </Section>

      <section className="contact-section">
        <ParticleField density={0.5} />
        <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-36">
          <p className="eyebrow justify-center">Get in touch</p>
          <h2 className="contact-heading mt-6">
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            INTERESTING.
          </h2>
          <a
            href="mailto:gp5176@myamu.ac.in"
            data-cursor="arrow"
            className="magnetic-btn contact-cta mt-10 inline-block rounded-full bg-primary px-8 py-4 font-mono text-sm font-medium text-primary-foreground"
          >
            gp5176@myamu.ac.in
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 border-t border-border/60 px-6 py-10 font-mono text-xs text-muted-foreground">
        <span>© 2026 Mohammad Amaan</span>
        <div className="flex gap-5">
          <a href="https://github.com/MAquantum" target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mohdamaaan/" target="_blank" rel="noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href="mailto:gp5176@myamu.ac.in" className="hover:text-foreground">
            Email
          </a>
        </div>
      </footer>
    </main>
  );
}