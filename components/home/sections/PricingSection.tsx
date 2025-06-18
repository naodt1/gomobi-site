import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Clock, Send } from 'lucide-react';

const PricingSection = () => {
  const packages = [
    {
      title: 'Starter MVP',
      price: '$1,500',
      duration: '2-3 weeks',
      features: [
        '1-2 core features',
        'Basic UI/UX design',
        'React Native or Flutter',
        'Simple backend integration',
        '1 revision round'
      ],
      cta: 'Start with 50% deposit'
    },
    {
      title: 'Standard MVP',
      price: '$3,500',
      duration: '3-4 weeks',
      features: [
        '3-5 core features',
        'Custom UI/UX design',
        'Firebase/Supabase backend',
        'Authentication system',
        'Basic analytics',
        '2 revision rounds'
      ],
      recommended: true,
      cta: 'Most popular choice'
    },
    {
      title: 'Premium MVP',
      price: '$6,500',
      duration: '4-6 weeks',
      features: [
        '5+ features',
        'Advanced UI animations',
        'Full backend API',
        'Real-time features',
        'Admin dashboard',
        'Priority support',
        'Unlimited revisions'
      ],
      cta: 'Get white-glove service'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent MVP Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flat-rate packages with no hidden fees. Pay for exactly what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`relative border rounded-xl overflow-hidden transition-all
                ${pkg.recommended 
                  ? 'border-[#024293] shadow-lg ring-1 ring-[#024293]' 
                  : 'border-gray-200'}`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 right-0 bg-[#024293] text-white text-xs px-3 py-1 rounded-bl-lg">
                  Best value
                </div>
              )}
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> {pkg.duration}
                  </span>
                </div>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#024293]">{pkg.price}</span>
                  <span className="text-gray-500"> / one-time</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors
                    ${pkg.recommended
                      ? 'bg-[#024293] text-white hover:bg-[#003366]'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  {pkg.cta}
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-[#f8f9fa] rounded-xl p-6 text-center">
          <div className="inline-flex items-center bg-[#fef8d8] text-[#024293] px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Special for first clients</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Need something more flexible?
          </h3>
          <p className="text-gray-600 mb-4">
            Get 20% off your first project with our pay-as-we-build plan.
          </p>
          <button className="text-[#024293] font-medium hover:underline flex items-center justify-center mx-auto">
            Contact me for custom pricing
            {/* <ArrowRight className="ml-2 w-4 h-4" /> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;