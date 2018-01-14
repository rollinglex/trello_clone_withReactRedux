import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddPanel from "../components/AddPanel";
import { addPanel, getBoardOnTitle } from "../actions";

class AddPanelContainer extends Component {
	//addingNew state may not be needed
	constructor(props) {
		super(props);
		this.state = {
			newTitle: "",
			addingNew: false
		};
	}
	handleValueChange = e => {
		this.setState({ newTitle: e.target.value });
	};
	handleClick = () => {
		this.setState((prevState, props) => {
			return {
				...this.state,
				addingNew: !prevState.addingNew
			};
		});
	};
	resetState = () => {
		this.setState({
			newTitle: "",
			addingNew: false
		});
	};
	render() {
		if (this.state.addingNew === false) {
			return (
				<p className="add-panel-btn" onClick={() => this.handleClick()}>
					Add a Panel
				</p>
			);
		}
		return (
			<AddPanel
				handleValueChange={e => this.handleValueChange(e)}
				title={this.state.newTitle}
				allBoards={this.props.allBoards}
				boardTitle={this.props.boardTitle}
				board_id={this.props.board_id}
				addPanel={(title, board, allBoards, boardTitle) =>
					this.props.handleAddPanel(title, board, allBoards, boardTitle)}
				handleClose={() => this.handleClick()}
				resetState={() => this.resetState()}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		board_id: state.boardToShow.board_id,
		boardTitle: state.boardToShow.board_title,
		allBoards: state.allBoards
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleAddPanel: (newTitle, board_id, allBoards, boardTitle) => {
			dispatch(addPanel(newTitle, board_id, allBoards));
			//dispatch(getBoardOnTitle(boardTitle, allBoards));
		}
	};
};

AddPanelContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddPanelContainer);
