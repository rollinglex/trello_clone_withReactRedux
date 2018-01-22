import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddPanel from "../components/AddPanel";
import { addPanel } from "../actions";

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
	resetForm = () => {
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
				boardTitle={this.props.board.boardTitle}
				boardId={this.props.board.board_id}
				addPanel={(title, board, allBoards, boardTitle) =>
					this.props.handleAddPanel(title, board, allBoards, boardTitle)}
				handleClose={() => this.handleClick()}
				resetForm={() => this.resetForm()}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		allBoards: state.allBoards
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleAddPanel: (newTitle, boardId, allBoards, boardTitle) => {
			dispatch(addPanel(newTitle, boardId, allBoards));
			//dispatch(getBoardOnTitle(boardTitle, allBoards));
			ownProps.handleSelect(boardId);
		}
	};
};

AddPanelContainer.propTypes = {
	allBoards: PropTypes.array.isRequired,
	handleAddPanel: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPanelContainer);
