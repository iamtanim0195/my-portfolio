import { CiUser } from "react-icons/ci";
import { FaRegListAlt } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { NavHashLink } from 'react-router-hash-link';
const MenuDropdown = () => {

  return (
    <div className="mt-2 flex w-full justify-evenly ">
      <NavHashLink
        smooth
        to="#about"
        activeStyle={{ color: 'red' }}
        className="text-3xl"
      >
        <CiUser />
        {/* ABOUT */}
      </NavHashLink>
      <NavHashLink
        smooth
        to="#resume"
        className="text-3xl"
        activeClassName="selected"
        activeStyle={{ color: 'red' }}
      >
        <FaRegListAlt />
        {/* RESUME */}
      </NavHashLink>
      <NavHashLink
        smooth
        to="#works"
        className="text-3xl"
        activeClassName="selected"
        activeStyle={{ color: 'red' }}
      >
        <FaProjectDiagram />
        {/* WORKS */}
      </NavHashLink>
      <NavHashLink
        smooth
        to="#contact"
        className="text-3xl"
        activeClassName="selected"
        activeStyle={{ color: 'red' }}
      >
        <TfiEmail />
        {/* CONTACT */}
      </NavHashLink>


    </div>
  )
}

export default MenuDropdown
{/* <div>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-pink-600 w-fit  text-3xl " : "text-3xl "
        }
      >
        <TfiEmail />
        
      </NavLink>
      </div> */}