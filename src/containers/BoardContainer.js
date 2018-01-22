import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Board from "../components/Board";
import BoardHeader from "../components/BoardHeader";

//in constructor, sets the inital board rendered
class BoardContainer extends Component {
	///////

	render() {
		return (
			<div className="board-wrapper">
				<BoardHeader
					title={this.props.title}
					handleSelect={id => this.props.handleSelect(id)}
				/>
				<Board
					boardToShow={this.props.boardToShow}
					handleSelect={id => this.props.handleSelect(id)}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

BoardContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
