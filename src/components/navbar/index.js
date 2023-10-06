import React from 'react';

import { useNavigate } from "react-router-dom";
import HomeIcon from './homeIcon';

import './index.css';

const Navbar = ({ children }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };
	return (
		<div className='navbar-container' onClick={handleClick}>
			<HomeIcon />
			{children}
		</div>
	);
};

export default Navbar;
