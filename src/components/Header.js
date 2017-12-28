import React from "react";
import PropTypes from "prop-types";
import logo from "../img/logo.svg";

const Header = ({ username }) => {
	console.log(username);
	return (
		<header className="header">
			<div className="logo">
				<img src={logo} alt="logo" />
				<h2>Djello</h2>
			</div>
			<div className="by-Alex-btn">by Alex</div>
			<div className="welcome-tab">Welcome, {username}</div>
		</header>
	);
};

Header.propTypes = {};
export default Header;
