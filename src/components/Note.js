import React from "react";
import PropTypes from "prop-types";

const Note = ({ content, key }) => {
	return (
		<p key={key} className="note">
			{content}
		</p>
	);
};

Note.propTypes = {};
export default Note;
