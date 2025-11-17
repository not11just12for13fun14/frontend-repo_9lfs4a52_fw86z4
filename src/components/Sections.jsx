import { motion } from 'framer-motion';
import { Users, Rocket, Cpu, CalendarDays, MessageCircle, ShieldCheck } from 'lucide-react';

export const About = () => (
  <section id="about" className="relative py-20 bg-[var(--bg)] text-[var(--text)]">
    <div className="max-w-6xl mx-auto px-6">
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
  <section id="tracks" className="relative py-20 bg-[var(--elevated)] text-[var(--text)]">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold">Tracks</h2>
      <p className="mt-3 text-[var(--muted)]">Pick a lane or go freestyle. We care about shipping.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          { title: 'AI & Agents', desc: 'Practical AI tools and automations that save real time.' },
          { title: 'Dev Tools', desc: 'Make building delightful for the next coder.' },
          { title: 'Consumer x Community', desc: 'Lightweight apps that bring people together.' },
        ].map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="text-xl font-semibold">{t.title}</h3>
            <p className="mt-2 text-[var(--muted)]">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Schedule = () => (
  <section id="schedule" className="relative py-20 bg-[var(--bg)] text-[var(--text)]">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold">Weekend flow</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { icon: CalendarDays, title: 'Friday', items: ['Kickoff + team forming', 'Problem framing', 'First commit'] },
          { icon: Rocket, title: 'Saturday', items: ['Heads-down build', 'Mentor office hours', 'Midnight check-in'] },
          { icon: MessageCircle, title: 'Sunday', items: ['Polish + deploy', 'Demos + judging', 'Afterparty'] },
        ].map((d, i) => (
          <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <d.icon className="text-[var(--muted)]" />
            <h3 className="mt-3 text-xl font-semibold">{d.title}</h3>
            <ul className="mt-3 space-y-2 text-[var(--muted)]">
              {d.items.map((it, j) => (
                <li key={j}>• {it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const CTA = () => (
  <section id="register" className="relative py-20 bg-[var(--elevated)] text-[var(--text)]">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Ready to ship?</h2>
      <p className="mt-3 text-[var(--muted)]">Drop your email and we’ll keep you posted with dates, venue, and early-bird perks.</p>
      <form className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3">
        <input type="email" required placeholder="you@build.rs" className="w-full px-4 py-3 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--border)]" />
        <button type="submit" className="px-5 py-3 rounded-md bg-[var(--bg)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface)] transition">Notify me</button>
      </form>
      <p className="mt-3 text-xs text-[var(--muted)]">No spam. Unsubscribe anytime.</p>
    </div>
  </section>
);
