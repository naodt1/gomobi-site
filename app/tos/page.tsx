import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      {/* Back Button */}
      <Link
        href="/"
        className="flex items-center text-[#3c559a] hover:text-[#2c437a] mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      {/* Terms of Service Content */}
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Updated: 20th June 2025</p>

        <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-8">
          <section>
            <p className="mb-6">
              Welcome to GoMobi! These Terms of Service (&quot;Terms&quot;) govern your use of the GoMobi website and services. {/* Applied &quot; here */}
              By using our services, you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Description of Services</h2>
            <p>
              GoMobi is a specialized agency that helps startups build Minimum Viable Products (MVPs) quickly and efficiently.
              We offer MVP development services, consultation, and resources to assist entrepreneurs in launching their startups.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Services and Deliverables</h2>
            <p className="mb-4">
              When you engage our services, we work collaboratively to design, develop, and deliver your MVP. The specific
              deliverables will be outlined in your project agreement. You retain ownership of your product idea and the final MVP,
              while general methodologies and non-proprietary code remain our property.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide clear project requirements and specifications</li>
              <li>Offer timely feedback during development phases</li>
              <li>Supply necessary content, assets, and materials</li>
              <li>Make agreed-upon payments on schedule</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Payment and Refunds</h2>
            <p className="mb-2">
              Payment terms will be specified in your project agreement. We typically require:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>50% deposit to begin work</li>
              <li>50% upon completion before delivery</li>
            </ul>
            <p>
              We offer a satisfaction guarantee and will work to address any concerns about deliverables. Refund policies are
              project-specific and outlined in your agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding your project details and any proprietary information shared during
              the development process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              You retain all rights to your startup idea and the final MVP product. GoMobi retains rights to any proprietary
              tools, methods, or non-project-specific code used in development.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p>
              While we strive for excellence in our services, GoMobi is not responsible for the commercial success or failure
              of your startup or product. Our liability is limited to the fees paid for services rendered.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p className="mb-4">
              We may update these Terms periodically. Continued use of our services after changes constitutes acceptance of
              the new Terms. Significant changes will be communicated via email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p>
              For questions about these Terms, please email us at{" "}
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