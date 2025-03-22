import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Companies from "./Components/Companies";
import Features from "./Components/Features";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Features /> {/* Features already handles the CardCarousel internally */}
    </div>
  );
};

export default App;
