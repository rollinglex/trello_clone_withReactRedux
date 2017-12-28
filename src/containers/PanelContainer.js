import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Panel from "../components/Panel";

class PanelContainer extends Component {
	render() {
		return (
			<section className="panel-container">
				<Panel />
				<div className="add-panel-container">
					<input type="text" />
					<button>Add</button>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

PanelContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PanelContainer);
