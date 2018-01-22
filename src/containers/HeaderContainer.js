import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../components/Header";

class HeaderContainer extends Component {
	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log("ALL BOARDS", state.allBoards[0].panels);

	return {
		username: state.user.username
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

HeaderContainer.propTypes = {
	username: PropTypes.string.required
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
