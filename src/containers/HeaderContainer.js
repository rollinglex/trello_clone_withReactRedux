import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";

class HeaderContainer extends Component {
	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log(state);
	return {
		username: state.user.username
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

HeaderContainer.propTypes = {};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
);
