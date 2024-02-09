import { useState } from "react";
import { Link } from "react-router-dom";

import companyLogo from "../assets/images/Logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="relative container mx-auto my-1">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 pt-2">
          <img src={companyLogo} alt="Company Logo" className="h-12 md:h-16" />
        </div>

        {/* Button */}
        <Link
          to="/myorders"
          className="hidden p-3 px-6 pt-2 text-white bg-orange-500 rounded-full baseline hover:bg-brightRedLight md:block"
        >
          Get Started
        </Link>

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? "open block hamburger md:hidden focus:outline-none"
              : "block hamburger md:hidden focus:outline-none"
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className={
            toggleMenu
              ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
              : "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          }
        >
          <Link to="#">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
