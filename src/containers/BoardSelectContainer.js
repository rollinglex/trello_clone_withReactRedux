import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BoardSelect from "../components/BoardSelect";
import { board } from "../actions";
//returns the titles of each board to populate Board Select element
function getBoardTitles(boards) {
	return boards.map(board => {
		return (
			<option key={board.board_id} value={board.board_title}>
				{board.board_title}
			</option>
		);
	});
}

class BoardSelectContainer extends Component {
	title = getBoardTitles(this.props.boards);
	render() {
		return (
			<BoardSelect
				children={this.title}
				onChange={e => this.props.handleChange(e.target.value)}
				selection={this.props.selection}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		boards: state.allBoards,
		selection: state.selected
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleChange: boardTitle => {
			console.log("in board select", boardTitle);
			dispatch(board(boardTitle));
		}
	};
};

BoardSelectContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(
	BoardSelectContainer
);
