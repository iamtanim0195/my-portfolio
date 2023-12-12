import { CiUser } from "react-icons/ci";
import { FaRegListAlt } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'

const MenuDropdown = () => {

  return (
    <div className="flex w-full justify-evenly ">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-pink-600 w-fit  text-3xl " : "text-3xl "
        }
      >
        <CiUser />
        {/* ABOUT */}
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-pink-600 w-fit  text-3xl " : "text-3xl "
        }
      >
        <FaRegListAlt />
        {/* RESUME */}
      </NavLink>
      <NavLink
        to="/works"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-pink-600 w-fit  text-3xl " : "text-3xl "
        }
      >
        <FaProjectDiagram />
        {/* WORKS */}
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-pink-600 w-fit  text-3xl " : "text-3xl "
        }
      >
        <TfiEmail />
        {/* CONTACT */}
      </NavLink>
    </div>
  )
}

export default MenuDropdown
