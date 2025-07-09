import { Link } from "react-router-dom";
import logo from "../../public/skillup-africa-logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#FDF8EE] overflow-hidden pt-10 pb-0 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 items-start">
          <div className="flex flex-col gap-4 md:col-span-2 w-full">
            <div className="flex flex-row items-center gap-2 mb-2">
              <img
                src={logo}
                alt="logo"
                className="w-16 md:w-20 object-contain"
              />
              <h2 className="text-black font-bold text-lg md:text-xl">
                SkillUP-Africa
              </h2>
            </div>
            <p className="text-sm text-justify w-full">
              SkillUp Africa is an innovative vocational training platform
              designed to empower people with disabilities (PWD) across the
              continent by providing accessible and inclusive education tailored
              to their unique needs. The platform offers a diverse range of
              courses, including mechanics, electrical work, plumbing, pottery,
              and jewelry making, ensuring that learners can acquire practical
              skills relevant to their interests and local job markets. With
              features such as adaptive learning materials, specialized
              instruction, and support for various disabilities, SkillUp Africa
              aims to bridge the skills gap, enhance employability, and promote
              social inclusion for PWD, ultimately fostering a more equitable
              workforce.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-base md:text-lg mb-2">Company</h3>
            <br />
            <Link to="/about">About Us</Link>
            <br />
            <Link to="/how-it-works">How It Works</Link>
            <br />
            <Link to="/popular-courses">Popular Course</Link>
            <br />
            <Link to="/service">Service</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-base md:text-lg mb-2">Courses</h3>
            <br />
            <Link to="/categories">Categories</Link>
            <br />
            <Link to="/video-course">Video Course</Link>
            <br />
            <Link to="/online-course">Online Course</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-base md:text-lg mb-2">Support</h3>
            <br />
            <Link to="/faq">FAQ</Link>
            <br />
            <Link to="/help-center">Help Center</Link>
            <br />
            <Link to="/career">Career</Link>
            <br />
            <Link to="/privacy">Privacy</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-base md:text-lg mb-2">
              Contact Info
            </h3>
            <br />
            <p>+254 700 123456</p>
            <br />
            <p>skillupafrica@gmail.com</p>
            <br />
            <p>The Piano, Brookside Drive, Lower Kabete, Nairobi, Kenya</p>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-10 mb-0"></div>
        <div className="text-center text-xs text-gray-600 py-4">
          SkillUP-Africa All Right Reserved, 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
