const Hero = () => {
  return (
    <section className="font-poppins h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black to-blue-900 text-white px-4">
      <h5 className="text-lg sm:text-2xl tracking-wide text-blue-800">
        Leverage on Automation
      </h5>
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold my-4 leading-snug">
        AI Models for <br /> Business Solutions
      </h1>
      <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-2xl md:max-w-4xl leading-relaxed">
        Leverage the power of AI to automate, analyze, and optimize your workflows. Our 
        specialized models are designed to fit different business needs.
      </p>
      <button className="bg-white text-black font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg mt-6 hover:scale-105 transition-transform duration-300">
        Get Started Now
      </button>
    </section>
  );
};

export default Hero;
