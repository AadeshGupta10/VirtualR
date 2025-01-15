import { checklistItems } from "@/constants";
import { CheckCircle2 } from "lucide-react";

const Workflow = () => {
  return (
    <div className="pt-20">

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>

      {/* Content */}
      <div className="flex flex-wrap justify-center mt-10">

        {/* Coding Image */}
        <div className="h-[28rem] w-full lg:w-1/2">
          <img src={"/code.jpg"} alt="Coding" className="size-full object-contain"/>
        </div>

        {/* Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex">
              <div className="text-green-400 ms-2 me-6 bg-neutral-900 size-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-700 dark:text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
