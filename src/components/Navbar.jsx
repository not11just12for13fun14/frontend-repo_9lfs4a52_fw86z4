import { Menu, TerminalSquare } from 'lucide-react';
import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 });

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#tracks', label: 'Tracks' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#community', label: 'Community' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-[60]">
      {/* subtle glass background */}
      <div className="absolute inset-0 -z-10 backdrop-blur supports-[backdrop-filter]:bg-[color:rgb(5_11_18_/_0.6)] border-b border-[var(--border)]" />

      {/* progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#64D3FF] via-[#7C5CFF] to-[#FF7AD9] origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-[var(--text)]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[var(--surface)] border border-[var(--border)] shadow-sm">
              <TerminalSquare size={18} />
            </span>
            <span className="font-semibold">Ship or Be Shipped</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-[var(--muted)]">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[var(--text)] transition">
                {l.label}
              </a>
            ))}
            <a href="#register" className="ml-4 inline-flex items-center px-4 py-2 rounded-md bg-[var(--elevated)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface)] transition">
              Register
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-[var(--text)]">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-[var(--border)] py-3 text-[var(--muted)]">
            <div className="grid gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-1 py-2 rounded hover:bg-[var(--surface)] text-[var(--text)]">
                  {l.label}
                </a>
              ))}
              <a href="#register" className="px-1 py-2 rounded bg-[var(--elevated)] text-[var(--text)] border border-[var(--border)] text-center">
                Register
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
