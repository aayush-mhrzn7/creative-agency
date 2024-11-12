import { useState } from "react";
import { FiArrowLeft, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const Header = () => {
  const [mobileViewActive, setMobileViewActive] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  console.log(mobileViewActive);
  const navLinks = [
    {
      name: "projects",
      slug: "/",
    },
    {
      name: "about",
      slug: "/about",
    },
    {
      name: "contact",
      slug: "/contact",
    },
  ];
  const navigate = useNavigate();
  const showNextSkill = (index: number) => {
    setCurrentSkillIndex(index);
  };
  return (
    <div className="p-4 fixed top-0 left-0 max-lg:px-10 max-xl:px-16 px-40 z-50  bg-MainbackgroundColor font-primary flex justify-between items-center w-full">
      <h4 className="text-xl capitalize text-primary font-bold">
        Aayush Maharjan
      </h4>
      <AnimatePresence mode="wait">
        <motion.ul
          initial={mobileViewActive ? { x: -400 } : {}}
          animate={mobileViewActive ? { x: 0 } : {}}
          exit={{ x: -400 }}
          transition={{
            x: { type: "spring", stiffness: 100, damping: 20 }, // Adjusting spring for smoothness
          }}
          className={`flex justify-center ${
            mobileViewActive
              ? `fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex-col bg-white h-screen w-screen`
              : `max-sm:hidden`
          } items-center gap-4`}
        >
          <span
            onClick={() => setMobileViewActive(false)}
            className={`w-10 h-20 rounded-md absolute -right-3 flex p-2 text-xl font-semibold text-white items-center bg-primary ${
              mobileViewActive ? `` : `hidden`
            }`}
          >
            <FiArrowLeft />
          </span>
          {navLinks.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                showNextSkill(index);
                navigate(item.slug);
              }}
              className={`text-xl font-medium capitalize transition-colors hover:text-secondary ${
                index === currentSkillIndex
                  ? `underline underline-offset-8 text-primary`
                  : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
      {mobileViewActive ? null : (
        <FiMenu
          className="text-xl text-primary max-sm:block hidden"
          onClick={() => setMobileViewActive(true)}
        />
      )}
    </div>
  );
};

export default Header;
