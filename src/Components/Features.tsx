import  { useState, useEffect } from "react";
import CardCarousel from "./Cards"; // Keep the CardCarousel import

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [debouncedFeature, setDebouncedFeature] = useState(0); // Debounced state

  const featureList = [
    "Market Prediction",
    "Finance",
    "Analytics",
    "Content Generation",
    "Customer Support",
  ];

  // Debounce the activeFeature state
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFeature(activeFeature);
    }, 300); // Debounce for 300ms

    return () => clearTimeout(timer); // Clean up the timeout
  }, [activeFeature]);

  return (
    <section className="py-20 text-center font-poppins">
      <h2 className="text-3xl font-extrabold text-gray-900 leading-snug">
        AI Models tailored for your
        <br />
        business needs
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4">
        Leverage the power of AI to automate, analyze, and optimize your workflows. Our
        specialized models are designed to fit different business needs.
      </p>

      <div className="flex justify-center gap-4 mt-10 flex-wrap">
        {featureList.map((feature, index) => (
          <div
            key={index}
            onClick={() => setActiveFeature(index)}
            className={`w-52 p-5 rounded-lg shadow-md cursor-pointer transition-all 
              ${debouncedFeature === index
                ? "bg-[#190360] text-white"
                : "bg-gray-100 text-gray-800"
              } hover:shadow-xl hover:-translate-y-2 duration-300 ease-in-out
              md:w-52 sm:w-11/12 mb-8`} 
          >
            <h3 className="text-lg font-semibold">{feature}</h3>
          </div>
        ))}
      </div>

      {/* Pass the debouncedFeature to the CardCarousel */}
      <CardCarousel activeFeature={debouncedFeature} />
    </section>
  );
};

export default Features;
