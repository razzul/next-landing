import { smoothScrollTo } from '@/utils/smoothScroll';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-50 font-sans">
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-sm font-bold">
              NL
            </div>
            <span className="text-sm font-medium tracking-tight text-slate-100">
              NextLanding
            </span>
          </div>
          <nav className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex">
            <Navigation />
          </nav>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-center gap-16 px-6 py-16 lg:flex-row lg:items-center pt-16">
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
            <button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">
              Start Free Trial
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 font-medium text-slate-100 hover:border-slate-500 hover:bg-slate-900/40">
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-950/50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              Our templates are designed to convert visitors into customers with 
              proven design patterns and modern technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-slate-800 bg-slate-900/40">
              <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-sky-400 text-lg">⚡</span>
              </div>
              <h3 className="font-semibold text-slate-100 mb-2">Blazing Fast</h3>
              <p className="text-sm text-slate-300">
                Built with Next.js 14 for optimal performance and SEO. 
                Lighthouse scores of 95+ out of the box.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-slate-800 bg-slate-900/40">
              <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-sky-400 text-lg">📱</span>
              </div>
              <h3 className="font-semibold text-slate-100 mb-2">Fully Responsive</h3>
              <p className="text-sm text-slate-300">
                Perfectly adapted for all devices. Mobile-first design 
                ensures great experience on any screen size.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-slate-800 bg-slate-900/40">
              <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-sky-400 text-lg">🎨</span>
              </div>
              <h3 className="font-semibold text-slate-100 mb-2">Beautiful Design</h3>
              <p className="text-sm text-slate-300">
                Modern, clean design with attention to detail. 
                Customizable color schemes and components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              Choose the plan that works best for your startup. All plans include 
              full access to our template library and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/40 text-center">
              <h3 className="font-semibold text-slate-100 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-slate-100 mb-4">$29</div>
              <p className="text-sm text-slate-300 mb-6">Perfect for small projects</p>
              <ul className="text-sm text-slate-300 space-y-2 mb-6">
                <li>1 Template</li>
                <li>Basic Support</li>
                <li>MIT License</li>
                <li>Source Code</li>
              </ul>
              <button className="w-full bg-slate-800 text-slate-100 py-2 rounded-lg hover:bg-slate-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="p-6 rounded-lg border-2 border-sky-500 bg-slate-900/60 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-sky-500 text-slate-950 text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
              <h3 className="font-semibold text-slate-100 mb-2">Pro</h3>
              <div className="text-3xl font-bold text-slate-100 mb-4">$79</div>
              <p className="text-sm text-slate-300 mb-6">For growing businesses</p>
              <ul className="text-sm text-slate-300 space-y-2 mb-6">
                <li>5 Templates</li>
                <li>Priority Support</li>
                <li>Commercial License</li>
                <li>Lifetime Updates</li>
                <li>Customization Help</li>
              </ul>
              <button className="w-full bg-sky-500 text-slate-950 py-2 rounded-lg hover:bg-sky-400 transition-colors font-semibold">
                Get Started
              </button>
            </div>
            
            <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/40 text-center">
              <h3 className="font-semibold text-slate-100 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-slate-100 mb-4">$199</div>
              <p className="text-sm text-slate-300 mb-6">For large organizations</p>
              <ul className="text-sm text-slate-300 space-y-2 mb-6">
                <li>Unlimited Templates</li>
                <li>24/7 Support</li>
                <li>White-label License</li>
                <li>Custom Components</li>
                <li>Dedicated Setup</li>
              </ul>
              <button className="w-full bg-slate-800 text-slate-100 py-2 rounded-lg hover:bg-slate-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950/50">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">
              Get in Touch
            </h2>
            <p className="text-sm text-slate-300">
              Have questions? We'd love to hear from you. Send us a message 
              and we'll respond as soon as possible.
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                placeholder="Tell us about your project..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-sky-500 text-slate-950 py-3 rounded-lg font-semibold hover:bg-sky-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">
              Trusted by Developers
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              Join thousands of developers who have launched their products 
              with our templates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/40">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sky-400 text-sm">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100">John Doe</h4>
                  <p className="text-xs text-slate-400">Founder, StartupX</p>
                </div>
              </div>
              <p className="text-sm text-slate-300">
                "NextLanding helped us launch our MVP in record time. 
                The templates are beautifully designed and incredibly easy to customize."
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/40">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sky-400 text-sm">SJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100">Sarah Johnson</h4>
                  <p className="text-xs text-slate-400">CTO, TechCorp</p>
                </div>
              </div>
              <p className="text-sm text-slate-300">
                "The performance is outstanding. Our landing page loads instantly 
                and converts visitors at a much higher rate than our previous solution."
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/40">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sky-400 text-sm">MK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100">Mike Kim</h4>
                  <p className="text-xs text-slate-400">Developer, Freelancer</p>
                </div>
              </div>
              <p className="text-sm text-slate-300">
                "As a solo developer, having professional templates ready to go 
                has been a game-changer. The documentation is excellent too."
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-black/60 py-8 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-sm font-bold">
                NL
              </div>
              <span className="text-sm font-medium tracking-tight text-slate-100">
                NextLanding
              </span>
            </div>
            
            <nav className="flex gap-6 text-xs font-medium text-slate-300 mb-4 md:mb-0">
              <Navigation />
            </nav>
            
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors">
                <span className="sr-only">Twitter</span>
                𝕏
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors">
                <span className="sr-only">GitHub</span>
                GitHub
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors">
                <span className="sr-only">LinkedIn</span>
                LinkedIn
              </a>
            </div>
          </div>
          
          <p className="text-[11px] text-slate-500">
            © 2024 NextLanding. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
