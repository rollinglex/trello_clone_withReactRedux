import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Board from "../components/Board";
import BoardHeader from "../components/BoardHeader";
class BoardContainer extends Component {
	render() {
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
		boardTitle: state.boardToSHow.board_title
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

BoardContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
