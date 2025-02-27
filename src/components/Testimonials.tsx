import { testimonials } from "../constants";

const Testimonials = () => {
  return (

    <div className="py-20">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center mb-10" >
        What People are saying
      </h2 >

      {/* Testimonial Cards */}
      <div className="w-full space-y-5 md:columns-2 lg:columns-3" >
        {
          testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-full max-h-full">
              <div className="max-w-full max-h-full bg-neutral-900 text-white rounded-md p-6 text-md border border-neutral-800 font-thin">
                <p>{testimonial.text}</p>
                <div className="flex mt-8 items-start">
                  <img
                    className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                    src={testimonial.image}
                    alt=""
                  />
                  <div>
                    <h6>{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-600">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div >
    </div>
  );
};

export default Testimonials;
