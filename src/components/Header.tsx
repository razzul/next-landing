'use client';

import { useState } from 'react';
import { smoothScrollTo } from '@/utils/smoothScroll';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Features', id: 'features' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="border-b border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-sm font-bold">
            NL
          </div>
          <span className="text-sm font-medium tracking-tight text-slate-100">
            NextLanding
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => smoothScrollTo(item.id)}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sm:hidden border-t border-white/5 bg-black/60">
          <nav className="mx-auto max-w-5xl px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  smoothScrollTo(item.id);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-sm font-medium text-slate-300 hover:text-white py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
