import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Mentorship } from "../../../assets/Images";

const mentors = [
  {
    name: "Esther Karanja",
    description:
      "2 years experience in the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "Daniel Njoroge",
    description:
      "2 years experience in the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "Sarah Wambui",
    description:
      "2 years experience in the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "Janet Nyokabi",
    description:
      "2 years experience in the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "Tony Gikera",
    description:
      "2 years experience in the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "Grace Mwangi",
    description:
      "2 years experience in the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "James Otieno",
    description:
      "2 years experience in the job and currently mentoring four students on the SkillUP-Africa programme.",
  },
  {
    name: "Mary Wanjiku",
    description:
      "2 years experience in the job and currently mentoring four students on the SkillUP-Africa programme.",
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mentors.map((mentor, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center min-h-[260px]"
                >
                  <img
                    src={Mentorship}
                    alt="mentor"
                    className="w-24 h-24 object-contain mb-4 rounded-full bg-[#FDF8EE]"
                  />
                  <div className="font-bold text-lg mb-2">{mentor.name}</div>
                  <div className="text-sm text-gray-600">
                    {mentor.description}
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
