import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BoardSelect from "../components/BoardSelect";

//returns the titles of each board to populate Board Select element
function getBoardTitles(boards) {
	return boards.map((eachBoard, i) => {
		return (
			<option key={i} value={eachBoard.board_title}>
				{eachBoard.board_title}
			</option>
		);
	});
}

class BoardSelectContainer extends Component {
	getBoardIdByTitle = (boards, title) => {
		return boards.filter(board => {
			return board.board_title === title;
		});
	};
	render() {
		return (
			<BoardSelect
				children={getBoardTitles(this.props.boards)}
				onSelect={e => {
					let selectedBoard = this.getBoardIdByTitle(
						this.props.boards,
						e.target.value
					);
					let id = selectedBoard[0].board_id;
					//onSelect passed in from BoardContainer.js
					this.props.onSelect(id);
				}}
			/>
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

BoardSelectContainer.propTypes = {
	boards: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
	BoardSelectContainer
);
