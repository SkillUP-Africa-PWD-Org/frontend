import { useState } from "react";
import { Mentorship } from "../../../assets/Images";
import { FaStar, FaRegHeart } from "react-icons/fa";

const mentors = [
  {
    name: "Bethel Mutunga",
    title: "Data Scientist",
    rating: 4.5,
    description:
      "2 years experience on the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "Ismael Nyambu",
    title: "Software Engineer",
    rating: 4.5,
    description:
      "2 years experience on the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "Tony Oloibe",
    title: "Electrical Engineer",
    rating: 4.5,
    description:
      "2 years experience on the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  // Repeat for demo
  {
    name: "Bethel Mutunga",
    title: "Data Scientist",
    rating: 4.5,
    description:
      "2 years experience on the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "Ismael Nyambu",
    title: "Software Engineer",
    rating: 4.5,
    description:
      "2 years experience on the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "Tony Oloibe",
    title: "Electrical Engineer",
    rating: 4.5,
    description:
      "2 years experience on the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "Bethel Mutunga",
    title: "Data Scientist",
    rating: 4.5,
    description:
      "2 years experience on the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "Ismael Nyambu",
    title: "Software Engineer",
    rating: 4.5,
    description:
      "2 years experience on the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "Tony Oloibe",
    title: "Electrical Engineer",
    rating: 4.5,
    description:
      "2 years experience on the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
];

const MentorSection = () => {
  const [activeTab, setActiveTab] = useState("#discover-mentors");

  const handleTabClick = (
    tabId: "#discover-mentors" | "#connect-with-peers" | "#my-networks"
  ) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#2C3675] py-16">
      <div className="w-full max-w-6xl bg-[#FDF8EE] rounded-xl flex flex-row shadow-lg overflow-hidden">
        <NavigationTabs activeTab={activeTab} handleTabClick={handleTabClick} />
        <div className="flex-1 p-8">
          {activeTab === "#discover-mentors" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {mentors.map((mentor, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow p-0 flex flex-col items-stretch min-h-[320px] max-w-xs mx-auto"
                >
                  {/* Top bar: rating and favorite */}
                  <div className="flex flex-row justify-between items-center px-4 pt-4">
                    <div className="flex items-center gap-1 bg-[#F6C768] rounded-full px-2 py-1 text-xs font-semibold text-gray-800">
                      <FaStar className="text-yellow-500 text-sm" />
                      <span>{mentor.rating}</span>
                    </div>
                    <button className="text-gray-400 hover:text-red-400">
                      <FaRegHeart />
                    </button>
                  </div>
                  {/* Mentor image */}
                  <img
                    src={Mentorship}
                    alt="mentor"
                    className="w-full h-36 object-contain my-2"
                  />
                  {/* Info */}
                  <div className="px-4 pb-4 pt-2 flex flex-col items-start">
                    <div className="font-bold text-base mb-0 leading-tight">
                      {mentor.name}
                    </div>
                    <div className="text-xs text-gray-400 mb-2">
                      {mentor.title}
                    </div>
                    <div className="text-xs text-gray-600 leading-snug">
                      {mentor.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-gray-700 text-lg">
              {activeTab === "#connect-with-peers"
                ? "Join peer discussions, collaborate on projects, and share knowledge with fellow learners."
                : "View and manage your connections, mentors, and peers all in one place."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorSection;

// Type definition for NavigationTabs props
interface NavigationTabsProps {
  activeTab: string;
  handleTabClick: (
    tabId: "#discover-mentors" | "#connect-with-peers" | "#my-networks"
  ) => void;
}

const NavigationTabs = ({ activeTab, handleTabClick }: NavigationTabsProps) => {
  const tabs = [
    { name: "Discover Mentors", id: "#discover-mentors" },
    { name: "Connect with Peers", id: "#connect-with-peers" },
    { name: "My Networks", id: "#my-networks" },
  ] as const;

  return (
    <div className="flex flex-col gap-4 bg-transparent p-8 min-w-[220px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={
            activeTab === tab.id
              ? "flex h-12 cursor-pointer items-center text-lg rounded-full bg-secondary text-white font-semibold px-6 py-2 transition-all ease-in"
              : "flex h-12 cursor-pointer items-center text-lg bg-white rounded-full px-6 py-2 transition-all ease-in"
          }
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};
