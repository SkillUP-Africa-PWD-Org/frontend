import { SetStateAction, useState } from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import lessonsData from "./LessonsData";

const Content = () => {
  const [activeTab, setActiveTab] = useState("#electrical-works");
  const [expandedLessons, setExpandedLessons] = useState<{ [key: number]: boolean }>({});

  const handleTabClick = (tabId: SetStateAction<string>) => {
    setActiveTab(tabId);
    setExpandedLessons({}); // Collapse all lessons on tab change
  };

  // Function to toggle content visibility for a specific lesson
  const toggleContent = (lessonId: number) => {
    setExpandedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId], // Toggle the specific lesson
    }));
  };

  // Find the active lessons data based on the active tab
  const activeLessonsData = lessonsData.find(
    (lesson) => lesson.id === activeTab
  );

  return (
    <div className="max-w-[1000px] flex flex-row m-40 p-20 bg-[#FDF8EE]">
      <NavigationTabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="h-fit border-l border-primary/50 md:w-[600px]">
        <div className="flex-grow pl-8">
          {activeLessonsData &&
            activeLessonsData.lessons.map((lesson) => (
              <div key={lesson.id} className="mb-4">
                <h3 className="flex items-center justify-between bg-primary text-white p-4 rounded-lg">
                  Lesson {lesson.id}
                  <button
                    onClick={() => toggleContent(lesson.id)}
                    className="ml-2"
                  >
                    {expandedLessons[lesson.id] ? <RemoveIcon /> : <AddIcon />}
                  </button>
                </h3>
                {expandedLessons[lesson.id] && (
                  <div className="mt-4">
                    <p>{lesson.content}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Content;

// Type definition for NavigationTabs props
interface NavigationTabsProps {
  activeTab: string;
  handleTabClick: (
    tabId:
      | "#electrical-works"
      | "#jewelry-making"
      | "#mechanics"
      | "#plumbing"
      | "#pottery"
      | "#tailoring"
  ) => void;
}

const NavigationTabs = ({ activeTab, handleTabClick }: NavigationTabsProps) => {
  const tabs = [
    { name: "Electrical Works", id: "#electrical-works" },
    { name: "Jewelry Making", id: "#jewelry-making" },
    { name: "Mechanics", id: "#mechanics" },
    { name: "Plumbing", id: "#plumbing" },
    { name: "Pottery", id: "#pottery" },
    { name: "Tailoring", id: "#tailoring" },
  ] as const;

  return (
    <div className="flex flex-col gap-4">
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={
            activeTab === tab.id
              ? "flex h-10 cursor-pointer items-center text-lg rounded-full bg-secondary text-white font-semibold px-8 py-5 mx-4 transition-all ease-in"
              : "flex h-10 cursor-pointer items-center text-lg bg-white rounded-full px-8 py-5 mx-4 transition-all ease-in"
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
};
