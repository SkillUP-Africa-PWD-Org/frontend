import learnIcon from "../../../assets/Icons/learn-icon.svg";
import careerIcon from "../../../assets/Icons/career-icon.svg";
import certificateIcon from "../../../assets/Icons/certificate-icon.svg";

const HeroFeature = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 p-16 m-20 -mt-28 bg-primary rounded-2xl text-white relative z-10">
        <div className="flex flex-row items-center justify-center gap-4">
          <img
            src={learnIcon}
            alt="learn-icon"
            className="w-16 h-16 p-4 bg-white/30 rounded-xl"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Learn The Latest Skills</h2>
            <p className="text-sm font-extralight">
              Our platform offers valuable skills like plumbing, mechanical
              work, electrical work and many others to help PWDs excel in their
              area of work.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <img
            src={careerIcon}
            alt="career-icon"
            className="w-16 h-16 p-4 bg-white/30 rounded-xl"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Get Ready For a Career</h2>
            <p className="text-sm font-extralight">
              Preparing for a career as a person with a disability involves
              exploring your interests, developing relevant skills, and
              networking with professionals in your field.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 max-w-96">
          <img
            src={certificateIcon}
            alt="certificate-icon"
            className="w-16 h-16 p-4 bg-white/30 rounded-xl"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Earn a Certificate</h2>
            <p className="text-sm font-extralight">
              Earning a certificate can enhance your skills and career
              opportunities, so choose a program that aligns with your
              interests. Completing the program demonstrates your commitment and
              showcases your abilities to potential employers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFeature;
