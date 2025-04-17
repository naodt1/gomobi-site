import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";

const StatsSection = () => {
  return (
    <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
      <div className="md:w-2/5">
        <h1 className="text-2xl font-medium text-gray-600 w-4/5">
          Trusted by fast moving brands worldwide
        </h1>

        <div className="flex my-6 gap-x-5 w-full">
          <div>
            <h1 className="text-blue-500 text-3xl md:text-5xl">
              <NumberTicker value={1000} />+
              <p className="text-gray-500 text-sm md:text-md">
                Happy Clients
              </p>
            </h1>
          </div>

          <div className="w-px bg-gray-300 self-stretch"></div>

          <div className="flex-1 min-w-0">
            <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
              <NumberTicker value={100} />+
              <p className="text-gray-500 text-sm md:text-md">
                Projects Completed
              </p>
            </h1>
          </div>
        </div>
      </div>

      <section className="overflow-hidden mt-10 md:w-4/5">
        <InfiniteMovingLogos
          speed="slow"
          direction="left"
          items={[
            { logo: "/logo/logo.webp", name: "Logo 1" },
            { logo: "/logo/logo.webp", name: "Logo 2" },
            { logo: "/logo/logo.webp", name: "Logo 3" },
            { logo: "/logo/logo.webp", name: "Logo 4" },
          ]}
        />
      </section>
    </div>
  );
};

export default StatsSection;
