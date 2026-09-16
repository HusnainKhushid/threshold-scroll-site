import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, ease: EASE, delay },
});

const COLUMNS = [
  {
    title: 'Product',
    links: [
      ['Vision', '#vision'],
      ['Platform', '#platform'],
      ['Pricing', '#pricing'],
      ['Changelog', '#changelog'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Documentation', '#docs'],
      ['Guides', '#guides'],
      ['API reference', '#api'],
      ['Status', '#status'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '#about'],
      ['Careers', '#careers'],
      ['Contact', '#contact'],
      ['Press', '#press'],
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="resources"
      data-section="03-footer"
      className="relative w-full bg-black text-white overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-20 pt-20 md:pt-28 pb-8">
        {/* CTA band */}
        <motion.div
          {...reveal()}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-16"
        >
          <div className="max-w-2xl">
            <p className="text-orange-400 text-[11px] font-medium tracking-[0.22em] uppercase">
              02 — Get started
            </p>
            <h2 className="mt-5 text-white text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-normal leading-[1.07] tracking-[-0.03em]">
              Ready to step
              <br />
              through?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <a
              href="#top"
              className="group inline-flex items-center justify-center gap-2 bg-[#f05a22] hover:bg-[#e04f19] active:bg-[#c94313] text-white font-medium text-sm md:text-[15px] px-6 py-3 rounded-[3px] transition-all duration-200 shadow-xl shadow-orange-950/40"
            >
              <span>Start building</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-[3px] border border-white/30 bg-black/20 backdrop-blur-md text-white text-sm md:text-[15px] font-normal hover:bg-white/10 hover:border-white/50 active:scale-[0.98] transition-all duration-200"
            >
              Talk to sales
            </a>
          </div>
        </motion.div>

        {/* Columns */}
        <motion.div
          {...reveal(0.1)}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-8 border-t border-white/15 pt-10"
        >
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4 max-w-xs">
            <a href="#top" className="text-white text-2xl md:text-[26px] font-bold tracking-tight">
              Threshold
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The layer between raw intelligence and the work you actually do.
            </p>
            <form
              className="mt-2 flex items-stretch w-full max-w-xs"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@company.com"
                className="min-w-0 flex-1 bg-white/[0.04] border border-white/15 border-r-0 rounded-l-[3px] px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500/60"
              />
              <button
                type="submit"
                className="px-3 rounded-r-[3px] bg-white/[0.08] border border-white/15 text-white/80 hover:text-white hover:bg-white/15 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
              <h3 className="text-white/60 text-[11px] font-medium tracking-[0.18em] uppercase">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-zinc-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </motion.div>

        {/* Legal */}
        <motion.div
          {...reveal(0.15)}
          className="mt-14 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500"
        >
          <p>© 2026 Threshold Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#security" className="hover:text-white transition-colors">
              Security
            </a>
          </div>
        </motion.div>
      </div>

      {/* wordmark bleeding off the bottom edge, lit from above by the doorway orange */}
      <motion.p
        aria-hidden="true"
        {...reveal(0.2)}
        className="relative select-none text-center font-bold tracking-[-0.05em] leading-[0.8] whitespace-nowrap text-[22vw] -mb-[0.16em] bg-gradient-to-b from-white/80 via-white/25 to-transparent bg-clip-text text-transparent"
      >
        Threshold
      </motion.p>
    </footer>
  );
}
