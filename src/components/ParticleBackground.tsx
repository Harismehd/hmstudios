import { motion } from "framer-motion";

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background">
      {/* Technical Grid Overlay (Lines) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.2]"
        style={{
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
        }}
      />
      
      {/* Technical Dot Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-[0.35]" 
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, #000 60%, transparent 100%)",
        }}
      />

      {/* Premium Ambient Glowing Mesh Orbs */}
      {/* Orb 1: Brand Orange/Red Glow - Top Right */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-primary/15 blur-[120px]" 
      />
      
      {/* Orb 2: Brand Amber/Yellow Glow - Middle Left */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[-15%] w-[650px] h-[650px] rounded-full bg-secondary/15 blur-[140px]" 
      />
      
      {/* Orb 3: Tech Deep Blue/Cyan Glow - Bottom Right */}
      <motion.div 
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-15%] right-[10%] w-[750px] h-[750px] rounded-full bg-blue-500/10 blur-[160px]" 
      />

      {/* Subtle radial spotlight overlay for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_20%,hsl(var(--background))_80%)] opacity-60" />
    </div>
  );
};

export default ParticleBackground;
