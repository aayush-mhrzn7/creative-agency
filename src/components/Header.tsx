const Header = () => {
  const navLinks = [
    {
      name: "projects",
      slug: "/projects",
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
  return (
    <div className="p-4 fixed top-0 left-0 max-lg:px-10 max-xl:px-16 px-40  bg-MainbackgroundColor font-primary flex justify-between items-center w-full">
      <h4 className="text-xl capitalize text-primary font-bold">
        Shreeya shrestha
      </h4>
      <ul className="flex justify-center  items-center gap-4 ">
        {navLinks.map((item, index) => (
          <li key={index} className="text-xl capitalize">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
