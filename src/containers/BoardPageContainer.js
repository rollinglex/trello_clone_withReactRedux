import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderContainer from "./HeaderContainer";
import BoardContainer from "./BoardContainer";
import Footer from "../components/Footer";

class BoardPageContainer extends Component {
	render() {
		return (
			<div className="boardPage">
				<HeaderContainer />
				<BoardContainer />
				<Footer />
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

BoardPageContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(BoardPageContainer);
