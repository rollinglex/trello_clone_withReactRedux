import React from "react";
import PropTypes from "prop-types";

const Note = ({ content, id }) => {
	return (
		<p key={id + 1} className="note">
			{content}
		</p>
	);
};

Note.propTypes = {};
export default Note;
