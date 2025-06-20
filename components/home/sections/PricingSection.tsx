"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Clock, Send, Shield, ArrowRight, Smartphone } from 'lucide-react';

const PricingSection = () => {
  const packages = [
    {
      title: 'Lite MVP',
      price: '$1,200',
      duration: '2-3 weeks',
      bestFor: 'Concept validation',
      features: [
        '6-8 core screens',
        'Clean Material UI design',
        'Android delivery',
        'Firebase backend',
        '2 revision rounds',
        '7-day support'
      ],
      cta: 'Validate your idea'
    },
    {
      title: 'Standard MVP',
      price: '$2,800',
      duration: '3-4 weeks',
      bestFor: 'Early traction',
      features: [
        '8-12 screens',
        'Cross-platform (Flutter)',
        'User authentication',
        'Basic analytics',
        '3 revision rounds',
        '14-day support',
        'Play Store submission'
      ],
      recommended: true,
      cta: 'Build traction'
    },
    {
      title: 'Premium MVP',
      price: '$4,500',
      duration: '4-5 weeks',
      bestFor: 'Fundraising',
      features: [
        '12-15 screens',
        'Custom animations',
        'Node.js backend',
        'Admin dashboard',
        '5 revision rounds',
        '30-day support',
        'App Store submission',
        'Technical documentation'
      ],
      cta: 'Fundraise ready'
    }
  ];

  // Your primary color
  const primaryColor = '#024293';
  const primaryHover = '#2c437a';
  const primaryLight = 'rgba(60, 85, 154, 0.1)';

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
           Our MVP Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to launch, with clear deliverables and timelines
          </p>
        </div>

        {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3" style={{ color: primaryColor }}>
                <Smartphone className="w-6 h-6 mr-2" />
                <h3 className="text-lg font-medium">Mobile-First Experts</h3>
              </div>
              <p className="text-gray-600">Specialized in Flutter & React Native cross-platform development</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3" style={{ color: primaryColor }}>
                <Zap className="w-6 h-6 mr-2" />
                <h3 className="text-lg font-medium">App Store Ready</h3>
              </div>
              <p className="text-gray-600">Includes Play Store/App Store optimization & submission</p>
            </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-3" style={{ color: primaryColor }}>
              <Shield className="w-6 h-6 mr-2" />
              <h3 className="text-lg font-medium">Quality Assurance</h3>
            </div>
            <p className="text-gray-600">Production-ready code with support</p>
          </div>
</div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`relative border-2 rounded-xl overflow-hidden transition-all
                ${pkg.recommended 
                  ? `border-[${primaryColor}] shadow-lg bg-[${primaryLight}]` 
                  : 'border-gray-200'}`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 right-0" style={{ backgroundColor: primaryColor }}>
                  <span className="block text-white text-sm px-4 py-2">Most Popular</span>
                </div>
              )}

              <div className="p-6 h-full flex flex-col">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-500 mb-4">Perfect for: {pkg.bestFor}</p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold" style={{ color: primaryColor }}>{pkg.price}</span>
                    <div className="flex items-center text-gray-500 mt-2">
                      <Clock className="w-5 h-5 mr-2" style={{ color: primaryColor }} />
                      <span>{pkg.duration} delivery</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 mr-3 mt-0.5" style={{ color: primaryColor }} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className={`mt-auto w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors
                    ${pkg.recommended
                      ? 'text-white hover:bg-[#2c437a]'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                  style={{ 
                    backgroundColor: pkg.recommended ? primaryColor : '',
                    borderColor: primaryColor
                  }}
                >
                  {pkg.cta}
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <motion.div 
          className="mt-20 p-8 rounded-xl text-center border"
          style={{ 
            backgroundColor: primaryLight,
            borderColor: primaryColor
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Need Custom Development?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer flexible weekly rates and custom scoping.
          </p>
          <button 
            className="inline-flex items-center font-medium py-3 px-8 rounded-lg border hover:bg-white transition-colors"
            style={{ 
              color: primaryColor,
              borderColor: primaryColor
            }}
          >
            Discuss Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;