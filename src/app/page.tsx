export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-50 font-sans">
      <header className="border-b border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-sm font-bold">
              NL
            </div>
            <span className="text-sm font-medium tracking-tight text-slate-100">
              Next Landing
            </span>
          </div>
          <nav className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-center gap-16 px-6 py-16 lg:flex-row lg:items-center">
        <section className="max-w-xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Dummy SaaS Landing
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Launch your next idea in minutes, not months.
          </h1>
          <p className="text-sm leading-relaxed text-slate-300">
            This is a placeholder landing page built with Next.js and Tailwind CSS.
            Swap this text and sections with your real product copy whenever you’re
            ready to go live.
          </p>
          <div className="flex flex-col gap-3 text-sm sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">
              Get started
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 font-medium text-slate-100 hover:border-slate-500 hover:bg-slate-900/40">
              Book a demo
            </button>
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] text-slate-400">
            <span>✓ No credit card required</span>
            <span>•</span>
            <span>✓ Dummy content, easy to replace</span>
            <span>•</span>
            <span>✓ Built with Next.js 14</span>
          </div>
        </section>

        <section className="w-full max-w-md rounded-2xl border border-white/5 bg-slate-900/40 p-5 shadow-2xl shadow-black/60">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Preview
          </h2>
          <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Status</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live mock
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-slate-900 to-slate-800 px-3 py-2">
              <div className="space-y-0.5">
                <p className="text-xs font-medium text-slate-100">next-landing.app</p>
                <p className="text-[11px] text-slate-400">Dummy project · Replace with your domain</p>
              </div>
              <div className="text-right text-[11px] text-slate-400">
                <p>Visitors · 1.2k</p>
                <p>Signups · 57</p>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
              <li className="rounded-lg border border-slate-800 bg-slate-900/60 p-2">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Section
                </p>
                <p>Hero + CTA</p>
              </li>
              <li className="rounded-lg border border-slate-800 bg-slate-900/60 p-2">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Status
                </p>
                <p>Placeholder</p>
              </li>
              <li className="rounded-lg border border-slate-800 bg-slate-900/60 p-2">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Framework
                </p>
                <p>Next.js + Tailwind</p>
              </li>
              <li className="rounded-lg border border-slate-800 bg-slate-900/60 p-2">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Edit in
                </p>
                <p>src/app/page.tsx</p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black/60 py-4 text-center text-[11px] text-slate-500">
        Dummy landing page · Replace this with your own footer content.
      </footer>
    </div>
  );
}
