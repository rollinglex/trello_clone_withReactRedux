import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Board from "../components/Board";
import BoardHeader from "../components/BoardHeader";
import { getBoardOnId } from "../actions";

class BoardContainer extends Component {
	constructor(props) {
		super(props);

		this.props.setInitialBoard(this.props.boardId);
	}
	render() {
		return (
			<div className="board-wrapper">
				<BoardHeader boardId={this.props.boardId} />
				<Board />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		state: state,
		boardId: state.boardToShow.board_id
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setInitialBoard: id => dispatch(getBoardOnId(id))
	};
};

BoardContainer.propTypes = {};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(BoardContainer)
);
