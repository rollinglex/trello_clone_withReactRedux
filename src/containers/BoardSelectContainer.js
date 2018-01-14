import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BoardSelect from "../components/BoardSelect";
import { getBoardOnTitle } from "../actions";
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
	render() {
		return (
			<BoardSelect
				children={getBoardTitles(this.props.boards)}
				onChange={e =>
					this.props.handleChange(e.target.value, this.props.boards)}
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
		handleChange: (boardTitle, boards) => {
			dispatch(getBoardOnTitle(boardTitle, boards));
		}
	};
};

BoardSelectContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(
	BoardSelectContainer
);
