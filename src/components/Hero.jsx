import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-[var(--bg)] text-[var(--text)] overflow-hidden">
      {/* Spline cover */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          className="pointer-events-none"
        />
        {/* subtle gradient vignette to blend with brand background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,11,18,0.4)] via-[rgba(5,11,18,0.6)] to-[var(--bg)] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-3 py-1 text-[12px] tracking-wide text-[var(--muted)]">
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
      </div>
    </section>
  );
};

export default Hero;
