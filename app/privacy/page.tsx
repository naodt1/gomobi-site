import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      {/* Back Button - Matching ToS style */}
      <Link 
        href="/" 
        className="flex items-center text-[#3c559a] hover:text-[#2c437a] mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      {/* Privacy Policy Content - Same card style as ToS */}
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: 20th June 2025</p>

        <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-8">
          <section>
            <p className="mb-6">
              At GoMobi Studio, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We may collect personal information such as your name, email address, and other contact details when you communicate with us, request services, or use our products.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use your information to provide, maintain, and improve our services, communicate with you, and personalize your experience with GoMobi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Sharing Your Information</h2>
            <p className="mb-4">
              We do not sell or rent your personal information to any third parties. Information is only shared with service providers when necessary to deliver our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption and secure servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies to improve website functionality. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Significant changes will be communicated via email or website notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <p>
              For privacy-related inquiries, please contact us at{" "}
              <a href="mailto:info@gomobi.dev" className="text-[#3c559a] hover:underline">
                info@gomobi.dev
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}