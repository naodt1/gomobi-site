import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Package {
    title: string;
    price: string;
    recommended: boolean;
    features: string[];
}

const packages: Package[] = [
    {
        title: 'Starter App',
        price: '$800',
        recommended: false,
        features: [
            '2–3 screens',
            'UI/UX design',
            'Flutter frontend',
            'Mock data (no backend)',
        ],
    },
    {
        title: 'Launch Ready',
        price: '$1500',
        recommended: true,
        features: [
            '4–6 screens',
            'Flutter + Firebase backend',
            'Authentication',
            'Clean UI/UX',
        ],
    },
    {
        title: 'Scale Up',
        price: '$2500',
        recommended: false,
        features: [
            '6+ screens',
            'Backend integration',
            'Chat & notifications',
            'Advanced custom UI/UX',
        ],
    },
    {
        title: 'Ongoing Care',
        price: '$200',
        recommended: false,
        features: [
            'Maintenance & updates',
            'Bug fixes',
            'Up to 10 hours/month',
        ],
    },
];

const themeColor = '#1e3f91';

const PricingSection = () => {
    return (
        <section className="py-20 bg-[rgba(30,63,145,0.05)] dark:bg-[#0e101a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h2
                        className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `linear-gradient(to right, ${themeColor}, ${themeColor})`,
                        }}
                    >
                        Pricing Plans
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
                        Choose a plan that fits your needs. Transparent pricing, no hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className={cn(
                                "relative p-6 rounded-2xl shadow-md border transition-all",
                                "bg-white dark:bg-white/5 backdrop-blur-md",
                                pkg.recommended
                                    ? "border-[1.5px] border-[#1e3f91] shadow-[0_0_0_2px_rgba(30,63,145,0.1)]"
                                    : "border-gray-200 dark:border-white/10"
                            )}
                        >
                            {pkg.recommended && (
                                <div className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: `${themeColor}20`, color: themeColor }}>
                                    Recommended
                                </div>
                            )}
                            <h3 className={cn(
                                "text-xl font-semibold mb-2",
                                pkg.recommended ? "text-[#1e3f91]" : "text-gray-800 dark:text-white"
                            )}>
                                {pkg.title}
                            </h3>
                            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                                {pkg.price}
                                {pkg.title === 'Ongoing Care' && <span className="text-base text-gray-500 dark:text-gray-400">/month</span>}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="/meeting"
                                className={cn(
                                    "inline-flex items-center justify-center w-full py-2 px-4 text-sm font-medium rounded-md",
                                    "transition border-2",
                                    pkg.recommended
                                        ? "bg-[#1e3f91] text-white border-[#1e3f91] hover:bg-[#2e50b5]"
                                        : "bg-gray-900 text-white border-gray-900 hover:bg-gray-700 dark:bg-white dark:text-black dark:border-white dark:hover:bg-gray-100"
                                )}
                            >
                                Get Started <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Need a custom solution? <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Contact us</a> for a personalized quote.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
