const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-16 gap-12">

      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide flex flex-col items-center gap-2">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>

      <p className="text-lg text-center max-w-4xl text-muted-foreground">
        Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
      </p>

      <div className="flex justify-center">
        <p className="bg-gradient-to-r from-orange-500 to-orange-700 py-3 px-4 mx-3 rounded-md font-medium tracking-wide cursor-pointer">
          Start for free
        </p>
        <p className="py-3 px-4 mx-3 rounded-md border border-gray-500 font-medium tracking-wide cursor-pointer">
          Documentation
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center">
        <video autoPlay loop muted
          className="rounded-lg w-full lg:w-1/2 shadow-lg">
          <source src={"/video2.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;