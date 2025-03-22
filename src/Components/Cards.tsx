import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import marketImg from "../assets/images/Frame 1984078106.png";
import financeImg from "../assets/images/Frame 1984078106 (1).png";
import analyticsImg from "../assets/images/Frame 1984078106 (2).png";
import contentImg from "../assets/images/Frame 1984078106 (3).png";
import customerImg from "../assets/images/Frame 1984078106 (4).png";


const cards = [
  { title: "Market Prediction", img: marketImg, description: "Use AI insights for smarter business decisions and stay competitive." },
  { title: "Finance", img: financeImg, description: "Our AI models analyze financial data for confident investments." },
  { title: "Analytics", img: analyticsImg, description: "Transform data into insights with AI analytics that enhance decisions." },
  { title: "Content", img: contentImg, description: "Create quality content easily with AI that knows your brand and audience." },
  { title: "Customer", img: customerImg, description: "Use AI chatbots for instant, personalized customer support." },
];

interface CardCarouselProps {
  activeFeature: number;
}

export default function CardCarousel({ activeFeature = 0 }: CardCarouselProps) {
  const [current, setCurrent] = useState(activeFeature);
  const totalCards = cards.length;

  useEffect(() => {
    setCurrent(activeFeature); 
  }, [activeFeature]);

  
  const handleCardClick = (index: number) => {
    setCurrent(index);
  };

  const getPositionClass = (index: number) => {
    if (index === current) return "z-20 scale-100 -translate-y-10"; 
    if (index === (current - 1 + totalCards) % totalCards) return "z-10 -translate-x-[120%] scale-75";
    if (index === (current + 1) % totalCards) return "z-10 translate-x-[120%] scale-75";
    return "opacity-0 pointer-events-none";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F7F9F9] p-4">
      <div className="w-full max-w-7xl relative overflow-hidden">
        {/* Desktop View */}
        <div className="relative hidden md:flex justify-center items-center gap-12 h-[500px]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`absolute flex justify-between items-center bg-[#f0f0f0] shadow-xl rounded-2xl p-10 gap-6 transition-all duration-500 ease-in-out cursor-pointer ${getPositionClass(index)}`}
              style={{
                height: "400px", 
                width: index === current ? "650px" : "450px", 
                top: "50%",
                transform: "translateY(-50%)",
              }}
              onClick={() => handleCardClick(index)}
            >
              {/* Left Side: Text and Button */}
              <div className="flex flex-col justify-center w-1/2">
                <h3 className="text-lg font-semibold text-gray-400 mb-2">{card.title}</h3>
                <h3 className={`font-bold ${index === current ? "text-5xl" : "text-3xl"} text-gray-800`}>
                  {card.title}
                </h3>
                <p className="mt-4 text-gray-600 text-lg">{card.description}</p>
                <button className="mt-6 bg-[#190360] text-white px-6 py-3 rounded-[5px] hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>

              {/* Right Side: Image */}
              <div className="w-1/2 flex justify-center">
                <img
                  src={card.img}
                  alt={card.title}
                  className="rounded-lg object-cover shadow-lg h-72"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-8 md:hidden mt-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center text-center mb-8"
            >
              <img
                src={card.img}
                alt={card.title}
                className="rounded-lg object-cover shadow-lg w-full max-w-[300px] h-[200px] mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
              <button className="bg-[#190360] text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:scale-105 transition-all">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
