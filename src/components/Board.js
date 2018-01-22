import React from "react";
import PropTypes from "prop-types";
import PanelContainer from "../containers/PanelContainer";
const Board = ({ boardToShow, handleSelect }) => {
	console.log(boardToShow);
	return (
		<div className="board">
			<PanelContainer
				boardToRender={boardToShow}
				handleSelect={id => handleSelect(id)}
			/>
		</div>
	);
};

Board.propTypes = {
	boardToShow: PropTypes.object.isRequired
};
export default Board;
//
