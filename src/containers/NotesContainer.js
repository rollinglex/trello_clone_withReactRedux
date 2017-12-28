import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Note from "../components/Note";

class NotesContainer extends Component {
	render() {
		return; //stuff
	}
}

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

NotesContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
