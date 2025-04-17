import { PiCheckBold } from "react-icons/pi";
import BoxReveal from "@/components/magicui/box-reveal";

const services = ["Design", "Development", "Marketing", "Strategy"];

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
      {services.map((service, index) => (
        <BoxReveal key={index} boxColor="#3b82f6" duration={0.5}>
          <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
            <PiCheckBold className="text-xl text-blue-500" />
            {service}
          </p>
        </BoxReveal>
      ))}
    </div>
  );
};

export default ServiceGrid;
