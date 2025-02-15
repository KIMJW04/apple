import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full flex-center p-5">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          <ul className="flex">
            {navLists.map((nav) => (
              <li
                className="px-5 cursor-pointer text-gray hover:text-white transition-all"
                key={nav}
              >
                {nav}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
