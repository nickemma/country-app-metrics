import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiTwotoneSetting } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Navbar = () => (
  <div className="nav">
    <BsFillArrowLeftCircleFill />
    <NavLink to="/">CountriesPage</NavLink>
    <div>
      <FaMicrophone />
      <AiTwotoneSetting />
    </div>
  </div>
);

export default Navbar;
