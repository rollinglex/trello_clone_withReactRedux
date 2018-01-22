import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
	render() {
		let board = this.props.boardToRender;
		let panelsArray = this.props.boardToRender.panels;
		getPanels(panelsArray);

		return (
			<section className="panel-container">
				<Panel children={getPanels(panelsArray)} />
				<AddPanelContainer
					board={board}
					handleSelect={id => this.props.handleSelect(id)}
				/>
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		boards: state.allBoards
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

PanelContainer.propTypes = {
	boards: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PanelContainer);
