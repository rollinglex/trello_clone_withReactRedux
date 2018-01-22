import React, { Component } from "react";
import PropTypes from "prop-types";
import board from "../initialBoard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { user } from "../actions";
//import  from "./"

class LoginContainer extends Component {
	render() {
		(() => {
			console.log("hi");
		})();
		return (
			<div>
				<h1>HOME</h1>
				<Link
					to="/board"
					onClick={() => {
						this.props.onClickHandler();
					}}>
					Photos
				</Link>
			</div>
		);
	}
}
const initialUserState = {
	username: board.user.username,
	first_name: board.user.first_name,
	last_name: board.user.last_name
};
const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClickHandler: () => {
			dispatch(user(initialUserState));
		}
	};
};

LoginContainer.propTypes = {
	onClickHandler: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
