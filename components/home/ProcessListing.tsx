"use client";

import BoxReveal from "@/components/magicui/box-reveal";

const ProcessListings = () => {
  return (
    <div className="h-full w-full overflow-hidden space-y-8 md:space-y-10">
      {/* Step 1 */}
      <div className="space-y-1">
        <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
          <>
            <p className="text-2xl md:text-3xl font-semibold text-gray-900">
              1. Free Consultation
            </p>
          </>
        </BoxReveal>
        <BoxReveal boxColor={"#3b82f6"} duration={0.6}>
          <>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-blue-500">30 mins</span>
              <span className="text-gray-500">• No commitment</span>
            </div>
            <p className="mt-1 text-lg text-gray-600">
              We&apos;ll define your core features and ballpark budget.
            </p>
          </>
        </BoxReveal>
      </div>

      {/* Step 2 */}
      <div className="space-y-1">
        <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
          <>
            <p className="text-2xl md:text-3xl font-semibold text-gray-900">
              2. Blueprint Phase
            </p>
          </>
        </BoxReveal>
        <BoxReveal boxColor={"#3b82f6"} duration={0.6}>
          <>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-blue-500">1-2 days</span>
              <span className="text-gray-500">• Fixed-price</span>
            </div>
            <p className="mt-1 text-lg text-gray-600">
              You&apos;ll receive a prioritized roadmap and UI mockups.
            </p>
          </>
        </BoxReveal>
      </div>

      {/* Step 3 */}
      <div className="space-y-1">
        <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
          <>
            <p className="text-2xl md:text-3xl font-semibold text-gray-900">
              3. Build Sprint
            </p>
          </>
        </BoxReveal>
        <BoxReveal boxColor={"#3b82f6"} duration={0.6}>
          <>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-blue-500">1-2 weeks</span>
              <span className="text-gray-500">• Weekly demos</span>
            </div>
            <p className="mt-1 text-lg text-gray-600">
              Working app delivered in iterative chunks.
            </p>
          </>
        </BoxReveal>
      </div>

      {/* Step 4 */}
      <div className="space-y-1">
        <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
          <>
            <p className="text-2xl md:text-3xl font-semibold text-gray-900">
              4. Launch Ready
            </p>
          </>
        </BoxReveal>
        <BoxReveal boxColor={"#3b82f6"} duration={0.6}>
          <>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-blue-500">1 day</span>
              <span className="text-gray-500">• App Store deploy</span>
            </div>
            <p className="mt-1 text-lg text-gray-600">
              Full handoff with 14 days of support included.
            </p>
          </>
        </BoxReveal>
      </div>
    </div>
  );
};

export default ProcessListings;