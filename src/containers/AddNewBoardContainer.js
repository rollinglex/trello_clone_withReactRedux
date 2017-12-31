import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddNewBoard from "../components/AddNewBoard";

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
	render() {
		if (this.state.addingBoard === false) {
			return <p onClick={() => this.handleClick()}>Add New Board</p>;
		}
		return (
			<AddNewBoard
				newBoardTitle={this.state.newBoardTitle}
				handleValueChange={e => this.handleValueChange(e)}
				handleClick={() => this.handleClick()}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

AddNewBoardContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(
	AddNewBoardContainer
);
