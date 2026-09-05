import { createFileRoute } from "@tanstack/react-router";
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
  },
  {
    title: "Restaurant Management & Ordering System",
    stack: "Next.js · React · TypeScript · PostgreSQL · Node.js · Tailwind",
    summary:
      "A centralized platform streamlining restaurant operations across ordering, order management and delivery coordination.",
    points: [
      "Dedicated User, Admin and Rider panels with online / COD ordering.",
      "Menu and pricing management, live order tracking and delivery assignment.",
      "End-to-end digital workflow that cuts manual order handling and improves efficiency.",
    ],
    href: "https://albarkafood.vercel.app",
  },
];

const achievements = [
  "Ranked 1st in the Artificial Intelligence branch among 36 students.",
  "First prize, AI-based Project Exhibition by ICAI and Dept. of Computer Engineering , AMU under pre-summit event of IndiaAI Impact Summit 2026.",
  "One of 20 Indian student delegates representing India and AMU at the Asian Undergraduate Symposium 2026, National University of Singapore.",
];

const publications = [
  {
    author: "Mohammad Amaan",
    citationBefore: ", Syed Basil Rizvi, and Prof. Rashid Ali, ",
    paper:
      "Multimodal Multitask Framework for Early Prediction of Alzheimer’s Disease",
    citationAfter:
      ", 3rd International Seminar on Advances in Artificial Intelligence and Machine Learning, Aligarh Muslim University, Aligarh, India, 2026 (Under Review).",
    href: "/coming-soon",
  },
  {
    author: "Mohammad Amaan",
    citationBefore: ", Review Article, ",
    paper:
      "Predicting Mental Health Outcomes Using Machine Learning and Social Media Data",
    citationAfter:
      ", 2nd International Seminar on Advances in Artificial Intelligence and Machine Learning, Aligarh Muslim University, Aligarh, India, 2025 (Under Review).",
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

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border/60 py-16 sm:py-20">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      <div className="mt-8">{children}</div>
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

function Index() {
  return (
    <main className="min-h-screen">
      <div className="hero-surface">
        <div className="mx-auto max-w-5xl px-6">
          <nav className="flex flex-wrap items-center justify-between gap-4 py-6 font-mono text-xs tracking-widest uppercase">
            <span className="text-primary">M Amaan</span>
            <div className="flex flex-wrap gap-5 text-muted-foreground">
            <a href="#education" className="transition-colors hover:text-foreground">
                Education
              </a>
              <a href="#research" className="transition-colors hover:text-foreground">
                Research
              </a>
              <a href="#projects" className="transition-colors hover:text-foreground">
                Projects
              </a>
              <a href="#skills" className="transition-colors hover:text-foreground">
                Skills
              </a>
              <a href="#publications" className="transition-colors hover:text-foreground">
                Publications
              </a>
              <a href="#beyond" className="transition-colors hover:text-foreground">
                Beyond
              </a>
            </div>
          </nav>

          <header className="flex flex-col gap-8 py-14 sm:py-28 sm:flex-row sm:items-start sm:justify-between">
            <div className="order-2 max-w-xl sm:order-1">
              <p className="eyebrow">AI Engineer · Aligarh, India</p>
              <h1 className="mt-5 text-5xl leading-[1.05] font-semibold sm:text-7xl">
                Mohammad
                <br />
                Amaan
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                B.Tech Artificial Intelligence student at Aligarh Muslim University. <br /> Exploring AI for healthcare, with a focus on multimodal deep learning, medical imaging, and intelligent systems that can support better clinical decision making.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
                <a
                  href="mailto:gp5176@myamu.ac.in"
                  className="rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Get in touch
                </a>
                <a
                  href="https://github.com/MAquantum"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-border px-4 py-2.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mohdamaaan/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-border px-4 py-2.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="order-1 shrink-0 sm:order-2">
              <div className="size-28 overflow-hidden rounded-2xl border border-border shadow-soft sm:size-48">
                <img
                  src={amaanPhoto}
                  alt="Mohammad Amaan"
                  width={816}
                  height={816}
                  className="size-full object-cover"
                />
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6">
      <Section id="education" eyebrow="01" title="Education">
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
          <br />
          <div className="panel flex flex-wrap items-baseline justify-between gap-3 p-6 sm:p-8">
            <div>
              <h3 className="text-xl font-semibold">
                Intermediate
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Central Public School · First Division · Azamgarh, India
              </p>
            </div>
            <span className="font-mono text-xs text-muted-foreground">April 2021 — Mar 2022</span>
          </div>
          
        </Section>
        <Section id="research" eyebrow="02" title="Research Experience">
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
                  className="mt-6 inline-block font-mono text-xs text-primary underline underline-offset-4"
                >
                  {r.linkLabel} link →
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="03" title="Projects">
        <div className="grid gap-5">
  {projects.map((p) => (
    <article key={p.title} className="panel p-6 sm:p-8">
      <h3 className="text-2xl font-semibold">{p.title}</h3>

      <p className="mt-2 font-mono text-xs text-accent">
        {p.stack}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-foreground/85">
        {p.summary}
      </p>

      <div className="mt-5">
        <Bullets items={p.points} />
      </div>

      <a
        href={p.href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block font-mono text-xs text-primary underline underline-offset-4"
      >
        Project link →
      </a>
    </article>
  ))}
</div>
        </Section>

        <Section id="skills" eyebrow="04" title="Technical Skills">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.label} className="panel p-6">
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {group.label}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>



        <Section id="publications" eyebrow="05" title="Publications">
  <div className="grid gap-5">
    {publications.map((p) => (
      <article key={p.author} className="panel p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-foreground/85">
  <span className="font-bold">{p.author}</span>
  <span>{p.citationBefore}</span>
  <span className="font-bold">'{p.paper}'</span>
  <span>{p.citationAfter}</span>
</p>

        <a
          href={p.href}
          className="mt-5 inline-block font-mono text-xs text-primary underline underline-offset-4"
        >
          Publication link →
        </a>
      </article>
    ))}
  </div>
</Section>

        

        
        





        <Section id="beyond" eyebrow="06" title="Achievements & Co-Curricular">
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

        

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border/60 py-10 font-mono text-xs text-muted-foreground">
          <span>© 2026 Mohammad Amaan</span>
          <a href="mailto:gp5176@myamu.ac.in" className="hover:text-foreground">
            gp5176@myamu.ac.in
          </a>
        </footer>
      </div>
    </main>
  );
}
