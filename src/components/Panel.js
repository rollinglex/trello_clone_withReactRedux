import React from "react";
import PropTypes from "prop-types";

const Panel = ({ children }) => {
	return <div className="panel-card-wrapper">{children}</div>;
};

Panel.propTypes = {};
export default Panel;
