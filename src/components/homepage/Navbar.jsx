import { useState } from "react";
import { navLinks } from "./constants";
import { FaHandHoldingMedical } from "react-icons/fa";

export const Navbar = () => {
  const [active, setActive] = useState("Home");
  return (
    <nav className='w-full flex py-4 justify-between items-center z-50 bg-gray-800 bg-transparent fixed'>
      <div className="flex mx-10 items-center cursor-pointer text-white font-nunito">
        <FaHandHoldingMedical className="h-14 w-14 text-white" />
        <p className="ml-4 inline-flex font-bold text-[26px] ">
          System Medical
        </p>
      </div>
      <ul className="list-none sm:flex hidden justify-start items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar