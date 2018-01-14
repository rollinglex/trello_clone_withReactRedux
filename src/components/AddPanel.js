import React from "react";
import PropTypes from "prop-types";

const AddPanel = ({
	handleValueChange,
	handleClose,
	addPanel,
	resetState,
	title,
	board_id,
	allBoards,
	boardTitle
}) => {
	return (
		<div className="add-panel-container">
			<input type="text" value={title} onChange={e => handleValueChange(e)} />
			<button
				className="addPanelBtn"
				onClick={() => {
					addPanel(title, board_id, allBoards, boardTitle);
					resetState();
				}}>
				{" "}
				&#10010;
			</button>
			<button
				className="closeAddBtn"
				onClick={() => {
					handleClose();
					resetState();
				}}>
				&#9747;
			</button>
		</div>
	);
};

AddPanel.propTypes = {};
export default AddPanel;
