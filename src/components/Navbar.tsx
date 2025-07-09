import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { navLinks } from "./index";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="h-20 relative z-50 py-8 pb-10 bg-[#FDF8EE]">
      <div className="mx-auto w-full h-full max-w-7xl flex items-center justify-between px-4">
        <Link to="/" className="flex flex-row items-center justify-center">
          <img
            src="/skillup-africa-logo.svg"
            alt="logo"
            className="w-24 md:w-32 object-contain"
          />
          <p className="text-black font-bold text-2xl">SkillUP-Africa</p>
        </Link>

        <nav className="hidden md:flex flex-row items-center gap-8 pr-8 text-base font-semibold">
          {navLinks.map(({ id, title, link }) => (
            <Link
              key={id}
              to={link}
              className={`${
                link === pathname
                  ? "text-primary font-bold"
                  : "text-black font-medium"
              } `}
            >
              {title}
            </Link>
          ))}
        </nav>

        {/* Hamburger menu for mobile screens */}
        <div className="flex-center md:hidden mr-3 px-1">
          {isOpen ? (
            <CloseIcon
              fontSize="large"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          ) : (
            <MenuIcon
              fontSize="large"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          )}
        </div>

        {/* Mobile navigation menu */}
        <div
          className={`absolute top-20 left-0 bg-white h-[calc(100vh-80px)] border-t w-screen flex-center flex-col gap-12 text-3xl ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {navLinks.map(({ id, title, link }) => (
            <Link
              key={id}
              to={link}
              className={`${
                link === pathname
                  ? "text-primary font-bold"
                  : "text-black font-medium"
              } `}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {title}
            </Link>
          ))}

          {pathname === "/" && (
            <Link
              to={"/"}
              className="bg-[#4D2C5E] text-white px-6 py-3 text-base font-semibold rounded-full flex"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
