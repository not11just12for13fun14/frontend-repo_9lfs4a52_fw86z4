import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Rocket, Cpu, CalendarDays, MessageCircle, ShieldCheck, Link as LinkIcon, HelpCircle, Share2 } from 'lucide-react';

export const About = () => (
  <section id="about" className="relative py-24 bg-[var(--bg)] text-[var(--text)] overflow-hidden">
    {/* parallax gradient ribbons */}
    <ParallaxBackdrop />
    <div className="relative max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Build, ship, and find your people</h2>
          <p className="mt-4 text-[var(--muted)]">
            Ship or Be Shipped is a community-driven hackathon for makers. We bring together engineers, designers, and operators
            to rapidly prototype and launch projects over a focused weekend. No fluff, just momentum.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[{
            icon: Rocket, title: 'Outcome-first', desc: 'Demos over decks. Working software by Sunday.'
          }, {
            icon: Users, title: 'Team up fast', desc: 'Find collaborators who match your energy.'
          }, {
            icon: Cpu, title: 'Builder tools', desc: 'Modern stack, templates, and mentors on call.'
          }, {
            icon: ShieldCheck, title: 'Safe space', desc: 'Respect, inclusion, and support for all.'
          }].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
              <f.icon className="text-[var(--muted)]" />
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const Tracks = () => (
  <section id="tracks" className="relative py-24 bg-[var(--elevated)] text-[var(--text)] overflow-hidden">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_0%,rgba(124,92,255,0.12),transparent),radial-gradient(60%_50%_at_90%_40%,rgba(100,211,255,0.1),transparent)]" />
    <div className="relative max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold">Tracks</h2>
      <p className="mt-3 text-[var(--muted)]">Pick a lane or go freestyle. We care about shipping.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          { title: 'AI & Agents', desc: 'Practical AI tools and automations that save real time.' },
          { title: 'Dev Tools', desc: 'Make building delightful for the next coder.' },
          { title: 'Consumer x Community', desc: 'Lightweight apps that bring people together.' },
        ].map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(124,92,255,0.25), rgba(100,211,255,0.25), transparent 60%)' }} />
            <div className="relative">
              <h3 className="text-xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-[var(--muted)]">{t.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Schedule = () => (
  <section id="schedule" className="relative py-24 bg-[var(--bg)] text-[var(--text)]">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold">Weekend flow</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { icon: CalendarDays, title: 'Friday', items: ['Kickoff + team forming', 'Problem framing', 'First commit'] },
          { icon: Rocket, title: 'Saturday', items: ['Heads-down build', 'Mentor office hours', 'Midnight check-in'] },
          { icon: MessageCircle, title: 'Sunday', items: ['Polish + deploy', 'Demos + judging', 'Afterparty'] },
        ].map((d, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <d.icon className="text-[var(--muted)]" />
            <h3 className="mt-3 text-xl font-semibold">{d.title}</h3>
            <ul className="mt-3 space-y-2 text-[var(--muted)]">
              {d.items.map((it, j) => (
                <li key={j}>• {it}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Community = () => (
  <section id="community" className="relative py-24 bg-[var(--bg)] text-[var(--text)] overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(255,122,217,0.08),transparent_60%)]" />
    <div className="relative max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Community beyond the weekend</h2>
          <p className="text-[var(--muted)]">Join our Discord to meet teammates, get feedback, and keep shipping after demo day. We host monthly build nights and share grant opportunities.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#register" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--elevated)] border border-[var(--border)]">
              <Share2 size={16} /> Get invites
            </a>
            <a href="#faq" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--border)]">
              <HelpCircle size={16} /> Read FAQ
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
          {['Teams', 'Mentors', 'Show & Tell', 'Jobs'].map((t, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="absolute -inset-1 opacity-0 hover:opacity-100 transition" style={{ background: 'radial-gradient(600px 200px at var(--x,50%) var(--y,50%), rgba(124,92,255,0.15), transparent 40%)' }} />
              <p className="relative font-semibold">{t}</p>
              <p className="relative mt-1 text-sm text-[var(--muted)]">Channels and resources to keep momentum.</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export const FAQ = () => (
  <section id="faq" className="relative py-24 bg-[var(--elevated)] text-[var(--text)]">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
      <div className="mt-8 divide-y divide-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)]">
        {[
          { q: 'Who can participate?', a: 'Engineers, designers, product folks, and operators at all levels. We value curiosity and momentum over resumes.' },
          { q: 'Do I need a team?', a: 'Not at all. We facilitate team forming on Friday and in our Discord before the event.' },
          { q: 'What should I build?', a: 'Anything that ships by Sunday. Popular tracks include AI & Agents, Dev Tools, and Consumer apps.' },
          { q: 'Is there a code of conduct?', a: 'Yes. We foster an inclusive, respectful space. Violations lead to removal.' },
        ].map((item, i) => (
          <details key={i} className="group open:bg-[var(--surface)]">
            <summary className="cursor-pointer select-none list-none px-5 py-4 flex items-center justify-between">
              <span className="font-medium">{item.q}</span>
              <LinkIcon className="text-[var(--muted)] group-open:rotate-45 transition" />
            </summary>
            <div className="px-5 pb-5 text-[var(--muted)]">{item.a}</div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export const CTA = () => (
  <section id="register" className="relative py-24 bg-[var(--bg)] text-[var(--text)] overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(100,211,255,0.08),transparent_60%)]" />
    <div className="relative max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Ready to ship?</h2>
      <p className="mt-3 text-[var(--muted)]">Drop your email and we’ll keep you posted with dates, venue, and early-bird perks.</p>
      <form className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3">
        <input type="email" required placeholder="you@build.rs" className="w-full px-4 py-3 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--border)]" />
        <button type="submit" className="px-5 py-3 rounded-md bg-[var(--elevated)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface)] transition">Notify me</button>
      </form>
      <p className="mt-3 text-xs text-[var(--muted)]">No spam. Unsubscribe anytime.</p>
    </div>
  </section>
);

// Shared parallax background component
const ParallaxBackdrop = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 60]);
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);
  return (
    <div aria-hidden>
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -top-20 -left-10 h-56 w-56 rounded-full bg-[#7C5CFF]/20 blur-3xl" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute top-20 -right-10 h-56 w-56 rounded-full bg-[#64D3FF]/20 blur-3xl" />
    </div>
  );
};
