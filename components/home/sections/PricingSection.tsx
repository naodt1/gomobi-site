import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Gift, Timer } from 'lucide-react';

const packages = [
    {
        title: 'Free 30-Day MVP',
        price: '$0',
        recommended: true,
        features: [
            'Basic MVP development',
            '1-2 core features',
            'Basic UI design',
            'Technical consultation',
            '30-day timeline',
            'No commitment required'
        ],
        promotional: true
    },
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
        recommended: false,
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
    }
];

const PricingSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-blue-100 dark:bg-blue-900">
                        <Gift className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            Special Offer: 30-Day Free MVP Build
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
                        Start Your Project Today
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
                        Try our services risk-free with our special 30-day MVP offer
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className={`relative p-6 rounded-2xl shadow-lg border backdrop-blur-md
                                ${pkg.promotional 
                                    ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500 text-white" 
                                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"}`}
                        >
                            {pkg.promotional && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs px-3 py-1 rounded-full font-semibold">
                                    Limited Time Offer
                                </div>
                            )}
                            <h3 className={`text-xl font-semibold mb-2 
                                ${pkg.promotional ? "text-white" : "text-gray-900 dark:text-white"}`}>
                                {pkg.title}
                            </h3>
                            <p className={`text-3xl font-bold mb-6 
                                ${pkg.promotional ? "text-white" : "text-gray-900 dark:text-white"}`}>
                                {pkg.price}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm">
                                        <CheckCircle className={`w-4 h-4 mr-2 
                                            ${pkg.promotional ? "text-yellow-400" : "text-green-500"}`} />
                                        <span className={pkg.promotional ? "text-white" : "text-gray-700 dark:text-gray-300"}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`inline-flex items-center justify-center w-full py-3 px-4 text-sm font-medium rounded-lg transition-all
                                    ${pkg.promotional 
                                        ? "bg-white text-blue-600 hover:bg-gray-100" 
                                        : "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"}`}
                            >
                                {pkg.promotional ? "Start Free Trial" : "Get Started"}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </button>

                            {pkg.promotional && (
                                <div className="mt-4 text-center text-sm text-blue-100">
                                    <Timer className="w-4 h-4 inline mr-1" />
                                    No credit card required
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Have questions? <a href="#contact" className="text-blue-600 hover:underline dark:text-blue-400">Contact us</a> for more information
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;