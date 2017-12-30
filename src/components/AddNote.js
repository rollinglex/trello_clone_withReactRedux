import React from "react";
import PropTypes from "prop-types";

const AddNote = props => {
	return (
		<div className="addNote" id={props.panelID}>
			<textarea
				type="text"
				value={props.newNote}
				onChange={e => props.handleValueChange(e)}
			/>
			<button
				className="addNoteBtn"
				onClick={props.addNoteHandler(props.newNote, props.panelID)}>
				{" "}
				&#9998;
			</button>
			<button className="closeAddNote" onClick={props.handleCloseClick}>
				&#9747;
			</button>
		</div>
	);
};

AddNote.propTypes = {};
export default AddNote;
