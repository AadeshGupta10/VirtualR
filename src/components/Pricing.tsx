import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="pt-20">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wide">
        Pricing
      </h2>

      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (

          // Card
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-5">
            <div className="p-6 border border-neutral-700 rounded-xl">

              {/* Price Heading */}
              <p className="text-4xl">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>

              {/* Pricing */}
              <p className="my-6">
                <span className="text-5xl mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>

              {/* Services with Pricing */}
              <ul className="flex flex-col gap-5">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Subscribe Button */}
              <button
                className="justify-center items-center text-center w-full h-12 mt-10 text-lg bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg font-medium tracking-wide">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
