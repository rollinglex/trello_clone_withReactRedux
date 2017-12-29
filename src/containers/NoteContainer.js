import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Note from "../components/Note";

function getNotes(notesArray) {
	return notesArray.map((note, i) => {
		return <Note key={note.note_ID} id={i} content={note.note} />;
	});
}

class NoteContainer extends Component {
	notes = getNotes(this.props.notesArray);
	render() {
		return (
			<div className="note-container">
				{this.notes}
				<div className="addNote" id={this.props.panelID}>
					<textarea type="text" value="Add Note">
						{" "}
					</textarea>
					<button className="addNoteBtn"> &#9998;</button>
					<button className="closeAddNote">&#9747;</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

NoteContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
