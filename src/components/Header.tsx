import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
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
    <div className="p-4 fixed top-0 left-0 max-lg:px-10 max-xl:px-16 px-40  bg-MainbackgroundColor font-primary flex justify-between items-center w-full">
      <h4 className="text-xl capitalize text-primary font-bold">
        Shreeya shrestha
      </h4>
      <ul className="flex justify-center  items-center gap-4 ">
        {navLinks.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              showNextSkill(index);
              navigate(item.slug);
            }}
            className={`text-xl font-medium capitalize transition-colors hover:text-secondary ${
              index == currentSkillIndex
                ? `underline underline-offset-8 underline-blue-500 text-primary `
                : null
            } `}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
