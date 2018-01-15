import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Panel from "../components/Panel";
import AddPanelContainer from "./AddPanelContainer";
import NoteContainer from "./NoteContainer";
import { getBoardOnTitle } from "../actions";
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

	componentWillReceiveProps(nextProps) {
		// console.log("RecieverProps");
		// let nextBoard = nextProps.boards.filter(board => {
		// 	console.log("HEERRE", this.props.currentBoard.board_title);
		// 	console.log(board.board_title);
		// 	board.board_title === this.props.currentBoard.board_title;
		// });
		// console.log(nextBoard);
		// if (this.props.currentBoard.panels.length < nextBoard[0].panels.length) {
		// this.props.reloadPanel(
		// 	this.props.currentBoard.board_title,
		// 	nextProps.boards
		// );
		//}
	}
	render() {
		this.panelCards();
		return (
			<section className="panel-container">
				<Panel children={this.panelCards()} />
				<AddPanelContainer />
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		panelsArray: state.boardToShow.panels,
		currentBoard: state.boardToShow,
		boards: state.allBoards
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		reloadPanel: (boardTitle, allBoards) => {
			console.log("reloading", allBoards);
			dispatch(dispatch(getBoardOnTitle(boardTitle, allBoards)));
		}
	};
};

PanelContainer.propTypes = {};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(PanelContainer)
);
