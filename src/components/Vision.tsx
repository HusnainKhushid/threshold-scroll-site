import { motion } from 'motion/react';
import { ArrowUpRight, BrainCircuit, Sparkles, Workflow, ShieldCheck } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, ease: EASE, delay },
});

const PILLARS = [
  {
    icon: BrainCircuit,
    title: 'Reasoning that compounds',
    body: 'Models that hold a thread across hours of work, revise their own plans and hand you the reasoning — not just the answer.',
  },
  {
    icon: Workflow,
    title: 'Agents on your rails',
    body: 'Wire minds into the tools you already run. Every action is scoped, logged and reversible by design.',
  },
  {
    icon: Sparkles,
    title: 'Creation at the edge',
    body: 'Text, image, motion and code from one context window, tuned to your voice rather than a generic average.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust you can audit',
    body: 'Provenance on every output, guardrails you set once, and a paper trail your compliance team will actually read.',
  },
];

const STATS = [
  { value: '2.4M', label: 'Agents deployed' },
  { value: '99.98%', label: 'Uptime, trailing year' },
  { value: '< 90 ms', label: 'First token, p50' },
];

export default function Vision() {
  return (
    <section
      id="vision"
      data-section="02-vision"
      className="relative w-full bg-black text-white overflow-hidden"
    >
      {/* the warm light from the doorway carries down into this section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(240,90,34,0.22)_0%,rgba(240,90,34,0)_70%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-20 pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28">
        {/* Intro: two-column, same split as the hero's bottom row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-16">
          <motion.div {...reveal()} className="max-w-2xl xl:max-w-3xl flex flex-col">
            <p className="text-orange-400 text-[11px] font-medium tracking-[0.22em] uppercase">
              01 — Vision
            </p>
            <h2 className="mt-5 text-white text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-normal leading-[1.07] tracking-[-0.03em]">
              Minds that walk
              <br />
              through the door with you
            </h2>
          </motion.div>

          <motion.div {...reveal(0.12)} className="max-w-sm sm:max-w-md flex flex-col items-start">
            <p className="text-zinc-300 text-sm sm:text-base md:text-[15px] font-normal leading-relaxed">
              Threshold is the layer between raw intelligence and the work you actually do. Synthetic
              minds that read the room, remember the brief and ship alongside your team.
            </p>
            <a
              href="#resources"
              className="mt-6 group inline-flex items-center gap-2 text-white/90 hover:text-white text-sm md:text-[15px] font-medium transition-colors"
            >
              <span className="border-b border-white/30 group-hover:border-orange-400 pb-0.5 transition-colors">
                Read the platform notes
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Pillars */}
        <div id="platform" className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
          {PILLARS.map(({ icon: Icon, title, body }, i) => (
            <motion.article
              key={title}
              {...reveal(0.08 * i)}
              className="group relative flex flex-col gap-5 rounded-[6px] border border-white/15 bg-white/[0.03] backdrop-blur-md p-6 md:p-7 transition-colors duration-300 hover:border-orange-500/60 hover:bg-white/[0.05]"
            >
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-[4px] border border-white/15 bg-black/40 text-orange-400">
                <Icon className="w-5 h-5" strokeWidth={1.6} />
              </span>
              <h3 className="text-white text-lg md:text-xl font-medium tracking-[-0.02em] leading-snug">
                {title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 text-white/0 group-hover:text-white/60 transition-colors duration-300"
              >
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.article>
          ))}
        </div>

        {/* Stats row on a hairline */}
        <motion.dl
          {...reveal(0.1)}
          className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 border-t border-white/15 pt-8"
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-2">
              <dt className="text-white text-3xl md:text-4xl font-normal tracking-[-0.03em]">
                {value}
              </dt>
              <dd className="text-zinc-400 text-xs font-medium tracking-[0.14em] uppercase">
                {label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
