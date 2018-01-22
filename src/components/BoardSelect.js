import React from "react";
import PropTypes from "prop-types";

const BoardSelect = ({ children, onSelect }) => {
	return <select onChange={e => onSelect(e)}>{children}</select>;
};

BoardSelect.propTypes = {
	onSelect: PropTypes.func.isRequired
};
export default BoardSelect;
