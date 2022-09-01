import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiTwotoneSetting } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import '../styles/Navbar.scss';

const Navbar = () => (
  <header className="nav">
    <div className="nav-left">
      <NavLink to="/">
        <BsFillArrowLeftCircleFill />
      </NavLink>
      2022
    </div>
    <h2>ALL TIME STATS </h2>
    <div className="nav-right">
      <FaMicrophone />
      <AiTwotoneSetting />
    </div>
  </header>
);

export default Navbar;
