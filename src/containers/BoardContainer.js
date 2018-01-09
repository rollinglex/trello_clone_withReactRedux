import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Board from "../components/Board";
import BoardHeader from "../components/BoardHeader";
import { getBoardOnTitle } from "../actions";

class BoardContainer extends Component {
	constructor(props) {
		super(props);

		this.props.setInitialBoard(this.props.boardTitle);
	}

	render() {
		console.log("STATE in Render", this.props.state);
		return (
			<div className="board-wrapper">
				<BoardHeader boardTitle={this.props.boardTitle} />
				<Board />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		state: state,
		boardTitle: state.boardToShow.board_title
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setInitialBoard: title => dispatch(getBoardOnTitle(title))
	};
};

BoardContainer.propTypes = {};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(BoardContainer)
);
