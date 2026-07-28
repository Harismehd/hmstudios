import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import hmstudiosLogo from "@/assets/hmstudios-logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          About <span className="text-gradient">Us</span>
        </motion.h2>
 
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative shrink-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/30 glow-orange">
              <img
                src={hmstudiosLogo}
                alt="HMSTUDIOS"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-3 rounded-full border border-primary/10 animate-pulse-glow" />
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              H&M Studios is an elite engineering and automation collective focused on building the digital backbone for ambitious startups and businesses. Specializing in highly optimized full-stack software and production-ready MVPs, we integrate deep architectural expertise with advanced agentic AI pipelines. We do not just build web apps; we forge scalable, intelligent systems—engineered to eliminate operational inefficiency and accelerate market velocity. From secure Next.js and Supabase infrastructure to custom autonomous workflows, we deliver absolute technical execution that transforms vision into absolute competitive advantage.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
              Led by founder and lead engineer Haris Awan, our engineering expertise spans across a variety of modern languages, robust database infrastructures, and cutting-edge web frameworks. We bring together a high level of technical rigor to ship fast, reliable, and production-grade solutions that empower our clients to scale effectively.
            </p>
            <div className="flex gap-8 justify-center md:justify-start mb-8">
              {[
                { value: "6+", label: "Production Apps" },
                { value: "SaaS", label: "Multi-Tenant" },
                { value: "AI/ML", label: "Focus" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <motion.a
              href="https://drive.google.com/file/d/1BMo2TF-vetso1ge91d7CGL9njHhGgrwJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 glow-orange"
            >
              <FileText className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
