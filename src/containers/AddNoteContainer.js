import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddNote from "../components/AddNote";
import { addNote } from "../actions";

class AddNoteContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newNote: "",
			editingNote: false
		};
	}
	handleValueChange = e => {
		console.log(e.target.value);
		this.setState({ newNote: e.target.value });
	};
	handleClick = e => {
		e.preventDefault();
		this.setState({
			editingNote: true
		});
	};
	handleCloseClick = e => {
		e.preventDefault();
		this.setState({
			editingNote: false
		});
	};
	render() {
		if (this.state.editingNote === false) {
			return (
				<p className="addNoteLink" onClick={this.handleClick}>
					Add Note...
				</p>
			);
		}
		return (
			<AddNote
				newNote={this.state.newNote}
				panelID={this.props.panelID}
				handleValueChange={this.handleValueChange}
				handleCloseClick={this.handleCloseClick}
				addNoteHandler={(note, id) => this.props.addNoteHandler(note)}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addNoteHandler: (note, id) => {
			dispatch(addNote(note, id));
		}
	};
};

AddNoteContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteContainer);
