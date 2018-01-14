import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Panel from "../components/Panel";
import AddPanelContainer from "./AddPanelContainer";
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
	panelCards = () => getPanels(this.props.panelsArray);
	render() {
		this.panelCards();
		console.log("PanelContainer", this.props.panelsArray.length);
		return (
			<section className="panel-container">
				<Panel children={this.panelCards()} boards={this.boards} />
				<AddPanelContainer />
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log("board to Show", state.boardToShow);
	return {
		panelsArray: state.boardToShow.panels,
		boards: state.allBoards
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

PanelContainer.propTypes = {};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(PanelContainer)
);
