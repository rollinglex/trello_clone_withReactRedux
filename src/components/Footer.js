import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	return (
		<footer className="footer">
			<p>
				created by <a href="#">Alex Thomas</a>
			</p>
			<a href="#">About</a>
			<p className="contact">Contact: rollinglex@gmail.com</p>
		</footer>
	);
};

Footer.propTypes = {};
export default Footer;
