import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import PanelContainer from "../containers/PanelContainer";
const Board = props => {
	return (
		<div className="board">
			<PanelContainer />
		</div>
	);
};

Board.propTypes = {};
export default withRouter(Board);
//
