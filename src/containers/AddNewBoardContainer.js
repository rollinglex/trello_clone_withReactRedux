import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddNewBoard from "../components/AddNewBoard";
import { addBoard } from "../actions";

class AddNewBoardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newBoardTitle: "",
			addingBoard: false
		};
	}
	handleValueChange = e => {
		console.log(e.target.value);
		this.setState({ newBoardTitle: e.target.value });
	};
	handleClick = () => {
		this.setState((prevState, props) => {
			return {
				...this.state,
				addingBoard: !prevState.addingBoard
			};
		});
	};

	resetState = () => {
		this.setState({
			newBoardTitle: "",
			addingBoard: false
		});
	};
	render() {
		if (this.state.addingBoard === false) {
			return <p onClick={() => this.handleClick()}>Add New Board</p>;
		}
		return (
			<AddNewBoard
				newBoardTitle={this.state.newBoardTitle}
				handleValueChange={e => this.handleValueChange(e)}
				addBoard={title =>
					this.props.handleAddBoard(title, this.props.prevBoards)}
				handleClose={() => this.handleClick()}
				resetState={() => this.resetState()}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		prevBoards: state.allBoards
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleAddBoard: (newTitle, oldBoards) => {
			console.log(oldBoards);
			dispatch(addBoard(newTitle, oldBoards));
		}
	};
};

AddNewBoardContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(
	AddNewBoardContainer
);
