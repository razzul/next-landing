'use client';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for small projects',
      features: ['1 Template', 'Basic Support', 'MIT License', 'Source Code'],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$79',
      description: 'For growing businesses',
      features: ['5 Templates', 'Priority Support', 'Commercial License', 'Lifetime Updates', 'Customization Help'],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      description: 'For large organizations',
      features: ['Unlimited Templates', '24/7 Support', 'White-label License', 'Custom Components', 'Dedicated Setup'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const handlePlanSelect = (planName: string) => {
    console.log(`Selected plan: ${planName}`);
    // This would typically redirect to checkout or contact form
  };

  return (
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
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border ${
                plan.popular
                  ? 'border-2 border-sky-500 bg-slate-900/60'
                  : 'border-slate-800 bg-slate-900/40'
              } text-center relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-sky-500 text-slate-950 text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              <h3 className="font-semibold text-slate-100 mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-slate-100 mb-4">{plan.price}</div>
              <p className="text-sm text-slate-300 mb-6">{plan.description}</p>
              <ul className="text-sm text-slate-300 space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button
                onClick={() => handlePlanSelect(plan.name)}
                className={`w-full ${
                  plan.popular
                    ? 'bg-sky-500 text-slate-950 hover:bg-sky-400'
                    : 'bg-slate-800 text-slate-100 hover:bg-slate-700'
                } py-2 rounded-lg transition-colors font-semibold`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
