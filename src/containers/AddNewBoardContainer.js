import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddNewBoard from "../components/AddNewBoard";
import { addBoard } from "../actions";

class AddNewBoardContainer extends Component {
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
			return <p onClick={() => this.handleClick()}>Add New Board</p>;
		}
		return (
			<AddNewBoard
				newTitle={this.state.newTitle}
				handleValueChange={e => this.handleValueChange(e)}
				addBoard={title =>
					this.props.handleAddBoard(title, this.props.prevBoards)}
				handleClose={() => this.handleClick()}
				resetForm={() => this.resetForm()}
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
			dispatch(addBoard(newTitle, oldBoards));
		}
	};
};

AddNewBoardContainer.propTypes = {
	handleAddBoard: PropTypes.func.isRequired,
	prevBoards: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
	AddNewBoardContainer
);
