import { useState, useEffect } from "react";
import { HeroBackground, Hero1 } from "../../../assets/Images";

const dataPoints = [
  {
    color: "#F69B0A",
    title: "Data Point",
    text: "According to the Kenya National Bureau of Statistics (K.N.B.S), the 2019 census indicated that 2.2% of Kenya’s population lives with some form of disability. This translates to over 900,000 individuals.",
  },
  {
    color: "#4DCDCB",
    title: "Education Access",
    text: "Only a small percentage of children with disabilities in Kenya have access to formal education, limiting their future opportunities and participation in society.",
  },
  {
    color: "#1EC87C",
    title: "Employment Gap",
    text: "PWDs in Kenya face an unemployment rate nearly double that of the general population, highlighting the need for inclusive job training and placement.",
  },
  {
    color: "#2C3675",
    title: "Support Networks",
    text: "Community and mentorship programs have been shown to significantly improve the confidence and job readiness of PWDs entering the workforce.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % dataPoints.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative py-10"
      style={{
        backgroundImage: `url(${HeroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-4 rounded-2xl max-w-[1000px] m-auto p-8 md:p-20 relative z-10 transition-colors duration-500"
        style={{ background: dataPoints[current].color }}
      >
        <img
          src={Hero1}
          alt="carousel-image1"
          className="object-cover p-6 md:p-10 min-h-80 rounded-2xl bg-white"
        />
        <div className="text-white flex flex-col gap-4 p-6 md:p-10">
          <h3 className="text-3xl md:text-5xl font-bold">
            {dataPoints[current].title}
          </h3>
          <p className="w-72 md:w-80">{dataPoints[current].text}</p>
        </div>
      </div>
      {/* Carousel dots */}
      <div className="flex flex-row gap-2 justify-center items-center mt-6 mb-8">
        {dataPoints.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-[#4D2C5E] w-5" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
