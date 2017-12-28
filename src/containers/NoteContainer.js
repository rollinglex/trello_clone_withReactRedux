import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Note from "../components/Note";

function getNotes(notesArray) {
	return notesArray.map((note, i) => {
		return <Note key={`note_${i}`} content={note} />;
	});
}

class NoteContainer extends Component {
	notes = getNotes(this.props.notesArray);
	render() {
		return <div className="note-container">{this.notes}</div>;
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
