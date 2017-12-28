import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";

const Panel = props => {
	return (
		<div className="panel-card-wrapper">
			<div className="panel-header">Panel #1</div>
			<div className="notes-wrapper">
				<Note />
				<Note />
			</div>
		</div>
	);
};

Panel.propTypes = {};
export default Panel;
