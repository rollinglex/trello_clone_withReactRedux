import React from "react";
import PropTypes from "prop-types";

const BoardSelect = ({ children, onChange, selection }) => {
	return (
		<select onChange={onChange} value={selection}>
			{children}
		</select>
	);
};

BoardSelect.propTypes = {};
export default BoardSelect;
