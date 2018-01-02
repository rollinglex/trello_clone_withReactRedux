import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Panel from "../components/Panel";
import NoteContainer from "./NoteContainer";
//creates panels from array
const getPanels = panelArray => {
	return panelArray.map(panel => {
		return (
			<div className="panel-card" key={panel.panel_ID}>
				<div className="panel-header">{panel.panel_title}</div>
				<div className="notes-wrapper">
					<NoteContainer notesArray={panel.notes} panelID={panel.panel_ID} />
				</div>
			</div>
		);
	});
};

class PanelContainer extends Component {
	numberOfPanels = this.props.numberOfPanels;
	panelCards = () => getPanels(this.props.panelsArray);
	render() {
		return (
			<section className="panel-container">
				<Panel children={this.panelCards()} />
				<div className="add-panel-container">
					<input type="text" value="add a panel" />
					<button>Add</button>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log(state);
	return {
		panelsArray: state.boardToShow.panels,
		numberOfPanels: state.boardToShow.panels.length
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

PanelContainer.propTypes = {};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(PanelContainer)
);
