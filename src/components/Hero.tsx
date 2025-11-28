'use client';

import { smoothScrollTo } from '@/utils/smoothScroll';

export default function Hero() {
  const handleGetStarted = () => {
    // This would typically redirect to a signup page
    console.log('Get Started clicked');
    // window.location.href = '/signup';
  };

  const handleViewDemo = () => {
    smoothScrollTo('features');
  };

  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-center gap-16 px-6 py-16 lg:flex-row lg:items-center">
      <section className="max-w-xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          Professional SaaS Landing
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Transform your idea into a stunning landing page
        </h1>
        <p className="text-sm leading-relaxed text-slate-300">
          NextLanding provides beautifully designed, conversion-optimized templates 
          built with Next.js 14. Launch your SaaS product faster with our battle-tested 
          components and modern design system.
        </p>
        <div className="flex flex-col gap-3 text-sm sm:flex-row">
          <button 
            onClick={handleGetStarted}
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
          >
            Start Free Trial
          </button>
          <button 
            onClick={handleViewDemo}
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 font-medium text-slate-100 hover:border-slate-500 hover:bg-slate-900/40"
          >
            View Demo
          </button>
        </div>
        <div className="flex flex-wrap gap-4 text-[11px] text-slate-400">
          <span>✓ No credit card required</span>
          <span>•</span>
          <span>✓ 14-day free trial</span>
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
              <p className="text-xs font-medium text-slate-100">nextlanding.app</p>
              <p className="text-[11px] text-slate-400">Professional template · Ready to customize</p>
            </div>
            <div className="text-right text-[11px] text-slate-400">
              <p>Visitors · 12.4k</p>
              <p>Signups · 1.2k</p>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-900/60 p-2">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Framework
              </p>
              <p>Next.js + Tailwind</p>
            </li>
            <li className="rounded-lg border border-slate-800 bg-slate-900/60 p-2">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Performance
              </p>
              <p>98% Lighthouse</p>
            </li>
            <li className="rounded-lg border border-slate-800 bg-slate-900/60 p-2">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Responsive
              </p>
              <p>Mobile First</p>
            </li>
            <li className="rounded-lg border border-slate-800 bg-slate-900/60 p-2">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Support
              </p>
              <p>Documentation</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
