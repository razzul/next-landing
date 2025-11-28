export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Blazing Fast',
      description: 'Built with Next.js 14 for optimal performance and SEO. Lighthouse scores of 95+ out of the box.',
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Perfectly adapted for all devices. Mobile-first design ensures great experience on any screen size.',
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern, clean design with attention to detail. Customizable color schemes and components.',
    },
  ];

  return (
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
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-slate-800 bg-slate-900/40">
                <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-sky-400 text-lg">{feature.icon}</span>
                </div>
                <h3 className="font-semibold text-slate-100 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
