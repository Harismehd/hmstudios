import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Project = {
  title: string;
  tagline: string;
  type: string;
  stack: string[];
  github?: string;
  live?: string;
  details: string[];
};

const projects: Project[] = [
  {
    title: "Cognis",
    tagline: "Real-Time ML Diagnostic Engine",
    type: "Logic Lens / Personal",
    stack: ["Python", "LightGBM", "FastAPI", "scikit-learn", "NumPy"],
    live: "https://harisawan246-cognis.hf.space/dashboard",
    github: "https://github.com/Harismehd/Cognis",
    details: [
      "Designed and trained a 6-model LightGBM ensemble (risk, error type, intervention, tone, speak, action) on 87,300 synthetic examples covering 21 Python error categories.",
      "Applied isotonic calibration (CalibratedClassifierCV, 5-fold CV) to the error-type classifier, producing reliable confidence scores that gate tooltip display below 50% threshold.",
      "Engineered a mixed feature pipeline with char n-gram text features, one-hot student archetypes, cursor numerics, and compile-time features from Python's compiler.",
      "Achieved 100% holdout accuracy with 0.0% false positives on critical confusable error pairs.",
      "Served through FastAPI with <200ms end-to-end latency.",
    ],
  },
  {
    title: "Logic Lens",
    tagline: "Socratic Python Learning IDE",
    type: "Personal",
    stack: ["React 18", "Monaco Editor", "Pyodide", "FastAPI"],
    live: "https://harisawan246-logiclens.hf.space/",
    github: "https://github.com/Harismehd/LogicLens",
    details: [
      "Built a browser-based Python IDE with real-time ML-powered error diagnosis.",
      "Every keystroke triggers Cognis and renders personalized Socratic tooltips.",
      "Implemented LENS AGENT autonomous fix operator with character-by-character typing animations.",
      "Integrated Pyodide runtime traceback analysis.",
      "Built escalating hint systems, session tracking, and observability dashboard.",
    ],
  },
  {
    title: "Nexora",
    tagline: "Enterprise Gym Management SaaS",
    type: "Personal",
    stack: ["Node.js", "React", "PostgreSQL", "WebSocket", "Supabase"],
    live: "https://gymflowbyharis.vercel.app/",
    details: [
      "Multi-tenant SaaS architecture with Row-Level Security isolation.",
      "Advanced payment reconciliation and fraud detection systems.",
      "Real-time dashboards via WebSocket.",
      "WhatsApp automation integrations.",
      "Production deployed with live users.",
    ],
  },
  {
    title: "Lens Assist Pro",
    tagline: "Real-Time Remote Support Platform",
    type: "Personal",
    stack: ["Node.js", "WebRTC", "Socket.io", "Tesseract.js"],
    github: "https://github.com/Harismehd/Lens-Assist-Pro",
    details: [
      "Real-time P2P video streaming with ultra-low latency.",
      "WebRTC architecture with Socket.io signaling.",
      "OCR text extraction from live video streams using Tesseract.js.",
    ],
  },
  {
    title: "NexusShield",
    tagline: "Open-Source Cybersecurity Tool",
    type: "Personal",
    stack: ["Full-stack"],
    github: "https://github.com/Harismehd/NexusShield",
    details: [
      "Open-source cybersecurity platform.",
      "Acquired real organic users through community engagement.",
      "Demonstrates practical product-market fit and real-world utility.",
    ],
  },
  {
    title: "CivicConnect",
    tagline: "Smart City Resident Services Portal",
    type: "Personal",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Groq", "Leaflet.js"],
    live: "https://civicconnect-indol.vercel.app",
    github: "https://github.com/Harismehd/civicconnect",
    details: [
      "Intelligent, multi-role web portal designed to digitalize and streamline interaction between citizens and government for a Smart City of 500,000 residents.",
      "Module A (CRMS): Full ticket lifecycle from submission to resolution with unique ID generation and SLA tracking.",
      "Module B (Permits): Multi-step permit application portal for Construction, Events, and Business licenses.",
      "Module C (Announcements): City-wide announcement board with emergency broadcast banners.",
      "Module D (Analytics): Dedicated admin dashboard with real-time charts and geographic distribution heatmaps.",
      "AI-Powered Triage: Uses Groq LPU inference (Llama 3.3 70B) to automatically suggest categories and priorities based on resident descriptions.",
      "Security: RBAC enforced at UI and Database layer, Mandatory 2FA for administrative accounts, full system activity tracking using JSONB logs.",
    ],
  },
  {
    title: "ForgeFit",
    tagline: "Structured Fitness Tracking & Workout Management",
    type: "Personal",
    stack: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Zustand"],
    github: "https://github.com/Harismehd/ForgeFit",
    details: [
      "Production-oriented fitness web app for gym members who train without a personal trainer.",
      "JWT authentication with protected routes and httpOnly cookies for secure session management.",
      "Structured workout plans with real YouTube exercise demos and set logging.",
      "Comprehensive workout history, progress metrics, and real-time charts powered by TanStack Query.",
      "Advanced search and filtering capabilities for exercises by muscle group and difficulty.",
      "Mobile-first dark SaaS interface with Framer Motion animations and shadcn-style UI primitives.",
      "Prisma ORM with PostgreSQL persistence for reliable data management and relationship handling.",
    ],
  },
  {
    title: "Emaanfit",
    tagline: "AI-Driven Full-Stack Fitness Platform",
    type: "Personal",
    stack: ["PHP", "MySQL", "AI-Powered", "Meal Planning", "Responsive UI"],
    details: [
      "Full-stack fitness web app built with PHP and MySQL featuring AI-driven meal planning and workout tracking.",
      "User authentication system with premium access tier and role-based features.",
      "AI-powered meal planning engine that generates personalized nutrition recommendations.",
      "Comprehensive workout tracking with detailed progress analytics.",
      "Scalable architecture designed for real-world production use.",
      "Responsive UI providing seamless experience across all devices.",
      "Premium membership system with advanced features and personalized coaching.",
    ],
  },
  {
    title: "House of Bamboo",
    tagline: "A high-conversion digital experience and enterprise web portal designed for an interior design studio.",
    type: "Client Project",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    live: "https://frolicking-creponne-2b0583.netlify.app/",
    github: "https://github.com/Harismehd/House-of-Bamboo-demo-site",
    details: [
      "Built with modern layout structures, seamless visual storytelling, and rapid-deployment architecture.",
      "Designed to highlight project portfolios, build client trust, and drive consultation bookings."
    ],
  },
  {
    title: "HM Studios Real Estate",
    tagline: "A full-featured, scalable real estate management and property discovery platform.",
    type: "Enterprise",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    live: "https://regal-moonbeam-f187e1.netlify.app/",
    github: "https://github.com/Harismehd/HM-Studios-Real-Estate-Website-demo",
    details: [
      "Features responsive media headers, structured property listing engines, and dynamic search filters.",
      "Integrates an intelligent client-to-agent matching system built on modern web frameworks."
    ],
  },
  {
    title: "TutorAI Platform",
    tagline: "Enterprise-grade multi-tenant tutoring platform featuring secure isolation and AI vision.",
    type: "AI & ML",
    stack: ["TypeScript", "React", "Supabase", "PostgreSQL", "RLS"],
    live: "https://tutor-ai-prototype.vercel.app/",
    github: "https://github.com/Harismehd/tutor-ai-prototype",
    details: [
      "Demonstrates secure database-level tenant isolation using PostgreSQL Row Level Security (RLS) policies.",
      "Features an in-memory AI vision pipeline with zero storage footprint (worksheet images processed as base64 in memory).",
      "Uses Supabase Realtime Broadcast to sync activities across separate teacher devices automatically.",
      "Implements a swappable AI provider abstraction to change vision models via environment variables."
    ],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        onClick={() => setIsOpen(true)}
        className="glass-card p-6 flex flex-col h-full justify-between group hover:border-primary/40 hover:glow-cyan transition-all duration-300 cursor-pointer"
      >
        <div>
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-[10px] font-mono text-primary tracking-widest uppercase">
              {String(index + 1).padStart(2, "0")} — {project.type}
            </span>
            <span className="shrink-0 w-7 h-7 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
              <Plus size={12} />
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-foreground group-hover:text-gradient transition-all mb-2">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-xs line-clamp-3 mb-4 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-glass-border">
          {project.stack.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-[9px] bg-muted/50 text-muted-foreground border border-border/50"
            >
              {tag}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-2 py-0.5 rounded-full text-[9px] bg-muted/50 text-muted-foreground border border-border/50">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-xl border border-glass-border shadow-2xl p-6 md:p-8 rounded-xl overflow-y-auto max-h-[85vh] text-left">
          <DialogHeader className="mb-6 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-primary tracking-widest uppercase">
                {String(index + 1).padStart(2, "0")} — {project.type}
              </span>
            </div>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base mt-2">
              {project.tagline}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Details Bullet Points */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase font-mono">Key Highlights</h4>
              <ul className="space-y-3">
                {project.details.map((d, i) => (
                  <li key={i} className="text-muted-foreground text-sm md:text-base leading-relaxed flex gap-3">
                    <span className="text-primary mt-1.5 shrink-0">▹</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Complete Stack Tags */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase font-mono">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-glass-border">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-muted text-foreground text-sm font-medium hover:text-primary hover:border-primary/50 border border-border transition-colors"
                >
                  <Github size={16} /> GitHub Repository
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <p className="text-center text-muted-foreground text-sm mb-12">
          Click any card to view project details
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
