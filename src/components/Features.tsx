import { features } from "@/constants";

const Features = () => {
  return (
    <div className="pt-20">

      <div className="text-center">
        <span className="bg-card-foreground text-orange-500 rounded-full h-6 text-md font-medium px-4 py-1 uppercase tracking-wide">
          Features
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide mt-10">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-y-10 mt-20">
        {features.map((feature, index) => (
          <div className="flex w-full sm:w-1/2 lg:w-1/3" key={index}>

            {/* Feature Icon */}
            <div className="flex size-10 mx-4 p-2 bg-card-foreground text-orange-700 justify-center items-center rounded-full">
              {feature.icon}
            </div>

            {/* Feature Heading and description */}
            <div>
              <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
              <p className="text-md text-neutral-700 dark:text-neutral-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
