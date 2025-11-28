'use client';

import { smoothScrollTo } from '@/utils/smoothScroll';

export default function Navigation() {
  return (
    <nav className="flex gap-6 text-xs font-medium text-slate-300">
      <button 
        onClick={() => smoothScrollTo('features')}
        className="hover:text-white transition-colors"
      >
        Features
      </button>
      <button 
        onClick={() => smoothScrollTo('pricing')}
        className="hover:text-white transition-colors"
      >
        Pricing
      </button>
      <button 
        onClick={() => smoothScrollTo('contact')}
        className="hover:text-white transition-colors"
      >
        Contact
      </button>
    </nav>
  );
}
