import { WomanOnDesk } from "../../../assets/Images";
import { HeroBackground } from "../../../assets/Images";
import featureIcon1 from "../../../assets/Icons/feature-icon1.svg";
import featureIcon2 from "../../../assets/Icons/feature-icon2.svg";

const Feature = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBackground})`,
      }}
      className="py-5"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 m-10">
        <div className="flex flex-col gap-8">
          <h1 className="text-7xl font-bold text-black">
            Premium <span className="text-secondary">Learning</span> <br />{" "}
            Experience
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center justify-center">
              <img src={featureIcon1} alt="feature icon 1" />
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-black">
                  Easily Accessible
                </h2>
                <p className="text-black">
                  Learning will feel very comfortable with Courslab.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center">
              <img src={featureIcon2} alt="feature icon 2" />
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-black">
                  Fun learning experience
                </h2>
                <p className="text-black">
                  Learning will feel very comfortable with Courslab.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={WomanOnDesk} alt="woman on wheelchair" />
      </div>
    </div>
  );
};

export default Feature;
