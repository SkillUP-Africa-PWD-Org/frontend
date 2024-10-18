import Courses from "./sections/Courses";
import Hero from "./sections/Hero";

const HomePage = () => {
  return (
    <div className="bg-[#4DCDCB] overflow-hidden">
      <Hero />
      <Courses />
    </div>
  );
};

export default HomePage;
