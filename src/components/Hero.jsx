import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100vh] w-full bg-[var(--bg)] text-[var(--text)] overflow-hidden">
      {/* animated grid background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(124,92,255,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(100,211,255,0.12),transparent_45%)]" />
      </div>

      {/* Spline cover */}
      <div className="absolute inset-0 opacity-70">
        <Spline 
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          className="pointer-events-none"
        />
        {/* gradient vignette to blend with brand background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,11,18,0.2)] via-[rgba(5,11,18,0.6)] to-[var(--bg)]" />
      </div>

      {/* floating orbs */}
      <motion.div
        className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[#7C5CFF]/20 blur-3xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 -left-10 h-64 w-64 rounded-full bg-[#64D3FF]/20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-32 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-3 py-1 text-[12px] tracking-wide text-[var(--muted)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#64D3FF] animate-pulse" />
            Hackathon  •  Build fast, ship faster
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Ship or Be Shipped
          </h1>
          <p className="mt-5 text-lg md:text-xl text-[var(--muted)]">
            A weekend sprint for tech enthusiasts and builders. Team up, prototype boldly, and launch something real.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#register" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[var(--elevated)] text-[var(--text)] border border-[var(--border)] hover:shadow-[0_0_0_2px_rgba(144,164,180,0.15)_inset] transition">
              Register interest
            </a>
            <a href="#community" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-transparent text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface)] transition">
              Join the community
            </a>
          </div>
        </motion.div>

        {/* scrolly cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center gap-2 text-[var(--muted)]"
        >
          <span className="inline-block h-5 w-3 rounded-full border border-[var(--border)] relative">
            <span className="absolute left-1/2 -translate-x-1/2 top-1 h-1.5 w-1.5 rounded-full bg-[var(--muted)] animate-bounce" />
          </span>
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
